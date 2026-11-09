import React from 'react';

export default function HardSkillsCard({ onOpenModal }) {
  return (
    <div className="lg:col-span-6 bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-l-4 border-l-[#ff2a2a] hover:border-l-rose-500 relative overflow-hidden group">
      
      {/* Glow de fundo */}
      <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ff2a2a]/20 transition-all"></div>

      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <span className="text-xs font-mono font-bold text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 px-3 py-1 rounded-md uppercase">
            // INNOVATION_&_BUSINESS // TECH_HUB
          </span>
          <svg className="w-8 h-8 text-[#ff2a2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Hard Skills & Negócios</h2>
          <h3 className="text-lg font-bold text-[#ff2a2a] mt-1">EvoLab</h3>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            Tem a ideia ou o código, mas falta a regra de negócio? No EvoLab, ajudamos a tirar seu projeto do papel com a mentoria de quem tem mais de 20 anos de mercado. Em troca de uma participação no projeto, transformamos sua ideia em uma startup viável que impulsiona o desenvolvimento social da região.
          </p>
        </div>

        <ul className="space-y-2.5 font-mono text-xs text-zinc-300 pt-2">
          <li className="flex items-center gap-2">
            <span className="text-[#ff2a2a] font-bold">✓</span> <strong className="text-white">Desenvolva Suas Hard Skills</strong> (Evolua em programação, IA e prototipagem 3D em projetos reais)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ff2a2a] font-bold">✓</span> <strong className="text-white">Modelo de Equity & Aceleração</strong> (O EvoLab entra como sócio com infraestrutura e regras de negócio)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ff2a2a] font-bold">✓</span> <strong className="text-white">Tecnologia com Propósito Social</strong> (Sua solução financia diretamente as ações comunitárias e ecológicas da DreamTech)
          </li>
        </ul>
      </div>

      <div className="pt-8 space-y-3">
        <a
          href="https://dreamtech-seven.vercel.app/evolab.html"
          className="w-full py-3.5 px-6 rounded-xl font-bold bg-[#ff2a2a] hover:bg-[#e01f1f] text-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#ff2a2a]/25 group-hover:scale-[1.01]"
        >
          Acelerar no EvoLab &rarr;
        </a>
        <button
          onClick={onOpenModal}
          className="w-full py-2.5 rounded-xl font-mono text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-2 transition-colors border border-zinc-800 hover:border-zinc-700 bg-zinc-950/50 cursor-pointer"
        >
          💻 Submeter Ideia de Negócio / Pitch
        </button>
      </div>

    </div>
  );
}