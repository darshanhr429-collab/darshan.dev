import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLayerGroup, faToolbox } from '@fortawesome/free-solid-svg-icons';

const MARQUEE = ['React', 'Three.js', 'JavaScript', 'Python', 'Node.js', 'C++', 'Git & GitHub', 'MongoDB', 'Tailwind CSS', 'WebGL'];

const GROUPS = [
  {
    icon: faCode,
    title: 'Languages',
    skills: ['C / C++', 'Python', 'JavaScript', 'Java', 'TypeScript', 'SQL'],
  },
  {
    icon: faLayerGroup,
    title: 'Frameworks & Libraries',
    skills: ['React', 'Three.js / R3F', 'Node.js & Express', 'Tailwind CSS', 'GSAP', 'Vite'],
  },
  {
    icon: faToolbox,
    title: 'Tools & Platforms',
    skills: ['Git & GitHub', 'MongoDB', 'Firebase', 'Figma', 'Postman', 'Linux'],
  },
];

export default function Skills() {
  const items = [...MARQUEE, ...MARQUEE];
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
          {GROUPS.map((g) => (
            <div className="skill-group glass tilt reveal" key={g.title}>
              <div className="icon"><FontAwesomeIcon icon={g.icon} /></div>
              <h3>{g.title}</h3>
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
