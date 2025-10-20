document.addEventListener("DOMContentLoaded", () => {
  const provinces = document.querySelectorAll(".province");

  // Animasi peta menyala bertahap
  provinces.forEach((el,i)=>{
    setTimeout(()=>{
      el.style.fill="#FFB800";
      el.style.opacity="1";
      el.style.filter="drop-shadow(0 0 10px #FFB800)";
    }, i*400);
  });

  // Fade in hero text setelah peta animasi
  setTimeout(()=>{
    document.querySelector(".hero-text").style.opacity="1";
  }, provinces.length*400 + 300);

  // Menu liquid interaktif
  const menuPeek = document.getElementById("menuPeek");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuClose = document.getElementById("menuClose");

  menuPeek.addEventListener("click", ()=>{ menuOverlay.classList.add("active"); });
  menuClose.addEventListener("click", ()=>{ menuOverlay.classList.remove("active"); });
});
