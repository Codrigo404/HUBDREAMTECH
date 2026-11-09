# 📂 Guia Definitivo do Ecossistema: Para que serve cada pasta?

Este documento serve como o seu **"manual de bordo"** para entender exatamente o papel de cada arquivo e pasta gerada pelo Vite no seu projeto React modular.

---

## 📁 1. `node_modules/` (A Caixa de Ferramentas / Fábrica Pesada)
* **O que é:** É onde ficam instalados todos os códigos das bibliotecas que o seu projeto usa (o próprio React, o Tailwind, o Vite e milhares de outras ferramentas de apoio).
* **Preciso mexer aqui?** **NUNCA.** Esta pasta é gigante, mas ela serve apenas para os bastidores. Quando você envia seu código para o GitHub, você **não** envia essa pasta (ela é baixada de novo com o comando `npm install`).

---

## 📁 2. `public/` (A Garagem de Recursos Estáticos)
* **O que é:** É o lugar onde você guarda arquivos estáticos que não precisam passar pela tradução do React.
* **O que colocar aqui:** Imagens soltas (`logo.png`, `favicon.ico`), PDFs, vídeos ou arquivos de fontes. Tudo o que está aqui pode ser chamado direto pelo caminho raiz (ex: `/logo.png`).

---

## 📁 3. `src/` (O SEU PALCO PRINCIPAL - 99% do seu tempo)
* **O que é:** A pasta onde você realmente escreve o seu site. É o coração do desenvolvimento.
* **O que tem dentro:**
  * **`App.jsx`:** O componente principal da sua página. É aqui que você junta as peças e organiza a estrutura geral.
  * **`main.jsx`:** O arquivo de inicialização. Ele pega o seu `App.jsx` e o injeta dentro da tag `<div id="root"></div>` do arquivo HTML.
  * **`index.css`:** O arquivo global de estilos (onde você configura o Tailwind CSS).
  * **`components/` (A pasta mais importante):** Onde você cria os blocos reutilizáveis do site separados (ex: `Navbar.jsx`, `HardSkillsCard.jsx`, `PitchModal.jsx`).

---

## 📄 4. Os Arquivos da Raiz (A Administração do Projeto)

* **`index.html`:** O arquivo HTML raiz. É extremamente limpo e contém apenas uma `<div id="root"></div>` onde o React desenha o site inteiro.
* **`package.json`:** A **"Lista de Compras"** do projeto. Anota o nome da aplicação, a versão e quais bibliotecas estão instaladas (React, ícones, Tailwind). É aqui que ficam os "scripts" (como `npm run dev`).
* **`package-lock.json`:** O recibo detalhado gerado pelo NPM para garantir que as versões exatas dos pacotes nunca quebrem no seu computador.
* **`vite.config.js`:** O arquivo de configuração do **Vite** (o motor que roda o servidor local e traduz o seu código em tempo real).
* **`.gitignore`:** Um aviso para o Git ignorar pastas pesadas e desnecessárias (como a `node_modules`) na hora de salvar o projeto na nuvem.