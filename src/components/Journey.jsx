import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const EDUCATION = [
  {
    date: '2023 — 2027',
    title: 'B.E. Computer Science & Engineering',
    place: 'Engineering College, India',
    desc: 'Pursuing my bachelor\'s with a focus on web technologies, computer graphics and algorithms. Active member of the coding and developer clubs.',
  },
  {
    date: '2021 — 2023',
    title: 'Pre-University (PCMC)',
    place: 'Karnataka',
    desc: 'Completed 12th grade with Physics, Chemistry, Mathematics and Computer Science — where the first "Hello, World" happened.',
  },
];

const EXPERIENCE = [
  {
    date: '2025',
    title: 'Web Development Intern',
    place: 'Tech Startup (Remote)',
    desc: 'Built and shipped responsive React components, integrated REST APIs and improved Core Web Vitals across the product.',
  },
  {
    date: '2024 — Present',
    title: 'Core Member — Coding Club',
    place: 'College Developer Community',
    desc: 'Organizing hackathons, mentoring juniors in DSA and web dev, and leading workshops on Git, React and Three.js.',
  },
  {
    date: '2024',
    title: 'Hackathon Finalist',
    place: 'National-level Hackathon',
    desc: 'Built a working prototype in 36 hours with a team of 4 — placed in the top 10 out of 120+ teams.',
  },
];

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
            <h3 className="col-title"><FontAwesomeIcon icon={faGraduationCap} color="#00e0c6" /> Education</h3>
            <Timeline items={EDUCATION} />
          </div>
          <div className="edu-exp-col reveal">
            <h3 className="col-title"><FontAwesomeIcon icon={faBriefcase} color="#7c5cff" /> Experience</h3>
            <Timeline items={EXPERIENCE} />
          </div>
        </div>
      </div>
    </section>
  );
}
