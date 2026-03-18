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
  slides.forEach(s => s.classList.remove("active"));

  let attempts = 0;

  while (attempts < slides.length) {
    if (slides[index].complete && slides[index].naturalHeight !== 0) {
      slides[index].classList.add("active");
      break;
    }
    index = (index + 1) % slides.length;
    attempts++;
  }

  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);

// FORM HANDLING
const form = document.getElementById("leadForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  successMsg.innerText = "Submitting...";

  const data = {
    name: form[0].value,
    class: form[1].value,
    subject: form[2].value,
    location: form[3].value,
    phone: form[4].value
  };

  fetch("https://script.google.com/macros/s/AKfycbyOW8gA8q8RYN-JqbFxqNiv91ds71-YsRaOkzMmSW7YMhf7UCtT00bYzM3L_JOUZSg-Xw/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(() => {
    successMsg.innerText = "✅ Demo booked successfully!";
    form.reset();
  })
  .catch(() => {
    successMsg.innerText = "❌ Error! Try again.";
  });
});



// SMOOTH SCROLL
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// SCROLL BUTTONS (Book Demo, Get Free Demo)
document.querySelectorAll(".scroll-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector("#contact")
      .scrollIntoView({ behavior: "smooth" });
  });
});

