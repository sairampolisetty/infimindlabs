export default function ProductsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <main className="flex-1">
        <section className="relative h-[450px] w-full flex flex-col justify-center px-6 lg:px-20 overflow-hidden bg-background-dark">
          <div className="absolute inset-0 z-0 overflow-hidden opacity-60">
            <div className="liquid-bg absolute inset-[-20%] w-[140%] h-[140%]" style={{ animation: "liquid-drift 20s ease-in-out infinite" }}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
          <div className="absolute inset-0 z-5 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-20 max-w-2xl">
            <h1 className="text-white text-5xl font-extrabold tracking-tight mb-4 leading-tight">Innovation at the Edge of Intelligence</h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">Exploring the boundaries of cognitive computing and enterprise intelligence with Infimind Labs' proprietary technology stack.</p>
            <div className="flex gap-4">
              <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary border border-primary/30">
                4 Active Projects
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 border border-slate-700">
                Global Reach
              </span>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Portfolio</h2>
              <h3 className="text-slate-900 dark:text-white text-3xl font-bold">Flagship Product</h3>
            </div>
          </div>
          <div className="group @container">
            <div className="flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark shadow-2xl transition-all hover:border-primary/30">
              <div className="lg:w-1/2 relative overflow-hidden aspect-video lg:aspect-auto bg-black">
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10"></div>
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" alt="Futuristic AI interface dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSBH0lPXS58K1gF6tBjJS9WXBvNzKyTJzEMeFeAc73q44YOjIv-gnZiBhD9d6pnoByHAakHcO1vXggktmVIQlkUYWC9GATUrNvW0VF61nlxmnmEkiptj4McBHDNet8bDIV6y2Ilwdhet8hIuJYIpZGy9rfrdmdDTjnt8yqTkChC5Oso0t8PqjUBqTORUt-sEvqAUbkjOgQikO9WlipC2d3XOa8H7xzI6gH56uYXOS-S4EHhNM5tJYM4_FlAwdB2R_cbycdwhGg9kM2" />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <p className="text-primary text-sm font-bold tracking-wide uppercase">Featured Case Study</p>
                </div>
                <h4 className="text-slate-900 dark:text-white text-4xl font-black mb-6">Aryana AI</h4>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                  Next-generation cognitive intelligence platform for enterprise decision-making. Aryana AI leverages proprietary LLM architectures to provide real-time insights and predictive analytics with unmatched accuracy.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <p className="text-slate-700 dark:text-slate-300">Custom enterprise LLM trained on secure private datasets.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <p className="text-slate-700 dark:text-slate-300">Real-time predictive forecasting for supply chain optimization.</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-white font-bold transition-all hover:bg-emerald-700">
                    View Case Study
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-8 py-3 text-slate-700 dark:text-slate-300 font-bold transition-all hover:bg-slate-100 dark:hover:bg-slate-800">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-100 dark:bg-surface-dark/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 transition-transform hover:-translate-y-1">
              <div className="size-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-3xl">map</span>
              </div>
              <h4 className="text-slate-900 dark:text-white text-2xl font-bold mb-4">Future Roadmap</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our vision for the next 24 months includes decentralized cognitive agents, multi-modal emotional intelligence interfaces, and seamless edge-to-cloud neural orchestration.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Q3 2026: Alpha Launch of Infimind Edge
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Q1 2027: Neural Security Protocol v2
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-100 dark:bg-surface-dark/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 transition-transform hover:-translate-y-1">
              <div className="size-14 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-slate-900 dark:text-white text-3xl">biotech</span>
              </div>
              <h4 className="text-slate-900 dark:text-white text-2xl font-bold mb-4">Next Market Research</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Infimind Labs is currently conducting intensive research into Quantum-AI hybrid models and their application in high-frequency trading and genomic sequence analysis.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="size-8 rounded-full border-2 border-background-dark object-cover" alt="Researcher 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_BC8Up42eKX-eTCgkPxWK2UPRoOBu49_60vDc3l69QgnWJlN9vOlZLJeQGaibWgnKN5A9q92C3yT4v_Y7k3BwfVhChJwlXeO9q_zPGq2esO0ZvLY5hCGYSGtCbkzBaaCrYyjJPiQ71-d2GmGyxbKKs_DyySbZGfERZ8Ip2982LipCdEJzlV43DTd4nkRtulGoIolgBM2lCjiBgkvjU59RcUNEoatZ9XFnFbSWWcZJzL0DZCun3Of4LGc9OanNeLcQX4o6anTjFjO" />
                  <img className="size-8 rounded-full border-2 border-background-dark object-cover" alt="Researcher 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfZMW52P-qdNSNOM5B9VRll1x9lztImDnxafCoJc5rhvrnptHcupt6TylfB0EvNWJ3oQXxFHk2G_qBcfEQHT7RKN2K-3nuyXZlOeZJsDLajTTsMjrbqaiYipeWynw5_qa2qi8u-TpZlpa0yBgyVegip1M0KrCtCyJxHBdaP41N4bWEM_GI4ONychUaqyJcEXkEV_JyrsXnFmoZEPwqjCcy16BC5bA-s_MrYQS7_W4K07bMjd1YC3icWcOLv3mbgRAiuBTwMwlmja6I" />
                  <img className="size-8 rounded-full border-2 border-background-dark object-cover" alt="Researcher 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvCAcTVLU6WKsybUj6hLePFrlpgAt8fzV_R7nHlzC80BAK6IVMebolpnBM6brH3_NG3e3KLvFzdeDr9nWV-SpSVhK1wAj3fhI73QW8relGOnyaymIJOdOfDDrJ3i-wPFZi8n5YDJrIEvQYfj707D1DqAFMPHJdCe3wGtHUKfZCbtKR-xndm1I8X3OXH0T57Lx4Cqroi5biiRZ6bj5Z_H2lXUNpN7VgFAGR-BT7m-uKWzpioTYi-kNfDrNPQ12gq7xYDQQUcFLJDBLH" />
                </div>
                <span className="text-xs font-medium text-slate-500">12 Expert Researchers leading the study</span>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-primary py-16 px-6 lg:px-20 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-white text-3xl font-black mb-2">Ready to evolve your enterprise?</h2>
              <p className="text-white/80 text-lg">Partner with Infimind Labs for custom AI solutions.</p>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <button className="bg-white text-emerald-900 px-8 py-3 rounded-xl font-bold transition-all hover:bg-slate-100 shadow-xl w-full sm:w-auto">Get in Touch</button>
              <button className="bg-transparent border border-white text-white px-8 py-3 rounded-xl font-bold transition-all hover:bg-white/10 w-full sm:w-auto">Browse Solutions</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
