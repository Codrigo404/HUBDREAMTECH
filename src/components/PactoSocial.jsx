function PactoSocial({ propostasEvolab, bolsasDreamtech }) {
  return (
    <div className="bento-card rounded-2xl p-6 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 rounded-xl text-[#ff2a2a]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase">// PACTO_DE_TECNOLOGIA_ATIVO</span>
          <h4 className="text-base font-bold text-white">Como o ecossistema se auto-sustenta:</h4>
          <p className="text-xs text-zinc-400 max-w-xl">
            Todo projeto técnico acelerado no EvoLab devolve percentual de tecnologia e recursos para custear as ações sociais de liderança da DreamTech nas comunidades.
          </p>
        </div>
      </div>

      <div className="flex gap-6 font-mono shrink-0">
        <div className="text-center">
          <span className="text-2xl font-black text-[#ff2a2a]">{propostasEvolab}</span>
          <span className="text-[10px] text-zinc-500 block uppercase">Projetos EvoLab</span>
        </div>
        <div className="border-r border-zinc-800"></div>
        <div className="text-center">
          <span className="text-2xl font-black text-blue-400">{bolsasDreamtech}</span>
          <span className="text-[10px] text-zinc-500 block uppercase">Ações Sociais</span>
        </div>
      </div>
    </div>
  );
}

export default PactoSocial;