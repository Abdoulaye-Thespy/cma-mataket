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
  { icon: Stethoscope, title: 'Accueil et urgences', text: 'Accueil, triage, premiers soins, stabilisation et orientation des urgences médicales, chirurgicales et obstétricales.' },
  { icon: Stethoscope, title: 'Consultation médicale', text: 'Évaluation clinique, diagnostic, traitement et suivi des affections aiguës et chroniques.' },
  { icon: Bed, title: 'Hospitalisation – médecine', text: 'Surveillance continue, traitements, soins infirmiers et préparation à la sortie ou à la référence.' },
  { icon: HeartPulse, title: 'Maternité / CPN', text: 'Suivi de grossesse, accouchement, urgences obstétricales, soins au nouveau-né et suivi postnatal.' },
  { icon: Syringe, title: 'Bloc opératoire / réanimation', text: 'Interventions chirurgicales programmées ou urgentes et surveillance des patients en détresse vitale.' },
  { icon: ScanLine, title: 'Laboratoire', text: 'Examens d’hématologie, biochimie, parasitologie, sérologie et analyses utiles au diagnostic.' },
  { icon: Syringe, title: 'Pharmacie', text: 'Gestion, conservation et dispensation sécurisée des médicaments et produits de santé.' },
  { icon: ScanLine, title: 'Échographie / imagerie médicale', text: 'Examens échographiques obstétricaux, abdominaux, pelviens, rénaux et autres examens indiqués.' },
  { icon: HeartPulse, title: 'Unité de prise en charge du VIH', text: 'Dépistage, traitement antirétroviral, suivi clinique et biologique, observance et accompagnement psychosocial.' },
  { icon: Syringe, title: 'Vaccination', text: 'Vaccination des enfants, femmes enceintes et groupes cibles, avec sensibilisation et suivi vaccinal.' },
  { icon: Stethoscope, title: 'Caisse', text: 'Encaissement et traçabilité des frais liés aux consultations, examens, médicaments et hospitalisations.' },
  { icon: Bed, title: 'Secrétariat particulier', text: 'Appui administratif auprès du Médecin-Chef, gestion des dossiers, rendez-vous et correspondances.' },
  { icon: Bed, title: 'Économat', text: 'Réception, stockage et distribution des fournitures et matériels nécessaires au fonctionnement du CMA.' },
  { icon: Bed, title: 'Régie de recettes', text: 'Collecte, sécurisation, comptabilisation et reversement des recettes selon les procédures en vigueur.' },
  { icon: Stethoscope, title: 'Surveillance générale', text: 'Supervision quotidienne des services, continuité des soins, gardes, permanences et équipes.' },
  { icon: HeartPulse, title: 'Aire de santé de Mataket', text: 'Soins de santé primaires, prévention, vaccination, santé maternelle et infantile et santé communautaire.' },
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
            <div className="hero-card-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-07%20at%2010.55.30-FrzEuH2xFWgya3ObrYONLbI9JPSxTh.jpeg" alt="ADIANG SONE Leonel, Économe du CMA Koutaba-Mataket" /></div>
            <div className="doctor-tag"><span></span><strong>ADIANG SONE Leonel</strong><small>Économe</small></div>
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
