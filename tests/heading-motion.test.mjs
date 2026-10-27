import test from "node:test";
import assert from "node:assert/strict";
import { startHeadingReveals } from "../src/lib/headingReveals.ts";

function environment(reduced = false) {
  const previous = new Map();
  const observers = [];
  const listeners = new Set();
  const media = {
    matches: reduced,
    addEventListener: (_name, listener) => listeners.add(listener),
    removeEventListener: (_name, listener) => listeners.delete(listener),
  };
  class Heading {
    calls = [];
    cancellations = 0;
    animate(frames, options) {
      this.calls.push({ frames, options });
      return {
        finished: new Promise(() => {}),
        cancel: () => this.cancellations++,
      };
    }
  }
  class Observer {
    targets = [];
    disconnected = false;
    constructor(callback) {
      this.callback = callback;
      observers.push(this);
    }
    observe(target) {
      this.targets.push(target);
    }
    unobserve(target) {
      this.targets = this.targets.filter((item) => item !== target);
    }
    disconnect() {
      this.disconnected = true;
    }
    enter(target) {
      this.callback([{ target, isIntersecting: true }]);
    }
  }
  for (const [key, value] of Object.entries({
    window: { matchMedia: () => media },
    HTMLElement: Heading,
    IntersectionObserver: Observer,
  })) {
    previous.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, {
      configurable: true,
      writable: true,
      value,
    });
  }
  const headings = [new Heading(), new Heading()];
  const root = {
    querySelectorAll(selector) {
      assert.equal(selector, "h2, h3");
      return headings;
    },
  };
  return {
    headings,
    observers,
    root,
    listeners,
    preference(value) {
      media.matches = value;
      listeners.forEach((listener) => listener());
    },
    restore() {
      for (const [key, descriptor] of previous) {
        if (descriptor) Object.defineProperty(globalThis, key, descriptor);
        else Reflect.deleteProperty(globalThis, key);
      }
    },
  };
}

test("heading motion is progressive, readable, once-only, and cleaned up", () => {
  const env = environment();
  try {
    const dispose = startHeadingReveals(env.root);
    const [heading] = env.headings;
    assert.equal(
      heading.calls.length,
      0,
      "Text is untouched before it enters view",
    );
    env.observers[0].enter(heading);
    env.observers[0].enter(heading);
    assert.equal(heading.calls.length, 1);
    assert.ok(heading.calls[0].frames.every((frame) => frame.opacity >= 0.8));
    dispose();
    assert.equal(heading.cancellations, 1);
    assert.ok(env.observers[0].disconnected);
    assert.equal(env.listeners.size, 0);
  } finally {
    env.restore();
  }
});

test("reduced motion leaves headings unchanged without an observer", () => {
  const env = environment(true);
  try {
    const dispose = startHeadingReveals(env.root);
    assert.equal(env.observers.length, 0);
    assert.ok(env.headings.every((heading) => heading.calls.length === 0));
    dispose();
    assert.equal(env.listeners.size, 0);
  } finally {
    env.restore();
  }
});

test("changing motion preference cancels movement without replaying read headings", () => {
  const env = environment();
  try {
    const dispose = startHeadingReveals(env.root);
    env.observers[0].enter(env.headings[0]);
    env.preference(true);
    assert.equal(env.headings[0].cancellations, 1);
    env.preference(false);
    assert.deepEqual(env.observers[1].targets, [env.headings[1]]);
    dispose();
  } finally {
    env.restore();
  }
});
