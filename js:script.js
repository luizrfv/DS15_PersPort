document.addEventListener('DOMContentLoaded', () => {
  // 1. Sombra dinâmica na barra de navegação ao rolar a página
  const navbar = document.getElementById('navbarPrincipal');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Fechar menu mobile automaticamente ao clicar em um link
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const menuCollapse = document.getElementById('menuNavegacao');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (menuCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(menuCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });

  // 3. Recurso Novo: Filtro interativo de projetos por categoria
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  const contadorProjetos = document.getElementById('contadorProjetos');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Atualiza botão ativo
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      const categoria = button.getAttribute('data-filter');
      let visiveis = 0;

      projectItems.forEach((item) => {
        const itemCategoria = item.getAttribute('data-category');
        if (categoria === 'todos' || itemCategoria === categoria) {
          item.classList.remove('d-none');
          // Reinicia animação CSS
          item.style.animation = 'none';
          item.offsetHeight;
          item.style.animation = null;
          visiveis++;
        } else {
          item.classList.add('d-none');
        }
      });

      contadorProjetos.textContent =
        visiveis === 1
          ? 'Exibindo 1 projeto'
          : `Exibindo ${visiveis} projetos`;
    });
  });

  // 4. Validação e feedback interativo do formulário de contato
  const formContato = document.getElementById('formContato');
  const feedbackContato = document.getElementById('feedbackContato');

  if (formContato) {
    formContato.addEventListener('submit', (event) => {
      event.preventDefault();

      const nome = document.getElementById('nomeContato').value.trim();
      const email = document.getElementById('emailContato').value.trim();
      const assunto = document.getElementById('assuntoContato').value;
      const mensagem = document.getElementById('mensagemContato').value.trim();

      if (!nome || !email || !mensagem) {
        feedbackContato.className = 'alert alert-warning mt-3 mb-0';
        feedbackContato.textContent = 'Por favor, preencha nome, e-mail e mensagem antes de enviar.';
        return;
      }

      feedbackContato.className = 'alert alert-info mt-3 mb-0';
      feedbackContato.innerHTML = `<strong>Mensagem registrada, ${nome}!</strong> Obrigado pelo contato sobre <em>${assunto}</em>. Retornarei em breve pelo e-mail informado.`;
      formContato.reset();
    });
  }
});
