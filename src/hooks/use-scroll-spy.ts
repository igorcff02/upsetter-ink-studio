import { useEffect } from "react";

function useScrollSpy(ids: string[], options: IntersectionObserverInit = { root: null, rootMargin: "0px", threshold: 0.6 }) {
  useEffect(() => {
    if (!ids.length || typeof window === "undefined") return;
    if (window.location.pathname !== "/") return; // only on landing

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    let current: string | null = null;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        const id = visible[0].target.id;
        if (id && id !== current) {
          current = id;
          const url = `/#${id}`;
          window.history.replaceState(null, "", url);
        }
      }
    }, options);

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [ids, options.root, options.rootMargin, options.threshold]);
}

export default useScrollSpy;