import { useEffect, useRef, useState } from 'react';
import { reducedMotion } from './components/index.jsx';

/* Adds `is-on` once the element is 20% visible. Used for staggered reveals. */
export function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window) || reducedMotion()) { setOn(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } });
    }, { threshold, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, on];
}

/* Progress 0..1 of how far the element has scrolled past a line at `anchor` of the viewport height. */
export function useScrollProgress(anchor = 0.6) {
  const ref = useRef(null);
  const [prog, setProg] = useState(0);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const p = (vh * anchor - r.top) / r.height;
      setProg(Math.max(0, Math.min(1, p)));
      if (r.top < vh * 0.9) setSeen(true);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [anchor]);
  return [ref, prog, seen || reducedMotion()];
}

/* Which section id is nearest the viewport centre. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = (window.innerHeight || 800) * 0.45;
      let best = ids[0], bestDist = Infinity;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = r.top <= mid && r.bottom >= mid ? 0 : Math.min(Math.abs(r.top - mid), Math.abs(r.bottom - mid));
        if (dist < bestDist) { bestDist = dist; best = id; }
      });
      setActive(best);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [ids.join('|')]);
  return active;
}

/* True once the window has scrolled past `px`. */
export function useScrolledPast(px = 400) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > px);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [px]);
  return past;
}

/* Theme: "paper" | "night", persisted. */
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'night');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add('is-theming');
    const id = setTimeout(() => document.documentElement.classList.remove('is-theming'), 300);
    try { localStorage.setItem('rh-theme', theme); } catch (e) { /* private mode */ }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'night' ? '#0f0e0c' : '#f6f3ee');
    return () => clearTimeout(id);
  }, [theme]);
  return [theme, () => setTheme((t) => (t === 'night' ? 'paper' : 'night'))];
}
