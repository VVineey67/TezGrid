import { NavLink } from 'react-router-dom'
import { ArrowRight, Target, Wallet, ShieldCheck, Headset, Gauge, Layers } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import './About.css'

const VALUES = [
  {
    icon: Target,
    title: 'Reliability first',
    desc: 'Uptime and data safety are non-negotiable — every plan is built on redundant, monitored infrastructure.',
  },
  {
    icon: Wallet,
    title: 'Transparent pricing',
    desc: 'One monthly number that covers hosting, database, storage and security. No surprise line items.',
  },
  {
    icon: ShieldCheck,
    title: 'Security by default',
    desc: 'Firewalls, SSL and access control ship with every plan, not sold back to you as an upgrade.',
  },
  {
    icon: Headset,
    title: 'A team, not a ticket queue',
    desc: 'You reach engineers who know your setup, not a rotating helpdesk reading from a script.',
  },
]

const STATS = [
  { value: '150+', label: 'Applications managed' },
  { value: '99.9%', label: 'Average uptime delivered' },
  { value: '<15 min', label: 'Average support response' },
  { value: '24/7', label: 'Infrastructure monitoring' },
]

export default function About() {
  return (
    <>
      <section className="section section--tight about-hero">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">About TezGrid</span>
            <h1>
              Cloud infrastructure, <span className="gradient-text">handled properly</span>
            </h1>
            <p>
              TezGrid exists because most teams shouldn't have to become infrastructure experts
              just to keep an app online. We package hosting, databases, storage, servers and
              security into one subscription, sized to what you're actually building.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <Reveal className="stat-bar">
            {STATS.map((s) => (
              <div className="stat-bar__item" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container about-mission">
          <Reveal className="about-mission__text">
            <span className="eyebrow">
              <Layers size={14} /> Our approach
            </span>
            <h2>We design your stack instead of selling you a tier</h2>
            <p>
              Off-the-shelf hosting plans force your app to fit their limits. We start from your
              requirements — expected traffic, data model, compliance needs — and put together
              the hosting, database, storage and security configuration that actually fits, then
              manage it for as long as you're with us.
            </p>
          </Reveal>
          <Reveal delay={120} className="about-mission__icon">
            <Gauge size={64} strokeWidth={1.4} />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we stand for</span>
            <h2>The principles behind every plan we build</h2>
          </Reveal>

          <div className="values-grid">
            {VALUES.map((v, i) => (
              <Reveal as="div" delay={i * 70} className="card value-card" key={v.title}>
                <div className="value-card__icon">
                  <v.icon size={22} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight cta-banner">
        <Reveal className="container cta-banner__inner card">
          <h2>Want infrastructure that just runs?</h2>
          <p>Tell us what you're building — we'll design the stack around it.</p>
          <NavLink to="/contact" className="btn btn-primary">
            Talk to TezGrid <ArrowRight size={16} />
          </NavLink>
        </Reveal>
      </section>
    </>
  )
}
