  // Get all the star rating labels
  const starRatingLabels = document.querySelectorAll(".star-rating label");

  // Add event listeners for mouseenter and mouseleave
  starRatingLabels.forEach(label => {
    label.addEventListener("mouseenter", handleMouseEnter);
    label.addEventListener("mouseleave", handleMouseLeave);
  });

  function handleMouseEnter(event) {
    // Get the current hovered label and all labels before it
    const hoveredLabel = event.target;
    const previousLabels = getAllPreviousLabels(hoveredLabel);

    // Change the color of stars before the hovered label
    previousLabels.forEach(label => {
      label.style.color = "orange";
    });
  }

  function handleMouseLeave(event) {
    // Get all the star rating labels and reset their color
    starRatingLabels.forEach(label => {
      label.style.color = "#ccc";
    });
  }

  function getAllPreviousLabels(label) {
    // Get all the labels before the current label
    const previousLabels = [];
    let currentLabel = label.previousElementSibling;
    while (currentLabel) {
      previousLabels.push(currentLabel);
      currentLabel = currentLabel.previousElementSibling;
    }
    return previousLabels;
  }
