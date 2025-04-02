export function initTestimonios() {
    const filterButtons = document.querySelectorAll('.testimonio-filter');
    
    if(filterButtons.length > 0) {
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const filterValue = btn.dataset.filter;
          document.querySelectorAll('.testimonio-card').forEach(card => {
            card.style.display = card.classList.contains(filterValue) ? 'block' : 'none';
          });
        });
      });
    }
  
    document.querySelectorAll('.rating').forEach(rating => {
      const stars = rating.textContent.length;
      rating.style.color = stars >= 4 ? '#FFD700' : '#FFA500';
    });
  }