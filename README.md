# 🏠 SafeNest - Protegendo seu amanhã, hoje! 👻

<div align="center">

<img src="https://i.imgur.com/lN3Nq72.png" alt="SafeNest Banner" width="400" height="auto">

**A plataforma de gestão de seguros que vai te dar mais paz que um fantasma bem-comportado!**

[![React](https://img.shields.io/badge/React-18.2.0-%2361DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-%233178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.3.0-%2306B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-%23646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>

## 🎯 Missão Fantasmagórica

> "Transformar a gestão de seguros de vida de algo assustador em uma experiência tão tranquila quanto um fantasma fazendo ioga!"

O **SafeNest** surgiu da necessidade de organizar apólices, clientes, beneficiários e sinistros de forma simples, segura e escalável. Porque a vida já tem imprevistos suficientes - pelo menos suas apólices estarão organizadas! 👻

---

## ✨ Features que Assustam de Tão Boas

### 🏠 **Home Incrível**
- Design moderno com paleta de cores única
- GIF animado mostrando a plataforma em ação
- Call-to-action que realmente funciona
- Humor descontraído (porque seguros podem ser divertidos!)

### 👥 **Gestão de Usuários Completa**
- Dashboard de cadastros intuitivo
- Formulário para cadastrar novos usuários
- Diferentes tipos de usuário (Cliente, Corretor, Administrador)
- Navegação fluida entre as páginas

### 📁 **Sistema de Categorias**
- Página principal para gerenciamento
- Cards visuais para navegação
- Integração preparada para o backend
- Design que segue a identidade visual

### ℹ️ **Sobre Nós que Encanta**
- Timeline da nossa jornada
- Missão, visão e valores destacados
- Equipe "fantasmagórica" apresentada
- Botões que realmente levam a algum lugar!

---

## 🛠️ Ferramentas do Além

### **Frontend Mágico**
```json
{
  "React": "18.2.0",
  "TypeScript": "4.9.5", 
  "Tailwind CSS": "3.3.0",
  "React Router DOM": "6.16.0",
  "Vite": "4.4.5"
}
````
---
## 🎨 Paleta de Cores do Fantasma

````
/* Cores principais da marca */
--primary-light: #36BFB1;    /* Verde água vibrante */
--primary-medium: #038C73;   /* Verde médio */
--primary-dark: #02735E;     /* Verde escuro principal */
--primary-darker: #014034;   /* Verde quase preto */
--neutral-dark: #0D0D0D;     /* Preto elegante */
````
---
## 📁 Organização que Daria Inveja a um Fantasma

````

O projeto é organizado da seguinte forma:

/
|-- public/ # Arquivos estáticos
|-- src/ # Código fonte da aplicação
|   |-- components/ # Componentes reutilizáveis
|   |   |-- apolice/ # Componentes específicos de apólices
|   |   |-- categoria/ # Componentes específicos de categorias
|   |   |-- footer/
|   |   `-- navbar/
|   |-- models/ # Definições de tipos (TypeScript)
|   |   |-- Apolice.ts
|   |   |-- Categoria.ts
|   |   `-- Usuario.ts
|   |-- pages/ # Páginas da aplicação
|   |   |-- apolice/
|   |   |-- cadastro/
|   |   |-- categoria/
|   |   |-- home/
|   |   `-- sobrenos/
|   |-- services/ # Lógica de comunicação com a API
|   |   `-- Service.ts
|   |-- utils/ # Funções utilitárias
|   |   `-- ToastAlerta.ts
|   |-- App.tsx # Componente principal
|   |-- index.css # Estilos globais
|   `-- main.tsx # Ponto de entrada da aplicação
|-- .gitignore
|-- index.html
|-- package.json
|-- README.md
`-- vite.config.ts

````
---

## 🚀 Como Fazer a Mágica Acontecer

Pré-requisitos
Node.js 16+ (fantasmas também evoluem!)

````
npm ou yarn (sua varinha mágica)
````

### 🪄 Passos Mágicos

Clone o repositório
bash
````
git clone https://github.com/Grupo-05-Turma-JavaScript-09/SafeNest-frontend.git
cd SafeNest-frontend
````

Instale as poções mágicas (dependências)
bash
````
npm install
````
Inicie o servidor de desenvolvimento
bash
````
npm run dev
````
Abra seu navegador e visite:
text
http://localhost:5173

## 📦 Comandos Úteis

bash
````
npm run build    # 🏗️  Constroi para produção
npm run preview  # 👀  Pré-visualiza a build
npm run lint     # 🧹  Limpa o código
````

## 🎮 Navegando pelo SafeNest

🧭 Rotas Principais
````
/ - Home - Sua introdução ao SafeNest

/cadastro - Dashboard de Cadastros - Gerencie usuários

/cadastro/usuario - Cadastrar Usuário - Formulário completo

/categoria - Categorias - Organize suas classificações

/sobre-nos - Sobre Nós - Conheça nossa história

/apolice - Apólices - Dashboard de gestão
````

## 🎯 Funcionalidades por Página

O que faz	Destaque?
Home -	Apresentação incrível	GIF animado + humor
Cadastro -	Gestão de usuários	Formulário completo
Categoria -	Organização	Cards visuais
Sobre -	Institucional	Timeline moderna
Apólices -	Dashboard	Navegação intuitiva

## 🤝 Junte-se à Caça Fantasmas (Contribuindo)

📝 Padrões de Commit

bash
````
git commit -m "feat: adiciona nova funcionalidade incrível"
git commit -m "fix: conserta bug assustador" 
git commit -m "style: melhora visual fantasmagórico"
git commit -m "docs: atualiza documentação mágica"
````

## 🔍 Code Review

Siga a paleta de cores do fantasma

Mantenha o humor característico

Teste em diferentes dispositivos

Verifique a acessibilidade

## 🎨 Design System do Fantasma

Princípios de Design
Simplicidade: Interface limpa e intuitiva

Consistência: Mesma paleta na aplicação

Humor: Toques descontraídos que humanizam

Responsividade: Funciona em qualquer dispositivo

Componentes Chave
Navbar: Gradiente verde com navegação fluida

Cards: Bordas arredondadas e sombras suaves

Botões: Efeitos hover e transições suaves

Forms: Validação visual e feedback claro


## 📊 Status do Projeto

✅ Implementado
Estrutura completa do frontend

Design system consistente

Navegação entre páginas

Componentes reutilizáveis

Layout responsivo

Integração com React Router

## 🚧 Em Desenvolvimento

Testes automatizados

Sistema de autenticação

Dashboard com dados reais


## 👻 Equipe Fantasmagórica

"Desenvolvido com ❤️ e um toque de 👻 pelo Grupo 05"

Função	Responsabilidade
Desenvolvedores	Magos do código
Designers	Artistas da experiência
Especialistas	Gurus dos seguros
Fantasma Chefe	Inspiração principal
</div>

⭐ Não esqueça de dar uma estrela no repositório se o SafeNest te deixou mais tranquilo que um fantasma organizado!

---
"Porque a vida já tem sustos suficientes... pelo menos suas apólices estarão organizadas!"

## 🌟 Agradecimento Especial

À Generation Brasil - Onde os Devs Viram Magos! 🧙‍♂️

Um agradecimento fantasmagórico à Generation Brasil por nos equipar com as ferramentas mágicas necessárias para transformar café em código, ideias em interfaces e desafios em conquistas!

Obrigado por:

📚 Ensinamentos que transformam curiosidade em expertise

💼 Oportunidades que abrem portas para o futuro

🤝 Suporte que transforma inseguranças em confiança

🚀 Inspiração para ir além do código


</div>

