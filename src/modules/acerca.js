export function initAcercaPage() {
    // Animación para los valores
    const valores = document.querySelectorAll('.valor-card');
    valores.forEach((valor, index) => {
      valor.style.animationDelay = `${index * 0.1}s`;
      valor.classList.add('fade-in');
    });
  
    document.querySelectorAll('.miembro').forEach(miembro => {
      miembro.addEventListener('click', () => {
        miembro.querySelector('.miembro-social').classList.toggle('active');
      });
    });
  }