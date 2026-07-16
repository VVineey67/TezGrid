import { NavLink } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section
      className="section container"
      style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}
    >
      <span className="eyebrow">404</span>
      <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
        This page didn't <span className="gradient-text">deploy</span>
      </h1>
      <p style={{ color: 'var(--text-muted)', maxWidth: 440 }}>
        The page you're looking for doesn't exist. Let's get you back to somewhere that does.
      </p>
      <NavLink to="/" className="btn btn-primary">
        <ArrowLeft size={16} /> Back to home
      </NavLink>
    </section>
  )
}
