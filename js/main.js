// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Animasi peta Indonesia ala Hello Monday
document.addEventListener("DOMContentLoaded",()=>{
  const provinces=document.querySelectorAll(".province");
  provinces.forEach((el,i)=>{
    setTimeout(()=>{
      el.style.fill="#FFB800";
      el.style.opacity="1";
      el.style.filter="drop-shadow(0 0 10px #FFB800)";
    },i*300);
  });

  // Hero text fade in
  setTimeout(()=>{
    document.querySelector(".hero-text").style.opacity="1";
  },provinces.length*300 + 300);
});
