// Get references to the HTML elements we'll be working with
const navLinks = document.querySelectorAll("nav li a");
const contentSections = document.querySelectorAll("main section");
const footerYear = document.getElementById("footer-year");

// Loop through the navigation links and add click event listeners
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // Remove the "active" class from all navigation links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    // Add the "active" class to the clicked navigation link
    link.classList.add("active");
    // Get the ID of the corresponding content section
    const sectionId = link.getAttribute("href").substring(1);
    // Loop through the content sections and show/hide them as needed
    contentSections.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
});

// Set the footer year dynamically
const currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;
