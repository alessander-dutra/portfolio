// js/main.js
document.addEventListener('DOMContentLoaded', function () {
  // Encontra o formulário de contato pela action do Formspree ou pelo seletor geral
  const form = document.querySelector('form[action*="formspree.io"]') || document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    const action = (form.getAttribute('action') || '').trim();

    // Verifica se o action está com o placeholder (xxxxxxxx) ou não aponta para formspree
    if (!action || action.includes('xxxxxxxx')) {
      e.preventDefault();
      // Mensagem amigável no DOM (se existir) ou fallback para alert
      const container = form.querySelector('.form-message') || document.createElement('div');
      container.classList.add('form-message');
      container.style.marginTop = '12px';
      container.style.padding = '12px';
      container.style.borderRadius = '8px';
      container.style.backgroundColor = '#FEF3C7';
      container.style.color = '#92400E';
      container.innerHTML = '<strong>Formulário não configurado:</strong> substitua o atributo <code>action</code> do formulário pelo endpoint do Formspree (ex.: https://formspree.io/f/SEU_HASH). Veja o README para instruções.';

      // Insere a mensagem no formulário (apenas se ainda não estiver anexada)
      if (!form.querySelector('.form-message')) {
        form.appendChild(container);
      }

      // Opcional: rolar até a mensagem
      container.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return false;
    }

    // Se action parece correto, deixa o submit prosseguir normalmente
  });
});
