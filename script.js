// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Dynamic Project Cards (Optional - for reusable code)
// const projects = [
//   {
//     title: "Netflix UI Clone",
//     description: "A front-end clone of the Netflix UI using HTML and CSS.",
//     img: "projects/netflix-clone.png",
//     liveLink: "#",
//     githubLink: "#"
//   },
//   {
//     title: "Weather App",
//     description: "A weather forecasting app using JavaScript and OpenWeather API.",
//     img: "projects/weather-app.png",
//     liveLink: "#",
//     githubLink: "#"
//   },
  // Add more projects here...


const projectSection = document.querySelector("#projects");

projects.forEach(project => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
    <img src="${project.img}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.liveLink}" target="_blank">View Live</a> | 
    <a href="${project.githubLink}" target="_blank">GitHub</a>
  `;

  projectSection.appendChild(projectCard);
});

// Scroll Animations with Intersection Observer
const sections = document.querySelectorAll("section");

const observerOptions = {
  threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Optional: Observe only once
    }
  });
}, observerOptions);

sections.forEach(section => {
  section.classList.add("hidden"); // Add initial hidden state
  sectionObserver.observe(section);
});

// Form Validation
const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", event => {
  event.preventDefault(); // Prevent form submission for demonstration purposes

  const name = contactForm.querySelector("input[placeholder='Your Name']").value;
  const email = contactForm.querySelector("input[placeholder='Your Email']").value;
  const message = contactForm.querySelector("textarea").value;

  if (name && email && message) {
    alert("Message sent successfully!");
    contactForm.reset();
  } else {
    alert("Please fill in all fields before submitting.");
  }
});

// Back to Top Button (Optional)
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "↑";
backToTopBtn.classList.add("back-to-top");
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
