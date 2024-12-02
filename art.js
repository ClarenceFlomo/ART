// Modal for Profile Photo
const profilePhoto = document.getElementById("profilePhoto");
const photoModal = document.getElementById("photoModal");
const closePhotoModal = document.getElementById("closePhotoModal");

profilePhoto.addEventListener("click", () => {
  photoModal.style.display = "flex";
});

closePhotoModal.addEventListener("click", () => {
  photoModal.style.display = "none";
});