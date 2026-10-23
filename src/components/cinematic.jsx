// Cinematic pieces for the dark build: the Scanner hero canvas, parallax Showcase frames,
// counting numbers, magnetic buttons and the big-numeral section heads.
import { useEffect, useRef, useState } from 'react';
import { ChapterHeading, cx, reducedMotion } from './index.jsx';

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/* Scanner: a field of code glyphs swept by a petra beam that surfaces findings. Fills its parent. */
export function Scanner({ className, avoid }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    // Exclusion zones: findings never land on the copy. Measured on demand, in canvas coordinates.
    const MARGIN = 28;
    const zones = () => {
      if (!avoid) return [];
      const base = canvas.getBoundingClientRect();
      return Array.from(document.querySelectorAll(avoid)).map((el) => {
        const r = el.getBoundingClientRect();
        return { x1: r.left - base.left - MARGIN, y1: r.top - base.top - MARGIN, x2: r.right - base.left + MARGIN, y2: r.bottom - base.top + MARGIN };
      });
    };
    const clear = (box, zs) => zs.every((z) => box.x2 < z.x1 || box.x1 > z.x2 || box.y2 < z.y1 || box.y1 > z.y2);
    const ctx = canvas.getContext('2d');
    const reduce = reducedMotion();
    const chars = '{}[]<>/=;:()$#@!&*+-_0123456789abcdefxyzAEFH';
    const labels = ['SQL injection', 'IDOR', 'Secret in repo', 'SSRF', 'Auth bypass', 'CVE-2025-1183', 'Path traversal', 'Stored XSS', 'Mass assignment'];
    const cell = 30;
    let w = 0, h = 0, cols = 0, rows = 0, glyphs = [], findings = [], raf = 0, running = true;
    const pointer = { x: -1e9, y: -1e9 };
    const t0 = performance.now();
    let lastFinding = t0;
    const root = document.documentElement;
    const read = () => {
      const cs = getComputedStyle(root);
      return { ink: cs.getPropertyValue('--ink').trim(), petra: cs.getPropertyValue('--petra').trim(), paper: cs.getPropertyValue('--paper').trim(), muted: cs.getPropertyValue('--ink-muted').trim() };
    };
    let C = read();
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.max(1, w * dpr); canvas.height = Math.max(1, h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / cell) + 1; rows = Math.ceil(h / cell) + 1;
      glyphs = Array.from({ length: cols * rows }, () => ({ c: chars[(Math.random() * chars.length) | 0], a: Math.random() }));
      C = read();
    };
    const onMove = (e) => { const r = canvas.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; };
    const onLeave = () => { pointer.x = -1e9; pointer.y = -1e9; };
    const onTheme = new MutationObserver(() => { C = read(); if (reduce) draw(performance.now()); });
    onTheme.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

    function draw(now) {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      const beamY = reduce ? h * 0.42 : ((t * 70) % (h + 240)) - 120;
      ctx.font = '12px "JetBrains Mono", ui-monospace, monospace';
      ctx.textBaseline = 'top';
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const g = glyphs[r * cols + c];
          const x = c * cell, y = r * cell;
          const near = Math.max(0, 1 - Math.abs(y - beamY) / 160);
          const glow = Math.max(0, 1 - Math.hypot(x - pointer.x, y - pointer.y) / 240);
          if (!reduce && Math.random() < 0.0015) g.c = chars[(Math.random() * chars.length) | 0];
          const hot = near > 0.55 || glow > 0.45;
          ctx.fillStyle = hot ? C.petra : C.ink;
          ctx.globalAlpha = Math.min(1, 0.025 + g.a * 0.045 + near * 0.5 + glow * 0.55);
          ctx.fillText(g.c, x + 9, y + 9);
        }
      }
      ctx.globalAlpha = 1;
      if (!reduce) {
        const grad = ctx.createLinearGradient(0, beamY - 140, 0, beamY + 2);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, C.petra);
        ctx.globalAlpha = 0.16; ctx.fillStyle = grad; ctx.fillRect(0, beamY - 140, w, 142);
        ctx.globalAlpha = 0.9; ctx.fillStyle = C.petra; ctx.fillRect(0, beamY, w, 1);
        ctx.globalAlpha = 1;
        if (now - lastFinding > 900 && Math.random() < 0.03 && findings.length < 4 && beamY > 40 && beamY < h - 60) {
          const label = labels[(Math.random() * labels.length) | 0];
          ctx.font = '500 11px "JetBrains Mono", ui-monospace, monospace';
          const tw = ctx.measureText(label).width + 18;
          const zs = zones();
          for (let tries = 0; tries < 12; tries++) {
            const x = 40 + Math.random() * Math.max(80, w - 320);
            // The ring plus the label to its right: the whole footprint must be clear of the copy.
            const box = { x1: x - 20, y1: beamY - 20, x2: x + 18 + tw, y2: beamY + 16 };
            if (clear(box, zs)) { findings.push({ x, y: beamY, t: now, label }); break; }
          }
          lastFinding = now;
        }
      }
      findings = findings.filter((f) => now - f.t < 3600);
      canvas.__findings = findings; // inspectable from devtools; no runtime use
      for (const f of findings) {
        const age = (now - f.t) / 3600;
        const ease = 1 - Math.pow(1 - Math.min(1, age * 5), 3);
        const fade = age > 0.78 ? 1 - (age - 0.78) / 0.22 : 1;
        ctx.globalAlpha = fade;
        ctx.strokeStyle = C.petra; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(f.x, f.y, 5 + ease * 12, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = C.petra; ctx.beginPath(); ctx.arc(f.x, f.y, 3, 0, Math.PI * 2); ctx.fill();
        ctx.font = '500 11px "JetBrains Mono", ui-monospace, monospace';
        const tw = ctx.measureText(f.label).width + 18;
        const lx = f.x + 18, ly = f.y - 13;
        ctx.fillStyle = C.paper; ctx.globalAlpha = fade * 0.92;
        roundRect(ctx, lx, ly, Math.max(2, tw * ease), 26, 6); ctx.fill();
        ctx.strokeStyle = C.petra; ctx.lineWidth = 1; ctx.stroke();
        if (ease > 0.96) { ctx.fillStyle = C.petra; ctx.globalAlpha = fade; ctx.fillText(f.label, lx + 9, ly + 8); }
      }
      ctx.globalAlpha = 1;
      if (!reduce && running) raf = requestAnimationFrame(draw);
    }
    resize();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !running) { running = true; if (!reduce) raf = requestAnimationFrame(draw); }
        else if (!e.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
      });
    });
    io.observe(canvas);
    window.addEventListener('resize', resize);
    canvas.parentElement.addEventListener('pointermove', onMove);
    canvas.parentElement.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(draw);
    return () => {
      running = false; cancelAnimationFrame(raf); io.disconnect(); onTheme.disconnect();
      findings = [];
      window.removeEventListener('resize', resize);
      canvas.parentElement && canvas.parentElement.removeEventListener('pointermove', onMove);
      canvas.parentElement && canvas.parentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);
  return <canvas ref={ref} className={cx('scanner', className)} aria-hidden="true" />;
}

/* useParallax: -1..1 as the element travels from below the viewport to above it. */
export function useParallax() {
  const ref = useRef(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const centre = r.top + r.height / 2;
      setP(Math.max(-1, Math.min(1, (centre - vh / 2) / (vh / 2 + r.height / 2))));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return [ref, p];
}

/* Showcase: a browser-framed screenshot that parallaxes and un-clips as it enters. */
export function Showcase({ src, alt = '', url, href, className, depth = 48, align = 'top', chrome = true, caption, onClick }) {
  const [ref, p] = useParallax();
  const [seen, setSeen] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window) || reducedMotion()) { setSeen(true); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = href ? 'a' : 'div';
  const clickable = !href && typeof onClick === 'function';
  const onKey = clickable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(e); } } : undefined;
  return (
    <Tag
      ref={ref}
      className={cx('show', !chrome && 'show--photo', clickable && 'is-clickable', seen && 'is-on', failed && 'is-failed', className)}
      href={href} target={href ? '_blank' : undefined} rel={href ? 'noreferrer' : undefined}
      aria-label={href ? `Open ${url || alt}` : clickable ? `View ${caption || alt || 'photo'}` : undefined}
      role={clickable ? 'button' : undefined} tabIndex={clickable ? 0 : undefined}
      onClick={clickable ? onClick : undefined} onKeyDown={onKey}
    >
      {chrome ? (
        <div className="show__chrome" aria-hidden="true">
          <span /><span /><span />
          {url ? <span className="show__url">{url}</span> : null}
        </div>
      ) : null}
      {caption ? <span className="show__caption rh-eyebrow">{caption}</span> : null}
      <div className="show__frame">
        {failed ? (
          <div className="show__fallback"><span className="display-md">{url || alt}</span></div>
        ) : (
          <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} style={{ transform: `translateY(${(-p * depth).toFixed(1)}px) scale(1.12)`, objectPosition: align }} />
        )}
      </div>
    </Tag>
  );
}

/* Counter: counts up to `value` when in view. `format` turns the number into a string. */
export function Counter({ value, format = (n) => Math.round(n).toLocaleString(), duration = 1800, className }) {
  const ref = useRef(null);
  const [n, setN] = useState(reducedMotion() ? value : 0);
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) { setN(value); return; }
    let raf = 0;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now) => {
          const k = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - k, 4);
          setN(value * eased);
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, duration]);
  return <span ref={ref} className={className}>{format(n)}</span>;
}

/* Magnetic: nudges its child toward the pointer, 10px max. */
export function Magnetic({ children, strength = 0.25, className }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    if (reducedMotion()) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    const cap = 10;
    setT({ x: Math.max(-cap, Math.min(cap, dx * strength)), y: Math.max(-cap, Math.min(cap, dy * strength)) });
  };
  return (
    <span ref={ref} className={cx('magnet', className)} onPointerMove={onMove} onPointerLeave={() => setT({ x: 0, y: 0 })} style={{ transform: `translate(${t.x}px, ${t.y}px)` }}>
      {children}
    </span>
  );
}

/* Lightbox: full-screen viewer for a set of {src, alt, caption}. Arrow keys, Escape, swipe. */
export function Lightbox({ items, index, onClose, onIndex }) {
  const closeRef = useRef(null);
  const touch = useRef(null);
  const item = items[index];
  const go = (d) => onIndex((index + d + items.length) % items.length);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current && closeRef.current.focus();
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  });
  useEffect(() => {
    // Preload the neighbours so arrows feel instant.
    [1, -1].forEach((d) => { const n = items[(index + d + items.length) % items.length]; if (n) { const im = new Image(); im.src = n.src; } });
  }, [index, items]);
  if (!item) return null;
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={item.caption || item.alt || 'Photo'} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <button ref={closeRef} type="button" className="lb__close" onClick={onClose} aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
      </button>
      {items.length > 1 ? (
        <>
          <button type="button" className="lb__nav lb__nav--prev" onClick={() => go(-1)} aria-label="Previous photo">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M14 4l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" className="lb__nav lb__nav--next" onClick={() => go(1)} aria-label="Next photo">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M8 4l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </>
      ) : null}
      <figure
        className="lb__fig"
        onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => { if (touch.current == null) return; const dx = e.changedTouches[0].clientX - touch.current; touch.current = null; if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1); }}
      >
        <img key={item.src} src={item.src} alt={item.alt || ''} className="lb__img" />
        <figcaption className="lb__cap">
          <span className="rh-eyebrow">{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
          {item.caption ? <span className="lb__text body-sm">{item.caption}</span> : null}
        </figcaption>
      </figure>
    </div>
  );
}

/* useLightbox: state for one set of photos. Returns open(i) and the node to render. */
export function useLightbox(items) {
  const [index, setIndex] = useState(-1);
  const node = index >= 0 ? <Lightbox items={items} index={index} onClose={() => setIndex(-1)} onIndex={setIndex} /> : null;
  return { open: (i) => setIndex(i), node };
}

/* VideoEmbed: a YouTube poster with a play button; the iframe loads only on click. */
export function VideoEmbed({ id, title, className }) {
  const [playing, setPlaying] = useState(false);
  const [poster, setPoster] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  const [ref, p] = useParallax();
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window) || reducedMotion()) { setSeen(true); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cx('video', seen && 'is-on', playing && 'is-playing', className)}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video__poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          <img
            src={poster}
            alt=""
            loading="lazy"
            decoding="async"
            onLoad={(e) => { if (e.currentTarget.naturalWidth < 200) setPoster(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`); }}
            onError={() => setPoster(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
            style={{ transform: `translateY(${(-p * 24).toFixed(1)}px) scale(1.08)` }}
          />
          <span className="video__play" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M7 4.5v13l10-6.5-10-6.5Z" fill="currentColor" /></svg>
          </span>
          <span className="video__badge rh-eyebrow" aria-hidden="true">Watch the launch demo</span>
        </button>
      )}
    </div>
  );
}

/* SectionHead: a huge outlined numeral drifting slower than the page, then the heading. */
export function SectionHead({ numeral, eyebrow, children, emphasis, lead, id, size }) {
  const [ref, p] = useParallax();
  return (
    <div className="shead" ref={ref}>
      <span className="shead__num" aria-hidden="true" style={{ transform: `translateY(${(p * 60).toFixed(1)}px)` }}>{numeral}</span>
      <ChapterHeading id={id} eyebrow={eyebrow} emphasis={emphasis} lead={lead} size={size} reveal>{children}</ChapterHeading>
    </div>
  );
}
