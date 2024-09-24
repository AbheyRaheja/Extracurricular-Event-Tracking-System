//

const circle = document.querySelector('.circle');

// Assuming you have a function to get the current video frame time
function getCurrentTime() {
  // Return the current video frame time in seconds
}

// Animate the circle's position based on the video frame time
function animateCircle() {
  const currentTime = getCurrentTime();
  const x = Math.sin(currentTime) * 100; // Move the circle horizontally
  const y = Math.cos(currentTime) * 100; // Move the circle vertically
  circle.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(animateCircle);
}

animateCircle();


document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    circle.style.transform = `translate(${x}px, ${y}px)`;
  });