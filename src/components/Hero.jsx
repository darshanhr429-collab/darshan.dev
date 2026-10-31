import { useEffect, useState } from 'react';
import Scene3D from './Scene3D.jsx';
import { profile } from '../data/profile.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

const TYPE_SPEED = 70;
const ERASE_SPEED = 34;

export default function Hero({ onResume }) {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = profile.roles[roleIdx];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 1700);
    } else if (deleting && text === '') {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % profile.roles.length);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? ERASE_SPEED : TYPE_SPEED
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section className="hero" id="home">
      <div className="hero-canvas">
        <Scene3D />
      </div>
      <div className="hero-vignette" />
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-status">
            <span className="status-dot" /> {profile.availability}
          </p>
          <p className="hero-hello">{'// hello world, I am'}</p>
          <h1 className="hero-name">
            {profile.firstName} <span className="grad">{profile.lastName}</span>
          </h1>
          <p className="hero-role">
            {'> '}<span className="typed">{text}</span>
            <span className="cursor" />
          </p>
          <p className="hero-desc">{profile.intro}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FontAwesomeIcon icon={faArrowDown} />
            </a>
            <button type="button" className="btn btn-ghost" onClick={onResume}>
              <FontAwesomeIcon icon={faFileArrowDown} /> Resume
            </button>
          </div>
          <div className="hero-socials">
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="hero-portrait tilt">
            <span className="portrait-ring" aria-hidden="true" />
            <div className="portrait-card">
              <img src={profile.photo} alt={`Portrait of ${profile.fullName}`} />
              <span className="portrait-light" aria-hidden="true" />
            </div>
            <div className="float-chip chip-a">
              <b>B.E. CSE</b>
              <span>2023 — 2027</span>
            </div>
            <div className="float-chip chip-b">
              <b>500+</b>
              <span>DSA problems</span>
            </div>
            <div className="float-chip chip-c">
              <b>15+</b>
              <span>projects shipped</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="line" />
      </div>
    </section>
  );
}
