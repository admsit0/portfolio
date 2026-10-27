import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { buildStaticPages, getStaticPages, site } from '../scripts/build-static-pages.mjs';

test('all public routes have entry points and aliases have canonical destinations', async () => {
  const pages = await getStaticPages();
  for (const route of ['/', '/portfolio/', '/atlas/', '/portfolio/atlas/', '/about/', '/gdg/', '/blog/', '/blog/regularization-in-cnns-internal-activations/', '/blog/diffusion-models-from-sdes-to-images/', '/blog/athenai-competition-decision-pipeline/']) {
    assert.ok(pages.some((page) => page.path === route), route);
  }
  assert.equal(pages.find((page) => page.path === '/projects/atlas/').canonical, '/atlas/');
  assert.equal(pages.find((page) => page.path === '/projects/diffusion/').canonical, '/portfolio/diffusion/');
});

test('production pages retain assets and CNAME, with route metadata and an indexable sitemap', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'portfolio-static-pages-'));
  try {
    const template = await readFile(new URL('../index.html', import.meta.url), 'utf8');
    await writeFile(path.join(directory, 'index.html'), template);
    await writeFile(path.join(directory, 'CNAME'), 'adammaltoni.com\n');
    await buildStaticPages(directory);
    const portfolio = await readFile(path.join(directory, 'portfolio', 'index.html'), 'utf8');
    assert.ok(portfolio.includes('<title>Technical Portfolio | Adam Maltoni</title>'));
    assert.ok(portfolio.includes('href="https://adammaltoni.com/portfolio/"'));
    assert.ok(portfolio.includes('src="src/main.tsx"'));
    assert.ok(!/noindex|nofollow/i.test(portfolio));
    assert.equal(await readFile(path.join(directory, 'CNAME'), 'utf8'), 'adammaltoni.com\n');
    const sitemap = await readFile(path.join(directory, 'sitemap.xml'), 'utf8');
    assert.ok(sitemap.includes(`${site.url}portfolio/`));
    assert.ok(!sitemap.includes('/projects/atlas/'));
    assert.ok((await readFile(path.join(directory, '404.html'), 'utf8')).includes('content="noindex"'));
  } finally {
    assert.equal(path.dirname(path.resolve(directory)), path.resolve(os.tmpdir()));
    await rm(directory, { recursive: true, force: true });
  }
});
