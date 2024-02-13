const navTriggerBtn = document.querySelector("#nav_trigger_btn");
const navMenu = document.querySelector("#nav_menu");

// event listener:
navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-is-open");
});

// scroll reveal animations
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 600,
  // reset: true
});

// hero
sr.reveal(".hero__text", { origin: "top" });

// steps
sr.reveal(".steps__step", { distance: "150px", interval: 100 });

//about
sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__img", { origin: "right", delay: 800 });

// testimonial
sr.reveal(".testimonial__bg", { delay: 800 });
sr.reveal(".testimonial__title");
sr.reveal(".testimonial__slider", { delay: 1000 });

//services
sr.reveal(".service__title");
sr.reveal(".service__subtitle", { delay: 800 });
sr.reveal(".service__grid", { delay: 800 });

// stats
sr.reveal(".stats");
sr.reveal(".stats__item", { distance: "150px", interval: 100 });

// blog
sr.reveal(".blog__title");
sr.reveal(".blog__subtitle", { delay: 800 });
sr.reveal(".blog__item", { distance: "150px", interval: 1000 });

// contact
sr.reveal(".contact__container");
sr.reveal(".contact__text", { delay: 800 });

// footer
sr.reveal(".footer__item");
sr.reveal(".footer__copyright", { distance: "150px", interval: 100 });
