import { useEffect } from 'react';
import { Arrow, Button, ChapterHeading, Chip, Commit, Marquee, cx } from './components/index.jsx';
import { Counter, Magnetic, Scanner, SectionHead, Showcase, VideoEmbed, useLightbox } from './components/cinematic.jsx';
import { useReveal } from './hooks.js';
import { before, code, contact, hero, links, marquee, notes, now, photos, shift, ventures } from './content.js';

/* Reveal: rises its content in once in view. */
function Reveal({ children, delay = 0, className, as: As = 'div' }) {
  const [ref, on] = useReveal();
  return (
    <As ref={ref} className={cx('rv', on && 'is-on', className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </As>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Scanner avoid=".hero__inner .rh-ch, .hero__line, .hero__actions" />
      <div className="hero__inner">
        <ChapterHeading as="h1" id="hero-title" size="xl" eyebrow={hero.eyebrow} emphasis={hero.emphasis}>
          {hero.name}
        </ChapterHeading>
        <Reveal className="hero__line" delay={500}>
          <p className="lead">{hero.line}</p>
          <p className="hero__also caption">{hero.also}</p>
        </Reveal>
        <Reveal className="hero__actions" delay={700}>
          <Magnetic><Button href={hero.primary.href}>{hero.primary.label}</Button></Magnetic>
          <Magnetic><Button variant="ghost" href={hero.secondary.href}>{hero.secondary.label}</Button></Magnetic>
        </Reveal>
      </div>
      <div className="hero__proof">
        <Marquee items={marquee} speed={56} />
      </div>
      <a className="hero__scroll caption" href="#now" aria-label="Scroll to the work"><span /></a>
    </section>
  );
}

function Stats({ items }) {
  return (
    <ul className="stats">
      {items.map((s, i) => (
        <Reveal as="li" key={s.label} delay={i * 100} className="stat">
          <span className="stat__value display-lg">{s.node || s.value}</span>
          <span className="stat__label caption">{s.label}</span>
        </Reveal>
      ))}
    </ul>
  );
}

export function Now() {
  return (
    <section className="sec sec--now" id="now" aria-labelledby="now-title">
      <SectionHead id="now-title" numeral={now.numeral} eyebrow={now.eyebrow} emphasis={now.emphasis} lead={now.lead}>{now.heading}</SectionHead>
      <Showcase className="show--wide" {...now.shot} alt="Corgea Pentest Agents: a live run with 3,707 tool calls and 26 findings, showing the agent tree and a validation agent's task" />
      <div className="launch">
        <VideoEmbed id={now.video.id} title={now.video.title} />
        <Reveal className="launch__text" delay={150}>
          <p className="rh-eyebrow">{now.video.eyebrow}</p>
          <ChapterHeading as="h3" size="md" emphasis={now.video.emphasis} reveal>{now.video.heading}</ChapterHeading>
          <p className="body">{now.video.text}</p>
          <Magnetic><Button variant="ghost" href={now.video.href} target="_blank" rel="noreferrer">Watch on YouTube</Button></Magnetic>
        </Reveal>
      </div>
      <Stats items={now.stats} />
      <div className="products">
        {now.products.map((p, i) => (
          <Reveal key={p.title} delay={i * 120} className="product">
            <h3 className="display-md">{p.href ? <a className="product__link" href={p.href} target="_blank" rel="noreferrer">{p.title}</a> : p.title}</h3>
            <p className="body">{p.text}</p>
            <div className="tags">{p.tags.map((t) => <Chip key={t} tone={i === 0 ? 'petra' : undefined}>{t}</Chip>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Before() {
  const c = before.counter;
  const t = before.team;
  const lb = useLightbox(t.photos);
  return (
    <section className="sec sec--before" id="before" aria-labelledby="before-title">
      <SectionHead id="before-title" numeral={before.numeral} eyebrow={before.eyebrow} emphasis={before.emphasis} lead={before.lead}>{before.heading}</SectionHead>
      <div className="bignum">
        <Counter className="bignum__value" value={c.value} format={c.format} />
        <span className="bignum__label lead">{c.label}</span>
      </div>
      <Stats items={before.facts} />
      <div className="sites">
        {before.sites.map((s, i) => (
          <article key={s.title} className={cx('site', i % 2 && 'site--flip')}>
            <Showcase {...s.shot} alt={`${s.title} home page`} depth={36} />
            <Reveal className="site__text" delay={120}>
              <p className="rh-eyebrow">{s.role} · {s.year}</p>
              <h3 className="display-lg">{s.title}</h3>
              <p className="body">{s.text}</p>
              <div className="tags">{s.stack.map((x) => <Chip key={x}>{x}</Chip>)}</div>
            </Reveal>
          </article>
        ))}
      </div>
      <Reveal className="more">
        <span className="caption">{before.more.label}</span>
        <div className="tags">{before.more.items.map((x) => <Chip key={x}>{x}</Chip>)}</div>
      </Reveal>
      <div className="team">
        <Reveal className="team__text">
          <p className="rh-eyebrow">{t.eyebrow}</p>
          <ChapterHeading as="h3" emphasis={t.emphasis} reveal>{t.heading}</ChapterHeading>
          <p className="body">{t.text}</p>
        </Reveal>
        <div className="team__grid">
          {t.photos.map((p, i) => (
            <Showcase key={p.src} className={cx('team__photo', p.wide && 'team__photo--wide')} src={p.src} alt={p.alt} caption={p.caption} chrome={false} depth={20 + i * 8} align="center" onClick={() => lb.open(i)} />
          ))}
        </div>
      </div>
      {lb.node}
    </section>
  );
}

export function Shift() {
  const [ref, on] = useReveal(0.4);
  return (
    <section className="sec sec--shift" id="shift" aria-labelledby="shift-title">
      <div className="shift__inner">
        <p className="rh-eyebrow">{shift.eyebrow}</p>
        <h2 id="shift-title" ref={ref} className={cx('shift__title', on && 'is-on')}>
          <span className="shift__from display-xl"><span className="shift__strike">{shift.from}</span></span>
          <span className="shift__to display-xl">{shift.to}</span>
        </h2>
        <div className="shift__grid">
          <ul className="shift__lines">
            {shift.lines.map((l, i) => (
              <Reveal as="li" key={l.from} delay={i * 120} className="shift__line">
                <span className="shift__old code">{l.from}</span>
                <span className="shift__arrow" aria-hidden="true">→</span>
                <span className="shift__new code">{l.to}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <Commit typing {...shift.commit} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Ventures() {
  const p = ventures.podcast;
  const lb = useLightbox(p.photos);
  return (
    <section className="sec sec--ventures" id="ventures" aria-labelledby="ventures-title">
      <SectionHead id="ventures-title" numeral={ventures.numeral} eyebrow={ventures.eyebrow} emphasis={ventures.emphasis}>{ventures.heading}</SectionHead>
      <article className="venture">
        <Showcase className="venture__site" src={p.site.src} alt={p.site.alt} url={p.site.url} depth={36} />
        <Reveal className="venture__text" delay={120}>
          <p className="rh-eyebrow">{p.eyebrow}</p>
          <h3 className="display-lg">
            <ChapterHeading as="span" emphasis={p.emphasis} reveal>{p.heading}</ChapterHeading>
            <span className="venture__arabic" lang="ar" dir="rtl">{p.arabic}</span>
          </h3>
          <p className="body">{p.text}</p>
          <div className="tags">{p.platforms.map((x) => <Chip key={x}>{x}</Chip>)}</div>
        </Reveal>
        <div className="venture__photos">
          {p.photos.map((ph, i) => (
            <Showcase key={ph.src} src={ph.src} alt={ph.alt} caption={ph.caption} chrome={false} depth={24 + i * 12} align="center" onClick={() => lb.open(i)} />
          ))}
        </div>
      </article>
      {lb.node}
      <div className="products-head">
        <p className="rh-eyebrow">{ventures.productsEyebrow}</p>
      </div>
      <ul className="prods">
        {ventures.products.map((pr, i) => (
          <Reveal as="li" key={pr.name} delay={i * 120} className="prod">
            <Showcase className="prod__site" src={pr.site.src} alt={pr.site.alt} url={pr.site.url} href={pr.href} depth={24} />
            <div className="prod__text">
              <p className="rh-eyebrow">{pr.eyebrow}</p>
              <h3 className="display-md"><a className="product__link" href={pr.href} target="_blank" rel="noreferrer">{pr.name}</a></h3>
              <p className="body-sm">{pr.text}</p>
              <div className="tags">{pr.tags.map((x) => <Chip key={x}>{x}</Chip>)}</div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Photos() {
  const lb = useLightbox(photos.items);
  return (
    <section className="sec sec--photos" id="photos" aria-labelledby="photos-title">
      <SectionHead id="photos-title" numeral={photos.numeral} eyebrow={photos.eyebrow} emphasis={photos.emphasis} lead={photos.lead}>{photos.heading}</SectionHead>
      <div className="gallery">
        {photos.items.map((ph, i) => (
          <Showcase key={ph.src} className={cx('gallery__item', ph.size && `gallery__item--${ph.size}`)} src={ph.src} alt={ph.alt} caption={ph.caption} chrome={false} depth={16 + (i % 3) * 10} align="center" onClick={() => lb.open(i)} />
        ))}
      </div>
      {lb.node}
    </section>
  );
}

export function Code() {
  return (
    <section className="sec sec--code" id="code" aria-labelledby="code-title">
      <SectionHead id="code-title" numeral={code.numeral} eyebrow={code.eyebrow} emphasis={code.emphasis} size="md">{code.heading}</SectionHead>
      <ul className="repos">
        {code.repos.map((r, i) => (
          <Reveal as="li" key={r.name} delay={(i % 4) * 80}>
            <a className="repo" href={r.href} target="_blank" rel="noreferrer">
              <span className="repo__name code">{r.name}</span>
              <span className="repo__text body-sm">{r.text}</span>
              <span className="repo__stat caption">{r.stat}</span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Notes() {
  const [featured, ...rest] = notes.posts;
  const Card = ({ p, i, featured: isFeatured }) => (
    <Reveal as="li" key={p.href} delay={(i % 2) * 100} className={cx('note', isFeatured && 'note--featured')}>
      <a className="note__link" href={p.href} target="_blank" rel="noreferrer">
        <div className="note__meta">
          <span className="rh-eyebrow">{String(i + 1).padStart(2, '0')} · {p.date} · {p.read}</span>
          <Chip tone={isFeatured ? 'petra' : undefined}>{isFeatured ? 'Latest' : p.topic}</Chip>
        </div>
        <h3 className={cx('note__title', isFeatured ? 'display-lg' : 'display-sm')}>{p.title}</h3>
        <p className="note__dek body-sm">{p.dek}</p>
        <span className="note__foot caption">
          {isFeatured ? <Chip>{p.topic}</Chip> : null}
          <span className="note__cta">Read on Medium <Arrow /></span>
        </span>
      </a>
    </Reveal>
  );
  return (
    <section className="sec sec--notes" id="notes" aria-labelledby="notes-title">
      <div className="notes">
        <div className="notes__intro">
          <SectionHead id="notes-title" numeral={notes.numeral} eyebrow={notes.eyebrow} emphasis={notes.emphasis} lead={notes.lead} size="md">{notes.heading}</SectionHead>
          <Reveal delay={200}>
            <Magnetic><Button variant="ghost" href={notes.medium} target="_blank" rel="noreferrer">All posts on Medium</Button></Magnetic>
          </Reveal>
        </div>
        <ol className="notes__grid">
          <Card p={featured} i={0} featured />
          {rest.map((p, i) => <Card key={p.href} p={p} i={i + 1} />)}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  useEffect(() => {
    // The one easter egg the brand book allows.
    // eslint-disable-next-line no-console
    console.log('%cJavascript Hashira was here', 'font-family: monospace; color: #e8734f');
  }, []);
  return (
    <section className="sec sec--contact" id="contact" aria-labelledby="contact-title">
      <ChapterHeading id="contact-title" size="xl" emphasis={contact.emphasis} lead={contact.lead} reveal>{contact.heading}</ChapterHeading>
      <Reveal className="contact__actions" delay={200}>
        <Magnetic><Button href={links.email} arrow={false}>Email me</Button></Magnetic>
        <Magnetic><Button variant="ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</Button></Magnetic>
        <Magnetic><Button variant="ghost" href={links.github} target="_blank" rel="noreferrer">GitHub</Button></Magnetic>
      </Reveal>
      <footer className="footer">
        <span className="caption">Ibrahim Rahhal · Amman, Jordan · {new Date().getFullYear()}</span>
        <span className="caption">Set in Fraunces, Hanken Grotesk and JetBrains Mono.</span>
      </footer>
    </section>
  );
}
