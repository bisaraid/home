// Smooth scroll untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Animasi peta Indonesia menyala berurutan
document.addEventListener("DOMContentLoaded", ()=>{
  const provinces = document.querySelectorAll(".province");
  provinces.forEach((el,i)=>{
    setTimeout(()=>{el.style.fill="#FFB800";}, i*150);
  });
});
