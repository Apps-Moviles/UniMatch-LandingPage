document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const burger = document.querySelector('.u-header__burger');
  const nav = document.querySelector('.u-header__nav');
  burger?.addEventListener('click', () => nav.classList.toggle('is-open'));

  // Carousel básico
  const track = document.querySelector('[data-carousel] .carousel__track');
  const prev = document.querySelector('.carousel__btn--prev');
  const next = document.querySelector('.carousel__btn--next');

  const scrollAmount = () => track.clientWidth * 0.8;

  prev?.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });
  next?.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });

  // Toggle idioma ES/EN (texto clave)
  const langButton = document.getElementById('langToggle');
  langButton?.addEventListener('click', () => {
    const isEnglish = langButton.innerText === 'EN';
    langButton.innerText = isEnglish ? 'ES' : 'EN';

    // Header
    const navLinks = document.querySelectorAll('.u-nav a.u-nav__link');
    const hdrMapEn = ['The App','How it works','Screens','FAQs','Team'];
    const hdrMapEs = ['La App','Cómo funciona','Pantallas','FAQs','Equipo'];
    navLinks.forEach((a, i) => a.textContent = isEnglish ? hdrMapEn[i] : hdrMapEs[i]);
    document.querySelector('.u-nav__cta a').textContent = isEnglish ? 'Download' : 'Descargar';

    // Hero
    document.querySelector('.s-hero__title').innerHTML = isEnglish
      ? 'Real projects.<br/> From your phone.'
      : 'Proyectos reales. <br/> Desde tu celular.';
    document.querySelector('.s-hero__subtitle').textContent = isEnglish
      ? 'Apply, chat with companies and deliver without leaving the app.'
      : 'Postula, conversa con empresas y entrega resultados sin salir de la app.';
    const badges = document.querySelectorAll('.store-badge');
    if (badges[0]) badges[0].innerHTML = '<i class="fa-brands fa-apple"></i> ' + (isEnglish? 'App Store':'App Store');
    if (badges[1]) badges[1].innerHTML = '<i class="fa-brands fa-google-play"></i> ' + (isEnglish? 'Google Play':'Google Play');

    // Features title
    const featH = document.querySelector('#features .s-head h2');
    const featP = document.querySelector('#features .s-head p');
    if (featH) featH.textContent = isEnglish ? 'The app that gets you to your first contract' : 'La app que te acerca a tu primer contrato';
    if (featP) featP.textContent = isEnglish ? 'Built for students and recent grads. Simple, direct and ready to use.' : 'Diseñada para estudiantes y recién egresados. Simple, directa y lista para usar.';

    // Feature cards
    const cards = document.querySelectorAll('.card');
    const ctext = isEnglish ? [
      ['Explore opportunities','Discover projects by field, skills or duration. Save and follow.'],
      ['Chat with companies','Clarify doubts, agree deliverables and timelines in-app.'],
      ['Deliver & get rated','Upload progress, receive feedback and build a verified record.'],
      ['Secure payments','Work done, payment released. Protection for both sides.']
    ] : [
      ['Explora oportunidades','Descubre proyectos por carrera, habilidades o duración. Guarda y sigue tus favoritos.'],
      ['Chatea con empresas','Aclara dudas, acuerda entregables y tiempos dentro de la app.'],
      ['Entrega y califica','Sube avances, recibe feedback y construye un historial verificable.'],
      ['Pagos seguros','Trabajo terminado, pago liberado. Protección para ambos.']
    ];
    cards.forEach((card, i) => {
      card.querySelector('h3').textContent = ctext[i][0];
      card.querySelector('p').textContent = ctext[i][1];
    });

    // Flow
    const flowH = document.querySelector('#flow .s-head h2');
    const flowP = document.querySelector('#flow .s-head p');
    if (flowH) flowH.textContent = isEnglish ? 'How it works?' : '¿Cómo funciona?';
    if (flowP) flowP.textContent = isEnglish ? 'Four simple steps from your phone.' : 'Cuatro pasos simples desde tu teléfono.';
    const steps = document.querySelectorAll('.timeline__content');
    const stepsTxt = isEnglish ? [
      ['Create your profile','Upload evidence, courses and past projects. Guided checklist included.'],
      ['Apply in one tap','Filter by pay, duration and mode. Quick letter + portfolio.'],
      ['Align deliverables','Built-in chat, milestones and due dates.'],
      ['Build reputation','Finish, get paid and collect verified ratings.']
    ] : [
      ['Crea tu perfil','Sube evidencias, cursos y proyectos previos. Checklist guiado.'],
      ['Postula en un tap','Filtra por pago, duración y modalidad. Carta rápida + portafolio.'],
      ['Coordina entregables','Chat integrado, hitos y fechas.'],
      ['Construye reputación','Termina, cobra y suma calificaciones verificadas.']
    ];
    steps.forEach((s,i)=>{
      s.querySelector('h3').textContent = stepsTxt[i][0];
      s.querySelector('p').textContent = stepsTxt[i][1];
    });

    // Screens header
    const scrH = document.querySelector('#screens .s-head h2');
    const scrP = document.querySelector('#screens .s-head p');
    if (scrH) scrH.textContent = isEnglish ? 'What you’ll see in the app' : 'Lo que verás en la app';
    if (scrP) scrP.textContent = isEnglish ? 'A few key UniOMatch screens.' : 'Algunas pantallas clave de UniOMatch.';

    // Testimonials
    const tHead = document.querySelector('.s-testimonials .s-head h2');
    const tP = document.querySelector('.s-testimonials .s-head p');
    if (tHead) tHead.textContent = isEnglish ? 'Real stories' : 'Historias reales';
    if (tP) tP.textContent = isEnglish ? 'Results achieved with UniOMatch.' : 'Resultados obtenidos usando UniOMatch.';
    const quotes = document.querySelectorAll('.t-card blockquote');
    const ft = document.querySelectorAll('.t-card footer');
    if (quotes[0]) quotes[0].textContent = isEnglish ? 'I got a 3-week project, completed it and now I’m doing an internship.' : '“Conseguí un proyecto de 3 semanas, lo completé y ahora tengo prácticas.”';
    if (ft[0]) ft[0].textContent = isEnglish ? 'Martin G. – Software Eng.' : 'Martin G. – Ing. de Software';
    if (quotes[1]) quotes[1].textContent = isEnglish ? 'We posted a challenge and in days had valid profiles to execute.' : '“Publicamos un reto y en días ya teníamos perfiles válidos para ejecutar.”';
    if (ft[1]) ft[1].textContent = isEnglish ? 'Laura Z. – Operations, QLab Peru' : 'Laura Z. – Operaciones, QLab Perú';

    // FAQ
    document.querySelector('#faq .s-head h2').textContent = isEnglish ? 'Frequently Asked Questions' : 'Preguntas frecuentes';
    const q = document.querySelectorAll('.faq details summary');
    const a = document.querySelectorAll('.faq details p');
    const Q = isEnglish ? ['Who can apply?','What kind of projects?','Does it cost?','How are payments handled?']
                         : ['¿Quiénes pueden postular?','¿Qué tipos de proyectos hay?','¿La app tiene costo?','¿Cómo es el pago?'];
    const A = isEnglish ? [
      'Students and recent grads with verified profile.',
      'Real projects in innovation, dev, design, data, marketing, and more.',
      'Free for students. Companies pay to post and hire.',
      'Released after milestones are completed. Protection mechanisms included.'
    ] : [
      'Estudiantes y recién egresados con perfil verificado.',
      'Proyectos reales en innovación, desarrollo, diseño, data, marketing y más.',
      'Para estudiantes es gratis. Las empresas pagan por publicar y contratar.',
      'Se libera al completar entregables. Con mecanismos de protección.'
    ];
    q.forEach((el,i)=> el.textContent = Q[i]);
    a.forEach((el,i)=> el.textContent = A[i]);

    // Footer
    const fLinks = document.querySelectorAll('.u-footer__links a');
    const FLen = isEnglish ? ['Home','The App','How it works','Screens','FAQs','Team']
                           : ['Inicio','La App','Cómo funciona','Pantallas','FAQs','Equipo'];
    fLinks.forEach((el,i)=> el.textContent = FLen[i]);
    document.querySelector('.u-footer__copy').textContent = isEnglish
      ? '©2025 UniOMatch • All rights reserved'
      : '©2025 UniOMatch • Todos los derechos reservados';
  });
});
