import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { getStaticPages } from './build-static-pages.mjs';

const base = new URL(process.argv[2] ?? 'https://adammaltoni.com/');
const build = fileURLToPath(new URL('../dist/', import.meta.url));
const run = promisify(execFile);
const expectedTypes = {
  '.pdf': 'application/pdf', '.css': 'text/css', '.js': 'javascript',
  '.html': 'text/html', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml',
};

async function listFiles(directory, prefix = '') {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = `${prefix}${entry.name}`;
    if (entry.isDirectory()) files.push(...await listFiles(path.join(directory, entry.name), `${relative}/`));
    else files.push(relative);
  }
  return files;
}

async function head(url) {
  // Use the OS network stack on Windows; Node's client times out on this network.
  const { stdout } = await run(process.platform === 'win32' ? 'curl.exe' : 'curl', [
    '--silent', '--show-error', '--head', '--max-time', '20',
    '--output', process.platform === 'win32' ? 'NUL' : '/dev/null',
    '--write-out', '%{json}', url.href,
  ]);
  return JSON.parse(stdout);
}

const files = await listFiles(build);
const results = [];
let cursor = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (cursor < files.length) {
    const file = files[cursor++];
    const url = new URL(file.split('/').map(encodeURIComponent).join('/'), base);
    try {
      const response = await head(url);
      const type = response.content_type ?? '';
      const expected = expectedTypes[path.extname(file)];
      results.push({ file, status: response.http_code, type, ok: response.http_code >= 200 && response.http_code < 300 && (!expected || type.includes(expected)) });
    } catch (error) {
      results.push({ file, ok: false, error: error.message });
    }
  }
}));

const failures = results.filter(result => !result.ok);
console.log(JSON.stringify({ base: base.href, checked: files.length, passed: results.length - failures.length, failures }, null, 2));
assert.equal(failures.length, 0, 'Published assets must exist and retain their expected content types');

const entryScripts = files.filter(file => file.startsWith('assets/index-') && file.endsWith('.js'));
assert.equal(entryScripts.length, 1, 'The build must have one main entry script');
const { stdout: homepage } = await run(process.platform === 'win32' ? 'curl.exe' : 'curl', [
  '--silent', '--show-error', '--fail', '--max-time', '20', '--header', 'Cache-Control: no-cache', base.href,
]);
assert.ok(homepage.includes(entryScripts[0]), 'The public homepage must reference this release, not an older build');
assert.ok(!/noindex|nofollow/i.test(homepage), 'The public homepage must be indexable');

const pages = await getStaticPages();
let routeCursor = 0;
const routeFailures = [];
await Promise.all(Array.from({ length: 4 }, async () => {
  while (routeCursor < pages.length) {
    const page = pages[routeCursor++];
    try {
      const response = await head(new URL(page.path.slice(1), base));
      if (response.http_code !== 200 || !response.content_type?.includes('text/html')) routeFailures.push(page.path);
    } catch { routeFailures.push(page.path); }
  }
}));
assert.deepEqual(routeFailures, [], 'Direct page URLs must return HTML with HTTP 200');
console.log(`Current release and ${pages.length} direct routes verified.`);

if (base.protocol === 'https:') {
  const http = new URL(base);
  http.protocol = 'http:';
  const response = await head(http);
  assert.ok([301, 308].includes(response.http_code), 'HTTP must permanently redirect to HTTPS');
  assert.equal(response.redirect_url, base.href);
  console.log(`HTTPS redirect verified: ${response.http_code} -> ${base.href}`);
}
