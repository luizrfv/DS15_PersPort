# Portfólio Pessoal — Luiz Ricardo de França Veloso

**Aluno:** Luiz Ricardo de França Veloso  
**Repositório:** [github.com/luizrfv/DS15_PersPort](https://github.com/luizrfv/DS15_PersPort)  
**Link do site publicado (GitHub Pages):** [https://luizrfv.github.io/DS15_PersPort/](https://luizrfv.github.io/DS15_PersPort/)

---

## Descrição do Portfólio

Aplicação web responsiva desenvolvida como evolução do projeto de portfólio pessoal da disciplina de Desenvolvimento de Sistemas. O site apresenta a trajetória profissional e acadêmica de Luiz Ricardo de França Veloso, conectando sua atuação em **Gestão de Produtos e Meios de Pagamento**, sua formação em **Ciências Econômicas (UFABC)** e **Desenvolvimento de Sistemas (ETEC)**, além de projetos práticos em programação, análise de dados e microeconomia aplicada.

A identidade visual foi construída em tons de **Azul Oceano**, transmitindo clareza, confiança e estética tecnológica.

---

## Tecnologias Utilizadas

- **HTML5:** Estruturação semântica das seções (`header`, `nav`, `main`, `section`, `article`, `footer`).
- **CSS3:** Estilização customizada com variáveis CSS (`:root`), gradientes lineares, transições suaves, animações `@keyframes` e efeitos de *hover*.
- **Bootstrap 5.3 & Bootstrap Icons:** Sistema de grid responsivo, barra de navegação fixa (`navbar`), componentes de cartões (`cards`), badges e formulários.
- **JavaScript (ES6+):** Manipulação do DOM para filtragem dinâmica de projetos, controle de estado da navegação e validação interativa do formulário de contato.
- **Git & GitHub Pages:** Versionamento de código e hospedagem estática.

---

## Funcionamento do Projeto

O portfólio é organizado em quatro seções principais acessíveis por meio de um menu de navegação fixo com rolagem suave (*smooth scroll*) e destaque ativo via Bootstrap ScrollSpy:

1. **Perfil:** Apresentação profissional, foto integrada via GitHub, resumo de posicionamento e links de acesso rápido.
2. **Formação & Stack:** Exibição estruturada da formação acadêmica (ETEC, UFABC, Università di Trento e certificação Six Sigma Black Belt) e das ferramentas técnicas organizadas por domínio.
3. **Projetos:** Vitrine de projetos em Python, R (análise microeconômica com microdados da PNAD Contínua), SQL/Power BI e Gestão de Produtos.
4. **Contato:** Canal direto para conexão via GitHub e formulário interativo para envio de mensagens.

---

## Recurso Novo Adicionado

Além da estrutura base vista em aula, foram implementados três incrementos principais:

1. **Filtro Interativo de Projetos por Categoria (JavaScript + CSS):** Barra de filtros que permite alternar em tempo real entre *Todos os Projetos*, *Desenvolvimento*, *Dados & Microeconomia* e *Produto & Processos*, acompanhada de contador dinâmico e animação de entrada (`fadeInUp`).
2. **Nova Seção de Formação Acadêmica & Stack Tecnológica:** Seção dedicada às credenciais acadêmicas e tags interativas de habilidades técnicas.
3. **Microinterações e Formulário com Validação Dinâmica:** Efeitos de elevação (`translateY`) nos cards ao passar o mouse (*hover*) e validação de formulário em JavaScript com feedback visual imediato ao usuário.

---

## Como o Recurso Novo Foi Implementado

- **No HTML (`index.html`):** Cada card de projeto recebeu o atributo personalizado `data-category` (ex.: `data-category="desenvolvimento"`, `data-category="dados"`, `data-category="produto"`), enquanto os botões superiores receberam o atributo `data-filter` correspondente.
- **No CSS (`css/style.css`):** Foi criada a animação `@keyframes fadeInUp` aplicada à classe `.project-item`, além das transições de elevação e borda na classe `.ocean-card:hover` e nas `.skill-tag:hover`.
- **No JavaScript (`js/script.js`):** Um ouvinte de eventos (`addEventListener('click', ...)`) captura o filtro selecionado, compara o valor de `data-filter` com o `data-category` de cada card, alterna a classe utilitária `d-none` do Bootstrap para exibir ou ocultar os itens correspondentes, reinicia a animação de transição e atualiza o contador de projetos visíveis na tela.
