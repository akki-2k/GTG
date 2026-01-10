function toggleAccordion(button) {
  const item = button.parentElement;
  const icon = button.querySelector(".accordion-icon");
  const isActive = item.classList.contains("active");

  // Close all accordion items
  const allItems = document.querySelectorAll(".accordion-item");
  allItems.forEach((accItem) => {
    accItem.classList.remove("active");
    const accIcon = accItem.querySelector(".accordion-icon");
    accIcon.textContent = "+";
  });

  // If the clicked item wasn't active, open it
  if (!isActive) {
    item.classList.add("active");
    icon.textContent = "−";
  }
}
