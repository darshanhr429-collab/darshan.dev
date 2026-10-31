import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="socials">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
        <p>
          Designed &amp; built by <b>{profile.fullName}</b> — © {new Date().getFullYear()} · Crafted with React, Three.js &amp; too much chai.
        </p>
      </div>
    </footer>
  );
}
