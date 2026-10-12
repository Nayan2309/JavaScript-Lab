
(() => {
  "use strict";

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const currentYear = document.getElementById("currentYear");

  // Automatically update the footer year.
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }

  // Mobile navigation.
  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  // Animate elements as they enter the screen.
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px"
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  // Contact form: prepare an email in the visitor's email application.
  const form = document.getElementById("messageForm");
  const status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const data = new FormData(form);

      // IMPORTANT: replace this with your actual email address.
      const recipient = "YOUR_EMAIL@example.com";

      if (recipient === "YOUR_EMAIL@example.com") {
        status.textContent =
          "Setup needed: replace YOUR_EMAIL@example.com in script.js with your real email.";
        status.classList.add("form-status-warning");
        return;
      }

      const body =
        `Name: ${data.get("name")}\n` +
        `Email: ${data.get("email")}\n\n` +
        `${data.get("message")}`;

      const mailtoUrl =
        `mailto:${recipient}` +
        `?subject=${encodeURIComponent(data.get("subject"))}` +
        `&body=${encodeURIComponent(body)}`;

      status.textContent = "Opening your email application…";
      window.location.href = mailtoUrl;
    });
  }
})();
