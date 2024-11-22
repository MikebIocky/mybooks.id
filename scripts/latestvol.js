var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var downloadButton = document.getElementById("downloadButton"); //Download
var prevImageButton = document.getElementById("prevImageButton");
var nextImageButton = document.getElementById("nextImageButton");
var images = Array.from(document.querySelectorAll(".volume-cover")); // Array of images
var currentImageIndex = 0;

images.forEach(image => {
  image.onclick = function() {
    modal.style.display = "block";
    currentImageIndex = images.indexOf(image);
    updateModalContent(); // New function call
  }
});

function updateModalContent() {
  modalImg.src = images[currentImageIndex].dataset.largeImage;
  downloadButton.href = images[currentImageIndex].dataset.largeImage;
  prevImageButton.disabled = currentImageIndex === 0;
  nextImageButton.disabled = currentImageIndex === images.length - 1;

}

// Next image button click handler
nextImageButton.onclick = function() {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      updateModalContent();
    }
}

// Previous image button click handler
prevImageButton.onclick = function() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateModalContent();
  }
}




var span = document.getElementsByClassName("close-modal")[0];
span.onclick = function() {
    modal.style.display = "none";
}

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("keydown", function(event) {
    if (modal.style.display === "block") {
        if (event.key === "Escape") {
            modal.style.display = "none";
        } else if (event.key === "ArrowLeft" && currentImageIndex > 0) {
            currentImageIndex--;
            updateModalContent();
        } else if (event.key === "ArrowRight" && currentImageIndex < images.length - 1) {
            currentImageIndex++;
            updateModalContent();
        }
    }
});