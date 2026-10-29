import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download, Code2, Sparkles, Trophy, GraduationCap, ExternalLink } from 'lucide-react'
import SectionHeading from './components/SectionHeading'
import { projects, skillGroups, certifications } from './data/projects'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }
const email = 'katariasumedha14@gmail.com'
const githubUrl = 'https://github.com/Sumedha157'
const linkedinUrl = 'https://www.linkedin.com/in/sumedha-kataria-b25810324/?isSelfProfile=true' // Replace with your exact profile URL.

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Work', '#work'], ['Skills', '#skills'], ['Journey', '#journey']]
  return <header className="site-header"><a className="brand" href="#home" aria-label="Sumedha home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SUMEDHA KATARIA<small>DEVELOPER PORTFOLIO</small></span></a>
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={20}/> : <Menu size={20}/>}</button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a></nav>
  </header>
}

function Hero() {
  return <section className="hero section-wrap" id="home"><div className="hero-grid" />
    <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .12 } } }}>
      <motion.div variants={fadeUp} className="availability"><span className="status-dot"/> COMPUTER SCIENCE · AI/ML <span className="availability-divider">/</span> CLASS OF 2028</motion.div>
      <motion.h1 variants={fadeUp}>I build things<br/>that make <span className="gradient-text">ideas real.</span></motion.h1>
      <motion.p variants={fadeUp} className="hero-description">I'm Sumedha — a full-stack developer and AI/ML student creating useful software, intelligent applications, and thoughtful digital experiences.</motion.p>
      <motion.div variants={fadeUp} className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="button button-secondary" href={`mailto:${email}`}>Get in touch <ArrowUpRight size={17}/></a></motion.div>
      <motion.div variants={fadeUp} className="hero-socials"><a href={githubUrl} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a><span className="social-separator"/><a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a></motion.div>
    </motion.div>
    <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .25 }}>
      <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-glow"/>
      <div className="code-window"><div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>sumedha.tsx</span><span className="window-lock">● LIVE</span></div>
        <div className="code-lines"><div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div><div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">"Sumedha"</span>,</div><div><span className="line-no">03</span>&nbsp;&nbsp;focus: <span className="code-green">"AI × Web"</span>,</div><div><span className="line-no">04</span>&nbsp;&nbsp;builds: [</div><div><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-orange">"ideas"</span>,</div><div><span className="line-no">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-orange">"impact"</span></div><div><span className="line-no">07</span>&nbsp;&nbsp;],</div><div><span className="line-no">08</span>{'}'};</div><div className="code-cursor-line"><span className="line-no">09</span><span className="code-comment">// always learning_</span><span className="cursor"/></div></div>
        <div className="window-bottom"><span><span className="status-dot"/> Available to collaborate</span><span>IND · 2026</span></div>
      </div>
      <div className="floating-chip chip-top"><span className="chip-icon"><Code2 size={16}/></span><span><b>Full-stack</b><small>Development</small></span></div>
      <div className="floating-chip chip-bottom"><span className="chip-icon chip-spark"><Sparkles size={16}/></span><span><b>AI / ML</b><small>Building smarter</small></span></div>
      <span className="art-coordinate coord-one">30.7° N</span><span className="art-coordinate coord-two">ENGINEERING / 001</span>
    </motion.div>
    <div className="hero-footnote"><span>SCROLL TO EXPLORE <ArrowDownRight size={14}/></span><span>DESIGNED WITH CURIOSITY <span className="footnote-star">✳</span></span></div>
  </section>
}

function About() {
  return <section id="about" className="section-wrap about-section"><SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curiosity in. <span className="muted-title">Creation out.</span></>} number="01"/>
    <div className="about-layout"><div className="about-main"><p className="about-lead">I enjoy turning complex problems into <span>clear, useful products.</span></p><p className="body-copy">I'm a Computer Science Engineering student at Chitkara University, specializing in Artificial Intelligence and Machine Learning. I work across the stack — from building interfaces and APIs to experimenting with ML models and integrating AI into real applications.</p><p className="body-copy">I learn best by building. Every project is a chance to explore a new idea, work through a real engineering challenge, and make something a little better than before.</p><a className="text-link" href={`mailto:${email}`}>Have a project in mind? Let's talk <ArrowUpRight size={16}/></a></div>
      <div className="about-facts"><div className="fact-card"><span className="fact-icon"><GraduationCap size={19}/></span><div><small>CURRENTLY</small><b>B.E. CSE — AI & ML</b><p>Chitkara University · 2028</p></div></div><div className="fact-card"><span className="fact-icon"><Trophy size={19}/></span><div><small>HIGHLIGHT</small><b>2nd Place · Vibe Code</b><p>Google Developer Groups, Chitkara</p></div></div><div className="fact-card"><span className="fact-icon"><Sparkles size={19}/></span><div><small>WHAT I LIKE BUILDING</small><b>AI-powered products</b><p>Useful tools with thoughtful UX</p></div></div></div>
    </div>
  </section>
}

function ProjectCard({ project, index }) {
  return <motion.article className={`project-card accent-${project.accent} ${project.featured ? 'project-featured' : ''}`} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} transition={{ duration: .5, delay: (index % 2) * .08 }}>
    <div className="project-visual"><div className="project-visual-grid"/><div className="project-visual-top"><span>{project.category}</span><span>{project.number} / 05</span></div><div className="project-symbol">{project.mark}</div><div className="project-visual-bottom"><span className="visual-line"/><span>{project.name.toUpperCase()}</span></div><div className="project-halo"/></div>
    <div className="project-info"><div className="project-meta"><span>{project.type}</span><span className="project-meta-dot"/></div><h3>{project.name}</h3><p>{project.description}</p><div className="tech-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-links">{project.github ? <a href={project.github} target="_blank" rel="noreferrer">Source code <Github size={15}/></a> : <span className="link-placeholder">Add GitHub URL</span>}{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14}/></a> : <span className="project-link-arrow"><ArrowUpRight size={18}/></span>}</div></div>
  </motion.article>
}

function Work() {
  return <section id="work" className="section-wrap work-section"><SectionHeading eyebrow="SELECTED PROJECTS" title={<>Things I've <span className="muted-title">been building.</span></>} description="A selection of projects exploring AI, full-stack engineering, and practical problem-solving." number="02"/><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index}/>)}</div><div className="work-note"><span className="note-mark">✳</span><p>More than a demo — each project is a chance to understand the problem, make engineering decisions, and learn by shipping.</p></div></section>
}

function Skills() {
  return <section id="skills" className="section-wrap skills-section"><SectionHeading eyebrow="MY TOOLKIT" title={<>Tools I use to <span className="muted-title">make it happen.</span></>} description="A growing toolkit across software development, APIs, and machine learning." number="03"/><div className="skills-grid">{skillGroups.map((group, index) => <motion.div key={group.title} className="skill-group" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}><div className="skill-group-head"><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3></div><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></motion.div>)}</div></section>
}

function Journey() {
  return <section id="journey" className="section-wrap journey-section"><SectionHeading eyebrow="THE JOURNEY SO FAR" title={<>Learning by <span className="muted-title">doing.</span></>} number="04"/><div className="timeline"><div className="timeline-item"><span className="timeline-year">2024 — 2028</span><div className="timeline-marker"/><div className="timeline-content"><h3>B.E. Computer Science · AI & ML</h3><p>Chitkara University</p><span className="timeline-detail">CGPA 8.1 / 10 · Expected graduation 2028</span></div></div><div className="timeline-item"><span className="timeline-year">2025</span><div className="timeline-marker"/><div className="timeline-content"><h3>Collaborative product building</h3><p>Built team projects across auditing automation, blockchain crowdfunding, and AI-powered learning.</p></div></div><div className="timeline-item"><span className="timeline-year">2026 — NOW</span><div className="timeline-marker timeline-marker-active"/><div className="timeline-content"><h3>Building AI-powered applications</h3><p>Developing an AI Interview Copilot and exploring full-stack engineering, LLM integration, and machine learning workflows.</p><span className="timeline-detail timeline-current"><span className="status-dot"/> CURRENT FOCUS</span></div></div><div className="timeline-item"><span className="timeline-year">NEXT</span><div className="timeline-marker timeline-marker-future"/><div className="timeline-content"><h3>More problems. Better solutions.</h3><p>Looking forward to internships, collaborative engineering, and opportunities to build software that matters.</p></div></div></div></section>
}

function Certifications() {
  return <section className="section-wrap certifications-section"><SectionHeading eyebrow="ALWAYS LEARNING" title={<>Learning beyond <span className="muted-title">the classroom.</span></>} number="05"/><div className="cert-list">{certifications.map((cert, i) => <div className="cert-row" key={cert}><span className="cert-number">0{i + 1}</span><span className="cert-name">{cert}</span><span className="cert-provider">{i < 2 ? 'MICROSOFT AZURE' : i === 2 || i === 3 ? 'CISCO' : 'COURSERA'}</span><ArrowUpRight size={16}/></div>)}</div><p className="cert-footnote">Credential verification links can be added here.</p></section>
}

function Contact() {
  return <section id="contact" className="section-wrap contact-section"><div className="contact-glow"/><SectionHeading eyebrow="HAVE SOMETHING IN MIND?" title={<>Let's build <span className="gradient-text">something good.</span></>} description="Open to internships, interesting collaborations, and opportunities to learn by building." number="06"/><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight size={22}/></a><div className="contact-bottom"><span><span className="status-dot"/> OPEN TO OPPORTUNITIES</span><div className="contact-socials"><a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a><a href={`mailto:${email}`}>Email <ArrowUpRight size={14}/></a></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><a className="footer-brand" href="#home">S<span>.</span></a><span>DESIGNED & BUILT BY SUMEDHA KATARIA</span><a href="#home">BACK TO TOP ↑</a><span>© 2026</span></footer>
}

export default function App() {
  return <><Header/><main><Hero/><div className="section-divider"/><About/><div className="section-divider"/><Work/><div className="section-divider"/><Skills/><div className="section-divider"/><Journey/><div className="section-divider"/><Certifications/><div className="section-divider"/><Contact/></main><Footer/></>
}
