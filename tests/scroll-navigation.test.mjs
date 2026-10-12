import assert from 'node:assert/strict';
import { afterEach, beforeEach, test } from 'node:test';
import { scrollToSectionWithOffset } from '../src/lib/utils.ts';

const originalWindow = globalThis.window;
const originalDocument = globalThis.document;
let calls;

beforeEach(() => {
  calls = [];
  globalThis.window = { scrollY: 250, scrollTo: (...args) => calls.push(args) };
  globalThis.document = {
    getElementById: () => ({ getBoundingClientRect: () => ({ top: 900 }) }),
  };
});

afterEach(() => {
  if (originalWindow === undefined) delete globalThis.window;
  else globalThis.window = originalWindow;
  if (originalDocument === undefined) delete globalThis.document;
  else globalThis.document = originalDocument;
});

test('native fallback keeps the header offset and requests smooth movement', () => {
  scrollToSectionWithOffset('projects');
  assert.deepEqual(calls, [[{ top: 1070, behavior: 'smooth' }]]);
});

test('home always returns to zero through Lenis', () => {
  scrollToSectionWithOffset('home', 80, { scrollTo: (...args) => calls.push(args) });
  assert.equal(calls[0][0], 0);
  assert.equal(calls[0][1].lerp, 0);
  assert.ok(calls[0][1].duration >= 1);
});

test('long section jumps retain a bounded duration and continuous easing', () => {
  globalThis.document.getElementById = () => ({ getBoundingClientRect: () => ({ top: 20000 }) });
  scrollToSectionWithOffset('contact', 80, { scrollTo: (...args) => calls.push(args) });
  const [top, options] = calls[0];
  assert.equal(top, 20170);
  assert.equal(options.duration, 1.55);
  assert.equal(options.easing(0), 0);
  assert.equal(options.easing(0.5), 0.5);
  assert.equal(options.easing(1), 1);
  const positions = Array.from({ length: 21 }, (_, i) => options.easing(i / 20));
  assert.ok(positions.every((value, i) => i === 0 || value > positions[i - 1]));
});

test('missing sections do not move the viewport', () => {
  globalThis.document.getElementById = () => null;
  scrollToSectionWithOffset('missing');
  assert.deepEqual(calls, []);
});

test('targets above the document clamp to zero', () => {
  globalThis.document.getElementById = () => ({ getBoundingClientRect: () => ({ top: -1000 }) });
  scrollToSectionWithOffset('about');
  assert.equal(calls[0][0].top, 0);
});

test('a custom header offset is honored', () => {
  scrollToSectionWithOffset('experience', 120);
  assert.equal(calls[0][0].top, 1030);
});
