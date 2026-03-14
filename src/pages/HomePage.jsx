export default function HomePage() {
  return (
    <div className="bg-white text-charcoal selection:bg-emerald-100 selection:text-emerald-900">
      {/* BEGIN: Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center liquid-bg grid-bg" id="hero">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay fluid-motion pointer-events-none bg-gradient-to-br from-emerald-900/20 via-transparent to-black/40"></div>
        <div className="absolute inset-0 z-0">
          <div className="node-dot absolute top-20 left-1/4 w-3 h-3 bg-primary/40 rounded-full blur-sm"></div>
          <div className="node-dot absolute top-1/3 left-3/4 w-4 h-4 bg-emerald-500/30 rounded-full blur-sm"></div>
          <div className="node-dot absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/20 rounded-full blur-sm"></div>
          <div className="node-dot absolute top-2/3 left-10 w-5 h-5 bg-emerald-400/20 rounded-full blur-sm"></div>
          <div className="node-dot absolute top-10 right-20 w-3 h-3 bg-white/20 rounded-full blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-10">
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Advanced Engineering & AI Research</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            The AI Orchestration & Product Studio for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Real World</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            We design, build, and operate complex AI systems that bridge the gap between global technology and local context. From custom model orchestration to secure edge deployment, we engineer for impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-emerald-700 transition-all text-sm uppercase tracking-widest shadow-2xl" href="#contact">
              Engage the Studio
            </a>
            <a className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/20 font-bold rounded-lg hover:bg-white/5 transition-all text-sm uppercase tracking-widest" href="#capabilities">
              Our Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* BEGIN: Metrics Strip */}
      <section className="bg-charcoal py-12 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 liquid-bg opacity-10 fluid-motion"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-1 font-mono">30M+</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Scale Capability</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary mb-1 font-mono">&lt;2.0s</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Edge Latency</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-1 font-mono">99.9%</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">System Uptime</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-1 font-mono">Hybrid</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Infrastructure</div>
            </div>
          </div>
        </div>
      </section>

      {/* BEGIN: Core Capabilities */}
      <section className="py-32 bg-white relative overflow-hidden" id="capabilities">
        <div className="absolute inset-0 liquid-bg-light opacity-60 fluid-motion pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mb-6 tracking-tight">Core Capabilities</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">We provide end-to-end engineering excellence, transforming theoretical AI into robust, production-ready infrastructure.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group p-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all">
              <div className="w-14 h-14 bg-charcoal text-white rounded-lg flex items-center justify-center mb-8 shadow-lg shadow-emerald-100 group-hover:bg-primary transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9.4-2.593 1.02l-.547.548z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-extrabold text-charcoal mb-4">Strategic AI Consulting</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Navigating the complex landscape of LLM adoption. We define product-market fit, ethical guardrails, and technical roadmaps tailored for high-growth emerging regions.</p>
            </div>
            <div className="group p-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all">
              <div className="w-14 h-14 bg-primary text-white rounded-lg flex items-center justify-center mb-8 shadow-lg shadow-emerald-100">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-extrabold text-charcoal mb-4">Custom LLM Orchestration</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Building the proprietary middle-layer that manages multiple models, handles context injection, and ensures data sovereignty for enterprise applications.</p>
            </div>
            <div className="group p-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100 transition-all">
              <div className="w-14 h-14 bg-charcoal text-white rounded-lg flex items-center justify-center mb-8 shadow-lg shadow-emerald-100 group-hover:bg-primary transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-xl font-extrabold text-charcoal mb-4">Localized Edge Deployment</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Engineering systems optimized for low-bandwidth environments. We deploy robust, low-latency AI agents directly where they are needed, regardless of connectivity hurdles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEGIN: Engineering (Architecture Diagram) */}
      <section className="py-32 bg-charcoal text-white overflow-hidden relative" id="engineering">
        <div className="absolute inset-0 liquid-bg opacity-30 fluid-motion pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">System Architecture</span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">Engineering Built for the <span className="text-primary">Real World</span></h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Generic AI solutions fail in complex markets. Our architecture is purpose-built to handle linguistic nuances, intermittent infrastructure, and the high-performance demands of modern enterprise.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 glass-effect rounded-xl border border-white/5">
                  <h5 className="font-bold text-sm mb-2 font-mono text-primary">Proprietary Guards</h5>
                  <p className="text-slate-400 text-xs">Cultural and safety alignment built into the core logic, not just an API wrapper.</p>
                </div>
                <div className="p-6 glass-effect rounded-xl border border-white/5">
                  <h5 className="font-bold text-sm mb-2 font-mono text-primary">Data Sovereignty</h5>
                  <p className="text-slate-400 text-xs">Architectures that respect local regulations and provide full control over data flow.</p>
                </div>
                <div className="p-6 glass-effect rounded-xl border border-white/5">
                  <h5 className="font-bold text-sm mb-2 font-mono text-primary">Multi-Model Routing</h5>
                  <p className="text-slate-400 text-xs">Intelligent orchestration that chooses the best LLM for the task, cost, and latency.</p>
                </div>
                <div className="p-6 glass-effect rounded-xl border border-white/5">
                  <h5 className="font-bold text-sm mb-2 font-mono text-primary">Edge Optimized</h5>
                  <p className="text-slate-400 text-xs">Lightweight inference protocols designed for sub-optimal network conditions.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-effect p-10 rounded-3xl relative border border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 liquid-bg opacity-5 fluid-motion pointer-events-none"></div>
                <div className="relative z-10 flex items-center justify-between mb-10 border-b border-white/10 pb-6">
                  <h4 className="text-xs font-mono text-primary uppercase tracking-widest">Infimind Orchestration Stack</h4>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                  </div>
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between group hover:border-primary/50 transition-colors">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Presentation Layer</span>
                      <span className="text-sm font-semibold text-white">Native & Web Interfaces</span>
                    </div>
                    <span className="text-[10px] bg-white/10 text-primary px-3 py-1 rounded font-mono">React / Swift</span>
                  </div>
                  <div className="flex justify-center"><svg className="w-5 h-5 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 13l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg></div>
                  <div className="p-6 bg-primary/10 border-2 border-primary/30 rounded-xl flex items-center justify-between shadow-[0_0_30px_rgba(5,150,105,0.1)]">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-primary uppercase font-bold tracking-tighter">Proprietary Core</span>
                      <span className="text-sm font-bold text-white">Infimind Orchestration Layer</span>
                    </div>
                    <span className="text-[10px] bg-primary/40 text-white px-3 py-1 rounded font-mono animate-pulse">Running</span>
                  </div>
                  <div className="flex justify-center"><svg className="w-5 h-5 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 13l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg></div>
                  <div className="p-5 bg-success/5 border border-success/20 rounded-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-success uppercase font-bold tracking-tighter">Alignment Engine</span>
                      <span className="text-sm font-semibold text-white">Linguistic & Cultural Guardrails</span>
                    </div>
                    <span className="text-[10px] bg-success/20 text-success px-3 py-1 rounded font-mono">Active</span>
                  </div>
                  <div className="flex justify-center"><svg className="w-5 h-5 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 13l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg></div>
                  <div className="p-5 bg-slate-800/50 border border-white/5 rounded-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Infrastructure</span>
                      <span className="text-sm font-semibold text-white">Hybrid GPU Cluster Architecture</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">Multi-Cloud</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEGIN: Case Studies */}
      <section className="py-32 bg-slate-50 relative overflow-hidden" id="case-studies">
        <div className="absolute inset-0 liquid-bg-light opacity-40 fluid-motion pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Proven Outcomes</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal tracking-tight">Studio Output</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group relative bg-charcoal p-1 rounded-3xl overflow-hidden shadow-2xl transition-all hover:-translate-y-2 border border-slate-800">
              <div className="bg-charcoal p-10 md:p-14 rounded-[1.4rem] h-full relative overflow-hidden">
                <div className="absolute inset-0 liquid-bg opacity-20 fluid-motion pointer-events-none"></div>
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="space-y-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-md border border-primary/30">Case Study: Flagship Product</span>
                    <h3 className="text-4xl font-extrabold text-white">Aryana AI</h3>
                  </div>
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="w-3 h-3 rounded-full bg-slate-700"></span>
                  </div>
                </div>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed relative z-10">
                  A comprehensive proof-of-concept showing our ability to build localized LLM systems for Afghan languages. Aryana AI serves millions with culturally tuned precision, operating on Infimind's proprietary orchestration layer.
                </p>
                <div className="flex flex-wrap gap-3 mb-12 relative z-10">
                  <span className="text-[10px] font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">NLP: Pashto/Dari</span>
                  <span className="text-[10px] font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">Latency: &lt;1.8s</span>
                  <span className="text-[10px] font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">Scale: 1M+ MAU</span>
                </div>
                <a className="inline-flex items-center space-x-3 text-white font-bold group relative z-10" href="https://aryanaai.com" target="_blank" rel="noreferrer">
                  <span className="border-b-2 border-primary/40 group-hover:border-primary transition-colors uppercase text-xs tracking-widest">Visit Case Site</span>
                  <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </a>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-10 md:p-14 flex flex-col justify-center shadow-sm relative overflow-hidden">
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-8 border border-slate-100">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-charcoal mb-4 uppercase tracking-tight">Venture Expansion</h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">We are currently deploying localized LLM clusters for three new Central Asian markets, providing foundational AI infrastructure for regional digital transformation.</p>
              <div className="space-y-4">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">75% Deployment Phase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEGIN: Partners */}
      <section className="py-24 bg-white border-t border-slate-100" id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-extrabold text-charcoal uppercase tracking-widest">Global Ecosystem</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="bg-slate-50 py-10 rounded-xl text-center border border-slate-100 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 group">
              <div className="text-slate-500 group-hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors">Academic</div>
            </div>
            <div className="bg-slate-50 py-10 rounded-xl text-center border border-slate-100 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 group">
              <div className="text-slate-500 group-hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors">Telecoms</div>
            </div>
            <div className="bg-slate-50 py-10 rounded-xl text-center border border-slate-100 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 group">
              <div className="text-slate-500 group-hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors">NGOs</div>
            </div>
            <div className="bg-slate-50 py-10 rounded-xl text-center border border-slate-100 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 group">
              <div className="text-slate-500 group-hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors">Enterprise</div>
            </div>
            <div className="bg-slate-50 py-10 rounded-xl text-center border border-slate-100 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 group">
              <div className="text-slate-500 group-hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors">Gov Tech</div>
            </div>
            <div className="bg-slate-50 py-10 rounded-xl text-center border border-slate-100 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 group">
              <div className="text-slate-500 group-hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors">Venture</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
