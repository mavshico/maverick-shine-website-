import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Sparkles, Droplets, Wind, Trash2, CheckCircle2, ArrowRight, Star, Building2, Home, Camera, MessageSquare, CalendarDays, ShieldCheck, Store, Utensils } from 'lucide-react';
import './styles.css';
import logo from './assets/logo.jpeg';

const services = [
  { icon: Wind, title: 'Residential Window Cleaning', description: 'Interior and exterior window cleaning for homes, including glass, sills, frames, and door glass.', details: 'Great for move-ins, seasonal refreshes, home sellers, and regular maintenance.' },
  { icon: Store, title: 'Storefront Window Cleaning', description: 'Keep your business looking sharp with recurring glass cleaning for salons, shops, offices, and restaurants.', details: 'Weekly, bi-weekly, and monthly options available for commercial accounts.' },
  { icon: Droplets, title: 'Pressure Washing', description: 'Driveways, patios, sidewalks, porches, walkways, pool decks, and concrete surface cleaning.', details: 'Pre-treatment options available for heavy dirt, algae, mildew, and grime.' },
  { icon: Trash2, title: 'Trash Bin Cleaning', description: 'Sanitizing service for trash bins to help reduce odors, bacteria buildup, and grime.', details: 'Perfect for homeowners, HOAs, small businesses, and recurring route service.' },
  { icon: Utensils, title: 'Restaurant Detail Cleaning', description: 'After-hours cleaning support for kitchens, surfaces, storefront glass, and specialty cleaning needs.', details: 'Built for businesses that need reliable cleaning without disrupting operations.' },
  { icon: Building2, title: 'Commercial Property Cleaning', description: 'Exterior cleaning support for storefronts, offices, assisted living facilities, venues, and local businesses.', details: 'Ideal for managers who want their property to look maintained year-round.' },
];

const cities = ['Dallas', 'Fort Worth', 'Arlington', 'Irving', 'Grand Prairie', 'Plano', 'Frisco', 'All DFW Areas'];
const gallery = [
  { title: 'Driveway Cleaning', tag: 'Before / After', icon: Droplets },
  { title: 'Storefront Glass', tag: 'Commercial', icon: Store },
  { title: 'Trash Bin Cleaning', tag: 'Sanitized', icon: Trash2 },
  { title: 'Patios & Walkways', tag: 'Residential', icon: Home },
  { title: 'Restaurant Surfaces', tag: 'After-hours', icon: Utensils },
  { title: 'Window Detailing', tag: 'Streak-free', icon: Wind },
];
const testimonials = [
  { quote: 'Great job, professional service, and the windows looked amazing after.', name: 'Local Business Client' },
  { quote: 'Easy to schedule, clear communication, and the property looked refreshed.', name: 'Residential Client' },
  { quote: 'Reliable option for keeping our storefront looking clean for customers.', name: 'Storefront Account' },
];
const steps = [
  { icon: Camera, title: 'Send Photos', text: 'Text us photos or request a walkthrough so we can understand the job.' },
  { icon: MessageSquare, title: 'Get a Quote', text: 'We send a clear price and service recommendation with no confusion.' },
  { icon: CalendarDays, title: 'Schedule Service', text: 'Pick a day and time that works for your home or business.' },
  { icon: ShieldCheck, title: 'Enjoy the Shine', text: 'Our crew shows up ready to clean and leave the property looking sharp.' },
];

function App() {
  const [service, setService] = useState('Window Cleaning');
  return (
    <div className="site">
      <header className="header">
        <div className="nav-wrap">
          <div className="brand">
            <div className="logo-box"><img src={logo} alt="Maverick Shine Co logo" /></div>
            <div><p className="brand-name">Maverick Shine Co</p><p className="brand-sub">All DFW Areas • @Maverickshineco</p></div>
          </div>
          <nav className="nav"><a href="#services">Services</a><a href="#gallery">Work</a><a href="#commercial">Commercial</a><a href="#quote">Quote</a></nav>
          <a className="ig" href="https://instagram.com/Maverickshineco" target="_blank" rel="noreferrer"><Sparkles size={16}/> @Maverickshineco</a>
          <a className="btn light" href="#quote">Get Free Quote</a>
        </div>
      </header>

      <section className="hero">
        <div className="glow"></div>
        <div className="hero-grid container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="pill"><Star size={16}/> Premium cleaning services across DFW</div>
            <h1>Give your property the clean, sharp look it deserves.</h1>
            <p className="lead">Maverick Shine Co helps homeowners and businesses across all DFW areas with window cleaning, pressure washing, trash bin cleaning, and commercial detail cleaning.</p>
            <div className="actions"><a className="btn blue" href="#quote">Request a Free Quote <ArrowRight size={20}/></a><a className="btn outline" href="tel:+14698268152"><Phone size={20}/> Call / Text</a></div>
            <div className="stats"><div><b>DFW</b><span>Service Area</span></div><div><b>Fast</b><span>Quotes</span></div><div><b>Pro</b><span>Results</span></div></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="hero-card">
            <img className="hero-logo" src={logo} alt="Maverick Shine Co" />
            <div className="service-snapshot">
              <p>Featured Services</p>
              {services.slice(0,4).map((item) => <div className="snapshot-row" key={item.title}><item.icon/><div><b>{item.title}</b><span>{item.description}</span></div></div>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="areas"><div className="container areas-row"><MapPin size={16}/> Serving {cities.map(city => <span key={city}>{city}</span>)}</div></section>

      <section id="services" className="container section"><div className="section-head"><div><p className="eyebrow">What We Clean</p><h2>Built for curb appeal, first impressions, and repeat clients.</h2></div><p>Choose one service or bundle multiple exterior cleaning needs into one visit.</p></div><div className="cards">{services.map((item)=><div className="card" key={item.title}><div className="icon"><item.icon/></div><h3>{item.title}</h3><p>{item.description}</p><div className="detail">{item.details}</div></div>)}</div></section>

      <section id="gallery" className="gallery-section"><div className="container gallery-grid"><div><p className="eyebrow blue-text">Visual Results</p><h2>Cleaning is visual. Your website should prove the results.</h2><p className="gray">Add your real before-and-after photos here from driveways, storefront windows, bin cleaning, patios, and restaurant jobs.</p></div><div className="gallery-cards">{gallery.map((item)=><div className="gallery-card" key={item.title}><div><item.icon/><span>{item.tag}</span></div><b>{item.title}</b><p>Photo placeholder — replace with real job image.</p></div>)}</div></div></section>

      <section id="commercial" className="container section"><div className="commercial"><div><p className="eyebrow">Commercial Accounts</p><h2>Keep your business looking ready for customers.</h2><p>Perfect for salons, restaurants, offices, retail shops, assisted living facilities, venues, and property managers who need dependable cleaning support.</p></div><div className="checks">{['Recurring storefront window cleaning','Pressure washing for walkways and entrances','After-hours restaurant detail cleaning','Custom cleaning plans for local businesses'].map(item=><div key={item}><CheckCircle2/> {item}</div>)}</div></div></section>

      <section className="process"><div className="container"><div className="center"><p className="eyebrow">How It Works</p><h2>Simple from quote to clean.</h2></div><div className="step-grid">{steps.map((step,i)=><div className="step" key={step.title}><div className="icon"><step.icon/></div><span>Step {i+1}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>

      <section className="container section"><div className="center"><p className="eyebrow">Social Proof</p><h2>Built on clean work and clear communication.</h2></div><div className="testimonial-grid">{testimonials.map(item=><div className="testimonial" key={item.name}><div className="stars">★★★★★</div><p>“{item.quote}”</p><b>{item.name}</b></div>)}</div></section>

      <section id="quote" className="quote-wrap"><div className="container quote"><div><p className="eyebrow light-blue">Free Quote</p><h2>Tell us what you need cleaned.</h2><p>Send photos for the fastest quote. We can help with one-time cleanings, recurring service, residential jobs, and commercial accounts.</p><div className="contact-box"><a href="tel:+14698268152"><Phone/> Call/Text: (469) 826-8152</a><a href="mailto:maverickshineco@gmail.com"><Mail/> Email: maverickshineco@gmail.com</a><a href="https://instagram.com/Maverickshineco" target="_blank" rel="noreferrer"><Sparkles/> Instagram: @Maverickshineco</a><p><MapPin/> Serving all DFW areas</p></div></div><form className="quote-form"><label>Name<input placeholder="Your name" /></label><label>Phone<input placeholder="Your phone number" /></label><label className="full">Service Needed<select value={service} onChange={(e)=>setService(e.target.value)}><option>Window Cleaning</option><option>Pressure Washing</option><option>Trash Bin Cleaning</option><option>Commercial Cleaning</option><option>Multiple Services</option></select></label><label className="full">Project Details<textarea placeholder="Tell us about the property, number of windows, square footage, or what needs cleaning."></textarea></label><button type="button">Submit Quote Request <ArrowRight size={18}/></button><small>Form placeholder — connect to email, Google Forms, or booking software when published.</small></form></div></section>

      <footer>© 2026 Maverick Shine Co. Professional cleaning services in all DFW areas.</footer>
      <div className="mobile-bar"><a href="tel:+14698268152">Call / Text</a><a href="#quote">Free Quote</a></div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
