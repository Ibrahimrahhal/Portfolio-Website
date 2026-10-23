// Rahhalesta components, ported from the design system bundle (window.Rahhalesta) to JSX modules.
import { useEffect, useRef, useState, Fragment } from 'react';

export function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

export function reducedMotion() {
  return !!(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

export function Arrow({ className }) {
  return (
    <svg className={cx('rh-arrow', className)} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Button: primary (petra, with arrow) or ghost (hairline). Renders <a> when href is given. */
export function Button({ variant = 'primary', href, onClick, arrow = true, className, children, ...rest }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className={cx('rh-btn', `rh-btn--${variant}`, className)} href={href} onClick={onClick} type={href ? undefined : 'button'} {...rest}>
      <span className="rh-btn__label">{children}</span>
      {variant === 'primary' && arrow ? <Arrow /> : null}
    </Tag>
  );
}

/* Chip: a mono tag for a stack item. tone "neutral" (default) or "petra". */
export function Chip({ tone, className, children }) {
  return <span className={cx('rh-chip', tone === 'petra' && 'rh-chip--petra', className)}>{children}</span>;
}

/* ChapterHeading: eyebrow + display heading whose words rise in; `emphasis` names the italic petra word. */
export function ChapterHeading({ eyebrow, children, emphasis, lead, size, reveal, as: As = 'h2', className, id }) {
  const ref = useRef(null);
  const [on, setOn] = useState(!reveal);
  useEffect(() => {
    if (!reveal) return;
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window) || reducedMotion()) { setOn(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [reveal]);
  const words = String(children || '').split(' ');
  const sizeClass = size === 'md' ? 'display-md' : size === 'xl' ? 'display-xl' : 'display-lg';
  return (
    <header ref={ref} className={cx('rh-ch', on && 'is-on', className)} id={id}>
      {eyebrow ? <p className="rh-eyebrow">{eyebrow}</p> : null}
      <As className={cx('rh-ch__title', sizeClass)}>
        {words.map((w, i) => {
          const bare = w.replace(/[.,!?:;]/g, '');
          const em = emphasis && bare.toLowerCase() === String(emphasis).toLowerCase();
          return (
            <Fragment key={i}>
              <span className="rh-ch__w">
                <span className={cx('rh-ch__wi', em && 'rh-ch__em')} style={{ transitionDelay: `${i * 60}ms` }}>{w}</span>
              </span>
              {i < words.length - 1 ? ' ' : null}
            </Fragment>
          );
        })}
      </As>
      {lead ? <p className="rh-ch__lead lead">{lead}</p> : null}
    </header>
  );
}

/* Waypoint: one stop on the road. */
export function Waypoint({ index, year, place, title, children, stack, active, last, className, style }) {
  return (
    <article className={cx('rh-wp', active && 'is-active', last && 'is-last', className)} style={style}>
      <div className="rh-wp__rail"><span className="rh-wp__disc" /></div>
      <div className="rh-wp__body">
        <p className="rh-eyebrow">{index}{year ? ` · ${year}` : null}{place ? ` · ${place}` : null}</p>
        <h3 className="rh-wp__title display-sm">{title}</h3>
        {children ? <div className="rh-wp__text body">{children}</div> : null}
        {stack && stack.length ? <div className="rh-wp__stack">{stack.map((s) => <Chip key={s}>{s}</Chip>)}</div> : null}
      </div>
    </article>
  );
}

/* RouteArt: abstract placeholder for a ProjectCard with no screenshot yet. */
export function RouteArt({ seed = 1 }) {
  const s = seed % 4;
  const paths = [
    'M-20 150 C 80 40, 160 220, 260 120 S 380 60, 440 110',
    'M-20 60 C 90 140, 150 20, 250 110 S 360 200, 440 90',
    'M-20 120 C 60 200, 180 40, 280 140 S 400 160, 440 60',
    'M-20 90 C 100 20, 170 170, 270 80 S 380 140, 440 140',
  ];
  return (
    <svg viewBox="0 0 420 262" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="420" height="262" fill="var(--petra-tint)" />
      <path d={paths[s]} fill="none" stroke="var(--hairline)" strokeWidth="1.5" />
      <path d={paths[s]} fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="4 8" strokeLinecap="round" />
      <circle cx={100 + s * 40} cy={120 - s * 10} r="6" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx={300 - s * 20} cy={110 + s * 12} r="6" fill="var(--petra)" />
    </svg>
  );
}

/* ProjectCard */
export function ProjectCard({ title, meta, description, stack, href, image, alt, art, seed, className, style }) {
  const Tag = href ? 'a' : 'article';
  const frame = art || (image ? <img src={image} alt={alt || ''} loading="lazy" /> : <RouteArt seed={seed} />);
  return (
    <Tag className={cx('rh-pc', className)} href={href} style={style} target={href && /^https?:/.test(href) ? '_blank' : undefined} rel={href && /^https?:/.test(href) ? 'noreferrer' : undefined}>
      <div className="rh-pc__frame">{frame}</div>
      <div className="rh-pc__body">
        <div className="rh-pc__row">
          <h3 className="rh-pc__title display-md">{title}</h3>
          <Arrow className="rh-pc__arrow" />
        </div>
        {meta ? <p className="rh-pc__meta caption">{meta}</p> : null}
        {description ? <p className="rh-pc__desc body-sm">{description}</p> : null}
        {stack && stack.length ? <div className="rh-pc__stack">{stack.map((s) => <Chip key={s}>{s}</Chip>)}</div> : null}
      </div>
    </Tag>
  );
}

/* Marquee */
export function Marquee({ items = [], duration = '32s', className }) {
  const row = (hidden) => (
    <div className="rh-mq__row" aria-hidden={hidden ? 'true' : undefined}>
      {items.map((it, i) => <span key={i} className="rh-mq__item">{it}</span>)}
    </div>
  );
  return (
    <div className={cx('rh-mq', className)} style={{ '--rh-mq-duration': duration }}>
      <div className="rh-mq__track">{row(false)}{row(true)}</div>
    </div>
  );
}

/* Commit */
export function Commit({ hash = 'a1b2c3d', meta, message = '', deletions, additions, typing, className, style }) {
  const [typed, setTyped] = useState(typing ? '' : message);
  const [done, setDone] = useState(!typing);
  useEffect(() => {
    if (!typing || reducedMotion()) { setTyped(message); setDone(true); return; }
    let i = 0;
    setTyped(''); setDone(false);
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setTyped(message.slice(0, i));
        if (i >= message.length) { clearInterval(id); setDone(true); }
      }, 28);
      Commit._id = id;
    }, 500);
    return () => { clearTimeout(start); clearInterval(Commit._id); };
  }, [message, typing]);
  const hasDiff = (deletions && deletions.length) || (additions && additions.length);
  return (
    <article className={cx('rh-cm', className)} style={style}>
      <header className="rh-cm__head">
        <span className="rh-cm__hash">{hash}</span>
        {meta ? <span className="rh-cm__meta">{meta}</span> : null}
      </header>
      <p className="rh-cm__msg code">{typed}{typing && !done ? <span className="rh-cm__caret" aria-hidden="true" /> : null}</p>
      {hasDiff && done ? (
        <ul className="rh-cm__diff code">
          {(deletions || []).map((l, i) => <li key={`d${i}`} className="rh-cm__del">- {l}</li>)}
          {(additions || []).map((l, i) => <li key={`a${i}`} className="rh-cm__add">+ {l}</li>)}
        </ul>
      ) : null}
    </article>
  );
}

/* RouteLine: the road. Controlled by `progress` 0..1. */
export function RouteLine({ height = 480, waypoints = 4, progress = 1, offsets, className }) {
  const n = Math.max(1, waypoints);
  const ref = useRef(null);
  const [len, setLen] = useState(1000);
  const top = 12, bottom = height - 12, span = bottom - top;
  const xs = [12, 36];
  const pts = [];
  for (let i = 0; i < n; i++) {
    const y = offsets && offsets[i] != null ? offsets[i] : top + span * (n === 1 ? 0 : i / (n - 1));
    pts.push({ x: xs[i % 2], y });
  }
  let d = `M${pts[0].x} ${pts[0].y}`;
  for (let j = 1; j < pts.length; j++) {
    const a = pts[j - 1], b = pts[j], my = (a.y + b.y) / 2;
    d += ` C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`;
  }
  useEffect(() => {
    if (ref.current && ref.current.getTotalLength) setLen(ref.current.getTotalLength());
  }, [d]);
  const prog = reducedMotion() ? 1 : Math.max(0, Math.min(1, progress));
  const total = pts[pts.length - 1].y - pts[0].y || 1;
  return (
    <svg className={cx('rh-rl', className)} width="48" height={height} viewBox={`0 0 48 ${height}`} aria-hidden="true">
      <path className="rh-rl__track" d={d} />
      <path ref={ref} className="rh-rl__trace" d={d} style={{ strokeDasharray: len, strokeDashoffset: len * (1 - prog) }} />
      {pts.map((pt, k) => {
        const at = (pt.y - pts[0].y) / total;
        return <circle key={k} className={cx('rh-rl__wp', prog >= at - 0.001 && 'is-passed')} cx={pt.x} cy={pt.y} r="5" />;
      })}
    </svg>
  );
}

/* Nav: floating pill of section links with a sliding petra-tint indicator. */
export function Nav({ items = [], active: controlled, onSelect, floating, trailing, label = 'Sections', className }) {
  const [active, setActive] = useState(controlled || (items[0] && items[0].href));
  const refs = useRef({});
  const [ind, setInd] = useState({ left: 0, width: 0 });
  useEffect(() => { if (controlled != null) setActive(controlled); }, [controlled]);
  useEffect(() => {
    const measure = () => {
      const el = refs.current[active];
      if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener('resize', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [active, items.length]);
  return (
    <nav className={cx('rh-nav', floating && 'is-floating', className)} aria-label={label}>
      <div className="rh-nav__pill">
        <span className="rh-nav__ind" aria-hidden="true" style={{ transform: `translateX(${ind.left}px)`, width: `${ind.width}px` }} />
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            ref={(el) => { refs.current[it.href] = el; }}
            className={cx('rh-nav__item', it.href === active && 'is-active')}
            aria-current={it.href === active ? 'true' : undefined}
            onClick={(e) => { if (onSelect) onSelect(it, e); if (controlled == null) setActive(it.href); }}
          >
            {it.label}
          </a>
        ))}
        {trailing ? <span className="rh-nav__trail">{trailing}</span> : null}
      </div>
    </nav>
  );
}
