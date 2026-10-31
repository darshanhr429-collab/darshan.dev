import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { profile } from '../data/profile.js';

const EMAIL = profile.email;
const GITHUB_URL = profile.links.github;
const LINKEDIN_URL = profile.links.linkedin;

const INFO = [
  { icon: faEnvelope, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: faPhone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: faLocationDot, label: 'Location', value: profile.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('⚠ please fill in all fields');
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus('✓ opening your mail app…');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="reveal">
          <p className="section-tag">Contact</p>
          <h2 className="section-title">
            Let's build something <span className="grad">together</span>
          </h2>
          <p className="section-sub">
            Have a project idea, an internship opportunity, or just want to talk tech? My inbox is always open.
          </p>
        </div>
        <div className="contact-grid">
          <div className="reveal">
            {INFO.map((item) => {
              const inner = (
                <>
                  <div className="icon"><FontAwesomeIcon icon={item.icon} /></div>
                  <div>
                    <div className="label">{item.label}</div>
                    <div className="value">{item.value}</div>
                  </div>
                </>
              );
              return item.href ? (
                <a className="contact-info-card glass tilt" href={item.href} key={item.label}>{inner}</a>
              ) : (
                <div className="contact-info-card glass tilt" key={item.label}>{inner}</div>
              );
            })}
            <div className="hero-socials" style={{ marginTop: '28px' }}>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          <form className="contact-form glass reveal" onSubmit={onSubmit}>
            <div className="row">
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={onChange} />
              </div>
              <div className="field">
                <label htmlFor="email">Your Email</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={onChange} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Tell me about your project…" value={form.message} onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message <FontAwesomeIcon icon={faPaperPlane} />
            </button>
            <p className="form-status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
