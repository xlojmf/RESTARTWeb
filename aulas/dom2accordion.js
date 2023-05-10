const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    title.classList.toggle("active");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
