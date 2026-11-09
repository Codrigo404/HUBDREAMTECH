import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-8 pb-4 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-600">
      <div>
        © 2025 Ecossistema <strong className="text-zinc-400">DreamTech</strong> & <strong className="text-[#ff2a2a]">EvoLab</strong>.
      </div>
      <div className="flex items-center gap-4">
        <a href="https://dreamtech-seven.vercel.app/index.html" className="hover:text-zinc-300">DreamTech</a>
        <span>/</span>
        <a href="https://dreamtech-seven.vercel.app/evolab.html" className="hover:text-zinc-300">EvoLab</a>
        <span>/</span>
        <a href="https://www.instagram.com/iniciativadreamtech/" target="_blank" rel="noreferrer" className="hover:text-[#ff2a2a]">Instagram</a>
      </div>
    </footer>
  );
}