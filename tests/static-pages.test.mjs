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

test('the home title is the same in index.html, the postbuild script and the app', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const personal = await readFile(new URL('../src/content/personal.ts', import.meta.url), 'utf8');
  const escaped = site.title.replaceAll('&', '&amp;');
  assert.ok(html.includes(`<title>${escaped}</title>`));
  assert.ok(html.includes(`content="${site.description}"`));
  assert.ok(personal.includes(`en: "${site.title}"`));
  assert.ok(!/Curiosity &(amp;)? Things I Build/.test(html + site.title));
});

test('prerendered HTML goes into #root for canonical routes only, and empty output fails the build', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'portfolio-prerender-'));
  try {
    const template = await readFile(new URL('../index.html', import.meta.url), 'utf8');
    await writeFile(path.join(directory, 'index.html'), template);
    const rendered = [];
    const render = async (route) => {
      rendered.push(route);
      return `<main id="main"><h1>Prerendered ${route}</h1>${'<p>content</p>'.repeat(40)}</main>`;
    };
    await buildStaticPages(directory, render);
    const gdg = await readFile(path.join(directory, 'gdg', 'index.html'), 'utf8');
    assert.ok(gdg.includes('<div id="root"><main id="main"><h1>Prerendered /gdg/</h1>'));
    assert.ok(gdg.includes('<title>GDG UAM | Adam Maltoni</title>'));
    // The alias redirects to /atlas/ in the browser, so it is not prerendered.
    const alias = await readFile(path.join(directory, 'projects', 'atlas', 'index.html'), 'utf8');
    assert.ok(alias.includes('<div id="root"></div>'));
    assert.ok(!rendered.includes('/projects/atlas/'));
    const notFound = await readFile(path.join(directory, '404.html'), 'utf8');
    assert.ok(notFound.includes('<div id="root"></div>') && notFound.includes('noindex'));
    // The root page overwrote index.html; a second run needs a fresh template.
    await assert.rejects(buildStaticPages(directory), /empty #root/);
    await writeFile(path.join(directory, 'index.html'), template);
    await assert.rejects(buildStaticPages(directory, async () => ''), /Prerender is empty/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test('every lazy route in App.tsx can be preloaded before hydration', async () => {
  const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8');
  const pages = await readFile(new URL('../src/pages/lazyPages.ts', import.meta.url), 'utf8');
  const lazyNames = [...pages.matchAll(/export const (\w+) = lazyRoute/g)].map((m) => m[1]);
  for (const [, route, name] of app.matchAll(/<Route\s+path="([^"]+)"\s+element=\{<(\w+) \/>\}/g))
    if (lazyNames.includes(name)) assert.ok(pages.includes(`["${route}", ${name}]`), `${route} -> ${name} is not preloadable`);
  assert.ok(!/\blazy\(/.test(app), 'App.tsx should use lazyRoute pages, not React.lazy');
});
