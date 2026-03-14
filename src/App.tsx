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
  Calendar,
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

const Navbar = ({ onOpenRequest }: { onOpenRequest: () => void }) => (
  <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-luxury-ink bg-luxury-bg/90 backdrop-blur-md border-b border-luxury-ink/10">
    <div className="flex items-center gap-12">
      <div className="text-2xl font-serif tracking-widest uppercase font-bold">Argus</div>
      <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold">
        <a href="#philosophy" className="hover:text-luxury-gold transition-colors">Philosophy</a>
        <a href="#intelligence" className="hover:text-luxury-gold transition-colors">Intelligence</a>
        <a href="#trust" className="hover:text-luxury-gold transition-colors">Trust</a>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <a 
        href="/dashboard" 
        className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold hover:text-luxury-gold transition-colors px-4"
      >
        Broker Login
      </a>
      <motion.button 
        whileHover={{ scale: 1.02, backgroundColor: 'var(--luxury-gold)', color: 'var(--luxury-ink)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpenRequest}
        className="px-8 py-3 bg-luxury-ink text-luxury-bg rounded-full text-[10px] uppercase tracking-[0.2em] transition-all font-bold shadow-xl"
      >
        Request Access
      </motion.button>
    </div>
  </nav>
);

const Hero = ({ onOpenRequest }: { onOpenRequest: () => void }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://i.ibb.co/LzTK50Hh/wan2-5-t2i-preview-a-Prompt-A-profession.png" 
          alt="Elite Luxury Professional" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Minimalist gradient overlay for maximum image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-bg/30 via-transparent to-luxury-bg/80"></div>
      </motion.div>
      
      <div className="relative z-10 max-w-5xl text-center">
        <div className="flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.5em] text-white mb-6 block font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            The Multi-Million Dollar Pipeline Engine
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-8xl font-serif leading-[0.95] mb-10 tracking-tight text-luxury-ink drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]"
          >
            Never miss a <br />
            <span className="italic">multi-million dollar inquiry again.</span>
          </motion.h1>
          
          {/* Ambient AI Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl w-full mx-auto mb-12 relative group"
          >
            <div className="absolute inset-0 bg-luxury-gold/30 blur-3xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-700"></div>
            <div className="relative flex items-center bg-white/90 backdrop-blur-md border border-luxury-ink/10 rounded-full p-2 shadow-2xl hover:shadow-luxury-gold/20 transition-all focus-within:ring-2 focus-within:ring-luxury-gold/40">
              <div className="pl-6 text-luxury-gold">
                <MessageSquareText size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Qualify your next $5M+ Bridle Path listing..." 
                className="w-full bg-transparent px-4 py-4 text-sm md:text-base focus:outline-none text-luxury-ink placeholder:text-luxury-ink/50 font-medium"
              />
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: 'var(--color-luxury-gold)', color: '#fff' }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenRequest}
                className="bg-luxury-ink text-luxury-bg px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] transition-all font-bold min-h-[52px] shadow-lg"
              >
                Ask Argus
              </motion.button>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 text-white leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Argus uses Agentic Intelligence to qualify $100K+ commissions with Zero-Latency. 
            A human-grade concierge built for Toronto's top 1%, ensuring your brand's reputation for high-touch service remains bespoke.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col md:flex-row justify-center items-center gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(184, 134, 11, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenRequest}
              className="px-12 py-5 bg-luxury-ink text-luxury-bg rounded-full text-xs uppercase tracking-[0.3em] hover:bg-luxury-gold hover:text-white transition-all duration-500 font-bold min-h-[60px] shadow-2xl"
            >
              Request Credentials
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.8)", backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="/demo"
              className="px-12 py-5 border-2 border-luxury-ink/20 text-luxury-ink rounded-full text-xs uppercase tracking-[0.3em] hover:bg-luxury-ink hover:text-luxury-bg transition-all duration-500 font-bold min-h-[60px] flex items-center backdrop-blur-sm"
            >
              View Live Intelligence
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 inline-flex items-center gap-3 px-8 py-3 bg-white/60 backdrop-blur-md rounded-full border border-white/20 shadow-xl"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-luxury-ink flex items-center gap-3 font-bold">
              <ShieldCheck size={18} className="text-luxury-gold" /> SECURE TORONTO NETWORK • $2.4B IN QUALIFIED PIPELINE
            </span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-16 bg-luxury-gold"></div>
        <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-ink font-bold opacity-80">Market Intelligence</span>
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
          className="md:col-span-2 p-12 glass-card rounded-3xl flex flex-col justify-between min-h-[300px] border-l-4 border-l-luxury-gold"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-[10px] uppercase tracking-widest font-bold mb-6">
              <TrendingUp size={12} /> The Hidden Cost of Success
            </div>
            <h3 className="text-4xl font-serif text-luxury-ink mb-4 leading-tight">65% of luxury leads go cold <br />while you're in a closing.</h3>
          </div>
          <p className="text-luxury-ink/70 max-w-md font-medium">In 2026, a 5-minute delay in responding to a Yorkville buyer reduces conversion by 21 times. Argus eliminates this latency, acting as your 24/7 digital team member.</p>
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
            <TrendingUp size={40} />
          </div>
          <div className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-2">Primary Metric</div>
          <h4 className="text-2xl font-serif text-luxury-ink italic">Lead Velocity Index</h4>
        </motion.div>

        {/* Bento Grid Item 3 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-12 glass-card rounded-3xl flex flex-col justify-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-luxury-accent/10 flex items-center justify-center mb-6 mx-auto">
            <Calendar size={32} className="text-luxury-accent" />
          </div>
          <h4 className="text-xl font-serif text-luxury-ink mb-2">Autonomous Viewing Scheduler</h4>
          <div className="text-[10px] uppercase tracking-widest text-luxury-accent font-bold">MLS-Integrated</div>
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
            <h3 className="text-3xl font-serif text-luxury-ink mb-4">The Gatekeeper.</h3>
            <p className="text-luxury-ink/60">Argus acts as your high-intent filter, ensuring you only see viewings for pre-qualified buyers with confirmed budgets. Agentic Intelligence that feels human, professional, and bespoke.</p>
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
  <section id="intelligence" className="py-32 px-6 bg-luxury-bg border-t border-luxury-ink/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
        <motion.article
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-serif mb-8 leading-tight text-luxury-ink">
            Monetize the <br />
            <span className="italic text-luxury-gold underline decoration-luxury-gold/20 underline-offset-8">Shadow Inventory.</span>
          </h2>
          <p className="text-luxury-ink mb-8 leading-relaxed font-medium">
            Engineered for the GTA. Argus is MLS-integrated and Bridle Path ready, monitoring liquidity shifts in Toronto's most exclusive enclaves to find your next $20M listing before it's even a thought.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-3xl font-serif text-luxury-gold mb-1 font-bold">$2.4B</p>
              <p className="text-xs uppercase tracking-widest font-bold text-luxury-ink">Qualified Pipeline Identified</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-luxury-gold mb-1 font-bold">4.2x</p>
              <p className="text-xs uppercase tracking-widest font-bold text-luxury-ink">GCI Growth Multiplier</p>
            </div>
          </div>
          <ul className="space-y-4">
            {[
              "Bridle Path Multi-Generational Liquidity Mapping",
              "Rosedale Heritage Scarcity Predictive Revenue Models",
              "Forest Hill Modern Architectural Demand Index",
              "Yorkville High-Intent Lead Velocity Tracking"
            ].map((item, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-3 text-sm font-bold text-luxury-ink"
              >
                <CheckCircle2 size={16} className="text-luxury-gold" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.article>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
            alt="Modern Luxury Interior" 
            className="oval-mask shadow-2xl border-4 border-white"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-10 -left-10 bg-luxury-ink text-luxury-bg p-8 rounded-2xl shadow-2xl max-w-[240px]"
          >
            <p className="text-3xl font-serif mb-2 text-luxury-gold">94%</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60">Lead Qualification Accuracy in Luxury Segments</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          index={0}
          icon={Target}
          title="The Gatekeeper"
          description="High-intent filtering that ensures you only see viewings for pre-qualified buyers with confirmed budgets and verified liquidity."
        />
        <FeatureCard 
          index={1}
          icon={MessageSquareText}
          title="Discreet Concierge"
          description="Human-grade AI communication that understands the nuance of Toronto's high-net-worth etiquette and discretion."
        />
        <FeatureCard 
          index={2}
          icon={TrendingUp}
          title="Local AEO Optimized"
          description="Engineered for Toronto-specific luxury queries, ensuring your brokerage dominates the local AI search landscape."
        />
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-white/50 backdrop-blur-sm rounded-3xl border border-luxury-ink/5"
        >
          <h4 className="text-2xl font-serif mb-6 text-luxury-ink">Luxury Segment Scarcity</h4>
          <p className="text-sm text-luxury-ink/70 leading-relaxed">
            In Rosedale and Forest Hill, inventory for detached estates over $15M has reached a 15-year low. Argus identifies 'Shadow Inventory'—properties likely to trade off-market based on historical ownership cycles and behavioral triggers.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-white/50 backdrop-blur-sm rounded-3xl border border-luxury-ink/5"
        >
          <h4 className="text-2xl font-serif mb-6 text-luxury-ink">Yorkville Liquidity Velocity</h4>
          <p className="text-sm text-luxury-ink/70 leading-relaxed">
            High-intent lead velocity for Yorkville penthouses has increased by 34% year-over-year. Our neural network tracks capital migration patterns from international hubs directly into Toronto's luxury vertical estates.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section id="trust" className="py-32 px-6 bg-luxury-bg border-t border-luxury-ink/5">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto text-center"
    >
      <Award size={48} className="mx-auto mb-8 text-luxury-gold" />
      <h2 className="text-4xl font-serif mb-8 italic text-luxury-ink">"The standard for Toronto's elite."</h2>
      <p className="text-lg text-luxury-ink mb-12 leading-relaxed">
        Engineered for the GTA. MLS-integrated and Bridle Path ready. Argus isn't just technology—it's a digital extension of the heritage and trust that Toronto's top 1% of brokers have built over decades.
      </p>
      <div className="flex justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="text-xl font-serif tracking-widest text-luxury-ink">BARRY COHEN</div>
        <div className="text-xl font-serif tracking-widest text-luxury-ink">HARVEY KALLES</div>
        <div className="text-xl font-serif tracking-widest text-luxury-ink">CHESTNUT PARK</div>
      </div>
    </motion.div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      q: "How does AI qualify luxury real estate leads?",
      a: "Argus uses behavioral neural mapping to analyze inquiry patterns, identifying high-intent buyers with the liquidity for Toronto's most exclusive listings. It operates with bank-grade encryption and a 'Discretion-First' protocol."
    },
    {
      q: "Is Argus compatible with Toronto MLS?",
      a: "Yes. Argus is pre-configured with RECO compliance guidelines and Toronto-specific disclosure requirements, ensuring seamless integration with local market standards."
    },
    {
      q: "How does Argus handle data privacy for high-net-worth clients?",
      a: "Privacy is our heritage. All client interactions are processed through a private, encrypted neural network. We never sell data, and all HNW behavioral insights are anonymized to protect the identity of Toronto's elite."
    },
    {
      q: "Can Argus integrate with my existing CRM?",
      a: "Argus offers native integrations with major luxury real estate CRMs. Our API allows for seamless data flow, ensuring your qualified leads are synced instantly with your existing workflow."
    },
    {
      q: "What makes Argus different from standard real estate chatbots?",
      a: "Standard bots use simple decision trees. Argus is a specialized neural network trained on 20 years of Toronto luxury market transactions. It understands the nuance of Yorkville, the heritage of Rosedale, and the specific needs of the ultra-wealthy."
    },
    {
      q: "Does Argus provide off-market or 'Shadow Inventory' insights?",
      a: "Yes. By analyzing ownership cycles and behavioral triggers in neighborhoods like The Bridle Path and Forest Hill, Argus identifies properties likely to trade off-market before they ever hit the MLS."
    },
    {
      q: "How accurate are the AI-driven valuations?",
      a: "Our valuations achieve 98% accuracy by factoring in non-standard variables like architectural heritage, neighborhood 'velocity', and international capital migration patterns that traditional models miss."
    },
    {
      q: "Is there a mobile application for brokers on the move?",
      a: "The Argus Broker Dashboard is fully responsive and optimized for mobile devices, allowing you to manage Yorkville leads or Rosedale inquiries directly from your smartphone."
    },
    {
      q: "How long does it take to implement Argus for a brokerage?",
      a: "Standard implementation takes 7-10 business days. This includes neural network calibration for your specific neighborhood focus and team training."
    },
    {
      q: "Does Argus support international buyer tracking?",
      a: "Absolutely. Argus tracks capital migration patterns from major international hubs (London, Hong Kong, Dubai) to identify when global wealth is moving into the Toronto vertical estate market."
    },
    {
      q: "What kind of ROI can a luxury brokerage expect?",
      a: "On average, Argus users see a 40% increase in lead-to-showing conversion rates and save 15+ hours per week on manual lead qualification."
    },
    {
      q: "Can Argus handle multi-language inquiries?",
      a: "Yes. Argus supports 12 major languages, allowing you to provide a premium concierge experience to international buyers in their native tongue."
    },
    {
      q: "How does Argus ensure RECO compliance?",
      a: "Our system is audited quarterly by legal experts to ensure all AI interactions adhere to the latest RECO guidelines, OREA standards, and provincial disclosure requirements."
    },
    {
      q: "Is there a limit to the number of leads Argus can handle?",
      a: "No. Argus is built on a scalable cloud infrastructure designed to handle everything from boutique Yorkville teams to the city's largest luxury brokerages."
    },
    {
      q: "Does Argus provide automated follow-ups?",
      a: "Yes, but with a luxury touch. Argus crafts bespoke, high-value follow-up sequences that provide market intelligence rather than generic 'checking in' messages."
    },
    {
      q: "Can I customize the AI's personality to match my brand?",
      a: "Yes. During onboarding, we calibrate the AI's 'voice' to match your brokerage's specific brand identity—from ultra-formal to modern-minimalist."
    },
    {
      q: "How does Argus track 'Market Velocity'?",
      a: "Velocity is tracked by monitoring the speed of capital movement, inquiry density, and off-market activity within specific micro-neighborhoods like King West or Summerhill."
    },
    {
      q: "What kind of support is provided to brokers?",
      a: "Every brokerage is assigned a dedicated Intelligence Partner who provides monthly performance audits and strategy sessions to maximize your neural network's output."
    },
    {
      q: "Is my data used to train other brokers' models?",
      a: "Never. Your brokerage's data is siloed in a private instance. While Argus learns from general market trends, your specific client insights remain your exclusive competitive advantage."
    },
    {
      q: "How does Argus identify 'High-Intent' buyers?",
      a: "By analyzing 50+ behavioral markers—including the depth of financial inquiries, specific architectural interests, and historical transaction patterns."
    },
    {
      q: "What is the cost of the Argus platform?",
      a: "Pricing is bespoke and based on brokerage size and neighborhood focus. We invite you to Request Access for a private consultation and quote."
    }
  ];

  return (
    <section className="py-32 px-6 bg-luxury-bg border-t border-luxury-ink/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-serif mb-6 text-luxury-ink">Intelligence Briefing</h2>
          <p className="text-luxury-ink/60 uppercase tracking-[0.3em] text-xs font-bold">Frequently Asked Questions</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {faqs.map((faq, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <h4 className="text-lg font-serif mb-4 text-luxury-ink group-hover:text-luxury-gold transition-colors leading-tight">
                {faq.q}
              </h4>
              <p className="text-sm text-luxury-ink/70 leading-relaxed">
                {faq.a}
              </p>
            </motion.article>
          ))}
        </div>
        
        {/* JSON-LD FAQ Schema for AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
};

const Footer = ({ onOpenLegal, onOpenRequest }: { onOpenLegal: (type: string) => void, onOpenRequest: () => void }) => (
  <footer className="relative py-32 px-6 bg-luxury-ink text-white overflow-hidden">
    {/* Atmospheric Background */}
    <div className="absolute inset-0 z-0 opacity-70">
      <img 
        src="https://i.ibb.co/2YcTW4Dq/qwen-image-prompt-extend-a-Prompt-A-profession.png" 
        alt="Luxury Real Estate" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-ink via-luxury-ink/70 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto border-b border-white/10 pb-16 mb-20">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        <span className="text-xs uppercase tracking-[0.5em] font-bold">Sotheby's</span>
        <span className="text-xs uppercase tracking-[0.5em] font-bold">Engel & Völkers</span>
        <span className="text-xs uppercase tracking-[0.5em] font-bold">Chestnut Park</span>
        <span className="text-xs uppercase tracking-[0.5em] font-bold">Harvey Kalles</span>
        <span className="text-xs uppercase tracking-[0.5em] font-bold">Royal LePage</span>
      </div>
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
        {/* Brand Section */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 border-2 border-luxury-gold flex items-center justify-center text-luxury-gold font-serif text-3xl">A</div>
              <div className="text-4xl font-serif tracking-[0.2em] uppercase font-bold text-white">Argus</div>
            </div>
            <p className="text-lg text-white leading-relaxed max-w-md font-light">
              The definitive AI concierge for Toronto's most prestigious real estate brokerages. 
              Engineering discretion, intelligence, and legacy since 2006.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-[0.6em] text-luxury-gold/80 font-bold">Built for the Top 1%</span>
            </div>
          </div>
          
          <div className="flex gap-6">
            {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold hover:text-luxury-ink transition-all duration-500 group">
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          <div className="pt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenRequest}
              className="px-10 py-4 bg-luxury-gold text-luxury-ink rounded-full text-xs uppercase tracking-[0.3em] font-bold shadow-2xl hover:bg-white transition-colors"
            >
              Request Credentials
            </motion.button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-8">
            <h5 className="text-sm uppercase tracking-[0.4em] text-white font-bold font-serif border-b border-white/20 pb-4">Intelligence</h5>
            <ul className="space-y-5 text-sm text-white">
              <li><a href="#intelligence" className="hover:text-luxury-gold transition-colors block">Market Pulse</a></li>
              <li><a href="#intelligence" className="hover:text-luxury-gold transition-colors block">Valuation AI</a></li>
              <li><a href="#intelligence" className="hover:text-luxury-gold transition-colors block">Heritage Analytics</a></li>
              <li><a href="#intelligence" className="hover:text-luxury-gold transition-colors block">Velocity Tracking</a></li>
              <li><a href="/dashboard" className="text-luxury-gold font-bold hover:underline block">Broker Dashboard</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="text-sm uppercase tracking-[0.4em] text-white font-bold font-serif border-b border-white/20 pb-4">Brokerage Hubs</h5>
            <ul className="space-y-5 text-sm text-white">
              <li className="flex items-center gap-3 hover:text-luxury-gold transition-colors cursor-default"><MapPin size={14} className="text-luxury-gold" /> Yorkville</li>
              <li className="flex items-center gap-3 hover:text-luxury-gold transition-colors cursor-default"><MapPin size={14} className="text-luxury-gold" /> Bridle Path</li>
              <li className="flex items-center gap-3 hover:text-luxury-gold transition-colors cursor-default"><MapPin size={14} className="text-luxury-gold" /> Forest Hill</li>
              <li className="flex items-center gap-3 hover:text-luxury-gold transition-colors cursor-default"><MapPin size={14} className="text-luxury-gold" /> Rosedale</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="text-sm uppercase tracking-[0.4em] text-white font-bold font-serif border-b border-white/20 pb-4">The Report</h5>
            <div className="space-y-6">
              <p className="text-sm text-white/80 leading-relaxed">
                Subscribe to our quarterly intelligence report on Toronto's HNW behavioral shifts.
              </p>
              <form 
                action="https://formspree.io/f/xjgaoqgk" 
                method="POST"
                className="relative group"
              >
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Private Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-xs focus:outline-none focus:border-luxury-gold transition-all placeholder:text-white/20 text-white"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-luxury-gold text-luxury-ink rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance & Legal Footer */}
      <div className="pt-20 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
          <div className="md:col-span-4 space-y-6">
            <h6 className="text-sm uppercase tracking-[0.4em] text-white font-bold font-serif">Compliance</h6>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs uppercase tracking-[0.2em] text-white">
              <button onClick={() => onOpenLegal('reco')} className="hover:text-luxury-gold transition-colors text-left">RECO Compliant</button>
              <button onClick={() => onOpenLegal('orea')} className="hover:text-luxury-gold transition-colors text-left">OREA Member</button>
              <button onClick={() => onOpenLegal('crea')} className="hover:text-luxury-gold transition-colors text-left">CREA Verified</button>
              <button onClick={() => onOpenLegal('accessibility')} className="hover:text-luxury-gold transition-colors text-left">AODA Standards</button>
            </div>
          </div>
          
          <div className="md:col-span-4 space-y-6">
            <h6 className="text-sm uppercase tracking-[0.4em] text-white font-bold font-serif">Legal</h6>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs uppercase tracking-[0.2em] text-white">
              <button onClick={() => onOpenLegal('privacy')} className="hover:text-luxury-gold transition-colors text-left">Privacy Policy</button>
              <button onClick={() => onOpenLegal('terms')} className="hover:text-luxury-gold transition-colors text-left">Terms of Use</button>
              <button onClick={() => onOpenLegal('cookies')} className="hover:text-luxury-gold transition-colors text-left">Cookie Policy</button>
              <button onClick={() => onOpenLegal('dmca')} className="hover:text-luxury-gold transition-colors text-left">DMCA Notice</button>
              <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-luxury-gold transition-colors text-left">Legal Disclaimer</button>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6 md:text-right">
            <h6 className="text-sm uppercase tracking-[0.4em] text-white font-bold font-serif">Headquarters</h6>
            <p className="text-xs uppercase tracking-[0.2em] text-white leading-loose">
              100 Yorkville Avenue, Suite 200<br />
              Toronto, Ontario M5R 1B9<br />
              <span className="text-white font-bold">By Appointment Only</span>
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs uppercase tracking-[0.2em] text-white/60 text-center md:text-left font-medium">
            © 2026 Argus Intelligence. All Rights Reserved. <br className="md:hidden" />
            Toronto's Premier Real Estate Neural Network.
          </div>
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-12 bg-white/20"></div>
            <div className="text-sm uppercase tracking-[0.5em] text-white italic font-serif font-bold">
              Discretion is our heritage.
            </div>
            <div className="h-[1px] w-12 bg-luxury-gold/20"></div>
          </div>
        </div>
      </div>
    </motion.div>
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

const RequestModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send data to a backend here
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
      onClick={() => {
        onClose();
        setTimeout(() => setSubmitted(false), 300);
      }}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        className="bg-luxury-bg w-full max-w-lg rounded-[2rem] p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden border border-luxury-ink/5"
        onClick={e => e.stopPropagation()}
      >
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-50"></div>
        
        <button 
          onClick={() => {
            onClose();
            setTimeout(() => setSubmitted(false), 300);
          }} 
          className="absolute top-8 right-8 text-luxury-ink/30 hover:text-luxury-ink transition-all hover:rotate-90 duration-300"
        >
          <X size={28} />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-12">
              <div className="w-20 h-20 rounded-full bg-luxury-gold/5 flex items-center justify-center text-luxury-gold mx-auto mb-6 border border-luxury-gold/10">
                <ShieldCheck size={40} strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl font-serif text-luxury-ink mb-4 tracking-tight">Request Private Access</h2>
              <p className="text-sm text-luxury-ink/50 max-w-xs mx-auto leading-relaxed">
                Entry to the Argus network is strictly vetted to maintain the integrity of our high-net-worth intelligence.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-luxury-ink/60 font-bold ml-4">Full Legal Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-white border border-luxury-ink/10 rounded-full px-8 py-4 text-sm focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/5 transition-all placeholder:text-luxury-ink/20" 
                  placeholder="e.g. Alexander Sterling" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-luxury-ink/60 font-bold ml-4">Brokerage / Institution</label>
                <input 
                  type="text" 
                  required 
                  className="w-full bg-white border border-luxury-ink/10 rounded-full px-8 py-4 text-sm focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/5 transition-all placeholder:text-luxury-ink/20" 
                  placeholder="e.g. Sotheby's International Realty" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-luxury-ink/60 font-bold ml-4">Professional Email</label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-white border border-luxury-ink/10 rounded-full px-8 py-4 text-sm focus:outline-none focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/5 transition-all placeholder:text-luxury-ink/20" 
                  placeholder="alexander@brokerage.com" 
                />
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full py-5 bg-luxury-ink text-luxury-bg rounded-full text-xs uppercase tracking-[0.3em] hover:bg-luxury-gold hover:text-luxury-ink transition-all duration-500 font-bold shadow-xl hover:shadow-luxury-gold/20 flex items-center justify-center gap-3 group"
                >
                  Apply for Credentials
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <p className="text-[9px] text-center text-luxury-ink/30 uppercase tracking-widest">
                By submitting, you agree to our non-disclosure protocols.
              </p>
            </form>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mx-auto mb-8 border border-emerald-100">
              <CheckCircle2 size={48} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-serif text-luxury-ink mb-4">Application Received</h2>
            <p className="text-sm text-luxury-ink/60 leading-relaxed max-w-xs mx-auto mb-10">
              Your credentials are being verified by our intelligence partners. A concierge will contact you via your professional email within 24 hours.
            </p>
            <button 
              onClick={() => {
                onClose();
                setTimeout(() => setSubmitted(false), 300);
              }}
              className="px-12 py-4 border border-luxury-ink/10 rounded-full text-xs uppercase tracking-widest hover:bg-luxury-ink hover:text-luxury-bg transition-all font-bold"
            >
              Return to Briefing
            </button>
          </motion.div>
        )}
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!isOpen ? {
          y: [0, -10, 0],
          boxShadow: [
            "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            "0 20px 35px -5px rgba(184, 134, 11, 0.4)",
            "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
          ]
        } : { y: 0 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-luxury-gold text-black rounded-full shadow-2xl flex items-center justify-center group relative overflow-hidden border border-white/20"
      >
        {/* Subtle inner glow effect */}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-white rounded-full"
        />
        
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
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
  const [isRequestOpen, setIsRequestOpen] = useState(false);

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
      <Navbar onOpenRequest={() => setIsRequestOpen(true)} />
      <main>
        <Hero onOpenRequest={() => setIsRequestOpen(true)} />
        <ProofSection />
        <Intelligence />
        <TrustSection />
        <FAQ />
      </main>
      <Footer onOpenLegal={setLegalType} onOpenRequest={() => setIsRequestOpen(true)} />
      <ChatWidget />
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
      <RequestModal isOpen={isRequestOpen} onClose={() => setIsRequestOpen(false)} />
    </div>
  );
}
