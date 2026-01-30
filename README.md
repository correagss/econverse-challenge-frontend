# 🚀 Econverse frontend challenge

Este projeto foi desenvolvido como parte do desafio técnico para a vaga de **Desenvolvedor Front-End na Econverse**. O objetivo foi criar uma landing page de e-commerce funcional, responsiva e fiel ao layout do Figma (Pixel Perfect).

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **TypeScript**: Utilizado para garantir a tipagem estática e segurança do código.
- **Sass (SCSS)**: Pré-processador utilizado para estilização modularizada, utilizando a metodologia BEM e a nova sintaxe `@use`.
- **Vite**: Ferramenta de build para um ambiente de desenvolvimento rápido.
- **Fetch API**: Para consumo dos dados dinâmicos do JSON.

## 📦 Funcionalidades

- **Vitrine Dinâmica**: Listagem de produtos consumindo um arquivo JSON, com tratamento de preços e parcelamentos.
- **Modal de Visualização Rápida**: Interação ao clicar em um produto, abrindo um modal com detalhes específicos do item selecionado (nome, preço, descrição).
- **Pixel Perfect**: Ajuste rigoroso de cores (Rosa institucional, Azul de destaque e Amarelo CTA), tipografia (Poppins), gaps e sombras conforme as especificações do Figma.
- **Componentização**: Organização do código em componentes reutilizáveis e independentes (Header, Banner, Shelf, Modal, Brands, Footer).

## 🔧 Como rodar o projeto

Siga os passos abaixo para compilar e rodar o projeto em sua máquina local:

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

1- **Entrar na pasta do projeto:**

   cd seu-projeto-econverse

2- **Instalar as dependências:**
    
    npm install

3- **Rodar o ambiente de desenvolvimento:**
   
   npm run dev

4- **Acessar o projeto:**

Abra o seu navegador e acesse: http://localhost:5173

## 📝 Decisões Técnicas e Notas

CORS & JSON Local: Devido a bloqueios de segurança (CORS) na URL original da API em ambiente local, optei por hospedar os dados na pasta /public/products.json. Isso garante que os avaliadores consigam visualizar os dados reais da vitrine sem erros de carregamento.

Sass Architecture: Os estilos foram divididos em módulos (arquivos separados por componente) e centralizados através de um arquivo de variáveis globais, facilitando a manutenção e consistência visual.
HTML Semântico: Uso rigoroso de tags semânticas (header, main, section, nav, footer) visando melhores práticas de SEO e acessibilidade.


Desenvolvido por Gabriel Corrêa.