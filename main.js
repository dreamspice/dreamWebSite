function openGitHub() {
    window.open('https://github.com/dreamspice', '_blank').focus();
}

function openMentor() {
    window.open('https://www.frontendmentor.io/profile/dreamspice', '_blank').focus();
}


gsap.from('.tech-logo', { duration: 3, opacity: 1, rotationX: 360});


document.querySelectorAll(".tech-logo").forEach(function(logo) {
    logo.addEventListener("click", function() {
      gsap.to(".tech-logo", {
        duration: 0.5, 
        opacity: 0, 
        y: -100, 
        stagger: 0.5,
        ease: "back.in"
      });
    });
  });

  gsap.from('.main-container__avatar', { duration: 3, opacity: 1, ease: "powe1.in", y: -200});

  document.querySelectorAll(".main-container__avatar").forEach(function(logo) {
    logo.addEventListener("mouseover", function() {
      gsap.to(".main-container__avatar", {
        duration: 1, 
        opacity: 0, 
        y: -10, 
        ease: "back.in"
      });
    });
  });

  document.querySelectorAll(".my-pages__item--first").forEach(function(logo) {
    logo.addEventListener("mouseover", function() {
      gsap.to(".my-pages__item--first", {
        duration: 2, 
        opacity: 1,
        scale: 0.7, 
        ease: "bounce.out"
      });
    });
  });

  document.querySelectorAll(".my-pages__item--second").forEach(function(logo) {
    logo.addEventListener("mouseover", function() {
      gsap.to(".my-pages__item--second", {
        duration: 2, 
        opacity: 1,
        scale: 0.7, 
        ease: "bounce.out"
      });
    });
  });

  document.querySelectorAll(".my-pages__item--first").forEach(function(logo) {
    logo.addEventListener("mouseleave", function() {
      gsap.to(".my-pages__item--first", {
        duration: 2, 
        opacity: 1,
        scale: 0.4
      });
    });
  });

  document.querySelectorAll(".my-pages__item--second").forEach(function(logo) {
    logo.addEventListener("mouseleave", function() {
      gsap.to(".my-pages__item--second", {
        duration: 2, 
        opacity: 1,
        scale: 0.4
      });
    });
  });


 

