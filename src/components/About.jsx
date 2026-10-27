import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Counter({ target, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="reveal">
          <p className="section-tag">About Me</p>
          <h2 className="section-title">
            Turning <span className="grad">curiosity</span> into code
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-photo-wrap reveal">
            <div className="about-photo">
              <img src="/assets/profile.png" alt="Darshan H R" />
              <span className="badge"><FontAwesomeIcon icon={faLocationDot} /> Karnataka, India</span>
            </div>
          </div>
          <div className="about-text reveal">
            <p>
              I'm <strong>Darshan H R</strong>, a Computer Science &amp; Engineering student with a passion for
              building digital products that live on the web. What started as curiosity about how websites work
              grew into a deep love for <strong>full-stack development</strong> and <strong>3D interactive experiences</strong>.
            </p>
            <p>
              From wrangling <strong>React</strong> front-ends to designing <strong>Node.js</strong> back-ends and
              sculpting scenes in <strong>Three.js</strong>, I enjoy every layer of the stack. When I'm not shipping
              code, you'll find me solving DSA problems, exploring open source, or tweaking shaders way past bedtime.
            </p>
            <div className="about-stats">
              <div className="stat-card glass">
                <div className="stat-num"><Counter target={15} suffix="+" /></div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-card glass">
                <div className="stat-num"><Counter target={20} suffix="+" /></div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card glass">
                <div className="stat-num"><Counter target={500} suffix="+" /></div>
                <div className="stat-label">DSA Problems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
