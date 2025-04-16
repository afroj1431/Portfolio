// Basic GSAP animations
gsap.from(".logo", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from("nav a", {
  duration: 1,
  y: -20,
  opacity: 0,
  stagger: 0.2,
  delay: 0.5,
});

gsap.from(".hero h2", { duration: 1, x: -100, opacity: 0, delay: 1 });
gsap.from(".hero p", { duration: 1, x: 100, opacity: 0, delay: 1.5 });