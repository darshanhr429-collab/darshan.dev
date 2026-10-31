/**
 * Central portfolio data — the single source of truth for every section.
 * Structure extracted from the reference series portfolio and reshaped
 * into a standard, recruiter-ready profile. Update facts here only.
 */
import {
  faBrain,
  faCode,
  faCube,
  faRocket,
  faTrophy,
  faUsers,
  faFire,
  faLayerGroup,
  faServer,
  faDatabase,
  faToolbox,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

export const profile = {
  fullName: 'Darshan H R',
  firstName: 'Darshan',
  lastName: 'H R',
  role: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', '3D Web Enthusiast', 'Problem Solver', 'Open Source Learner', 'CS Engineering Student'],
  intro:
    'Computer Science engineering student crafting immersive web experiences — blending clean code, 3D graphics and thoughtful design to build things people remember.',
  location: 'Karnataka, India',
  email: 'darshanhr429@gmail.com',
  phone: '+91 86604 60015',
  phoneHref: 'tel:+918660460015',
  availability: 'Open to internships & freelance',
  links: {
    github: 'https://github.com/darshanhr429-collab',
    linkedin: 'https://www.linkedin.com/in/darshan-h-r-2ba67137b/',
  },
  photo: '/assets/profile.png',
};

export const stats = [
  { value: 15, suffix: '+', label: 'Projects Built' },
  { value: 20, suffix: '+', label: 'Technologies' },
  { value: 500, suffix: '+', label: 'DSA Problems' },
];

export const education = [
  {
    date: '2023 — 2027',
    title: 'B.E. Computer Science & Engineering',
    place: 'Engineering College, India',
    desc: "Pursuing my bachelor's with a focus on web technologies, computer graphics and algorithms. Active member of the coding and developer clubs.",
  },
  {
    date: '2021 — 2023',
    title: 'Pre-University (PCMC)',
    place: 'Karnataka',
    desc: 'Completed 12th grade with Physics, Chemistry, Mathematics and Computer Science — where the first "Hello, World" happened.',
  },
];

export const experience = [
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

export const projects = [
  {
    num: '01',
    icon: faCube,
    title: '3D Portfolio Experience',
    tagline: 'An immersive personal portfolio rendered in real time.',
    desc: 'An immersive personal portfolio built with React Three Fiber — animated particle fields, distorted geometry and mouse-parallax scenes rendered in real time on the web.',
    tags: ['React', 'Three.js', 'R3F', 'GSAP'],
    highlights: [
      'Real-time WebGL scene with a distorted icosahedron core and orbiting geometry',
      'Mouse-parallax camera rig and scroll-reactive sections',
      'Responsive layout with 3D tilt cards and animated gradient typography',
    ],
    features: ['React Three Fiber scene', 'Pointer parallax rig', 'Animated particle field', 'Glassmorphism UI system'],
    github: 'https://github.com/darshanhr429-collab',
    live: 'https://darshan-portfolio-in472ewssev.qoder.website',
  },
  {
    num: '02',
    icon: faBrain,
    title: 'AI Study Assistant',
    tagline: 'A study companion that turns notes into practice.',
    desc: 'A smart study companion that summarizes notes, generates quizzes from uploaded material and tracks learning streaks — built for students, by a student.',
    tags: ['Python', 'Flask', 'OpenAI API', 'SQLite'],
    highlights: [
      'Automatic note summarization from uploaded study material',
      'Quiz generation to turn passive reading into active recall',
      'Learning-streak tracking to keep study habits consistent',
    ],
    features: ['Note summarization', 'Auto-generated quizzes', 'Streak tracking', 'Upload-based workflow'],
    github: 'https://github.com/darshanhr429-collab',
    live: 'https://github.com/darshanhr429-collab',
  },
  {
    num: '03',
    icon: faRocket,
    title: 'Campus Connect',
    tagline: 'A full-stack social platform built for my college.',
    desc: 'A full-stack social platform for my college — event feeds, club pages, lost & found, and real-time chat with WebSockets. 300+ students signed up in the first month.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    highlights: [
      '300+ student signups in the first month',
      'Real-time chat powered by WebSockets',
      'Event feeds, club pages and lost & found in one hub',
    ],
    features: ['Event feed', 'Club pages', 'Lost & found board', 'Real-time chat'],
    github: 'https://github.com/darshanhr429-collab',
    live: 'https://github.com/darshanhr429-collab',
  },
  {
    num: '04',
    icon: faCode,
    title: 'CodeQuest — Gamified DSA',
    tagline: 'Grinding data structures, but it feels like a game.',
    desc: 'A gamified platform for practicing data structures with leaderboards, XP and timed challenges. Makes grinding LeetCode feel like playing a game.',
    tags: ['JavaScript', 'React', 'Firebase', 'Tailwind'],
    highlights: [
      'XP, levels and leaderboards to gamify practice',
      'Timed challenges that simulate interview pressure',
      'Firebase-backed progress sync across devices',
    ],
    features: ['Leaderboards', 'XP & levels', 'Timed challenges', 'Progress sync'],
    github: 'https://github.com/darshanhr429-collab',
    live: 'https://github.com/darshanhr429-collab',
  },
];

export const achievements = [
  {
    id: 'hackathon',
    icon: faTrophy,
    title: 'Hackathon Finalist',
    org: 'National-level Hackathon',
    detail: 'Built a working prototype in 36 hours with a team of 4 — placed in the top 10 out of 120+ teams.',
    tag: 'Top 10 / 120+',
  },
  {
    id: 'coding-club',
    icon: faUsers,
    title: 'Core Member — Coding Club',
    org: 'College Developer Community',
    detail: 'Organizing hackathons, mentoring juniors in DSA and web development, and leading workshops on Git, React and Three.js.',
    tag: 'Leadership',
  },
  {
    id: 'dsa',
    icon: faFire,
    title: '500+ DSA Problems',
    org: 'Consistent daily practice',
    detail: 'Data structures and algorithms practice across arrays, trees, graphs, dynamic programming and more.',
    tag: 'Problem Solving',
  },
  {
    id: 'projects',
    icon: faRocket,
    title: '15+ Projects Shipped',
    org: 'Web · 3D · Full-stack',
    detail: 'From full-stack social platforms and AI tools to real-time WebGL experiences — shipped and iterated on the web.',
    tag: 'Builder',
  },
];

export const skillGroups = [
  {
    icon: faCode,
    title: 'Languages',
    subtitle: 'The core toolkit',
    skills: ['C / C++', 'Python', 'JavaScript', 'Java', 'TypeScript', 'SQL'],
  },
  {
    icon: faLayerGroup,
    title: 'Frameworks & Libraries',
    subtitle: 'Interfaces & scenes',
    skills: ['React', 'Three.js / R3F', 'Node.js & Express', 'Tailwind CSS', 'GSAP', 'Vite'],
  },
  {
    icon: faServer,
    title: 'Backend & Data',
    subtitle: 'APIs and persistence',
    skills: ['REST APIs', 'Node.js', 'Express', 'MongoDB', 'SQLite', 'Firebase'],
  },
  {
    icon: faToolbox,
    title: 'Tools & Platforms',
    subtitle: 'Shipping & collaboration',
    skills: ['Git & GitHub', 'Figma', 'Postman', 'Linux', 'Vercel', 'VS Code'],
  },
  {
    icon: faDatabase,
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'],
  },
  {
    icon: faBookOpen,
    title: 'Currently Exploring',
    subtitle: 'The next arc',
    skills: ['System Design', 'WebGL Shaders', 'Cloud (AWS)', 'Open Source'],
  },
];

export const marquee = ['React', 'Three.js', 'JavaScript', 'Python', 'Node.js', 'C++', 'Git & GitHub', 'MongoDB', 'Tailwind CSS', 'WebGL'];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];
