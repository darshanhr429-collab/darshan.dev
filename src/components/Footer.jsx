import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="socials">
          <a href="https://github.com/darshanhr429-collab" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/darshan-h-r-2ba67137b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="mailto:darshanhr429@gmail.com" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
        <p>
          Designed &amp; built by <b>Darshan H R</b> — © {new Date().getFullYear()} · Crafted with React, Three.js &amp; too much chai.
        </p>
      </div>
    </footer>
  );
}
