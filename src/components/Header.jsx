function Header({ onOpenModal }) {
  return (
    <header className="flex justify-between items-center py-4 border-b border-zinc-900 mb-8">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#ff2a2a] flex items-center justify-center font-black text-black text-lg tracking-tighter shadow-lg shadow-[#ff2a2a]/30">
          DT
        </div>
        <span className="font-black text-xl tracking-tight text-white uppercase">
          ECOSSISTEMA<span className="text-[#ff2a2a]">.</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-zinc-500 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          SYSTEM_ONLINE v2.6
        </span>
        <button 
          onClick={onOpenModal}
          className="text-xs font-mono font-bold uppercase tracking-wider border border-[#ff2a2a] text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-black px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
        >
          Submeter Pitch
        </button>
      </div>
    </header>
  );
}

export default Header;