import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { achievements } from '../data/profile.js';

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="reveal">
          <p className="section-tag">Highlights</p>
          <h2 className="section-title">
            Moments that <span className="grad">matter</span>
          </h2>
          <p className="section-sub">
            Hackathons, leadership and the daily grind — the proof behind the profile.
          </p>
        </div>
        <div className="achievements-grid">
          {achievements.map((a) => (
            <article className="achievement-card glass tilt reveal" key={a.id}>
              <div className="achievement-top">
                <div className="icon"><FontAwesomeIcon icon={a.icon} /></div>
                <span className="achievement-tag">{a.tag}</span>
              </div>
              <h3>{a.title}</h3>
              <p className="achievement-org">{a.org}</p>
              <p className="achievement-detail">{a.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
