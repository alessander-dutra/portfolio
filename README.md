# Portfólio Profissional - Alessander Dutra

Portfólio online desenvolvido com HTML, Tailwind CSS e Font Awesome.

🎯 **Product Manager | IA Generativa | Estratégia de Produtos Digitais**

---

## 🌐 Visualizar Online

👉 [https://ale130979.github.io/portfolio-alessander](https://ale130979.github.io/portfolio-alessander)

> (Substitua `ale130979` pelo seu nome de usuário do GitHub)

---

## 🛠️ Tecnologias

- HTML5
- Tailwind CSS (CDN)
- Font Awesome
- Google Fonts

---

## 📁 Estrutura

portfolio-alessander/
├── index.html
├── css/style.css
├── assets/img/profile.jpeg
└── README.md

---

## ⚙️ Nota sobre Tailwind

Este projeto usa o Tailwind CSS via CDN para facilitar o desenvolvimento rápido. A configuração do Tailwind no `index.html` define `darkMode: 'class'` para que o botão de tema funcione corretamente.

Dica de desenvolvimento local (opcional): para reduzir o tamanho em produção e usar classes customizadas, configure o Tailwind com PostCSS e gere um CSS compilado em vez de usar a CDN.

---

## 📨 Configurando o formulário (Formspree)

O formulário de contato do projeto usa o Formspree. Se ao enviar você vê o erro "Form not found — Please check the form hashid", siga estes passos:

1. Acesse <https://formspree.io> e crie uma conta (ou faça login).
1. Crie um novo formulário e copie o endpoint fornecido no formato: `https://formspree.io/f/SEU_HASH`.
1. No arquivo `index.html`, procure a linha do formulário:

```html
<form action="https://formspree.io/f/xxxxxxxx" method="POST">
```

1. Substitua `xxxxxxxx` pelo `SEU_HASH` que o Formspree retornou.

Se preferir não configurar o Formspree, você pode usar um serviço alternativo, um endpoint próprio, ou eu posso adicionar um fallback `mailto:`/simples para testes locais.
