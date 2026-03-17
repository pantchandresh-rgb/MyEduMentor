// MOBILE MENU
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.onclick = () => {
  nav.classList.toggle("active");
};

// IMAGE SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);

// FORM HANDLING
const form = document.getElementById("leadForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: form[0].value,
    class: form[1].value,
    subject: form[2].value,
    location: form[3].value,
    phone: form[4].value
  };

  localStorage.setItem("lead", JSON.stringify(data));

  successMsg.innerText = "✅ Submitted successfully!";
  form.reset();
});

// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});