import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Award, Sparkles, Star, ArrowRight,
  CheckCircle2, Heart, Zap, Shield, Compass, MapPin
} from 'lucide-react'
import heroImg from '../assets/interior_hero.png'
import bedroomImg from '../assets/interior_bedroom.png'
import kitchenImg from '../assets/interior_kitchen.png'

// ─── Scroll-aware section fade-up ────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Section label component ──────────────────────────────────────────────────
function Label({ children }) {
  return (
    <p className="font-sans font-semibold uppercase tracking-[0.3em] text-[0.62rem]"
      style={{ color: '#7C3AED' }}>
      {children}
    </p>
  )
}

// ─── Thin divider ─────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="w-10 h-[2px] rounded-full"
      style={{ background: 'linear-gradient(to right, #7C3AED, #EC4899)' }} />
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const team = [
  {
    name: 'Isabelle Fontaine',
    role: 'Founder & Creative Director',
    since: '2009',
    bio: 'École Camondo Paris graduate. 20+ years crafting interiors across three continents.',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=500&h=640&q=80',
  },
  {
    name: 'Marcus Veld',
    role: 'Principal Architect',
    since: '2011',
    bio: 'Architectural Association London. Specialist in spatial flow and natural light orchestration.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&h=640&q=80',
  },
  {
    name: 'Priya Anand',
    role: 'Head of Material Curation',
    since: '2014',
    bio: 'Expert sourcer of rare European marbles, bespoke textiles, and limited-edition furnishings.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&h=640&q=80',
  },
  {
    name: 'Tomás Reyes',
    role: 'Senior Lighting Designer',
    since: '2016',
    bio: 'Collaborates with artisan studios across Italy and Japan to define perfect ambience.',
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=500&h=640&q=80',
  },
]

const values = [
  { icon: Heart, title: 'Client-First', desc: 'Every decision serves the client\'s lifestyle and vision above all else.' },
  { icon: Compass, title: 'Precision Detail', desc: 'From joinery profiles to ambient light temperature — obsessive craftsmanship.' },
  { icon: Zap, title: 'Innovation', desc: 'Smart-home integration, biophilic design, and emerging materials in every project.' },
  { icon: Shield, title: 'Timeless Integrity', desc: 'We build relationships and spaces designed to last decades, not seasons.' },
]

const awards = [
  { year: '2024', title: 'Best Luxury Residential Studio', org: 'AD100 Middle East' },
  { year: '2023', title: 'Interior Design of the Year', org: 'SBID International Awards' },
  { year: '2022', title: 'Platinum Award — Commercial', org: 'Andrew Martin International' },
  { year: '2021', title: 'Best Workplace Interior', org: 'Dezeen Awards' },
  { year: '2020', title: 'Luxury Villa of the Year', org: 'International Property Awards' },
]

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '17', label: 'Countries' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Industry Awards' },
]

const offices = ['Paris', 'Dubai', 'Singapore', 'New York']

// ─────────────────────────────────────────────────────────────────────────────
export default function About() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <main className="bg-white text-slate-900">

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] overflow-hidden">
        {/* Parallax background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 will-change-transform">
          <img src={heroImg} alt="LuxeSpace interior" className="w-full h-full object-cover scale-110" />
          {/* Layered overlays */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at bottom left, rgba(124,58,237,0.18) 0%, transparent 60%)' }} />
        </motion.div>

        {/* Content — left-aligned, vertically centered */}
        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-[1px] bg-white/40" />
              <p className="font-sans text-[0.6rem] tracking-[0.4em] uppercase text-white/50 font-medium">
                About the Studio
              </p>
            </div>

            {/* Headline — clean, not oversized */}
            <h1 className="font-display font-extrabold text-white leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)', textShadow: '0 2px 24px rgba(0,0,0,0.25)' }}>
              We Design<br />
              <span className="font-light italic" style={{ color: 'rgba(255,255,255,0.88)' }}>
                Atmospheres.
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-white/60 leading-relaxed mb-10 font-sans font-light"
              style={{ fontSize: '1rem', maxWidth: '420px' }}>
              A globally recognised interior architecture studio committed to designing spaces that elevate the human spirit — since 2009.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/#portfolio"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-sans font-bold text-[0.7rem] tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)', color: '#fff', boxShadow: '0 8px 32px rgba(124,58,237,0.4)' }}>
                View Portfolio <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-sans font-bold text-[0.7rem] tracking-[0.15em] uppercase border border-white/25 text-white/80 transition-all duration-300 hover:border-white/60 hover:text-white hover:bg-white/8">
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom-right: office locations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 right-8 z-10 flex items-center gap-5"
        >
          {offices.map((city) => (
            <span key={city} className="font-sans text-[0.58rem] tracking-[0.2em] uppercase text-white/30">
              {city}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-10 bg-gradient-to-b from-white/0 via-white/40 to-white/0"
          />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. STATS RIBBON
      ════════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className={`py-12 px-8 text-center ${i < stats.length - 1 ? 'md:border-r md:border-slate-100' : ''} ${i === 0 || i === 2 ? 'border-r border-slate-100 md:border-0 md:border-r md:border-slate-100' : ''}`}>
                  <p className="font-display font-extrabold mb-1.5"
                    style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', background: 'linear-gradient(135deg, #7C3AED, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {s.value}
                  </p>
                  <p className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-slate-400 font-medium">{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. STUDIO STORY — asymmetric split
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 lg:gap-28 items-center">

            {/* Left — image collage */}
            <FadeUp>
              <div className="relative">
                {/* Main portrait */}
                <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5', boxShadow: '0 32px 80px rgba(0,0,0,0.12)' }}>
                  <img src={bedroomImg} alt="LuxeSpace bedroom" className="w-full h-full object-cover transition-transform duration-[1.4s] hover:scale-[1.04]" />
                </div>
                {/* Accent image — bottom right */}
                <div className="absolute -bottom-8 -right-6 w-44 h-56 md:w-52 md:h-72 rounded-xl overflow-hidden border-4 border-white shadow-2xl"
                  style={{ boxShadow: '0 20px 60px rgba(124,58,237,0.15)' }}>
                  <img src={kitchenImg} alt="LuxeSpace kitchen" className="w-full h-full object-cover" />
                </div>
                {/* Studio since badge */}
                <div className="absolute -top-5 -left-5 hidden md:flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-5 py-4 shadow-xl"
                  style={{ boxShadow: '0 8px 40px rgba(124,58,237,0.1)' }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}>
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-extrabold text-xl text-slate-900 leading-none">50+</p>
                    <p className="font-sans text-[0.58rem] tracking-[0.15em] uppercase text-slate-400 mt-0.5">Awards Won</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right — text */}
            <div className="space-y-8">
              <FadeUp delay={0.1}><Label>Our Philosophy</Label></FadeUp>
              <FadeUp delay={0.18}>
                <h2 className="font-display font-extrabold leading-tight text-slate-900"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                  Spaces That Tell<br />Your Unique Story
                </h2>
              </FadeUp>
              <FadeUp delay={0.22}><Divider /></FadeUp>
              <FadeUp delay={0.28}>
                <p className="text-slate-500 leading-[1.85] text-[0.97rem]">
                  Founded in 2009 by Isabelle Fontaine, LuxeSpace began as a Paris atelier with a singular mission: to design spaces that feel as extraordinary to live in as they look.
                </p>
              </FadeUp>
              <FadeUp delay={0.34}>
                <p className="text-slate-500 leading-[1.85] text-[0.97rem]">
                  Today our 40-strong team — architects, lighting specialists, material curators, and project managers — operates across Asia, Europe, and the Middle East delivering turnkey residences and hospitality projects with obsessive attention to detail.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <p className="text-slate-500 leading-[1.85] text-[0.97rem]">
                  We believe the most powerful interiors reveal character. Not decoration for its own sake — but purposeful, poetic environments that evolve with the people inside them.
                </p>
              </FadeUp>
              <FadeUp delay={0.44}>
                <div className="flex items-center gap-3 flex-wrap pt-2">
                  {offices.map(city => (
                    <span key={city} className="flex items-center gap-1.5 text-[0.7rem] font-sans font-semibold uppercase tracking-wider px-3.5 py-2 rounded-full border border-purple-100 text-brand-600 bg-purple-50/60">
                      <MapPin className="w-2.5 h-2.5" />{city}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. VALUES — minimal card grid
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-slate-100" style={{ background: 'linear-gradient(160deg, #faf5ff 0%, #fff 40%, #fdf2f8 100%)' }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 md:gap-20 items-start">

            {/* Left sticky label */}
            <FadeUp>
              <div className="md:sticky md:top-32 space-y-5">
                <Label>What We Stand For</Label>
                <h2 className="font-display font-extrabold text-slate-900 leading-tight" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                  Core<br />Values
                </h2>
                <Divider />
              </div>
            </FadeUp>

            {/* Right: values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(124,58,237,0.1)' }}
                    className="bg-white border border-slate-100 rounded-2xl p-7 transition-all duration-300"
                    style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: 'linear-gradient(135deg, #7C3AED15, #EC489915)', border: '1px solid #7C3AED20' }}>
                      <v.icon className="w-4.5 h-4.5" style={{ color: '#7C3AED' }} />
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. TEAM — portrait grid
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeUp>
              <div className="space-y-4">
                <Label>The People Behind It</Label>
                <h2 className="font-display font-extrabold text-slate-900" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Meet Our Team</h2>
                <Divider />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                An international collective united by a shared obsession with design excellence.
              </p>
            </FadeUp>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="group">
                  {/* Portrait */}
                  <div className="relative overflow-hidden rounded-2xl mb-4 border border-slate-100"
                    style={{ aspectRatio: '3/4', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    {/* Hover bio overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: 'linear-gradient(to top, rgba(15,5,40,0.88) 0%, transparent 60%)' }}>
                      <p className="text-white/85 text-xs leading-relaxed font-light">{member.bio}</p>
                    </div>
                    {/* Since badge */}
                    <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full shadow">
                      <p className="font-sans text-[0.58rem] tracking-wider font-bold text-slate-600">Since {member.since}</p>
                    </div>
                  </div>
                  {/* Meta */}
                  <h3 className="font-display font-bold text-sm text-slate-900 group-hover:text-brand-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-sans text-[0.62rem] tracking-[0.12em] uppercase text-slate-400 mt-1">
                    {member.role}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          6. AWARDS — dark section
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#080810] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">

            {/* Left */}
            <FadeUp>
              <div className="space-y-7 lg:sticky lg:top-32">
                <p className="font-sans text-[0.62rem] tracking-[0.3em] uppercase font-semibold" style={{ color: 'rgba(192,132,252,0.65)' }}>
                  Recognition
                </p>
                <h2 className="font-display font-extrabold leading-tight text-white" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                  Award-Winning<br />
                  <span className="font-light italic" style={{ color: 'rgba(255,255,255,0.45)' }}>Excellence.</span>
                </h2>
                <div className="w-10 h-[2px] rounded-full" style={{ background: 'linear-gradient(to right, #7C3AED, #EC4899)' }} />
                <p className="text-sm leading-[1.85]" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  Our work has been recognised by the world's most prestigious design institutions across residential, commercial, and hospitality categories.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-extrabold text-3xl text-white leading-none">50+</p>
                    <p className="font-sans text-[0.58rem] tracking-[0.2em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>International Awards</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right: award rows */}
            <div className="space-y-2">
              {awards.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-6 py-5 border-b group cursor-default transition-all duration-200"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span className="font-display font-bold text-xs w-10 flex-shrink-0" style={{ color: 'rgba(192,132,252,0.5)' }}>
                    {a.year}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-semibold text-sm text-white/80 group-hover:text-white transition-colors truncate">{a.title}</p>
                    <p className="font-sans text-[0.6rem] tracking-wider mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>{a.org}</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ color: '#c084fc' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          7. CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">

            <FadeUp>
              <div className="space-y-6">
                <Label>Start Your Journey</Label>
                <h2 className="font-display font-extrabold leading-tight text-slate-900" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                  Ready to Create<br />Something Extraordinary?
                </h2>
                <p className="text-slate-500 leading-relaxed text-[0.97rem] max-w-md">
                  Schedule a private consultation with our creative director. We accept a limited number of new commissions each quarter.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100/60 space-y-5"
                style={{ boxShadow: '0 8px 40px rgba(124,58,237,0.08)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}>
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">Book a Private Consultation</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Meet our team, explore your brief, and see how LuxeSpace can transform your space into something extraordinary.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Link to="/#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-sans font-bold text-[0.68rem] tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-0.5 text-center"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)', color: '#fff', boxShadow: '0 8px 24px rgba(124,58,237,0.3)' }}>
                    Book Consultation <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link to="/#portfolio"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-sans font-bold text-[0.68rem] tracking-[0.15em] uppercase border border-slate-200 text-slate-600 hover:border-brand-500 hover:text-brand-600 transition-all duration-300 text-center">
                    View Portfolio
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

    </main>
  )
}
