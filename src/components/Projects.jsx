import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCube, faLink, faBrain, faRocket, faCode } from '@fortawesome/free-solid-svg-icons';

const PROJECTS = [
  {
    num: '01',
    icon: faCube,
    title: '3D Portfolio Experience',
    desc: 'An immersive personal portfolio built with React Three Fiber — animated particle fields, distorted geometry and mouse-parallax scenes rendered in real time on the web.',
    tags: ['React', 'Three.js', 'R3F', 'GSAP'],
    github: 'https://github.com/darshanhr429-collab',
    live: 'https://github.com/darshanhr429-collab',
  },
  {
    num: '02',
    icon: faBrain,
    title: 'AI Study Assistant',
    desc: 'A smart study companion that summarizes notes, generates quizzes from uploaded material and tracks learning streaks — built for students, by a student.',
    tags: ['Python', 'Flask', 'OpenAI API', 'SQLite'],
    github: 'https://github.com/darshanhr429-collab',
    live: 'https://github.com/darshanhr429-collab',
  },
  {
    num: '03',
    icon: faRocket,
    title: 'Campus Connect',
    desc: 'A full-stack social platform for my college — event feeds, club pages, lost & found, and real-time chat with WebSockets. 300+ students signed up in the first month.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/darshanhr429-collab',
    live: 'https://github.com/darshanhr429-collab',
  },
  {
    num: '04',
    icon: faCode,
    title: 'CodeQuest — Gamified DSA',
    desc: 'A gamified platform for practicing data structures with leaderboards, XP and timed challenges. Makes grinding LeetCode feel like playing a game.',
    tags: ['JavaScript', 'React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/darshanhr429-collab',
    live: 'https://github.com/darshanhr429-collab',
  },
];

export default function Projects() {
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
          {PROJECTS.map((p) => (
            <article className="project-card glass reveal" key={p.num}>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
