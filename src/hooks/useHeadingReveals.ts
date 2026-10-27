import { useEffect, useRef } from "react";
import { startHeadingReveals } from "@/lib/headingReveals";

export function useHeadingReveals() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) return startHeadingReveals(ref.current);
  }, []);
  return ref;
}
