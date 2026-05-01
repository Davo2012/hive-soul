function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

const elements = document.querySelectorAll("section, .card");

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});


window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
  } else {
    header.style.boxShadow = "none";
  }
});


const button = document.querySelector(".hero button");

setInterval(() => {
  button.style.transform = "scale(1.05)";
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 300);
}, 2000);