import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        const pos = window.scrollY + window.innerHeight * 0.35;
        let current = 'home';
        for (const { id } of LINKS) {
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
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary nav-cta">Hire Me</a>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">☰</button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        {LINKS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </div>
    </>
  );
}
