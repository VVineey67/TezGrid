import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Check, ArrowRight, ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import './Pricing.css'

const PLANS = [
  {
    name: 'Starter',
    tagline: 'For a single app or MVP finding its feet',
    monthly: 4999,
    yearly: 3999,
    cta: 'Contact sales',
    featureGroups: [
      {
        title: 'Hosting',
        items: [
          'Up to 5 replicas, at 8 vCPU / 8 GB RAM per replica',
          'Up to 48 vCPU / 48 GB RAM per service',
          'Up to 5 GB storage',
          'Single developer workspace',
          '99.9% Availability Target',
          'Global regions',
          '7-Day Log History',
          'Maintenance included',
        ],
      },
      {
        title: 'Database',
        items: [
          'Unlimited API requests',
          '50,000 monthly active users',
          '500 MB database size',
          'Shared CPU • 500 MB RAM',
          '5 GB egress',
          '5 GB cached egress',
          '1 GB file storage',
        ],
      },
    ],
  },
  {
    name: 'Business',
    tagline: 'For growing apps that need dedicated resources',
    monthly: 17499,
    yearly: 13999,
    cta: 'Contact sales',
    highlight: true,
    featureGroups: [
      {
        title: 'Hosting',
        items: [
          'Up to 1,000 vCPU / 1 TB RAM per service',
          'Up to 42 replicas, at 24 vCPU / 24 GB RAM per replica',
          'Up to 1 TB storage',
          'Unlimited workspace seats included',
          'TezGrid Support',
          '99.99% Availability Target',
          '30-Day Log History',
          'Concurrent global regions',
        ],
      },
      {
        title: 'Database',
        items: [
          { label: '100,000 monthly active users', note: 'then $0.00325 per MAU' },
          { label: '8 GB disk size per project', note: 'then $0.125 per GB' },
          { label: '250 GB egress', note: 'then $0.09 per GB' },
          { label: '250 GB cached egress', note: 'then $0.03 per GB' },
          { label: '100 GB file storage', note: 'then $0.0213 per GB' },
          'Email support',
          'Daily backups stored for 7 days',
          '7-day log retention',
        ],
      },
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For large-scale applications running Internet scale workloads.',
    custom: true,
    cta: 'Contact sales',
    note: 'Every requirement at this scale is different. Tell us your traffic, data and compliance needs — we\'ll design the dedicated infrastructure, database and security architecture around it.',
  },
]

const FAQS = [
  {
    q: 'Can I change or upgrade my plan later?',
    a: 'Yes. As your app grows, we resize hosting, storage and database resources without downtime — you can move between plans at any time.',
  },
  {
    q: 'What exactly counts as "an application"?',
    a: 'One deployed app, API or site with its own environment. Multiple environments (staging/prod) for the same app count as one application.',
  },
  {
    q: 'Can you migrate our app from our current host?',
    a: 'Yes, migration is included when you sign up. We plan the cutover with you so there\'s no unexpected downtime.',
  },
  {
    q: 'Is security really included, not an add-on?',
    a: 'Correct. SSL, firewall and basic access control ship in every plan. Business adds DDoS protection, RBAC and audit logging as standard, and Enterprise builds custom security around your compliance needs.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No setup fees on Starter or Business. Enterprise onboarding is scoped and quoted upfront with no hidden costs.',
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <section className="section section--tight pricing-hero">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Pricing</span>
            <h1>One subscription. Every service included.</h1>
            <p>Simple, predictable plans — or a fully custom package built around your app.</p>
          </Reveal>

          <Reveal className="billing-toggle">
            <span className={!yearly ? 'is-active' : ''}>Monthly</span>
            <button
              className={`switch ${yearly ? 'is-on' : ''}`}
              onClick={() => setYearly((v) => !v)}
              aria-label="Toggle yearly billing"
            >
              <span className="switch__knob" />
            </button>
            <span className={yearly ? 'is-active' : ''}>
              Yearly <em>save ~20%</em>
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container pricing-grid">
          {PLANS.map((plan, i) => (
            <Reveal
              as="div"
              delay={i * 80}
              className={`card pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''}`}
              key={plan.name}
            >
              {plan.highlight && <span className="pricing-card__badge">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="pricing-card__tagline">{plan.tagline}</p>

              <div className="pricing-card__price">
                {plan.custom ? (
                  <span className="pricing-card__custom">Custom</span>
                ) : (
                  <>
                    <span className="pricing-card__amount">
                      ₹{(yearly ? plan.yearly : plan.monthly).toLocaleString('en-IN')}
                    </span>
                    <span className="pricing-card__period">/mo</span>
                  </>
                )}
              </div>

              <NavLink
                to="/contact"
                className={`btn btn-block ${plan.highlight ? 'btn-primary' : 'btn-ghost'}`}
              >
                {plan.cta} <ArrowRight size={16} />
              </NavLink>

              {plan.featureGroups ? (
                plan.featureGroups.map((group) => (
                  <div className="pricing-card__group" key={group.title}>
                    <span className="pricing-card__group-title">{group.title}</span>
                    <ul className="pricing-card__features">
                      {group.items.map((f) => {
                        const label = typeof f === 'string' ? f : f.label
                        const note = typeof f === 'string' ? null : f.note
                        return (
                          <li key={label}>
                            <Check size={16} />
                            <span>
                              {label}
                              {note && <em>{note}</em>}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))
              ) : plan.note ? (
                <p className="pricing-card__note">{plan.note}</p>
              ) : (
                <ul className="pricing-card__features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <Check size={16} /> {f}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section faq">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Questions we hear the most</h2>
          </Reveal>

          <div className="faq__list">
            {FAQS.map((item, i) => (
              <Reveal as="div" delay={i * 40} className="faq__item card" key={item.q}>
                <button className="faq__question" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {item.q}
                  <ChevronDown size={18} className={openFaq === i ? 'is-open' : ''} />
                </button>
                {openFaq === i && <p className="faq__answer">{item.a}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
