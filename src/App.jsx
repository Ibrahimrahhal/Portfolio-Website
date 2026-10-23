import { useEffect } from 'react';
import { Nav } from './components/index.jsx';
import { useActiveSection, useScrolledPast, useTheme } from './hooks.js';
import { nav } from './content.js';
import { Before, Code, Contact, Hero, Notes, Now, Photos, Shift, Ventures } from './sections.jsx';

const ids = ['top', ...nav.map((n) => n.href.slice(1))];

function ThemeToggle({ theme, onToggle }) {
  const night = theme === 'night';
  return (
    <button type="button" className="theme" onClick={onToggle} aria-label={night ? 'Switch to Paper theme' : 'Switch to Night theme'} aria-pressed={night}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <g className="theme__sun">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <path className="theme__moon" d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function App() {
  const active = useActiveSection(ids);
  const floating = useScrolledPast(320);
  const [theme, toggleTheme] = useTheme();
  useEffect(() => {
    // Dev aid: /?shot=before jumps straight to a section so headless captures can frame it.
    const id = new URLSearchParams(location.search).get('shot');
    const el = id && document.getElementById(id);
    if (el) { document.documentElement.style.scrollBehavior = 'auto'; el.scrollIntoView({ block: 'start' }); window.dispatchEvent(new Event('scroll')); }
  }, []);
  return (
    <>
      <a className="skip" href="#now">Skip to the work</a>
      <main className="page">
        <Hero />
        <Now />
        <Before />
        <Shift />
        <Ventures />
        <Photos />
        <Notes />
        <Code />
        <Contact />
      </main>
      <div className="nav-dock">
        <Nav
          items={nav}
          active={`#${active}`}
          floating={floating}
          onSelect={(it, e) => {
            const el = document.getElementById(it.href.slice(1));
            if (!el) return;
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.replaceState(null, '', it.href);
          }}
          trailing={<ThemeToggle theme={theme} onToggle={toggleTheme} />}
        />
      </div>
    </>
  );
}
