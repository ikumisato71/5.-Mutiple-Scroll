const mountainRange = document.querySelector(".home-mountains img");
const title = document.querySelector("h1");

gsap.to(mountainRange, {
  y: 10,
  scale: 1.2,
  scrollTrigger: {
    trigger: "home-mountains",
    scrub: true,
  },
});

gsap.to(title, {
  y: 500,
  scale: 0.5,
  scrollTrigger: {
    trigger: "home-mountains",
    scrub: true,
  },
});
