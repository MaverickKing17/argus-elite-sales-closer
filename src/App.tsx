/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ShieldCheck, 
  Target, 
  MessageSquareText, 
  TrendingUp, 
  MapPin, 
  ChevronRight,
  Award,
  CheckCircle2
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
    <div className="text-2xl font-serif tracking-widest uppercase">Argus</div>
    <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-medium">
      <a href="#philosophy" className="hover:opacity-50 transition-opacity">Philosophy</a>
      <a href="#intelligence" className="hover:opacity-50 transition-opacity">Intelligence</a>
      <a href="#trust" className="hover:opacity-50 transition-opacity">Trust</a>
    </div>
    <button className="px-6 py-2 border border-white/30 rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
      Request Access
    </button>
  </nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-20"
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
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 tracking-tight">
            Qualify $100K+ <br />
            <span className="italic">Commissions</span> While You Sleep.
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 text-luxury-ink/70 leading-relaxed">
            Argus is the first AI sales concierge designed exclusively for Toronto's elite brokerages. 
            Discreet, intelligent, and verified by 20 years of local market data.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-luxury-ink text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-luxury-accent transition-colors shadow-xl">
              Request Private Demo
            </button>
            <span className="text-[10px] uppercase tracking-widest text-luxury-ink/40 flex items-center gap-2">
              <ShieldCheck size={14} /> Toronto-Verified Reliability
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-luxury-ink"></div>
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
      </div>
    </section>
  );
};

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
    <p className="text-sm text-luxury-ink/60 leading-relaxed">{description}</p>
  </motion.div>
);

const Intelligence = () => (
  <section id="intelligence" className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <h2 className="text-5xl font-serif mb-8 leading-tight">
            Generative Intelligence <br />
            <span className="italic">for the 1%.</span>
          </h2>
          <p className="text-luxury-ink/70 mb-8 leading-relaxed">
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
              <li key={i} className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 size={16} className="text-luxury-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
            alt="Modern Luxury Interior" 
            className="oval-mask shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -left-10 bg-luxury-ink text-white p-8 rounded-2xl shadow-2xl max-w-[240px]">
            <p className="text-3xl font-serif mb-2">94%</p>
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
  </section>
);

const TrustSection = () => (
  <section id="trust" className="py-32 px-6 bg-luxury-bg border-t border-black/5">
    <div className="max-w-4xl mx-auto text-center">
      <Award size={48} className="mx-auto mb-8 text-luxury-gold opacity-50" />
      <h2 className="text-4xl font-serif mb-8 italic">"The standard for Toronto's elite."</h2>
      <p className="text-lg text-luxury-ink/60 mb-12 leading-relaxed">
        Built on 20 years of local market intelligence, Argus isn't just technology. 
        It's a digital extension of the heritage and trust that Toronto's top 1% of brokers have built over decades.
      </p>
      <div className="flex justify-center gap-12 opacity-40 grayscale">
        <div className="text-xl font-serif tracking-widest">BARRY COHEN</div>
        <div className="text-xl font-serif tracking-widest">HARVEY KALLES</div>
        <div className="text-xl font-serif tracking-widest">CHESTNUT PARK</div>
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-32 px-6 bg-white">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-serif mb-16 text-center">Frequently Asked Questions</h2>
      <div className="space-y-12">
        <div>
          <h4 className="text-xl font-serif mb-4">How does Argus handle high-net-worth privacy?</h4>
          <p className="text-sm text-luxury-ink/60 leading-relaxed">
            Argus operates with bank-grade encryption and a "Discretion-First" protocol. 
            No data is shared with third-party LLMs for training, ensuring your client list remains your most private asset.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-serif mb-4">Is it compatible with Toronto-specific real estate regulations?</h4>
          <p className="text-sm text-luxury-ink/60 leading-relaxed">
            Yes. Argus is pre-configured with RECO compliance guidelines and Toronto-specific disclosure requirements.
          </p>
        </div>
      </div>
      
      {/* JSON-LD FAQ Schema for AEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does Argus handle high-net-worth privacy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Argus operates with bank-grade encryption and a Discretion-First protocol. No data is shared with third-party LLMs for training."
              }
            },
            {
              "@type": "Question",
              "name": "Is it compatible with Toronto-specific real estate regulations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Argus is pre-configured with RECO compliance guidelines and Toronto-specific disclosure requirements."
              }
            }
          ]
        })}
      </script>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 bg-luxury-ink text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-3xl font-serif tracking-widest uppercase">Argus</div>
      <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">
        © 2026 Argus Intelligence. Toronto Luxury Real Estate AI.
      </div>
      <div className="flex gap-8 text-[10px] uppercase tracking-widest">
        <a href="#" className="hover:opacity-50">Privacy</a>
        <a href="#" className="hover:opacity-50">Terms</a>
        <a href="#" className="hover:opacity-50">Contact</a>
      </div>
    </div>
  </footer>
);

export default function App() {
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
        <Intelligence />
        <TrustSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
