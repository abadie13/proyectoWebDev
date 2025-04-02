
import '../less/main.less';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/modules/testimonios.js';
import '@modules/acerca.js';

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if(menuToggle) {
      menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
      });
    }

    document.querySelectorAll('.testimonio-card, .mv-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
});