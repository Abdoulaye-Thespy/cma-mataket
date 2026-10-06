import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, Stethoscope } from 'lucide-react'

const team = [
  { name: 'Dr Njimogna Loukouman Akim', role: 'Médecin-Chef', image: '/dr-njimogna.jpg', bio: 'Direction médicale et coordination des soins du CMA Koutaba-Mataket.' },
  { name: 'Membre de l’équipe médicale', role: 'Médecin / professionnel de santé', bio: 'Présentation à venir. Notre équipe accompagne les patients avec attention et professionnalisme.' },
  { name: 'Membre de l’équipe soignante', role: 'Soins infirmiers et accueil', bio: 'Présentation à venir. Une équipe disponible pour vous orienter et vous accompagner.' },
]

export default function TeamPage() {
  return <main><header className="site-header"><div className="container nav-wrap"><Link className="brand" href="/"><Image src="/cma-logo.jpeg" alt="Logo du CMA Koutaba-Mataket" width={62} height={62} className="logo" /><span><strong>CMA Koutaba-Mataket</strong><small>Centre Médical d&apos;Arrondissement</small></span></Link><nav className="nav"><Link href="/">Accueil</Link><Link href="/a-propos">À propos</Link><Link href="/equipe">Équipe</Link><Link href="/blog">Actualités</Link><Link className="nav-cta" href="/#contact">Nous contacter <ArrowRight size={16} /></Link></nav></div></header><section className="page-hero"><div className="container"><Link className="back-link" href="/"><ChevronLeft size={16} /> Retour à l&apos;accueil</Link><div className="eyebrow green">L&apos;équipe du CMA</div><h1>Des professionnels réunis autour de votre santé.</h1><p>Une équipe à l&apos;écoute, engagée à offrir un accueil respectueux et une prise en charge de proximité.</p></div></section><section className="section team-section"><div className="container"><div className="team-grid">{team.map((member) => <article className="team-card" key={member.name}><div className="team-photo">{member.image ? <Image src={member.image} alt={member.name} fill sizes="(max-width: 700px) 100vw, 360px" /> : <Stethoscope size={42} aria-hidden="true" />}</div><div className="team-body"><div className="eyebrow green">{member.role}</div><h2>{member.name}</h2><p>{member.bio}</p></div></article>)}</div></div></section><footer className="footer"><div className="container copyright"><span>© {new Date().getFullYear()} CMA Koutaba-Mataket</span><span>contact@cma-koutaba-mataket.cm</span></div></footer></main>
}
