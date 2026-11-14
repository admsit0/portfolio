import { lazy, type ComponentType } from "react";

// Like React.lazy, but once the module has loaded the page renders directly
// instead of suspending. main.tsx preloads the current route before
// hydrating, so hydration never waits on a chunk (avoids React error #421
// when context updates reach a still-dehydrated Suspense boundary).
export function lazyRoute(load: () => Promise<{ default: ComponentType }>) {
  let Loaded: ComponentType | undefined;
  const remember = <T extends { default: ComponentType }>(module: T) => {
    Loaded = module.default;
    return module;
  };
  const Lazy = lazy(() => load().then(remember));
  function LazyRoute() {
    return Loaded ? <Loaded /> : <Lazy />;
  }
  return Object.assign(LazyRoute, {
    preload: () => load().then(remember),
  });
}
