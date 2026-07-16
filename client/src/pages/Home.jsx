import { NavLink } from 'react-router-dom'
import {
  ArrowRight,
  Server,
  Database,
  HardDrive,
  Cpu,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import './Home.css'

const SERVICES = [
  {
    icon: Server,
    title: 'Cloud Hosting',
    desc: 'Fast, auto-scaling hosting for web apps, APIs and static sites — configured for your stack.',
  },
  {
    icon: Database,
    title: 'Managed Databases',
    desc: 'SQL & NoSQL databases with automated backups, replication and tuning, so data is never a worry.',
  },
  {
    icon: HardDrive,
    title: 'Cloud Storage',
    desc: 'Scalable object and file storage with CDN delivery for media, backups and user uploads.',
  },
  {
    icon: Cpu,
    title: 'Dedicated Cloud Servers',
    desc: 'Right-sized virtual or dedicated servers provisioned around your app’s real workload.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Firewalls, SSL, DDoS protection and access control built into every plan from day one.',
  },
  {
    icon: Activity,
    title: '24/7 Monitoring & Support',
    desc: 'Round-the-clock uptime monitoring with a team that responds before you notice a problem.',
  },
]

const STATS = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<15 min', label: 'Avg. response time' },
  { value: '150+', label: 'Apps hosted' },
  { value: '24/7', label: 'Live support' },
]

const STEPS = [
  {
    title: 'Tell us your requirements',
    desc: 'Share what you’re building — traffic expectations, data needs, compliance requirements.',
  },
  {
    title: 'We architect your stack',
    desc: 'Our team designs a complete hosting, database, storage and security setup around it.',
  },
  {
    title: 'You launch, we manage',
    desc: 'Go live on a single subscription while we monitor, patch, scale and secure everything.',
  },
]

const WHY = [
  'One subscription instead of five vendor bills',
  'Predictable monthly pricing, no surprise overages',
  'Security and backups included, not bolted on',
  'A real team on call — not just a support ticket queue',
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <Reveal>
            <span className="eyebrow">
              <Sparkles size={14} /> Cloud infrastructure, fully managed
            </span>
            <h1 className="hero__title">
              Ship your app. <span className="gradient-text">We'll run the cloud.</span>
            </h1>
            <p className="hero__subtitle">
              TezGrid bundles hosting, databases, storage, cloud servers and security into a
              single subscription — built around what your app actually requires, so you stop
              stitching together five different vendors.
            </p>
            <div className="hero__actions">
              <NavLink to="/contact" className="btn btn-primary">
                Get a free consultation <ArrowRight size={16} />
              </NavLink>
              <NavLink to="/services" className="btn btn-ghost">
                Explore services
              </NavLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="hero__panel-wrap">
            <div className="hero__panel card">
              <div className="hero__panel-head">
                <span className="dot dot--live" /> Infrastructure status
              </div>
              {[
                ['Hosting', 'Active', 'good'],
                ['Database', 'Healthy', 'good'],
                ['Storage', '42% used', 'neutral'],
                ['Security', 'Protected', 'good'],
              ].map(([label, value, tone]) => (
                <div className="hero__panel-row" key={label}>
                  <span>{label}</span>
                  <span className={`pill pill--${tone}`}>{value}</span>
                </div>
              ))}
              <div className="hero__panel-footer">
                <CheckCircle2 size={15} /> Monitored continuously by TezGrid
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="stat-bar container" delay={200}>
          {STATS.map((s) => (
            <div className="stat-bar__item" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we provide</span>
            <h2>Every service your app needs to go live</h2>
            <p>One subscription, built around your requirements — not a generic package.</p>
          </div>

          <div className="grid-6">
            {SERVICES.map((s, i) => (
              <Reveal as="div" delay={i * 60} className="card service-card" key={s.title}>
                <div className="service-card__icon">
                  <s.icon size={22} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight steps">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>From requirement to running in three steps</h2>
          </div>

          <div className="steps__grid">
            {STEPS.map((step, i) => (
              <Reveal as="div" delay={i * 100} className="steps__item" key={step.title}>
                <span className="steps__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section why">
        <div className="container why__grid">
          <Reveal>
            <span className="eyebrow">Why TezGrid</span>
            <h2>
              Infrastructure that stays out of <span className="gradient-text">your</span> way
            </h2>
            <p className="why__lede">
              Most teams end up managing a patchwork of hosting providers, database vendors and
              security tools. TezGrid replaces that patchwork with one accountable partner.
            </p>
          </Reveal>
          <Reveal delay={150} className="why__list">
            {WHY.map((item) => (
              <div className="why__item" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section--tight cta-banner">
        <Reveal className="container cta-banner__inner card">
          <h2>Ready to move your app to a cloud that just works?</h2>
          <p>Tell us what you're building — we'll put together a plan the same week.</p>
          <NavLink to="/contact" className="btn btn-primary">
            Talk to TezGrid <ArrowRight size={16} />
          </NavLink>
        </Reveal>
      </section>
    </>
  )
}
