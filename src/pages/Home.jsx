import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, Sofa, Briefcase, Compass, Armchair, Hammer, Eye, 
  Award, Users, Clock, Star, ArrowRight, ChevronLeft, ChevronRight,
  CheckCircle2, Send
} from 'lucide-react'

// Import assets
import heroImg from '../assets/interior_hero.png'
import bedroomImg from '../assets/interior_bedroom.png'
import kitchenImg from '../assets/interior_kitchen.png'

// Animated Counter Component for "Why Choose Us"
const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = parseInt(value.substring(0, value.length - 1)) || parseInt(value)
      if (start === end) return
      
      const totalMiliseconds = duration * 1000
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 30)
      
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) {
          clearInterval(timer)
        }
      }, incrementTime)
      
      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  const suffix = value.includes('+') ? '+' : value.includes('%') ? '%' : ''

  return (
    <span ref={ref} className="tabular-nums font-display font-extrabold text-5xl md:text-6xl bg-gradient-to-r from-brand-600 via-fuchsia-500 to-accent-500 bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  )
}

function Home() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Residential Interior Design', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Autoplay Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: <Sofa className="w-6 h-6 text-brand-600 group-hover:text-white" />,
      title: 'Residential Interior Design',
      description: 'Bespoke high-end designs for luxury villas, modern apartments, and private penthouses tailored to your unique lifestyle.'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-600 group-hover:text-white" />,
      title: 'Commercial Design',
      description: 'Sophisticated retail spaces, boutique hotels, and premium corporate offices designed to elevate your brand presence.'
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-600 group-hover:text-white" />,
      title: 'Space Planning',
      description: 'Architectural layout optimization to maximize circulation, functional flows, light, and balance in your interior spaces.'
    },
    {
      icon: <Armchair className="w-6 h-6 text-brand-600 group-hover:text-white" />,
      title: 'Furniture Selection',
      description: 'Curation and commissioning of custom, luxury furniture pieces, textiles, and fine art that integrate seamlessly.'
    },
    {
      icon: <Hammer className="w-6 h-6 text-brand-600 group-hover:text-white" />,
      title: 'Renovation & Remodeling',
      description: 'Complete interior transformations, high-end finishing, and detailed construction supervision with master craftsmanship.'
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-600 group-hover:text-white" />,
      title: '3D Visualization',
      description: 'Hyper-realistic 3D rendering and VR walkthroughs allowing you to experience your spaces in vivid detail before delivery.'
    }
  ]

  const projects = [
    {
      id: 1,
      title: 'The Minimalist Living Oasis',
      category: 'Residential',
      image: heroImg,
      year: '2026'
    },
    {
      id: 2,
      title: 'Bespoke Executive Suite',
      category: 'Commercial',
      image: bedroomImg,
      year: '2025'
    },
    {
      id: 3,
      title: 'Monolithic Stone Kitchen',
      category: 'Residential',
      image: kitchenImg,
      year: '2026'
    },
    {
      id: 4,
      title: 'Luxe Lounge & Cocktail Bar',
      category: 'Commercial',
      image: heroImg,
      year: '2025'
    },
    {
      id: 5,
      title: 'Sanctuary Master Bedroom',
      category: 'Residential',
      image: bedroomImg,
      year: '2026'
    },
    {
      id: 6,
      title: 'Avant-Garde Office Loft',
      category: 'Commercial',
      image: kitchenImg,
      year: '2026'
    }
  ]

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <CheckCircle2 className="w-6 h-6 text-brand-500" /> },
    { value: '15+', label: 'Years Experience', icon: <Clock className="w-6 h-6 text-brand-500" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Users className="w-6 h-6 text-brand-500" /> },
    { value: '50+', label: 'Design Awards', icon: <Award className="w-6 h-6 text-brand-500" /> }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'An in-depth exploration of your desires, style preferences, functional space needs, budget, and project parameters.'
    },
    {
      step: '02',
      title: 'Concept Design',
      description: 'Crafting preliminary spatial layouts, material moodboards, and color palettes to visually define the design narrative.'
    },
    {
      step: '03',
      title: 'Design Development',
      description: 'Detailing architectural plans, selecting premium furniture, materials, lighting, and rendering 3D visualizations.'
    },
    {
      step: '04',
      title: 'Project Delivery',
      description: 'Overseeing contracting, ordering and styling elements down to the final custom detail, delivering your turnkey sanctuary.'
    }
  ]

  const testimonials = [
    {
      quote: "LuxeSpace completely redefined how we interact with our home. They balanced the modern luxury we wanted with the functional comfort our family needs.",
      client: "Sarah & Marcus Vance",
      location: "Beverly Hills",
      role: "Residential Villa Project",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    },
    {
      quote: "The team's design sensibilities are impeccable. From space planning down to the custom joinery details, the execution was flawless.",
      client: "Arthur Pendelton",
      location: "Malibu Beachfront Studio",
      role: "Turnkey Oceanfront Suite",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    },
    {
      quote: "Their interactive concept visualizer aligned us perfectly before construction. The finished kitchen looks exactly like the vision boards.",
      client: "Elena Rostova",
      location: "Downtown Penthouse",
      role: "Luxury Kitchen Remodel",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 5
    }
  ]

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', service: 'Residential Interior Design', message: '' })
      setFormSubmitted(false)
    }, 5000)
  }

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <main className="bg-white text-slate-900 overflow-hidden" id="home">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-12 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/15 overflow-hidden">
        {/* Floating animated blobs */}
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -right-24 top-24 w-96 h-96 rounded-full bg-gradient-to-br from-brand-300/20 to-accent-300/20 blur-3xl pointer-events-none"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute -left-20 bottom-12 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200/25 to-pink-200/25 blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full py-12">
          {/* Left Text */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-6 space-y-8"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-flex items-center space-x-2 border border-brand-200 bg-brand-50 px-4 py-2 rounded-full shadow-sm shadow-brand-500/5"
            >
              <Sparkles className="w-4 h-4 text-brand-600 animate-pulse" />
              <span className="text-xs font-sans tracking-widest uppercase text-brand-600 font-semibold">Award-Winning Design Studio</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-slate-900"
            >
              Transforming Spaces <br />
              Into <span className="bg-gradient-to-r from-brand-600 via-fuchsia-500 to-accent-500 bg-clip-text text-transparent">Luxury Experiences</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="font-sans text-slate-600 text-base md:text-lg leading-relaxed max-w-lg"
            >
              Bespoke luxury interior designs curated to harmonize elegance, architecture, and personal warmth into an aesthetic sanctuary uniquely yours.
            </motion.p>

            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
            >
              <a
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-brand-600 to-accent-500 hover:from-brand-700 hover:to-accent-600 text-white font-sans font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 rounded-full shadow-lg shadow-brand-500/15 hover:shadow-brand-500/30 transform hover:-translate-y-0.5"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-slate-200 hover:border-brand-500 hover:text-brand-600 text-slate-700 font-sans font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 rounded-full bg-white shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Get Free Consultation
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square md:aspect-[4/3] lg:aspect-[4/5] xl:aspect-square overflow-hidden rounded-3xl border border-purple-100 p-2.5 bg-white shadow-2xl shadow-brand-950/5">
              <div className="absolute inset-0 border border-brand-500/10 rounded-2xl m-3 pointer-events-none z-10" />
              <img
                src={heroImg}
                alt="Luxury living room interior design by LuxeSpace"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-white border-t border-purple-100/50" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-3xl border border-pink-100/80 p-2 bg-gradient-to-br from-white to-pink-50 shadow-xl">
              <img
                src={bedroomImg}
                alt="Luxurious bedroom detailing"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Embedded decorative card */}
            <div className="absolute -bottom-8 -right-4 bg-white/90 backdrop-blur-md border border-purple-100 p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <span className="font-display text-xs uppercase tracking-widest text-accent-500 font-bold block mb-1">Our Philosophy</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                "We do not design buildings, we curate atmospheres. Every material selection, texture, and light ray is orchestrated to evoke pure status."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-6 space-y-6"
          >
            <motion.h2 variants={fadeIn} className="font-display font-semibold text-xs tracking-widest uppercase text-brand-600">About the Studio</motion.h2>
            <motion.h3 variants={fadeIn} className="font-display font-bold text-3xl md:text-4xl text-slate-900 leading-tight">
              Bespoke Spaces Crafted with Artistry and Passion
            </motion.h3>
            <motion.div variants={fadeIn} className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"></motion.div>
            
            <motion.p variants={fadeIn} className="text-slate-600 text-sm leading-relaxed">
              At LuxeSpace Interiors, we believe that environments profoundly impact our inner state. Since our founding, we have curated architectural interiors for private families and high-end brands, pushing the boundaries of aesthetics and craftsmanship.
            </motion.p>
            <motion.p variants={fadeIn} className="text-slate-600 text-sm leading-relaxed">
              Our multidisciplinary team merges detailed space planning, boutique lighting coordinates, custom millwork, and masterfully selected furniture pieces. We handle projects turnkey, ensuring a seamless journey from the initial vision boards to styling delivery.
            </motion.p>

            <motion.div variants={fadeIn} className="pt-4 flex items-center space-x-6">
              <div>
                <span className="font-display font-extrabold text-2xl text-slate-900 block">150+</span>
                <span className="text-xs text-slate-500 tracking-wider uppercase">Luxury Estates</span>
              </div>
              <div className="h-10 w-[1px] bg-purple-100"></div>
              <div>
                <span className="font-display font-extrabold text-2xl text-slate-900 block">40+</span>
                <span className="text-xs text-slate-500 tracking-wider uppercase">Corporate Penthouses</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-gradient-to-b from-white via-purple-50/20 to-white relative border-t border-purple-100/40" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="font-display font-semibold text-xs tracking-widest uppercase text-brand-600">Our Services</h2>
            <p className="font-display font-bold text-3xl md:text-4xl text-slate-900">Uncompromising Design Excellence</p>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -6 }}
                className="bg-white border border-purple-100/60 p-8 rounded-3xl transition-all duration-300 group shadow-md hover:shadow-xl hover:shadow-brand-500/5 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-50 border border-brand-100/50 rounded-2xl group-hover:bg-gradient-to-tr group-hover:from-brand-600 group-hover:to-accent-500 group-hover:border-transparent transition-all duration-500 shadow-sm shadow-brand-500/5">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-brand-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <a href="#contact" className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-brand-600 group-hover:text-accent-500 transition-colors duration-300">
                  Inquire Now <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Portfolio Section */}
      <section className="py-28 bg-white border-t border-purple-100/50" id="portfolio">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header & Filter Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 space-y-6 lg:space-y-0">
            <div className="space-y-4">
              <h2 className="font-display font-semibold text-xs tracking-widest uppercase text-brand-600">Featured Projects</h2>
              <p className="font-display font-bold text-3xl md:text-4xl text-slate-900">Portfolio of Curation</p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2.5">
              {['All', 'Residential', 'Commercial'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-brand-600 border-transparent text-white shadow-lg shadow-brand-500/15'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-brand-500 hover:text-brand-600 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Responsive Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 group"
              >
                {/* Image Frame */}
                <div className="overflow-hidden rounded-3xl aspect-[4/3] border border-slate-100 relative bg-slate-50 shadow-md shadow-brand-950/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-accent-300 mb-1">{project.category}</span>
                    <h4 className="font-display font-semibold text-lg text-white leading-tight mb-4">{project.title}</h4>
                    <a
                      href="#contact"
                      className="px-6 py-2.5 text-[10px] font-sans font-bold uppercase tracking-wider text-slate-900 bg-white rounded-full hover:bg-accent-500 hover:text-white transition-all duration-300 w-fit"
                    >
                      Inquire Details
                    </a>
                  </div>
                </div>
                
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h3 className="font-display font-semibold text-base text-slate-900 group-hover:text-brand-600 transition-colors duration-300">{project.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Interior Architecture & Styling</p>
                  </div>
                  <span className="text-brand-600 text-xs font-mono font-bold bg-brand-50 px-3 py-1 rounded-full">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 bg-gradient-to-r from-purple-50 via-pink-50/20 to-purple-50 border-t border-purple-100/50" id="stats">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-6 space-y-6"
          >
            <span className="font-display font-semibold text-xs tracking-widest uppercase text-brand-600 block">Why Choose LuxeSpace</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 leading-tight">
              An Elevated Level of Luxury & Executional Excellence
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"></div>
            <p className="text-slate-600 text-sm leading-relaxed">
              We design with the belief that client satisfaction, project management, and flawless construction details are just as critical as visual brilliance. From coordination with engineers to selecting individual light bulb color temperatures, we execute at a master level.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our studio maintains close partnerships with elite European manufacturers, enabling us to source custom, limited-edition furniture coordinates and high-end materials unavailable to the general public.
            </p>
          </motion.div>

          {/* Counters Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white/70 backdrop-blur-sm border border-purple-100/60 p-6 rounded-3xl shadow-md flex flex-col justify-between"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-brand-50 rounded-xl border border-brand-100 mb-4 shadow-inner">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <Counter value={stat.value} />
                  <span className="text-xs text-slate-500 tracking-wider font-semibold uppercase block">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-white border-t border-purple-100/50" id="process">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="font-display font-semibold text-xs tracking-widest uppercase text-brand-600">Our Design Journey</h2>
            <p className="font-display font-bold text-3xl md:text-4xl text-slate-900">Chronology of Curation</p>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l border-brand-100 max-w-3xl mx-auto pl-8 sm:pl-16 space-y-12 py-4">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[50px] sm:-left-[82px] w-10 h-10 flex items-center justify-center bg-white border border-purple-200 rounded-full shadow-md z-10">
                  <span className="font-display font-bold text-xs bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">{step.step}</span>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white border border-purple-100/60 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 bg-gradient-to-b from-white via-pink-50/10 to-white relative border-t border-purple-100/50" id="testimonials">
        {/* Decorative background visual elements */}
        <div className="absolute left-12 top-24 w-72 h-72 rounded-full bg-brand-500/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-xs tracking-widest uppercase text-brand-600">Client Reviews</h2>
            <p className="font-display font-bold text-3xl md:text-4xl text-slate-900">What Our Clients Say</p>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Active Testimonial quote card */}
          <div className="min-h-[220px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white/80 backdrop-blur-md border border-purple-100 p-8 sm:p-12 rounded-3xl shadow-xl shadow-brand-950/5 relative"
              >
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-accent-500 text-accent-500" />
                  ))}
                </div>

                <blockquote className="font-display text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-800 italic">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                <div className="flex items-center justify-center mt-8 space-x-4">
                  <img 
                    src={testimonials[activeTestimonial].avatar} 
                    alt={testimonials[activeTestimonial].client} 
                    className="w-12 h-12 rounded-full object-cover border border-purple-200"
                  />
                  <div className="text-left">
                    <cite className="not-italic font-sans font-bold text-slate-900 block text-sm">
                      {testimonials[activeTestimonial].client}
                    </cite>
                    <span className="text-[11px] text-slate-500 block uppercase tracking-wider">
                      {testimonials[activeTestimonial].location} &mdash; {testimonials[activeTestimonial].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center space-x-2 pt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTestimonial === idx ? 'bg-brand-600 w-6' : 'bg-slate-200'
                }`}
                aria-label={`Go to slide ${idx+1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-600 via-fuchsia-600 to-accent-500 text-white relative overflow-hidden" id="cta">
        <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-8 relative z-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Ready to Begin Curating Your Luxury Sanctuary?
          </h2>
          <p className="text-purple-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Partner with LuxeSpace Interiors today. Schedule a private video meeting or site consultation with our architectural designer coordinators.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white hover:bg-slate-50 text-brand-700 font-sans font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 rounded-full shadow-lg shadow-brand-950/15"
            >
              Book Studio Consultation
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border border-white/40 hover:border-white hover:bg-white/10 text-white font-sans font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 rounded-full"
            >
              Explore Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Booking Consultation Section (Contact Form) */}
      <section className="py-28 bg-white border-t border-purple-100/50" id="contact">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display font-semibold text-xs tracking-widest uppercase text-brand-600">Inquire Now</h2>
            <p className="font-display font-bold text-3xl md:text-4xl text-slate-900">Start Your Design Project</p>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6 bg-gradient-to-br from-slate-50 to-white border border-purple-100 p-8 sm:p-10 rounded-3xl shadow-xl shadow-brand-500/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase font-sans font-bold tracking-wider text-slate-500 block">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all duration-300 shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase font-sans font-bold tracking-wider text-slate-500 block">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@example.com"
                  className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all duration-300 shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-xs uppercase font-sans font-bold tracking-wider text-slate-500 block">Project Type</label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <option value="Residential Interior Design">Residential Interior Design</option>
                <option value="Commercial Design">Commercial Design</option>
                <option value="Space Planning">Space Planning</option>
                <option value="Furniture Selection">Furniture Selection</option>
                <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                <option value="3D Visualization">3D Visualization</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase font-sans font-bold tracking-wider text-slate-500 block">About Your Spaces & Projects</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us details about the layout, budget timeline, and design aesthetic you desire."
                className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all duration-300 shadow-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-600 to-accent-500 hover:from-brand-700 hover:to-accent-600 text-white font-sans font-bold text-xs uppercase tracking-widest py-4.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg shadow-brand-500/10 hover:shadow-brand-500/25 block transform hover:-translate-y-0.5 text-center"
            >
              Submit Consultation Request
            </button>

            {formSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-brand-50 border border-brand-200 p-4 rounded-2xl text-center text-brand-700 text-xs font-semibold"
              >
                Thank you! Your inquiry was successfully received. Our design coordinator will contact you within 24 hours.
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}

export default Home
