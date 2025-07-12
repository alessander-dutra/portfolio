// Menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('ativo');
});

// Validação e mensagem de formulário
document.getElementById('form-contato').addEventListener('submit', function (e) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const mensagemDiv = document.getElementById('mensagem');

  mensagemDiv.classList.add('ocultar');

  if (!name.value.trim()) {
    mostrarMensagem('Por favor, preencha seu nome.', 'erro');
    e.preventDefault();
    return;
  }

  if (!email.value.trim() || !isValidEmail(email.value.trim())) {
    mostrarMensagem('Por favor, insira um e-mail válido.', 'erro');
    e.preventDefault();
    return;
  }

  if (!message.value.trim()) {
    mostrarMensagem('Por favor, escreva uma mensagem.', 'erro');
    e.preventDefault();
    return;
  }

  mostrarMensagem('Mensagem enviada com sucesso!', 'sucesso');
});

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function mostrarMensagem(texto, tipo) {
  const mensagemDiv = document.getElementById('mensagem');
  mensagemDiv.textContent = texto;
  mensagemDiv.className = 'mensagem ' + tipo;
  mensagemDiv.classList.remove('ocultar');

  setTimeout(() => {
    mensagemDiv.classList.add('ocultar');
  }, 5000);
}