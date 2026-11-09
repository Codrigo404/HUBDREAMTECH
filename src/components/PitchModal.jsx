function PitchModal({ isOpen, onClose, onSubmit, submitted }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full p-6 space-y-5 relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white text-xl cursor-pointer"
        >
          ✕
        </button>

        <div className="space-y-1">
          <span className="text-[10px] font-mono text-[#ff2a2a] uppercase">// SUBMIT_YOUR_IDEA</span>
          <h3 className="text-xl font-bold text-white">Submeter Projeto ao EvoLab</h3>
          <p className="text-xs text-zinc-400">Preencha os dados básicos. Analisaremos sua proposta na bancada de sócios.</p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h4 className="text-lg font-bold text-white">Pitch Recebido com Sucesso!</h4>
            <p className="text-xs text-zinc-400 font-mono">Status alterado para: ANALYZING_PITCH</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4 text-xs font-mono">
            <div>
              <label className="block text-zinc-400 mb-1">Seu Nome ou Startup:</label>
              <input required type="text" placeholder="Ex: Lucas / CyberTech" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#ff2a2a]" />
            </div>

            <div>
              <label className="block text-zinc-400 mb-1">E-mail / WhatsApp de Contato:</label>
              <input required type="text" placeholder="(21) 99999-9999" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#ff2a2a]" />
            </div>

            <div>
              <label className="block text-zinc-400 mb-1">Resumo da Ideia ou Projeto:</label>
              <textarea required rows="3" placeholder="Descreva brevemente o problema e a solução técnica..." className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#ff2a2a]"></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-[#ff2a2a] hover:bg-[#e01f1f] text-black font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Enviar Pitch para o EvoLab
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default PitchModal;