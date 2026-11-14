import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import {
  resolveLanguage,
  updateExplicitLanguageUrl,
} from "../src/i18n/languagePreference.ts";

const source = (path) =>
  fs.readFileSync(new URL("../" + path, import.meta.url), "utf8");
const tree = (path) =>
  ts.createSourceFile(
    path,
    source(path),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
const properties = (root, name) => {
  const found = [];
  const visit = (n) => {
    if (ts.isPropertyAssignment(n) && n.name.getText(root) === name)
      found.push(n.initializer);
    ts.forEachChild(n, visit);
  };
  visit(root);
  return found;
};

test("explicit language links take precedence over stored preferences", () => {
  assert.equal(resolveLanguage("?lang=es", "en"), "es");
  assert.equal(resolveLanguage("?lang=en", "es"), "en");
  assert.equal(resolveLanguage("?lang=unsupported", "es"), "es");
  assert.equal(resolveLanguage("", null), "en");
});

test("language switching updates an explicit link without dropping query or fragment", () => {
  const original =
    "http://127.0.0.1:5180/atlas?lang=es&ref=portfolio#architecture";
  const updated = updateExplicitLanguageUrl(original, "en");
  const url = new URL(updated);
  assert.equal(url.searchParams.get("lang"), "en");
  assert.equal(url.searchParams.get("ref"), "portfolio");
  assert.equal(url.hash, "#architecture");
  assert.equal(url.pathname, "/atlas");
  assert.equal(resolveLanguage(url.search, "es"), "en");
});

test("normal URLs stay clean when switching language", () => {
  const href = "http://127.0.0.1:5180/atlas?ref=portfolio#architecture";
  assert.equal(updateExplicitLanguageUrl(href, "es"), href);
});

test("the blog not-found state retains its keyboard skip target", () => {
  const page = source("src/pages/Blog.tsx");
  const ast = tree("src/pages/Blog.tsx");
  const mains = [];
  const visit = (node) => {
    if (ts.isJsxOpeningElement(node) && node.tagName.getText(ast) === "main")
      mains.push(node.attributes.properties);
    ts.forEachChild(node, visit);
  };
  visit(ast);
  assert.ok(page.includes('href="#main"'));
  assert.equal(mains.length, 3);
  for (const attributes of mains) {
    const id = attributes.find(
      (attribute) => attribute.name?.getText(ast) === "id",
    );
    assert.equal(id?.initializer?.text, "main");
    assert.ok(
      attributes.some(
        (attribute) => attribute.name?.getText(ast) === "tabIndex",
      ),
    );
  }
});

test("all technical articles have substantive Spanish versions and preserve their plots", () => {
  for (const [file, plots] of [
    ["regularization", ["regularization-radar"]],
    [
      "diffusion",
      [
        "diffusion-denoising-samples",
        "diffusion-imputation",
        "diffusion-sampler-runtime",
      ],
    ],
    [
      "athenai",
      [
        "athenai-pipeline",
        "athenai-clusters",
        "athenai-state",
        "athenai-benchmark",
      ],
    ],
  ]) {
    const body = source(`src/content/blog/es/${file}.md`);
    assert.ok(
      body.split(/\s+/).length > 1400,
      `${file}: a translation must not be a short summary`,
    );
    assert.equal(
      (body.match(/```/g) || []).length % 2,
      0,
      `${file}: code fences are balanced`,
    );
    for (const plot of plots)
      assert.ok(body.includes(plot + ".png"), `${file}: ${plot} is retained`);
  }
});

test("Spanish articles retain key experimental values", () => {
  const thesis = source("src/content/blog/es/regularization.md");
  for (const value of ["0.785", "89.22%", "83.1%", "42.0%", "15 + 85"])
    assert.ok(thesis.includes(value));
  const athenai = source("src/content/blog/es/athenai.md");
  for (const value of [
    "14,761",
    "8,879,120",
    "9,491",
    "80.6%",
    "22.95%",
    "-1.87%",
  ])
    assert.ok(athenai.includes(value));
});

test("Beyond the CV has five editable bilingual personal sections, not CV components", () => {
  const about = tree("src/content/about.ts");
  assert.equal(properties(about, "id").length, 5);
  const page = source("src/pages/About.tsx");
  assert.ok(page.includes("aboutContent"));
  assert.ok(!page.includes("<Experience") && !page.includes("<AboutSection"));
  const content = source("src/content/about.ts");
  assert.ok(!content.includes("Lorem ipsum"));
  for (const body of properties(about, "body")) {
    assert.ok(ts.isObjectLiteralExpression(body));
    for (const language of ["en", "es"]) {
      const value = body.properties.find(
        (p) => p.name?.getText(about) === language,
      );
      assert.ok(ts.isStringLiteral(value.initializer));
      assert.ok(value.initializer.text.length > 80);
    }
  }
});

test("home leads with personal interests and keeps projects as compact evidence", () => {
  const home = source("src/pages/index.tsx");
  const narrative = source("src/components/PersonalHomeContent.tsx");
  assert.ok(home.includes("<PersonalHomeContent />"));
  assert.ok(home.includes('scroll("personal-intro")'));
  assert.ok(!home.includes("home-region") && !home.includes("atlasMedia"));
  assert.ok(
    narrative.indexOf('id="personal-intro"') < narrative.indexOf('id="now"'),
  );
  assert.ok(narrative.includes("personalContent.interests.map"));
  assert.ok(narrative.includes("personalContent.now.items.map"));
  for (const route of ["/portfolio", "/about"])
    assert.ok(narrative.includes(`to="${route}"`));
  // Atlas and GDG stay linked, as two lines among several in "Right now".
  const personal = source("src/content/personal.ts");
  for (const route of ["/atlas", "/gdg"])
    assert.ok(personal.includes(`href: "${route}"`));
});

test('"Right now" is dated and every line exists in English and Spanish', () => {
  const personal = tree("src/content/personal.ts");
  const [now] = properties(personal, "now");
  assert.ok(ts.isObjectLiteralExpression(now));
  const updated = now.properties.find(
    (p) => p.name?.getText(personal) === "updated",
  );
  assert.match(updated.initializer.text, /^\d{4}-\d{2}-\d{2}$/);
  const items = now.properties.find(
    (p) => p.name?.getText(personal) === "items",
  );
  assert.ok(items.initializer.elements.length >= 5);
  for (const item of items.initializer.elements) {
    for (const field of ["label", "text"]) {
      const value = item.properties.find(
        (p) => p.name?.getText(personal) === field,
      ).initializer;
      for (const language of ["en", "es"])
        assert.ok(
          value.properties.some((p) => p.name?.getText(personal) === language),
          `${field} needs ${language}`,
        );
    }
  }
});

test("public personal copy does not expose private plans or name their source", () => {
  const personal =
    source("src/content/personal.ts") + source("src/content/about.ts");
  for (const privateDetail of [
    "Anytype",
    "write a book",
    "escribir un libro",
    "fundar una startup",
    "construir un reloj",
  ])
    assert.ok(!personal.toLowerCase().includes(privateDetail.toLowerCase()));
});

test("Atlas product and engineering routes link to each other", () => {
  assert.ok(source("src/pages/Atlas.tsx").includes('to="/portfolio/atlas"'));
  assert.ok(source("src/pages/AtlasTechnical.tsx").includes('to="/atlas"'));
  assert.ok(
    source("src/content/atlas.ts").includes("157") &&
      source("src/content/atlas.ts").includes("26"),
  );
});

test("both language-specific simulation images exist", () => {
  for (const image of [
    "atlas-score-en",
    "atlas-score-es",
    "atlas-denoising-en",
    "atlas-denoising-es",
  ]) {
    const bytes = fs.readFileSync(
      new URL("../public/projects/" + image + ".jpg", import.meta.url),
    );
    assert.deepEqual([...bytes.subarray(0, 3)], [255, 216, 255]);
    assert.ok(bytes.length > 10000);
  }
});

test("Spanish dictionary covers technical project titles, descriptions, and highlights", () => {
  const mapTree = tree("src/i18n/spanish.ts");
  const keys = new Set();
  const visit = (n) => {
    if (ts.isPropertyAssignment(n) && ts.isStringLiteral(n.name))
      keys.add(n.name.text);
    ts.forEachChild(n, visit);
  };
  visit(mapTree);
  const catalog = tree("src/data/projectCatalog.tsx");
  for (const name of ["title", "description"])
    for (const node of properties(catalog, name))
      if (ts.isStringLiteral(node) && node.text !== "Atlas")
        assert.ok(keys.has(node.text), `Missing translation: ${node.text}`);
  for (const node of properties(catalog, "highlights"))
    if (ts.isArrayLiteralExpression(node))
      for (const value of node.elements)
        if (ts.isStringLiteral(value))
          assert.ok(keys.has(value.text), `Missing translation: ${value.text}`);
});

test("home photos are optional, local, and captioned in both languages", () => {
  const personal = source("src/content/personal.ts");
  assert.ok(personal.includes("const photos: HomePhoto[]"));
  const narrative = source("src/components/PersonalHomeContent.tsx");
  assert.ok(narrative.includes("personalContent.photos.length > 0"));
  // Placeholders must never reach production builds.
  assert.ok(narrative.includes("import.meta.env.DEV"));
  for (const match of personal.matchAll(/src: "([^"]+)"/g))
    assert.ok(
      match[1].startsWith("/photos/") &&
        fs.existsSync(new URL("../public" + match[1], import.meta.url)),
      `${match[1]} must exist in public/photos/`,
    );
});

test("Atlas figures have one source and are dated wherever they appear", () => {
  const atlas = source("src/content/atlas.ts");
  const lessons = atlas.match(/lessons: (\d+)/)[1];
  const labs = atlas.match(/laboratories: (\d+)/)[1];
  assert.match(atlas, /date: "\d{4}-\d{2}-\d{2}"/);
  const catalog = source("src/data/projectCatalog.tsx");
  assert.ok(catalog.includes(`${lessons} lessons and ${labs} interactive`));
  assert.ok(catalog.includes(`{ label: "Lessons", value: "${lessons}" }`));
  assert.ok(
    source("src/data/atlasPost.ts").includes(`${lessons} lessons and ${labs}`),
  );
  assert.ok(source("QA.md").includes(`${lessons}-lesson`));
  for (const page of ["src/pages/Atlas.tsx", "src/pages/AtlasTechnical.tsx"])
    assert.ok(
      source(page).includes("atlasFactsNote("),
      `${page} shows the date`,
    );
});

test("Italian is a supported language and can be chosen explicitly or remembered", () => {
  assert.equal(resolveLanguage("?lang=it", "es"), "it");
  assert.equal(resolveLanguage("", "it"), "it");
  assert.equal(resolveLanguage("?lang=fr", "it"), "it");
  const updated = new URL(
    updateExplicitLanguageUrl("http://127.0.0.1:5180/gdg?lang=es#events", "it"),
  );
  assert.equal(updated.searchParams.get("lang"), "it");
  assert.equal(updated.hash, "#events");
});

test("every UI string has an Italian translation", () => {
  const keysOf = (path) => {
    const root = tree(path);
    const keys = new Set();
    const visit = (n) => {
      if (ts.isPropertyAssignment(n))
        keys.add(
          ts.isStringLiteral(n.name) ? n.name.text : n.name.getText(root),
        );
      ts.forEachChild(n, visit);
    };
    visit(root);
    return keys;
  };
  const norm = (s) => s.trim().replace(/\s+/g, " ");
  const italian = keysOf("src/i18n/italian.ts");
  const missing = new Set();
  for (const key of keysOf("src/i18n/spanish.ts"))
    if (!italian.has(norm(key))) missing.add(key);
  const files = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(new URL("../" + dir, import.meta.url), {
      withFileTypes: true,
    }))
      if (entry.isDirectory()) walk(`${dir}/${entry.name}`);
      else if (/\.tsx?$/.test(entry.name)) files.push(`${dir}/${entry.name}`);
  };
  walk("src");
  for (const file of files) {
    if (/i18n\/(spanish|italian)\.ts$/.test(file)) continue;
    const root = tree(file);
    const visit = (n) => {
      if (
        ts.isCallExpression(n) &&
        ts.isIdentifier(n.expression) &&
        n.expression.text === "t"
      ) {
        const [first] = n.arguments;
        if (
          first &&
          (ts.isStringLiteral(first) ||
            ts.isNoSubstitutionTemplateLiteral(first)) &&
          !italian.has(norm(first.text))
        )
          missing.add(`${file}: ${first.text}`);
      }
      ts.forEachChild(n, visit);
    };
    visit(root);
  }
  assert.deepEqual([...missing], []);
});

test("localised content objects carry en, es and it together", () => {
  for (const file of [
    "src/content/personal.ts",
    "src/content/about.ts",
    "src/content/atlas.ts",
    "src/content/gdg.ts",
  ]) {
    const root = tree(file);
    const visit = (n) => {
      if (ts.isObjectLiteralExpression(n)) {
        const names = n.properties.map((p) => p.name?.getText(root));
        if (names.includes("es"))
          assert.ok(
            names.includes("en") && names.includes("it"),
            `${file}: ${n.getText(root).slice(0, 80)}`,
          );
      }
      ts.forEachChild(n, visit);
    };
    visit(root);
  }
});

test("Italian articles are complete translations that keep plots and key values", () => {
  for (const [file, plots, minimum] of [
    ["regularization", ["regularization-radar"], 1400],
    [
      "diffusion",
      [
        "diffusion-denoising-samples",
        "diffusion-imputation",
        "diffusion-sampler-runtime",
      ],
      1400,
    ],
    [
      "athenai",
      [
        "athenai-pipeline",
        "athenai-clusters",
        "athenai-state",
        "athenai-benchmark",
      ],
      1400,
    ],
    ["atlas", [], 500],
  ]) {
    const body = source(`src/content/blog/it/${file}.md`);
    assert.ok(body.split(/\s+/).length > minimum, `${file}: not a summary`);
    assert.equal((body.match(/```/g) || []).length % 2, 0, `${file}: fences`);
    for (const plot of plots) assert.ok(body.includes(plot + ".png"), plot);
  }
  const thesis = source("src/content/blog/it/regularization.md");
  for (const value of ["0.785", "89.22%", "83.1%", "42.0%", "15 + 85"])
    assert.ok(thesis.includes(value), value);
  const athenai = source("src/content/blog/it/athenai.md");
  for (const value of [
    "14,761",
    "8,879,120",
    "9,491",
    "80.6%",
    "22.95%",
    "-1.87%",
  ])
    assert.ok(athenai.includes(value), value);
  assert.ok(source("src/content/blog/it/atlas.md").includes("157"));
  const blogs = source("src/data/localizedBlogs.ts");
  for (const name of [
    "regularizationIt",
    "diffusionIt",
    "athenaiIt",
    "atlasIt",
  ])
    assert.ok(blogs.includes(`content: ${name}`), name);
});
