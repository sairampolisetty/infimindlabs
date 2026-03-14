export default function PartnersPage() {
  return (
    <div className="bg-background-light font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <main>
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden flex items-center min-h-[80vh] bg-charcoal">
          <div className="absolute inset-0 z-0 liquid-bg-partners"></div>
          <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 w-full">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-white text-xs font-mono tracking-widest uppercase">Global Coalition</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Engineering <br/> <span className="text-primary">Ecosystems</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                We partner with telecommunications giants, government bodies, and academic institutions to deploy foundational AI infrastructure where it matters most.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-[0_0_20px_rgba(5,150,105,0.4)]">
                  Become a Partner
                </button>
                <button className="bg-white/5 text-white border border-white/10 px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  View Network
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-3xl overflow-hidden glass-effect aspect-square lg:aspect-[4/3] border border-white/10 p-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/80 to-transparent z-10"></div>
                <img alt="Abstract technical representation of a network grid" className="w-full h-full object-cover rounded-2xl opacity-80 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCqR9B3F4j3S4-9pA-M-iOfA-Nl96gA2oQqqZ8qGzJ5Fq8J5B9A9hB0D2YwB48F6qjA5pZ8P1n0p1QZZQvGvB4yJqN6t6Y5E5yD0C6d95z8Qh_N5E5lqG4W1G1s3uH2YQZ7u-Z2u0L3f8P0zN3m4m3g0H9t6j5Y4uU3W2V1r3e9c5L3r5Y2W9z9E5g4G7n8g2C4m5Y3l7J1n8E4d6y9D" />
                <div className="absolute bottom-8 left-8 z-20">
                  <p className="text-white font-mono text-sm mb-2">Network Density</p>
                  <div className="flex gap-2">
                    <div className="w-16 h-2 bg-primary rounded-full"></div>
                    <div className="w-8 h-2 bg-white/30 rounded-full"></div>
                    <div className="w-4 h-2 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">The Partnership Matrix</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Our technology relies on strong collaboration across four key verticals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-charcoal flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">cell_tower</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Telecommunications</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">Utilizing existing cellular infrastructure for distributed edge computing and low-latency API delivery.</p>
                <div className="text-xs font-mono text-primary font-bold">2 Major Telcos</div>
              </div>
              <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-charcoal flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">volunteer_activism</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">NGOs & Non-Profits</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">Partnering to ensure our language models are ethically grounded and culturally representative.</p>
                <div className="text-xs font-mono text-primary font-bold">5 Active Partnerships</div>
              </div>
              <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-charcoal flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Governments</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">Co-developing data sovereignty protocols and safe AI legislation for emerging digitized economies.</p>
                <div className="text-xs font-mono text-primary font-bold">In-Progress</div>
              </div>
              <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-charcoal flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">domain</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Clients</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">Integrating our core API into localized product offerings for financial, health, and logistics sectors.</p>
                <div className="text-xs font-mono text-primary font-bold">Scale Phase</div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-16 text-center tracking-tight">The Integration Journey</h2>
            <div className="relative border-l-2 border-slate-100 ml-6 md:ml-0 md:border-none space-y-12">
              <div className="absolute hidden md:block w-0.5 bg-slate-100 h-full left-1/2 -ml-px top-0"></div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full">
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-[-29px] md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-white border-4 border-slate-200 group-hover:border-primary transition-colors flex items-center justify-center z-10"></div>
                <div className="w-full md:w-5/12 pl-8 md:pl-0 md:pr-8 group-odd:md:pr-0 group-odd:md:pl-8">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Phase 1</span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Strategic Alignment</h4>
                    <p className="text-slate-600 text-sm">Defining goals, architectural requirements, and establishing cultural/ethical guardrails for the specific deployment region.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full">
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-[-29px] md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-white border-4 border-slate-200 group-hover:border-primary transition-colors flex items-center justify-center z-10"></div>
                <div className="w-full md:w-5/12 pl-8 md:pl-0 md:pr-8 group-odd:md:pr-0 group-odd:md:pl-8">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Phase 2</span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Data & Local Context</h4>
                    <p className="text-slate-600 text-sm">Secure synthesis of proprietary logic with our foundation models. Training on specialized local dialects if required.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full">
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-[-29px] md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-white border-4 border-slate-200 group-hover:border-primary transition-colors flex items-center justify-center z-10"></div>
                <div className="w-full md:w-5/12 pl-8 md:pl-0 md:pr-8 group-odd:md:pr-0 group-odd:md:pl-8">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Phase 3</span>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Infrastructure Deploy</h4>
                    <p className="text-slate-600 text-sm">Setting up the orchestration layer, configuring edge caching, and executing load-balancing protocols.</p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full">
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-[-29px] md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-primary border-4 border-primary/20 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(5,150,105,0.8)]"></div>
                <div className="w-full md:w-5/12 pl-8 md:pl-0 md:pr-8 group-odd:md:pr-0 group-odd:md:pl-8">
                  <div className="bg-charcoal p-6 rounded-2xl border border-emerald-900 text-white shadow-xl">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Phase 4</span>
                    <h4 className="text-lg font-bold mb-2">Go-Live & Scale</h4>
                    <p className="text-slate-400 text-sm">Active monitoring, continuous model refinement based on production telemetry, and horizontal scaling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 bg-charcoal text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Build the Future With Us.</h2>
            <p className="text-slate-400 text-lg mb-10">Whether you provide the compute, the data, or the use-case, Infimind Labs is looking for ambitious partners to scale intelligence globally.</p>
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
              <input type="email" placeholder="partner@yourdomain.com" className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary backdrop-blur-sm" />
              <button type="submit" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors whitespace-nowrap">Start Chat</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
