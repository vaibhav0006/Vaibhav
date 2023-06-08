// Get all container elements
const containers = document.querySelectorAll(".container");

// Get the draggable image element
const image = document.querySelector(".image");

// Loop through each container
containers.forEach((container) => {
  // Prevent default behavior when dragging over a container
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  // Handle the drop event for each container
container.addEventListener("drop", () => {
  // Append the image to the current container
   container.appendChild(image);
   alert("Success!");
  });
});

// Handle the drop event for the second container and display a success message
containers[1].addEventListener("drop", () => {
  // Check if the image has not been dropped before and the container is different from the current parent of the image
  if (container !== image.parentNode) {
    container.appendChild(image);
  }
  
});
// Reset the page when the "Reset" button is clicked
function reset() {
  window.location.reload();
}
