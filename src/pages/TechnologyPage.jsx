export default function TechnologyPage() {
  return (
    <div className="font-display bg-background-light dark:bg-black text-slate-900 dark:text-slate-100 selection:bg-emerald-100 selection:text-emerald-900 transition-colors duration-300">
      <main className="flex flex-col flex-1">
        {/* Hero Section */}
        <section className="relative px-6 md:px-40 py-16 md:py-24 flex flex-col items-center text-center overflow-hidden">
          <div className="liquid-bg-blob bg-primary w-[500px] h-[500px] -top-20 -left-20"></div>
          <div className="liquid-bg-blob bg-slate-300 dark:bg-slate-700 w-[400px] h-[400px] top-1/2 -right-20" style={{ animationDelay: '-5s', animationDuration: '25s' }}></div>
          <div className="relative z-10 max-w-[800px] space-y-6">
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-charcoal dark:text-slate-50">
              Our AI Engineering <span className="text-primary">Core</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal max-w-2xl mx-auto">
              Enterprise-grade intelligence powered by Vertex AI orchestration, LangChain/LangGraph agents, Mistral Large 2 + Llama 3.2 models, Pinecone RAG, Ray distributed serving, and Triton/vLLM inference optimization.
            </p>
          </div>
        </section>

        {/* Architecture Visualization */}
        <section className="px-6 md:px-40 pb-20">
          <div className="relative bg-slate-100 dark:bg-charcoal rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="liquid-bg-blob bg-primary/20 w-full h-full inset-0 rounded-3xl" style={{ filter: 'blur(120px)', animationDuration: '30s' }}></div>
            <h2 className="relative z-10 text-2xl font-bold mb-8 text-charcoal dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">hub</span>
              AI System Architecture
            </h2>
            <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-charcoal/5 dark:bg-black flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-slate-500/5"></div>
              <img alt="AI architecture: LangChain agents, Pinecone vectors, Triton inference pipeline" className="w-full h-full object-cover opacity-60 dark:opacity-30 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDujuQ2p3w18py-0uGnJJItS8SN0DWneoiPcKgGL2FXJ7hpL55gpMwC5qG-E1zQhJv_ohC4Ha0c8vl8NJmyQUBBsJ8MTeC7hqiHiPIamiuyWZ3u0BTXQONvRIb_pBTFS1fyNZW1zf3g0Gk91cP34d2lpMRZouduvmS4F5ZKWPcuThcfrckceSkQcaspDNGOElu_UT0Fc25kdOwTPVxt8ocVzF8Y5x1ZNybo8M5-JDOffjbbQ3rBNPhVvpenWkR9TPnF7W6UOoCeulVt" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                  <div className="bg-white/90 dark:bg-charcoal/90 backdrop-blur p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <p className="text-primary font-bold mb-2">Edge Inference</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Triton + vLLM on-device serving with <strong>Mistral Large 2</strong>.</p>
                  </div>
                  <div className="bg-primary text-white p-6 rounded-xl shadow-lg shadow-primary/20 scale-105 border border-white/10">
                    <p className="font-bold mb-2">Agent Orchestration</p>
                    <p className="text-xs opacity-95"><strong>LangGraph</strong> multi-agent workflows + RAG.</p>
                  </div>
                  <div className="bg-white/90 dark:bg-charcoal/90 backdrop-blur p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <p className="text-primary font-bold mb-2">Scale Layer</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300"><strong>Ray Serve</strong> + Vertex AI for distributed training.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Feature Cards */}
        <section className="px-6 md:px-40 pb-20 max-w-[1920px] mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-charcoal dark:text-white">Core AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white dark:bg-charcoal border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">account_tree</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-white">LangChain Orchestration</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                LangGraph-powered agent swarms with stateful memory, tool calling, and Pinecone/Weaviate RAG for enterprise workflows.
              </p>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-500">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> Multi-agent collaboration</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> Hybrid RAG pipelines</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> Llama 3.2 tool integration</li>
              </ul>
            </div>
            <div className="group p-8 rounded-2xl bg-white dark:bg-charcoal border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">alt_route</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-white">Model Routing & Serving</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Dynamic routing across Mistral Large 2, Llama 3.2, and custom fine-tunes via Ray Serve + Triton for optimal cost/latency.
              </p>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-500">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> vLLM continuous batching</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> PagedAttention optimization</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> GPU/TPU auto-scaling</li>
              </ul>
            </div>
            <div className="group p-8 rounded-2xl bg-white dark:bg-charcoal border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">signal_cellular_alt_1_bar</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal dark:text-white">Vector & Knowledge Layer</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Enterprise RAG with Pinecone serverless indexes, hybrid search, and metadata filtering for production-scale retrieval.
              </p>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-500">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> 1M+ doc indexes</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> Semantic + keyword hybrid</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs text-primary">check_circle</span> Real-time upsert streaming</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="px-6 md:px-40 py-20 bg-slate-50 dark:bg-charcoal/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-charcoal dark:text-white">Production Ready Stack</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Vertex AI MLOps, Kubernetes-orchestrated Ray clusters, and battle-tested inference serving for mission-critical deployments.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-charcoal rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                    <p className="text-2xl font-bold text-primary">99.99%</p>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Inference Uptime</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-charcoal rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                    <p className="text-2xl font-bold text-primary">&lt;100ms</p>
                    <p className="text-xs uppercase tracking-wider text-slate-500">P99 Latency</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-charcoal rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">terminal</span>
                      <span className="font-mono text-sm dark:text-slate-200">REST/gRPC Unified API</span>
                    </div>
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded">v1.2 LIVE</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-charcoal rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">security</span>
                      <span className="font-mono text-sm dark:text-slate-200">SOC2 / Vertex AI Secure</span>
                    </div>
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded">COMPLIANT</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-charcoal rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">box</span>
                      <span className="font-mono text-sm dark:text-slate-200">Ray + K8s Auto-Scale</span>
                    </div>
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded">ENTERPRISE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
