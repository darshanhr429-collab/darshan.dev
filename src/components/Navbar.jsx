import { useEffect, useRef, useState } from 'react';
import { navLinks } from '../data/profile.js';

export default function Navbar({ onResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const links = navLinks.map((l) => ({ id: l.href.slice(1) }));
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        const pos = window.scrollY + window.innerHeight * 0.35;
        let current = 'home';
        for (const { id } of links) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= pos) current = id;
        }
        setActive(current);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="nav-logo">
            darshan<span>.dev</span>
          </a>
          <ul className="nav-links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={active === href.slice(1) ? 'active' : ''}>{label}</a>
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn-primary nav-cta" onClick={onResume}>Resume</button>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">☰</button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setMenuOpen(false);
            onResume();
          }}
        >
          View Resume
        </button>
      </div>
    </>
  );
}
