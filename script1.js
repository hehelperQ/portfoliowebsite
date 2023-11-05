const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const modalImage = document.getElementById("modal-image");

const imageUrls = [
    "Shorelight_Culture_of_USA.jpg",
    "images-2.jpeg",
    "92084990.jpg.webp",
    "USA-1.jpg",
    "images.jpeg",
    "institute-banner-usa.webp",
];

function openModal(imageUrl) {
    modal.style.display = "block";
    modalImage.src = imageUrl;
}

function closeModal() {
    modal.style.display = "none";
}


imageUrls.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.addEventListener("click", () => openModal(imageUrl));
    gallery.appendChild(img);
});


modal.addEventListener("click", closeModal);


const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", closeModal);
