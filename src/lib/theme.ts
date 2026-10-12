/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
/**
 * Toggle light/dark with a circular "ripple" reveal that grows from (x, y)
 * using the View Transitions API. Falls back to a quick colour crossfade
 * when the API is missing or the visitor prefers reduced motion.
 */
export function toggleTheme(x = window.innerWidth / 2, y = window.innerHeight / 2) {
  const root = document.documentElement;
  const next = root.classList.contains("dark") ? "light" : "dark";

  const apply = () => {
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduce) {
    root.classList.add("theme-transition");
    apply();
    window.setTimeout(() => root.classList.remove("theme-transition"), 350);
    return;
  }

  // Radius that reaches the farthest viewport corner from the origin.
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

  // Freeze CSS transitions during the swap so every element is captured in its
  // final colours; otherwise colour transitions leave stale patches in the reveal.
  root.classList.add("theme-switching");
  const transition = document.startViewTransition(apply);
  transition.finished.finally(() => root.classList.remove("theme-switching"));

  transition.ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      {
        duration: 550,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}
