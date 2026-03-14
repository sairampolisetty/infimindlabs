export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-black text-slate-800 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300">
      <main className="w-full overflow-hidden">
        {/* Header Section */}
        <section className="relative px-6 py-24 md:py-32 max-w-[1440px] mx-auto min-h-[50vh] flex flex-col justify-center bg-black">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="liquid-blob top-[-20%] left-[-10%] opacity-40 dark:opacity-20 animate-pulse"></div>
            <div className="liquid-blob-2 bottom-[-10%] right-[-10%] opacity-30 dark:opacity-15" style={{ animationDelay: '-10s' }}></div>
          </div>
          <div className="relative z-10 max-w-4xl space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white">
              Building intelligent <br /> systems for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">future.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              We are a dedicated team of engineers, researchers, and creators pushing the boundaries of what is possible with enterprise artificial intelligence.
            </p>
          </div>
        </section>

        {/* Vision / Info Section */}
        <section className="px-6 py-24 max-w-[1440px] mx-auto bg-white dark:bg-charcoal/30">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">Our Mission</h2>
              <div className="h-1.5 w-24 bg-primary mb-8 rounded-full"></div>
              <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium mb-6">
                To engineer sovereign, scalable, and secure AI orchestration platforms that empower enterprises to operate at the edge of innovation.
              </p>
              <p className="text-slate-500 max-w-xl">
                Founded on the principle that powerful AI should be accessible, adaptable, and deeply integrated into core business logic without compromising security.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 dark:bg-charcoal p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center">
                 <h3 className="text-4xl font-black text-primary mb-2">2023</h3>
                 <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Founded</p>
              </div>
              <div className="bg-slate-100 dark:bg-charcoal p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center">
                 <h3 className="text-4xl font-black text-primary mb-2">Global</h3>
                 <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Footprint</p>
              </div>
              <div className="bg-slate-100 dark:bg-charcoal p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center col-span-2">
                 <h3 className="text-4xl font-black text-charcoal dark:text-white mb-2">Innovation First</h3>
                 <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Core Value</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid (4 members) */}
        <section className="px-6 py-24 max-w-[1440px] mx-auto relative group dark:bg-black">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Leadership</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal dark:text-white mb-6 tracking-tight">Meet the Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col group/card">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-slate-200 dark:bg-slate-800 relative group-hover/card:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img alt="Portrait of Zaid Ahmad, CEO" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvCAcTVLU6WKsybUj6hLePFrlpgAt8fzV_R7nHlzC80BAK6IVMebolpnBM6brH3_NG3e3KLvFzdeDr9nWV-SpSVhK1wAj3fhI73QW8relGOnyaymIJOdOfDDrJ3i-wPFZi8n5YDJrIEvQYfj707D1DqAFMPHJdCe3wGtHUKfZCbtKR-xndm1I8X3OXH0T57Lx4Cqroi5biiRZ6bj5Z_H2lXUNpN7VgFAGR-BT7m-uKWzpioTYi-kNfDrNPQ12gq7xYDQQUcFLJDBLH" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">Zaid Ahmad</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">CEO & Co-Founder</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                Strategic visionary focused on aligning our engineering output with complex enterprise market needs.
              </p>
            </div>

            <div className="flex flex-col group/card lg:mt-12">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-slate-200 dark:bg-slate-800 relative group-hover/card:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img alt="Portrait of Omar Farooq, CTO" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfZMW52P-qdNSNOM5B9VRll1x9lztImDnxafCoJc5rhvrnptHcupt6TylfB0EvNWJ3oQXxFHk2G_qBcfEQHT7RKN2K-3nuyXZlOeZJsDLajTTsMjrbqaiYipeWynw5_qa2qi8u-TpZlpa0yBgyVegip1M0KrCtCyJxHBdaP41N4bWEM_GI4ONychUaqyJcEXkEV_JyrsXnFmoZEPwqjCcy16BC5bA-s_MrYQS7_W4K07bMjd1YC3icWcOLv3mbgRAiuBTwMwlmja6I" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">Omar Farooq</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">CTO & Co-Founder</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                Architect behind the high-performance distributed systems, Ray orchestrations, and secure multi-agent swarms.
              </p>
            </div>

            <div className="flex flex-col group/card">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-slate-200 dark:bg-slate-800 relative group-hover/card:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img alt="Portrait of Lina Noori, AI Ethics Lead" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_BC8Up42eKX-eTCgkPxWK2UPRoOBu49_60vDc3l69QgnWJlN9vOlZLJeQGaibWgnKN5A9q92C3yT4v_Y7k3BwfVhChJwlXeO9q_zPGq2esO0ZvLY5hCGYSGtCbkzBaaCrYyjJPiQ71-d2GmGyxbKKs_DyySbZGfERZ8Ip2982LipCdEJzlV43DTd4nkRtulGoIolgBM2lCjiBgkvjU59RcUNEoatZ9XFnFbSWWcZJzL0DZCun3Of4LGc9OanNeLcQX4o6anTjFjO" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">Dr. Lina Noori</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">VP of Operations</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                Ensuring seamless MLOps delivery, cloud infrastructure scaling, and maintaining our 99.99% uptime guarantees.
              </p>
            </div>

            <div className="flex flex-col group/card lg:mt-12">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-slate-200 dark:bg-slate-800 relative group-hover/card:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img alt="Portrait of Alex Chen, Head of Data" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2600&auto=format&fit=crop" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">Marcus Thorne</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Head of AI Engineering</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                Leads the development of LangChain pipelines, Pinecone vector stores, and advanced hybrid RAG systems.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
