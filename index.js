const footerParagraph = document.getElementById('footer-paragraph');
const currentDate = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentDate}.`;

const imageContainer = document.getElementById('images-container');

const loadImagesBtn = document.getElementById('load-more-btn');
loadImagesBtn.addEventListener('click', () => {
  imagesNumber = 3;
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < imagesNumber; index++) {
    const newImg = document.createElement('img');
    newImg.src = `https://picsum.photos/250.webp?random=${Math.floor(
      Math.random() * 5000
    )}`;
    newImg.alt = 'random image';
    imageContainer.appendChild(newImg);
  }
}
