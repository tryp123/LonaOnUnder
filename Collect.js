var score = 0;
var man = document.getElementById('Man');
var pet = document.getElementById('Pet');
var collectibles = document.getElementsByClassName('collectible');
function checkCollision() {
  var manRect = man.getBoundingClientRect();
  var petRect = pet.getBoundingClientRect();
  for (var i = 0; i < collectibles.length; i++) {
    var collectibleRect = collectibles[i].getBoundingClientRect();
    if (isColliding(manRect, collectibleRect)) {
      collectibles[i].style.display = 'none';
      increaseScore();
    }
    if (isColliding(petRect, collectibleRect)) {
      collectibles[i].style.display = 'none';
      increaseScore();
    }
  }
}
function isColliding(rect1, rect2) {
  return !(rect1.right < rect2.left || 
           rect1.left > rect2.right || 
           rect1.bottom < rect2.top || 
           rect1.top > rect2.bottom);
}
function increaseScore() {
  score++;к
  playCollect();
  document.getElementById('score').textContent = score;
  var starsContainer = document.getElementById('stars');
  var Monet_text = document.getElementById('No-Monet');
  starsContainer.innerHTML = '';
if (score === 0) {
  Monet_text.style.display = 'block';
} else {
  for (var i = 0; i < Math.min(score, 3); i++) {
    var starImage = document.createElement('img');
    starImage.src = 'materials/coin.png';
    starsContainer.appendChild(starImage);
  }}}
setInterval(checkCollision, 100);