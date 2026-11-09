import React from 'react';

export default function Hero() {
  return (
    <section className="text-center py-8 sm:py-12 space-y-5 max-w-4xl mx-auto px-4">
      
      {/* Tag Superior */}
      <span className="inline-block text-xs font-mono font-bold text-red-500 bg-red-500/10 border border-red-500/20 px-4 py-1 rounded-full tracking-wider uppercase">
        // QUAL PORTA VOCÊ QUER ABRIR HOJE?
      </span>

      {/* Título Principal */}
      <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
        Transformamos ideias em startups e voluntários em líderes.
      </h1>

      {/* Subtítulo */}
      <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        Dois caminhos que se conectam. Escolha por onde começar a sua jornada no ecossistema que une tecnologia e transformação social.
      </p>

    </section>
  );
}