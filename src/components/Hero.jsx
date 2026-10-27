import { useEffect, useState } from 'react';
import Scene3D from './Scene3D.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ROLES = ['Full-Stack Developer', '3D Web Enthusiast', 'Problem Solver', 'Open Source Learner', 'CS Engineering Student'];
const TYPE_SPEED = 70;
const ERASE_SPEED = 34;

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[roleIdx];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 1700);
    } else if (deleting && text === '') {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
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
      <div className="container hero-content">
        <p className="hero-hello">{'// hello world, I am'}</p>
        <h1 className="hero-name">
          Darshan <span className="grad">H R</span>
        </h1>
        <p className="hero-role">
          {'> '}<span className="typed">{text}</span>
          <span className="cursor" />
        </p>
        <p className="hero-desc">
          Computer Science engineering student crafting immersive web experiences — blending clean code,
          3D graphics and thoughtful design to build things people remember.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work <FontAwesomeIcon icon={faArrowDown} />
          </a>
          <a href="#contact" className="btn btn-ghost">
            <FontAwesomeIcon icon={faEnvelope} /> Get In Touch
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X"><FontAwesomeIcon icon={faXTwitter} /></a>
        </div>
      </div>
      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="line" />
      </div>
    </section>
  );
}
