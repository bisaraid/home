// Efek peta Indonesia menyala bertahap
const regions = document.querySelectorAll('.region');

function lightUpSequentially() {
  regions.forEach((region, i) => {
    setTimeout(() => {
      region.classList.add('glow');
    }, i * 500); // delay 0.5s per region
  });
}

document.addEventListener('DOMContentLoaded', lightUpSequentially);

// Optional: ripple interaktif di card mengikuti mouse
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});
