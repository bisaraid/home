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
