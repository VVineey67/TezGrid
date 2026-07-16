import { NavLink } from 'react-router-dom'
import { Mail, MapPin, Globe, Users, Code2 } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <NavLink to="/" className="navbar__logo">
            <img src="/logo-mark.png" alt="" className="navbar__mark" width={34} height={34} />
            <span>Tez<span className="navbar__logo-accent">Grid</span></span>
          </NavLink>
          <p>
            Complete cloud subscription packages — hosting, database, storage, servers and
            security — built around what your app actually needs.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Website"><Globe size={17} /></a>
            <a href="#" aria-label="Community"><Users size={17} /></a>
            <a href="#" aria-label="Developers"><Code2 size={17} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <NavLink to="/services">Cloud Hosting</NavLink>
          <NavLink to="/services">Managed Databases</NavLink>
          <NavLink to="/services">Cloud Storage</NavLink>
          <NavLink to="/services">Security & Compliance</NavLink>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <a href="mailto:hello@tezgrid.com"><Mail size={15} /> hello@tezgrid.com</a>
          <span className="footer__addr"><MapPin size={15} /> India</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} TezGrid. All rights reserved.</span>
        <span>Built for apps that need to just run.</span>
      </div>
    </footer>
  )
}
