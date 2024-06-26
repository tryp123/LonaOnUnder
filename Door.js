var pet = document.getElementById('Pet');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var door = document.getElementById('Stena3');

function checkButton() {
  var petRect = pet.getBoundingClientRect();
  var ButtonRect = button1.getBoundingClientRect();

  if (isColliding(petRect, ButtonRect)) {
    button1.style.display = 'none';
    button2.style.display = 'inline';
    door.style.display = 'none';
    playKnopka();
  }
}
function isColliding(rect1, rect2) {
  return !(rect1.right < rect2.left || 
           rect1.left > rect2.right || 
           rect1.bottom < rect2.top || 
           rect1.top > rect2.bottom);
}
setInterval(checkButton, 100);
