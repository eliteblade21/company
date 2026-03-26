const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    mobileNav.hidden = !isOpen;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      mobileNav.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(quoteForm);
    const subject = encodeURIComponent('Quote Request - Junk Removal Muskoka');
    const body = encodeURIComponent(
      [
        `Name: ${data.get('name') || ''}`,
        `Phone: ${data.get('phone') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Address: ${data.get('address') || ''}`,
        '',
        'What needs to go:',
        `${data.get('junk') || ''}`,
      ].join('\n')
    );

    window.location.href = `mailto:junkservicesmuskoka@gmail.com?subject=${subject}&body=${body}`;
  });
}
