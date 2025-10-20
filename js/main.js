document.addEventListener("DOMContentLoaded",()=>{
  const provinces = document.querySelectorAll(".province");

  // Animasi menyala satu per satu
  provinces.forEach((el,i)=>{
    setTimeout(()=>{
      el.style.fill="#FFB800";
      el.style.opacity="1";
      el.style.filter="drop-shadow(0 0 10px #FFB800)";
    }, i*300);
  });

  // Hero text fade in setelah animasi peta selesai
  setTimeout(()=>{
    document.querySelector(".hero-text").style.opacity="1";
  }, provinces.length*300 + 300);
});
