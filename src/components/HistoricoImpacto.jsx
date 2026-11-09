import React, { useState } from 'react';

export default function HistoricoImpacto() {
  const [selectedLog, setSelectedLog] = useState(null);

  const historico = [
    {
      id: "LOG_01",
      marco: "LOG_01",
      titulo: "Ações Socioambientais em Campo",
      resumo: "Mutirões ecológicos no Rio da Prata, suporte a comunidades e oficinas de letramento digital presencial.",
      descricaoCompleta: "Execução de iniciativas de impacto direto na Zona Oeste do Rio de Janeiro, incluindo manutenção e ações socioambientais na cabine do INEA no Rio da Prata (Campo Grande), suporte a produtores locais no sítio de caqui e oficinas de segurança digital para a comunidade.",
      tipo: "blue",
      status: "EXECUTADO",
      data: "Maio de 2026",
      local: "Rio da Prata / Sepetiba - RJ",
      metricas: "6+ ações de campo registradas",
      midias: [
        "📸 Registros fotográficos da comunidade",
        "🎥 Reels das ações no Instagram"
      ],
      linkInstagram: "https://www.instagram.com/iniciativadreamtech/"
    },
    {
      id: "LOG_02",
      marco: "LOG_02",
      titulo: "Modelo de Incubação & Equity",
      resumo: "Estruturação das regras de negócio do EvoLab para acelerar MVPs em troca de participação e custeio social.",
      descricaoCompleta: "Modelagem do ecossistema de equity e aceleração tecnológica. O EvoLab entra como sócio em projetos de tecnologia (como a plataforma BioCode), fornecendo arquitetura de software, mentoria técnica e inteligência de negócios. Um percentual do retorno financia diretamente as bolsas e ações sociais da DreamTech.",
      tipo: "red",
      status: "EXECUTADO",
      data: "2026",
      local: "EvoLab Innovation Hub",
      metricas: "Projetos em aceleração ativa",
      midias: [
        "💻 Repositórios & Arquitetura de Software",
        "📊 Modelagem de Equity"
      ],
      linkInstagram: "https://dreamtech-seven.vercel.app/evolab.html"
    },
    {
      id: "LOG_03",
      marco: "LOG_03",
      titulo: "Reconhecimento & Pesquisa (SAFEM)",
      resumo: "Inscrição homologada com sucesso no Programa Jovens Cientistas Cariocas 2026 com o projeto de pesquisa.",
      descricaoCompleta: "Homologação bem-sucedida da documentação e avanço para a etapa de entrevistas no Programa Jovens Cientistas Cariocas 2026 (CIEDS / Prefeitura do Rio). O projeto de pesquisa inscrito (SAFEM - pronuncia-se SAYFEM) foi validado por atender integralmente aos requisitos do edital.",
      tipo: "blue",
      status: "APROVADO / HOMOLOGADO",
      data: "Março - Abril de 2026",
      local: "Rio de Janeiro - RJ",
      metricas: "Projeto selecionado para etapa avaliativa",
      midias: [
        "📄 E-mail de Homologação Oficial (CIEDS)",
        "🔬 Projeto de Pesquisa Científica"
      ],
      linkLinkedin: "https://www.linkedin.com/in/rodrigo-de-oliveira-44966211b/overlay/Honor/1452273161/treasury/?profileId=ACoAAB3RrfkBLGDoacFRV7S5mJ6G6TpPG6qf1h4"
    }
  ];

  return (
    <section className="w-full bento-card rounded-3xl p-6 sm:p-10 border border-zinc-900 bg-zinc-950/60 space-y-8 my-6">
      
      {/* Cabeçalho da Seção */}
      <div className="space-y-2 text-center sm:text-left">
        <span className="text-xs font-mono font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-md uppercase tracking-wider">
          // EXECUTION_LOG
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Log de Execução do Ecossistema
        </h3>
        <p className="text-zinc-400 text-sm max-w-xl">
          Histórico verificado de ações socioambientais e acelerações concluídas. Clique em um log para visualizar os detalhes.
        </p>
      </div>

      {/* Grid de Logs Históricos Clicáveis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {historico.map((item) => {
          const isRed = item.tipo === 'red';
          return (
            <div 
              key={item.id} 
              onClick={() => setSelectedLog(item)}
              className={`p-6 rounded-2xl bg-zinc-900/40 border ${
                isRed 
                  ? 'border-[#ff2a2a]/30 hover:border-[#ff2a2a]' 
                  : 'border-blue-500/30 hover:border-blue-500'
              } transition-all flex flex-col justify-between space-y-4 relative group cursor-pointer hover:scale-[1.02]`}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isRed ? 'text-[#ff2a2a] bg-[#ff2a2a]/10' : 'text-blue-400 bg-blue-500/10'
                  }`}>
                    {item.marco}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 tracking-wider font-bold">
                    ✓ {item.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight pt-1">
                  {item.titulo}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {item.resumo}
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-[11px] font-mono text-zinc-500 group-hover:text-white transition-colors">
                  [ Ver Detalhes + ]
                </span>
                <div className={`h-1 w-16 rounded-full ${
                  isRed ? 'bg-[#ff2a2a]/40 group-hover:bg-[#ff2a2a]' : 'bg-blue-500/40 group-hover:bg-blue-500'
                } transition-colors`}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL DE DETALHES DO LOG */}
      {selectedLog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-2xl rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl">
            
            {/* Botão Fechar */}
            <button 
              onClick={() => setSelectedLog(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white font-mono text-sm bg-zinc-900 border border-zinc-800 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Cabeçalho do Modal */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  selectedLog.tipo === 'red' ? 'text-[#ff2a2a] bg-[#ff2a2a]/10' : 'text-blue-400 bg-blue-500/10'
                }`}>
                  {selectedLog.marco}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  ✓ STATUS: {selectedLog.status}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                {selectedLog.titulo}
              </h3>
            </div>

            {/* Informações de Metadados */}
            <div className="grid grid-cols-2 gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/80 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block uppercase">Período / Data</span>
                <span className="text-zinc-200 font-bold">{selectedLog.data}</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase">Localização</span>
                <span className="text-zinc-200 font-bold">{selectedLog.local}</span>
              </div>
              <div className="col-span-2 border-t border-zinc-800/60 pt-2">
                <span className="text-zinc-500 block uppercase">Métrica de Impacto</span>
                <span className="text-white font-bold">{selectedLog.metricas}</span>
              </div>
            </div>

            {/* Descrição Detalhada */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-zinc-400 uppercase">// REGISTRO_DE_EXECUÇÃO</h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {selectedLog.descricaoCompleta}
              </p>
            </div>

            {/* Mídias & Evidências */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono text-zinc-400 uppercase">// EVIDÊNCIAS_&_REGISTROS</h4>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                {selectedLog.midias.map((m, idx) => (
                  <span key={idx} className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Ações do Modal */}
            <div className="pt-4 border-t border-zinc-900 flex justify-between items-center">
              {selectedLog.linkLinkedin ? (
                <a
                  href={selectedLog.linkLinkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-blue-400 hover:underline flex items-center gap-1"
                >
                  💼 Ver homologação no LinkedIn →
                </a>
              ) : selectedLog.linkInstagram ? (
                <a
                  href={selectedLog.linkInstagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-blue-400 hover:underline flex items-center gap-1 font-bold"
                >

                  📺 Ver registros no EvoLab →
                </a>
              ) : (
                <span className="text-xs font-mono text-zinc-500">
                  🔒 Documentação Interna EvoLab
                </span>
              )}

              <button
                onClick={() => setSelectedLog(null)}
                className="px-4 py-2 text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-colors"
              >
                Fechar Log
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}