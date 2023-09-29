// Your code here

let dodger;

function moveDodgerLeft() {
  const currentLeft = parseInt(dodger.style.left) || 0;
  const newLeft = Math.max(0, currentLeft - 10); // Ensure the DODGER doesn't go beyond the left edge
  dodger.style.left = newLeft + 'px';
}

function moveDodgerRight() {
  const currentLeft = parseInt(dodger.style.left) || 0;
  const maxLeft = window.innerWidth - dodger.clientWidth;
  const newLeft = Math.min(maxLeft, currentLeft + 10); 
  dodger.style.left = newLeft + 'px';
}
window.addEventListener('DOMContentLoaded', () => {
  dodger = document.getElementById('dodger');
  dodger.style.left = '180px'; 
});


if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    moveDodgerLeft,
    moveDodgerRight,
  };
}
