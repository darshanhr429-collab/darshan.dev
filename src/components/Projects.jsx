import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data/profile.js';

export default function Projects({ onSelect }) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="reveal">
          <p className="section-tag">Selected Work</p>
          <h2 className="section-title">
            Things I've <span className="grad">built</span>
          </h2>
          <p className="section-sub">
            A mix of passion projects and full-stack builds — each one taught me something new.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card glass tilt reveal" key={p.num}>
              <div className="project-top">
                <span className="project-num">/{p.num}</span>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub repo"><FontAwesomeIcon icon={faGithub} /></a>
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live demo"><FontAwesomeIcon icon={faLink} /></a>
                </div>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="chips">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
              <button type="button" className="project-more" onClick={() => onSelect(p)}>
                Case study <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
