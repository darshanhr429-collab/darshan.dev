import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { marquee, skillGroups } from '../data/profile.js';

export default function Skills() {
  const items = [...marquee, ...marquee];
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="reveal">
          <p className="section-tag">My Stack</p>
          <h2 className="section-title">
            Weapons of <span className="grad">choice</span>
          </h2>
          <p className="section-sub">
            A toolkit forged through late-night builds, hackathons and countless stack overflows.
          </p>
        </div>
      </div>

      <div className="skills-marquee">
        <div className="marquee-track">
          {items.map((s, i) => (
            <span key={i}>{s} <i>◆</i></span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className="skill-group glass tilt reveal" key={g.title}>
              <div className="icon"><FontAwesomeIcon icon={g.icon} /></div>
              <h3>{g.title}</h3>
              <p className="skill-subtitle">{g.subtitle}</p>
              <div className="chips">
                {g.skills.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
