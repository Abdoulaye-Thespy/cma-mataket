'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Bed,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Link2,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  Phone,
  Stethoscope,
  Syringe,
  ScanLine,
  X,
} from 'lucide-react'

const services = [
  { icon: Stethoscope, title: 'Médecine générale', text: 'Consultations attentives, diagnostic et suivi pour toute la famille.' },
  { icon: HeartPulse, title: 'Soins maternels', text: 'Soins prénatals, accouchements et suivi postnatal pour les mères et les bébés.' },
  { icon: Syringe, title: 'Chirurgie & urgences', text: 'Prise en charge rapide pour les urgences, petites interventions et support chirurgical.' },
  { icon: ScanLine, title: 'Échographie & diagnostics', text: 'Services diagnostiques accessibles pour aider notre équipe à prendre les meilleures décisions.' },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Clock3 size={14} aria-hidden="true" /> Ouvert 24h/24 pour les urgences</span>
          <a href="tel:+237680849755"><Phone size={14} aria-hidden="true" /> +237 680 849 755</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="CMA Koutaba-Mataket home">
            <Image src="/cma-logo.jpeg" alt="CMA Koutaba-Mataket logo" width={62} height={62} className="logo" priority />
            <span><strong>CMA Koutaba-Mataket</strong><small>Centre Medical d&apos;Arrondissement</small></span>
          </a>
          <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'nav open' : 'nav'}>
            <Link href="/a-propos" onClick={() => setMenuOpen(false)}>À propos</Link>
            <Link href="/equipe" onClick={() => setMenuOpen(false)}>Équipe</Link>
            <a href="#services" onClick={() => setMenuOpen(false)}>Nos services</a>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>Actualités</Link>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Nous contacter <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Votre santé. Notre engagement.</div>
            <h1>Des soins de qualité, <em>près de chez vous.</em></h1>
            <p>Le CMA Koutaba-Mataket est un centre médical communautaire au service des familles de Mataket, Koutaba et des communautés environnantes de la Région de l&apos;Ouest du Cameroun.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Contacter notre équipe <ArrowRight size={18} /></a>
              <a className="button text-button" href="#services">Découvrir nos services <ChevronDown size={17} /></a>
            </div>
            <div className="hero-trust"><CheckCircle2 size={18} /> <span>Soins professionnels, respectueux et accessibles</span></div>
          </div>
          <div className="hero-card">
            <div className="hero-card-image"><Image src="/dr-njimogna.jpg" alt="Dr Njimogna Loukouman Akim, Medical Director" fill priority sizes="(max-width: 768px) 90vw, 520px" /></div>
            <div className="doctor-tag"><span>Médecin-Chef</span><strong>Une direction médicale engagée</strong><small>CMA Koutaba-Mataket</small></div>
          </div>
        </div>
      </section>

      <section className="quick-info" aria-label="Informations du centre"><div className="container quick-grid">
        <div><MapPin size={21} /><span><b>Nous trouver</b>Mataket, Koutaba, Cameroun</span></div>
        <div><Phone size={21} /><span><b>Nous appeler</b><a href="tel:+237680849755">+237 680 849 755</a></span></div>
        <div><Mail size={21} /><span><b>Nous écrire</b><a href="mailto:contact@cma-koutaba-mataket.cm">contact@cma-koutaba-mataket.cm</a></span></div>
        <div><Bed size={21} /><span><b>Hospitalisation</b>Services d&apos;hospitalisation et de consultations</span></div>
      </div></section>

      <section className="section intro" id="about"><div className="container intro-grid"><div><div className="eyebrow green">À propos du CMA Koutaba-Mataket</div><h2>Un partenaire de confiance pour la santé de votre famille.</h2></div><div><p>Notre mission est de fournir des soins sûrs, humains et fiables aux populations de Koutaba et des communautés environnantes. Des consultations quotidiennes aux soins maternels et hospitaliers, notre équipe est là pour vous écouter et vous aider.</p><a className="inline-link" href="#contact">Nous contacter <ArrowRight size={16} /></a></div></div></section>

      <section className="section services" id="services"><div className="container"><div className="section-heading"><div><div className="eyebrow green">Des soins adaptés à vos besoins</div><h2>Nos services principaux</h2></div><p>Nous regroupons les services médicaux essentiels sous un même toit, avec des soins proches de la communauté.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><div className="service-icon"><Icon size={24} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`En savoir plus sur ${title}`}>En savoir plus <ArrowRight size={15} /></a></article>)}</div></div></section>

      <section className="doctor-section" id="doctor"><div className="container doctor-grid"><div className="doctor-photo"><Image src="/dr-njimogna.jpg" alt="Dr Njimogna Loukouman Akim en blouse blanche" fill sizes="(max-width: 768px) 100vw, 460px" /></div><div className="doctor-copy"><div className="eyebrow">Rencontrez notre Médecin-Chef</div><h2>Des soins menés avec détermination.</h2><p className="lead">Dr Njimogna Loukouman Akim dirige le CMA Koutaba-Mataket en s&apos;engageant pour des soins pratiques et respectueux pour chaque patient.</p><p>Notre centre repose sur la conviction que les soins de qualité doivent être accessibles et disponibles pour les communautés qui en ont le plus besoin.</p><a className="button light" href="https://facebook.com/RuralHealthbyDoctorNjims" target="_blank" rel="noreferrer">Suivez nos actualités <Link2 size={17} /></a></div></div></section>

      <section className="section contact" id="contact"><div className="container contact-grid"><div><div className="eyebrow green">Nous sommes là pour vous aider</div><h2>Entrez en contact avec notre équipe.</h2><p>Pour une prise de rendez-vous, des questions ou des directions, appelez-nous ou envoyez un message. En cas d&apos;urgence, veuillez appeler directement.</p><div className="contact-lines"><a href="tel:+237680849755"><Phone size={18} /> +237 680 849 755</a><a href="mailto:contact@cma-koutaba-mataket.cm"><Mail size={18} /> contact@cma-koutaba-mataket.cm</a><span><MapPin size={18} /> Mataket, Koutaba, Cameroun</span></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><label htmlFor="name">Votre nom<input id="name" name="name" required placeholder="Entrez votre nom" /></label><label htmlFor="phone">Numéro de téléphone<input id="phone" name="phone" required placeholder="+237 ..." /></label><label htmlFor="message">Comment pouvons-nous vous aider ?<textarea id="message" name="message" required placeholder="Dites-nous ce dont vous avez besoin..." rows={4} /></label><button className="button primary" type="submit">{sent ? 'Message envoyé' : 'Envoyer le message'} {sent ? <CheckCircle2 size={17} /> : <ArrowRight size={17} />}</button>{sent && <p className="form-success" role="status">Merci. Notre équipe vous recontactera bientôt.</p>}</form></div></section>

      <footer className="footer"><div className="container footer-inner"><div className="brand footer-brand"><Image src="/cma-logo.jpeg" alt="Logo du CMA Koutaba-Mataket" width={48} height={48} className="logo" /><span><strong>CMA Koutaba-Mataket</strong><small>Soins de santé pour notre communauté</small></span></div><div className="footer-links"><a href="https://facebook.com/RuralHealthbyDoctorNjims" target="_blank" rel="noreferrer"><Link2 size={16} /> Facebook</a><a href="mailto:contact@cma-koutaba-mataket.cm">Nous écrire</a><a href="#top">Retour au haut ↑</a></div></div><div className="container copyright"><span>© {new Date().getFullYear()} CMA Koutaba-Mataket. Tous droits réservés.</span><span>Mataket · Koutaba · Cameroun</span></div></footer>
    </main>
  )
}
