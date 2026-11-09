import React from 'react';

export default function SoftSkillsCard() {
  return (
    <div className="lg:col-span-6 bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-l-4 border-l-blue-500 hover:border-l-blue-400 relative overflow-hidden group">
      
      {/* Glow de fundo */}
      <div className="absolute -right-20 -top-20 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-all"></div>

      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md uppercase">
            // HUMAN_DEVELOPMENT // IMPACTO_SOCIAL
          </span>
          <svg className="w-8 h-8 text-blue-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>

        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Soft Skills & Liderança</h2>
          <h3 className="text-lg font-bold text-blue-400 mt-1">Iniciativa DreamTech</h3>
          <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
            Aqui, liderança e inteligência emocional não nascem em apostilas: elas são lapidadas ajudando o próximo e o meio ambiente. Ao executar projetos sociais e ecológicos na comunidade, você desenvolve oratória, ganha postura para pitchs e vira um líder de verdade.
          </p>
        </div>

        <ul className="space-y-2.5 font-mono text-xs text-zinc-300 pt-2">
          <li className="flex items-center gap-2">
            <span className="text-blue-500 font-bold">✓</span> <strong className="text-white">Projetos Sociais & Ecológicos</strong> (Aprendizado através do impacto real)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-500 font-bold">✓</span> <strong className="text-white">Postura para Entrevistas & Pitch</strong> (Comunicação afiada pela vivência)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-500 font-bold">✓</span> <strong className="text-white">Gestão de Pessoas & Empatia</strong> (Liderança construída ajudando o próximo)
          </li>
        </ul>
      </div>

      <div className="pt-8 space-y-3">
        <a
          href="https://dreamtech-seven.vercel.app/index.html"
          className="w-full py-3.5 px-6 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 group-hover:scale-[1.01]"
        >
          Quero Entrar na DreamTech &rarr;
        </a>
        <a
          href="https://www.instagram.com/iniciativadreamtech/"
          target="_blank"
          rel="noreferrer"
          className="w-full py-2.5 rounded-xl font-mono text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-2 transition-colors border border-zinc-800 hover:border-zinc-700 bg-zinc-950/50"
        >
          📺 Ver Ações & Reels no Instagram
        </a>
      </div>

    </div>
  );
}