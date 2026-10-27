import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = fileURLToPath(new URL('../', import.meta.url));
export const site = {
  url: 'https://adammaltoni.com/',
  title: 'Adam Maltoni | AI, Curiosity & Things I Build',
  description: 'Adam Maltoni: AI engineer, data scientist, and curious builder based in Madrid. Personal interests, projects, research, and technical writing.',
};
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const slash = (value) => value === '/' ? value : value.replace(/\/$/, '') + '/';

async function source(file) {
  return ts.createSourceFile(file, await readFile(path.join(root, file), 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
}
function walk(node, visit) {
  visit(node);
  ts.forEachChild(node, (child) => walk(child, visit));
}
function fields(node, tree) {
  const result = {};
  for (const field of node.properties) {
    if (ts.isPropertyAssignment(field) && ts.isStringLiteral(field.initializer)) {
      const name = ts.isStringLiteral(field.name) ? field.name.text : field.name.getText(tree);
      result[name] = field.initializer.text;
    }
  }
  return result;
}

export async function getStaticPages() {
  const app = await source('src/App.tsx');
  const pages = new Map();
  const add = (route, title = site.title, description = site.description, canonical = route) => {
    assert.match(route, /^(?:\/[a-z0-9-]+)*\/?$/);
    pages.set(slash(route), { path: slash(route), title, description, canonical: slash(canonical) });
  };
  walk(app, (node) => {
    if (!(ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) || node.tagName.getText(app) !== 'Route') return;
    const route = node.attributes.properties.find((item) => ts.isJsxAttribute(item) && item.name.getText(app) === 'path');
    if (route?.initializer && ts.isStringLiteral(route.initializer) && !/[:*]/.test(route.initializer.text)) add(route.initializer.text);
  });
  for (const [route, title, description] of [
    ['/portfolio', 'Technical Portfolio', 'AI engineering projects, research results, technical reports, experience, education, and skills.'],
    ['/projects', 'Projects', 'Explore research, learning platforms, and data-system projects by Adam Maltoni.'],
    ['/atlas', 'Atlas', 'Why I am building Atlas: a bilingual place to learn AI through explanations, experiments, and practice.'],
    ['/portfolio/atlas', 'Atlas: Engineering', 'Atlas architecture, independently tested simulation engines, account services, and telemetry boundaries.'],
    ['/gdg', 'GDG UAM', 'Community, technical workshops, and my work as co-founder and president of GDG on Campus UAM.'],
    ['/about', 'Beyond the CV', 'Personal notes on curiosity, learning, making things, and the direction I want to explore.'],
    ['/blog', 'Writing', 'Technical articles on CNN regularization, diffusion models, and the AthenAI decision pipeline.'],
  ]) add(route, `${title} | Adam Maltoni`, description);

  const routes = await source('src/lib/projectRoutes.ts');
  let slugs = [];
  walk(routes, (node) => {
    if (ts.isVariableDeclaration(node) && node.name.getText(routes) === 'slugs' && node.initializer && ts.isArrayLiteralExpression(node.initializer)) {
      slugs = node.initializer.elements.map((item) => { assert.ok(ts.isStringLiteral(item)); return item.text; });
    }
  });
  const catalog = await source('src/data/projectCatalog.tsx');
  const projects = [];
  walk(catalog, (node) => {
    if (ts.isObjectLiteralExpression(node)) {
      const data = fields(node, catalog);
      if (data.title && data.description) projects.push(data);
    }
  });
  assert.ok(slugs.length > 0 && slugs.length === projects.length, 'Every project needs a static route');
  slugs.forEach((slug, index) => {
    if (slug !== 'atlas') add(`/portfolio/${slug}`, `${projects[index].title} | Adam Maltoni`, projects[index].description);
    const canonical = slug === 'atlas' ? '/atlas' : `/portfolio/${slug}`;
    add(`/projects/${slug}`, `${projects[index].title} | Adam Maltoni`, projects[index].description, canonical);
  });
  for (const file of ['src/data/blogPosts.ts', 'src/data/atlasPost.ts']) {
    const tree = await source(file);
    walk(tree, (node) => {
      if (!ts.isObjectLiteralExpression(node)) return;
      const data = fields(node, tree);
      if (data.slug && data.title && data.excerpt) add(`/blog/${data.slug}`, `${data.title} | Adam Maltoni`, data.excerpt);
    });
  }
  return [...pages.values()].sort((a, b) => a.path.localeCompare(b.path));
}

export function renderPage(template, page) {
  const canonical = new URL(page.canonical, site.url).href;
  // Replace owned template values, leaving Vite's generated asset tags intact.
  return template
    .replaceAll(escape(site.title), escape(page.title))
    .replaceAll(escape(site.description), escape(page.description))
    .replaceAll(`href="${site.url}"`, `href="${canonical}"`)
    .replaceAll(`content="${site.url}"`, `content="${canonical}"`);
}

export async function buildStaticPages(directory = path.join(root, 'dist')) {
  const template = await readFile(path.join(directory, 'index.html'), 'utf8');
  assert.ok(template.includes(escape(site.title)) && template.includes(site.url), 'Production metadata template must match');
  assert.ok(!/noindex|nofollow/i.test(template), 'Production pages must be indexable');
  const pages = await getStaticPages();
  for (const page of pages) {
    const target = path.join(directory, page.path.slice(1), 'index.html');
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, renderPage(template, page));
  }
  await writeFile(path.join(directory, '404.html'), template.replace('</head>', '<meta name="robots" content="noindex" /></head>'));
  await writeFile(path.join(directory, '.nojekyll'), '');
  const urls = [...new Set(pages.map((page) => new URL(page.canonical, site.url).href))];
  await writeFile(path.join(directory, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${escape(url)}</loc></url>`).join('\n')}\n</urlset>\n`);
  console.log(`Generated ${pages.length} static route entry points and ${urls.length} canonical sitemap entries.`);
  return pages;
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) await buildStaticPages();
