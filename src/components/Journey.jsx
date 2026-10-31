import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { education, experience } from '../data/profile.js';

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline-item reveal" key={item.title}>
          <span className="timeline-date">{item.date}</span>
          <h3>{item.title}</h3>
          <p className="place">{item.place}</p>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default function Journey() {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="reveal">
          <p className="section-tag">The Journey</p>
          <h2 className="section-title">
            Where I've <span className="grad">been</span>
          </h2>
        </div>
        <div className="edu-exp-grid">
          <div className="edu-exp-col reveal">
            <h3 className="col-title"><FontAwesomeIcon icon={faGraduationCap} color="#7db4ff" /> Education</h3>
            <Timeline items={education} />
          </div>
          <div className="edu-exp-col reveal">
            <h3 className="col-title"><FontAwesomeIcon icon={faBriefcase} color="#d4ff00" /> Experience</h3>
            <Timeline items={experience} />
          </div>
        </div>
      </div>
    </section>
  );
}
