/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ShieldCheck, 
  Target, 
  MessageSquareText, 
  TrendingUp, 
  MapPin, 
  ChevronRight,
  Award,
  CheckCircle2,
  X,
  Send,
  User,
  Instagram,
  Linkedin,
  Twitter,
  FileText,
  Scale,
  ShieldAlert,
  Accessibility as AccessibilityIcon
} from 'lucide-react';
import { io } from 'socket.io-client';

// Initialize socket outside component to avoid re-renders
const socket = io();

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center text-luxury-ink bg-luxury-bg/80 backdrop-blur-md border-b border-luxury-ink/5">
    <div className="text-2xl font-serif tracking-widest uppercase font-bold">Argus</div>
    <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-medium">
      <a href="#philosophy" className="hover:text-luxury-gold transition-colors">Philosophy</a>
      <a href="#intelligence" className="hover:text-luxury-gold transition-colors">Intelligence</a>
      <a href="#trust" className="hover:text-luxury-gold transition-colors">Trust</a>
    </div>
    <button className="px-6 py-2 border border-luxury-ink/30 rounded-full text-[10px] uppercase tracking-widest hover:bg-luxury-ink hover:text-luxury-bg transition-all min-h-[48px] min-w-[140px]">
      Request Access
    </button>
  </nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-10"
      >
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Toronto Estate" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-luxury-accent mb-6 block font-semibold">
            The Silent Closer for Toronto Luxury
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-10 tracking-tight text-luxury-ink">
            Qualify $100K+ <br />
            <span className="italic">Commissions</span> While You Sleep.
          </h1>
          
          {/* Ambient AI Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 relative group">
            <div className="absolute inset-0 bg-luxury-gold/20 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-white border border-luxury-ink/10 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-luxury-gold/30">
              <div className="pl-6 text-luxury-accent">
                <MessageSquareText size={20} />
              </div>
              <input 
                type="text" 
                placeholder="How can Argus qualify your next Yorkville lead?" 
                className="w-full bg-transparent px-4 py-4 text-sm md:text-base focus:outline-none text-luxury-ink placeholder:text-luxury-ink/40"
              />
              <button className="bg-luxury-ink text-luxury-bg px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-luxury-gold transition-colors font-bold min-h-[48px]">
                Ask Argus
              </button>
            </div>
          </div>

          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 text-luxury-ink/80 leading-relaxed">
            Argus is the first AI sales concierge designed exclusively for Toronto's elite brokerages. 
            Discreet, intelligent, and verified by 20 years of local market data.
          </p>
          
          <div className="flex justify-center items-center">
            <span className="text-[10px] uppercase tracking-widest text-luxury-ink/40 flex items-center gap-2">
              <ShieldCheck size={14} /> Toronto-Verified Reliability
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-[1px] h-12 bg-luxury-ink"></div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-ink">Scroll</span>
      </div>
    </motion.section>
  );
};

const ProofSection = () => (
  <section className="py-24 px-6 bg-luxury-bg">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bento Grid Item 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 p-12 glass-card rounded-3xl flex flex-col justify-between min-h-[300px]"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-[10px] uppercase tracking-widest font-bold mb-6">
              <TrendingUp size={12} /> Lead Conversion Velocity
            </div>
            <h3 className="text-4xl font-serif text-luxury-ink mb-4">Accelerating the path to closing by 4.2x.</h3>
          </div>
          <p className="text-luxury-ink/60 max-w-md">Our neural network identifies intent signals that human agents miss, moving leads from inquiry to viewing in record time.</p>
        </motion.div>

        {/* Bento Grid Item 2 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-12 glass-card rounded-3xl flex flex-col items-center justify-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-luxury-ink text-luxury-bg flex items-center justify-center mb-6 shadow-xl">
            <Award size={40} />
          </div>
          <div className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-2">Toronto Market Entity</div>
          <h4 className="text-2xl font-serif text-luxury-ink italic">Verified Heritage</h4>
        </motion.div>

        {/* Bento Grid Item 3 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-12 glass-card rounded-3xl flex flex-col justify-center"
        >
          <div className="text-5xl font-serif text-luxury-ink mb-2">94%</div>
          <div className="text-[10px] uppercase tracking-widest text-luxury-accent font-bold">Qualification Accuracy</div>
        </motion.div>

        {/* Bento Grid Item 4 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 p-12 glass-card rounded-3xl flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h3 className="text-3xl font-serif text-luxury-ink mb-4">Discreet Intelligence.</h3>
            <p className="text-luxury-ink/60">Argus operates in the shadows, maintaining the prestige of your brand while providing the data you need to win the listing.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-2xl bg-luxury-ink/5 flex items-center justify-center">
              <ShieldCheck size={32} className="text-luxury-gold" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-luxury-ink/5 flex items-center justify-center">
              <Target size={32} className="text-luxury-accent" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="p-10 glass-card rounded-3xl group hover:bg-white transition-all duration-500"
  >
    <div className="w-12 h-12 rounded-full bg-luxury-accent/10 flex items-center justify-center mb-8 group-hover:bg-luxury-accent group-hover:text-white transition-colors">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-2xl font-serif mb-4">{title}</h3>
    <p className="text-sm text-luxury-ink/90 leading-relaxed">{description}</p>
  </motion.div>
);

const Intelligence = () => (
  <motion.section 
    id="intelligence" 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="py-32 px-6 bg-luxury-bg border-t border-luxury-ink/5"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
        <article>
          <h2 className="text-5xl font-serif mb-8 leading-tight text-luxury-ink">
            Generative Intelligence <br />
            <span className="italic">for the 1%.</span>
          </h2>
          <p className="text-luxury-ink/80 mb-8 leading-relaxed">
            Unlike generic SaaS tools, Argus understands the nuance of the Bridle Path, Rosedale, and Forest Hill markets. 
            It doesn't just "chat"—it qualifies leads based on high-net-worth behavioral patterns.
          </p>
          <ul className="space-y-4">
            {[
              "Behavioral Lead Scoring ($100K+ Potential)",
              "Discreet 24/7 Concierge nurturing",
              "Seamless CRM integration (Toronto-Verified)",
              "AI-First SEO Optimization for Listings"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-luxury-ink">
                <CheckCircle2 size={16} className="text-luxury-gold" />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
            alt="Modern Luxury Interior" 
            className="oval-mask shadow-2xl border-4 border-white"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -left-10 bg-luxury-ink text-luxury-bg p-8 rounded-2xl shadow-2xl max-w-[240px]">
            <p className="text-3xl font-serif mb-2 text-luxury-gold">94%</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Lead Qualification Accuracy in Luxury Segments</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          index={0}
          icon={Target}
          title="Precision Targeting"
          description="Identify buyers with the liquidity for Toronto's most exclusive listings before they even reach your inbox."
        />
        <FeatureCard 
          index={1}
          icon={MessageSquareText}
          title="Discreet Nurturing"
          description="Human-grade communication that maintains the prestige of your brand, 24 hours a day."
        />
        <FeatureCard 
          index={2}
          icon={TrendingUp}
          title="AEO Optimized"
          description="Engineered for AI Search (GEO), ensuring your brokerage is the first result for high-intent luxury queries."
        />
      </div>
    </div>
  </motion.section>
);

const TrustSection = () => (
  <motion.section 
    id="trust" 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1 }}
    className="py-32 px-6 bg-luxury-bg border-t border-luxury-ink/5"
  >
    <div className="max-w-4xl mx-auto text-center">
      <Award size={48} className="mx-auto mb-8 text-luxury-gold" />
      <h2 className="text-4xl font-serif mb-8 italic text-luxury-ink">"The standard for Toronto's elite."</h2>
      <p className="text-lg text-luxury-ink/80 mb-12 leading-relaxed">
        Built on 20 years of local market intelligence, Argus isn't just technology. 
        It's a digital extension of the heritage and trust that Toronto's top 1% of brokers have built over decades.
      </p>
      <div className="flex justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="text-xl font-serif tracking-widest text-luxury-ink">BARRY COHEN</div>
        <div className="text-xl font-serif tracking-widest text-luxury-ink">HARVEY KALLES</div>
        <div className="text-xl font-serif tracking-widest text-luxury-ink">CHESTNUT PARK</div>
      </div>
    </div>
  </motion.section>
);

const FAQ = () => (
  <motion.section 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="py-32 px-6 bg-luxury-bg border-t border-luxury-ink/5"
  >
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-serif mb-16 text-center text-luxury-ink">Frequently Asked Questions</h2>
      <div className="space-y-12">
        <article>
          <h4 className="text-xl font-serif mb-4 text-luxury-ink">How does AI qualify luxury real estate leads?</h4>
          <p className="text-sm text-luxury-ink/80 leading-relaxed">
            Argus uses behavioral neural mapping to analyze inquiry patterns, identifying high-intent buyers with the liquidity for Toronto's most exclusive listings. It operates with bank-grade encryption and a "Discretion-First" protocol.
          </p>
        </article>
        <article>
          <h4 className="text-xl font-serif mb-4 text-luxury-ink">Is Argus compatible with Toronto MLS?</h4>
          <p className="text-sm text-luxury-ink/80 leading-relaxed">
            Yes. Argus is pre-configured with RECO compliance guidelines and Toronto-specific disclosure requirements, ensuring seamless integration with local market standards.
          </p>
        </article>
      </div>
      
      {/* JSON-LD FAQ Schema for AEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does AI qualify luxury real estate leads?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Argus uses behavioral neural mapping to analyze inquiry patterns, identifying high-intent buyers with the liquidity for Toronto's most exclusive listings."
              }
            },
            {
              "@type": "Question",
              "name": "Is Argus compatible with Toronto MLS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Argus is pre-configured with RECO compliance guidelines and Toronto-specific disclosure requirements."
              }
            }
          ]
        })}
      </script>
    </div>
  </motion.section>
);

const Footer = ({ onOpenLegal }: { onOpenLegal: (type: string) => void }) => (
  <footer className="py-32 px-6 bg-luxury-ink text-luxury-bg border-t border-luxury-ink/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="text-3xl font-serif tracking-widest uppercase mb-8 font-bold">Argus</div>
          <p className="text-sm text-luxury-bg/80 leading-relaxed mb-8">
            The definitive AI concierge for Toronto's most prestigious real estate brokerages. 
            Discretion, intelligence, and legacy.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-luxury-bg/10 flex items-center justify-center hover:bg-luxury-bg hover:text-luxury-ink transition-all cursor-pointer group">
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-luxury-bg/10 flex items-center justify-center hover:bg-luxury-bg hover:text-luxury-ink transition-all cursor-pointer group">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-luxury-bg/10 flex items-center justify-center hover:bg-luxury-bg hover:text-luxury-ink transition-all cursor-pointer group">
              <Twitter size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold mb-8 font-bold">Intelligence</h5>
          <ul className="space-y-4 text-sm text-luxury-bg">
            <li><a href="#intelligence" className="hover:text-luxury-gold transition-colors">Yorkville Market Pulse</a></li>
            <li><a href="#intelligence" className="hover:text-luxury-gold transition-colors">Bridle Path Valuation AI</a></li>
            <li><a href="#intelligence" className="hover:text-luxury-gold transition-colors">Rosedale Heritage Analytics</a></li>
            <li><a href="#intelligence" className="hover:text-luxury-gold transition-colors">King West Velocity Tracking</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold mb-8 font-bold">Brokerage Hubs</h5>
          <ul className="space-y-4 text-sm text-luxury-bg">
            <li className="flex items-center gap-2"><MapPin size={12} /> Yorkville Office</li>
            <li className="flex items-center gap-2"><MapPin size={12} /> Bridle Path Private</li>
            <li className="flex items-center gap-2"><MapPin size={12} /> Forest Hill Intelligence</li>
            <li className="flex items-center gap-2"><MapPin size={12} /> Rosedale Concierge</li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold mb-8 font-bold">The Argus Report</h5>
          <p className="text-xs text-luxury-bg/70 mb-6 leading-relaxed">
            Subscribe to our quarterly intelligence report on Toronto's HNW behavioral shifts.
          </p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-luxury-bg/5 border border-luxury-bg/10 rounded-full px-4 py-2 text-xs flex-1 focus:outline-none focus:border-luxury-gold transition-all min-h-[48px]"
            />
            <button className="w-12 h-12 bg-luxury-bg text-luxury-ink rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors min-h-[48px] min-w-[48px]">
              <ChevronRight size={14} />
            </button>
          </form>
        </div>
      </div>

      <div className="pt-12 border-t border-luxury-bg/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap justify-center gap-6 text-[9px] uppercase tracking-[0.2em] text-luxury-bg/60">
          <button onClick={() => onOpenLegal('reco')} className="hover:text-luxury-gold transition-colors">RECO Compliant</button>
          <button onClick={() => onOpenLegal('orea')} className="hover:text-luxury-gold transition-colors">OREA Member</button>
          <button onClick={() => onOpenLegal('crea')} className="hover:text-luxury-gold transition-colors">CREA Verified</button>
          <button onClick={() => onOpenLegal('accessibility')} className="hover:text-luxury-gold transition-colors">AODA Accessibility</button>
        </div>
        <div className="text-[9px] uppercase tracking-[0.2em] text-luxury-bg/60 text-center">
          © 2026 Argus Intelligence. All Rights Reserved. Toronto Luxury Real Estate AI.
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-[9px] uppercase tracking-[0.2em] text-luxury-bg/60">
          <button onClick={() => onOpenLegal('privacy')} className="hover:text-luxury-gold transition-colors">Privacy</button>
          <button onClick={() => onOpenLegal('terms')} className="hover:text-luxury-gold transition-colors">Terms</button>
          <button onClick={() => onOpenLegal('cookies')} className="hover:text-luxury-gold transition-colors">Cookies</button>
          <button onClick={() => onOpenLegal('dmca')} className="hover:text-luxury-gold transition-colors">DMCA</button>
          <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-luxury-gold transition-colors">Disclaimer</button>
        </div>
      </div>
    </div>
  </footer>
);

const LegalModal = ({ type, onClose }: { type: string | null, onClose: () => void }) => {
  if (!type) return null;

  const content: Record<string, { title: string, body: string, icon: any }> = {
    privacy: {
      title: "Privacy Policy",
      icon: ShieldCheck,
      body: "Argus Intelligence is committed to the highest standards of data privacy for Toronto's elite real estate sector. We employ bank-grade encryption and a 'Discretion-First' protocol. Your client data is never used to train third-party models. We comply with PIPEDA and provincial privacy regulations."
    },
    terms: {
      title: "Terms of Service",
      icon: Scale,
      body: "By accessing the Argus platform, you agree to our professional standards of conduct. Our AI services are provided as a decision-support tool for licensed real estate professionals. Unauthorized scraping or reverse-engineering of our Toronto market neural networks is strictly prohibited."
    },
    cookies: {
      title: "Cookie Policy",
      icon: FileText,
      body: "We use essential cookies to maintain your secure session and remember your preferences. These cookies are necessary for the 'Concierge AI' to provide a consistent experience across your Yorkville and Bridle Path listing management sessions."
    },
    dmca: {
      title: "DMCA Notice",
      icon: ShieldAlert,
      body: "Argus respects intellectual property rights. If you believe listing data or imagery on our platform infringes your copyright, please submit a formal DMCA notice to our legal department. We protect the proprietary data of Toronto's top brokerages."
    },
    disclaimer: {
      title: "Legal Disclaimer",
      icon: ShieldAlert,
      body: "Argus AI provides market intelligence and lead qualification based on historical data and behavioral patterns. It does not constitute financial or legal advice. All real estate transactions should be verified by licensed professionals in accordance with RECO guidelines."
    },
    accessibility: {
      title: "Accessibility (AODA)",
      icon: AccessibilityIcon,
      body: "Argus is committed to digital inclusion. We strive to meet the Integrated Accessibility Standards Regulation (IASR) under the Accessibility for Ontarians with Disabilities Act (AODA). Our interface is designed for compatibility with assistive technologies."
    },
    reco: {
      title: "RECO Compliance",
      icon: CheckCircle2,
      body: "Argus is engineered to support compliance with the Real Estate Council of Ontario (RECO). Our AI-generated communications include necessary disclosures and adhere to the Trust in Real Estate Services Act (TRESA) standards."
    },
    orea: {
      title: "OREA Standards",
      icon: Award,
      body: "We align our data processing and professional ethics with the Ontario Real Estate Association (OREA) guidelines, ensuring our AI tools support the high standards of Ontario REALTORS®."
    },
    crea: {
      title: "CREA Verification",
      icon: CheckCircle2,
      body: "Argus respects the trademarks and data standards of the Canadian Real Estate Association (CREA). Our platform is designed to complement the tools used by CREA members across Canada."
    }
  };

  const active = content[type] || content.privacy;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-luxury-bg w-full max-w-2xl rounded-3xl p-12 shadow-2xl relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-luxury-ink/40 hover:text-luxury-ink transition-colors">
          <X size={24} />
        </button>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold">
            <active.icon size={24} />
          </div>
          <h2 className="text-3xl font-serif text-luxury-ink">{active.title}</h2>
        </div>
        <div className="prose prose-sm text-luxury-ink/80 leading-relaxed">
          <p>{active.body}</p>
          <p className="mt-6 text-[10px] uppercase tracking-widest opacity-40">Last Updated: March 2026 • Toronto, ON</p>
        </div>
        <button 
          onClick={onClose}
          className="mt-12 w-full py-4 bg-luxury-ink text-luxury-bg rounded-full text-xs uppercase tracking-widest hover:bg-luxury-gold transition-colors font-bold"
        >
          Close Document
        </button>
      </motion.div>
    </motion.div>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.emit('join_chat');

    socket.on('receive_message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    socket.emit('send_message', { text: inputValue, sender: 'Client' });
    setInputValue('');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-luxury-gold text-black rounded-full shadow-2xl flex items-center justify-center group relative overflow-hidden"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {isOpen ? <X size={24} /> : <MessageSquareText size={24} />}
        </motion.div>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          scale: isOpen ? 1 : 0.9, 
          y: isOpen ? 0 : 20,
          pointerEvents: isOpen ? 'all' : 'none'
        }}
        className="absolute bottom-24 right-0 w-[380px] h-[500px] glass-card rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/20"
      >
        <div className="p-6 bg-luxury-gold text-black flex justify-between items-center">
          <div>
            <h4 className="font-serif text-lg tracking-wide">Argus Concierge</h4>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest opacity-80">Private Line Active</span>
            </div>
          </div>
          <Award size={20} className="text-black opacity-50" />
        </div>

        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 bg-luxury-bg"
        >
          {messages.length === 0 && (
            <div className="text-center py-10">
              <div className="w-12 h-12 bg-luxury-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={20} className="text-luxury-accent" />
              </div>
              <p className="text-xs text-luxury-ink/40 uppercase tracking-widest leading-relaxed">
                Welcome to the private Argus network. <br /> How may we assist your brokerage today?
              </p>
            </div>
          )}
          {messages.map((msg) => (
            <motion.div
              initial={{ opacity: 0, x: msg.sender === 'Client' ? 10 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              key={msg.id}
              className={`flex ${msg.sender === 'Client' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                msg.sender === 'Client' 
                  ? 'bg-luxury-accent text-white rounded-tr-none' 
                  : 'bg-white/10 text-white shadow-sm rounded-tl-none border border-white/5'
              }`}>
                <p className="leading-relaxed">{msg.text}</p>
                <p className={`text-[9px] mt-1 uppercase tracking-tighter opacity-40 ${
                  msg.sender === 'Client' ? 'text-right' : 'text-left'
                }`}>
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <form onSubmit={handleSend} className="p-4 bg-luxury-ink border-t border-white/5 flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your inquiry..."
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-luxury-gold/30 transition-all text-white min-h-[48px]"
          />
          <button 
            type="submit"
            className="w-12 h-12 bg-luxury-gold text-luxury-ink rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg min-w-[48px]"
          >
            <Send size={18} />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [legalType, setLegalType] = useState<string | null>(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="antialiased selection:bg-luxury-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProofSection />
        <Intelligence />
        <TrustSection />
        <FAQ />
      </main>
      <Footer onOpenLegal={setLegalType} />
      <ChatWidget />
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
}
