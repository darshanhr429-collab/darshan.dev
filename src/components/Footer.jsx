import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X"><FontAwesomeIcon icon={faXTwitter} /></a>
        </div>
        <p>
          Designed &amp; built by <b>Darshan H R</b> — © {new Date().getFullYear()} · Crafted with React, Three.js &amp; too much chai.
        </p>
      </div>
    </footer>
  );
}
