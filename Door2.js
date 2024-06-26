// Оголошення об'єктів гравців і предмету
var pet = document.getElementById('Pet');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var Autodoor = document.getElementById('Stena4');

var isPressedButton = false;

// Перевірка пересічення гравця з предметом
function checkButton() {
  var petRect = pet.getBoundingClientRect();
  var ButtonRect = button3.getBoundingClientRect();

  if (!isPressedButton){
  // Перевірка пересічення з гравцем Pet
  if (isColliding(petRect, ButtonRect)) {
    button3.style.display = 'none'; // Приховуємо предмет
    button4.style.display = 'inline';
    Autodoor.style.display = 'none';
    isPressedButton = true;
    playKnopka();
  }
  else
  {
    button3.style.display = 'inline';
    button4.style.display = 'none';
    Autodoor.style.display = 'inline';
    isPressedButton = false;
}}
}

// Перевірка пересічення двох прямокутників
function isColliding(rect1, rect2) {
  return !(rect1.right < rect2.left || 
           rect1.left > rect2.right || 
           rect1.bottom < rect2.top || 
           rect1.top > rect2.bottom);
}

// Обновлення при кожному кроці
setInterval(checkButton, 100);
