// A tiny archive-style interaction layer.
document.addEventListener("DOMContentLoaded", () => {
  const links = [...document.querySelectorAll(".nav a")];
  const sections = [...document.querySelectorAll(".section")];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.style.color = "";
          link.style.borderColor = "";
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.style.color = "#e5e9eb";
            link.style.borderColor = "#252d32";
          }
        });
      }
    });
  }, { rootMargin: "-25% 0px -65% 0px" });

  sections.forEach(section => observer.observe(section));
});
