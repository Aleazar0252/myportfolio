document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      navLinks.classList.remove("active");

      const targetId = this.getAttribute("href");
      if (targetId === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  const skillBars = document.querySelectorAll(".skill-progress");

  function animateSkillBars() {
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (barPosition < screenPosition) {
        bar.style.width = width;
      }
    });
  }

  animateSkillBars();

  window.addEventListener("scroll", animateSkillBars);

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      console.log({ name, email, subject, message });
      alert("Thank you for your message! I will get back to you soon.");

      contactForm.reset();
    });
  }

  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.9)";
      header.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    }
  });
});
