/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

function createCarousel() {
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');

  // Left Button
  const leftBtnDiv = document.createElement('div');
  leftBtnDiv.classList.add('left-button');
  leftBtnDiv.textContent = ' < ';
  // Append
  carouselDiv.appendChild(leftBtnDiv);

  // mountain img
  const mtnImg = document.createElement('img');
  mtnImg.src = "./assets/carousel/mountains.jpeg";
  // Append
  carouselDiv.appendChild(mtnImg);

    // computer img
  const compImg = document.createElement('img');
  compImg.src = "./assets/carousel/computer.jpeg";
  //Append
  carouselDiv.appendChild(compImg);

  // trees img
  const treesImg = document.createElement('img');
  treesImg.src = "./assets/carousel/trees.jpeg";
  //Append
  carouselDiv.appendChild(treesImg);

  // turntable img
  const turntableImg = document.createElement('img');
  turntableImg.src = "./assets/carousel/mountains.jpeg";
  //Append
  carouselDiv.appendChild(turntableImg);

  // right button
  const rightBtn = document.createElement('div');
  rightBtn.classList.add('right-button');
  rightBtn.textContent = ' > ';
  //Append
  carouselDiv.appendChild(rightBtn);

  return carouselDiv;
}


carouselContainer.appendChild(createCarousel());