import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPrint } from '@fortawesome/free-solid-svg-icons';
import { profile, education, experience, projects, achievements, skillGroups } from '../data/profile.js';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal resume-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Resume">
        <div className="resume-toolbar">
          <span className="section-tag" style={{ marginBottom: 0 }}>Resume Preview</span>
          <div className="resume-toolbar-actions">
            <button type="button" className="btn btn-primary" onClick={() => window.print()}>
              <FontAwesomeIcon icon={faPrint} /> Download PDF
            </button>
            <button className="modal-close inline" onClick={onClose} aria-label="Close resume">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>

        <article className="resume-paper">
          <header className="resume-head">
            <div>
              <h2>{profile.fullName}</h2>
              <p className="resume-role">{profile.role} · B.E. Computer Science &amp; Engineering</p>
            </div>
            <ul className="resume-contact">
              <li>{profile.email}</li>
              <li>{profile.phone}</li>
              <li>{profile.location}</li>
              <li>github.com/darshanhr429-collab</li>
              <li>linkedin.com/in/darshan-h-r-2ba67137b</li>
            </ul>
          </header>

          <section className="resume-block">
            <h3>Summary</h3>
            <p>{profile.intro}</p>
          </section>

          <section className="resume-block">
            <h3>Education</h3>
            {education.map((e) => (
              <div className="resume-entry" key={e.title}>
                <div className="resume-entry-head">
                  <strong>{e.title}</strong>
                  <span>{e.date}</span>
                </div>
                <em>{e.place}</em>
                <p>{e.desc}</p>
              </div>
            ))}
          </section>

          <section className="resume-block">
            <h3>Experience</h3>
            {experience.map((e) => (
              <div className="resume-entry" key={e.title}>
                <div className="resume-entry-head">
                  <strong>{e.title} — {e.place}</strong>
                  <span>{e.date}</span>
                </div>
                <p>{e.desc}</p>
              </div>
            ))}
          </section>

          <section className="resume-block">
            <h3>Projects</h3>
            {projects.map((p) => (
              <div className="resume-entry" key={p.num}>
                <div className="resume-entry-head">
                  <strong>{p.title}</strong>
                  <span>{p.tags.join(' · ')}</span>
                </div>
                <p>{p.desc}</p>
              </div>
            ))}
          </section>

          <section className="resume-block">
            <h3>Skills</h3>
            {skillGroups.map((g) => (
              <p className="resume-skill-row" key={g.title}>
                <strong>{g.title}:</strong> {g.skills.join(', ')}
              </p>
            ))}
          </section>

          <section className="resume-block">
            <h3>Achievements</h3>
            <ul className="resume-list">
              {achievements.map((a) => (
                <li key={a.id}><strong>{a.title}</strong> — {a.org}. {a.detail}</li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
