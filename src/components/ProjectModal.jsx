import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <article
        className="modal project-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close project details">
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <header className="modal-head">
          <span className="project-num">/{project.num}</span>
          <h3>{project.title}</h3>
          <p className="modal-tagline">{project.tagline}</p>
          <div className="chips">
            {project.tags.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </header>

        <div className="modal-body">
          <section>
            <h4>// overview</h4>
            <p>{project.desc}</p>
          </section>
          <section>
            <h4>// what i built</h4>
            <ul className="modal-list">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4>// features</h4>
            <ul className="feature-grid">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <div className="modal-links">
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <FontAwesomeIcon icon={faGithub} /> Source
            </a>
            <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FontAwesomeIcon icon={faUpRightFromSquare} /> Visit
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
