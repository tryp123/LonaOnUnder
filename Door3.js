// Оголошення об'єктів гравців і предмету
var pet = document.getElementById('Pet');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
var Autodoor2 = document.getElementById('Stena5');

var isPressedButton2 = false;

// Перевірка пересічення гравця з предметом
function checkButton() {
  var petRect = pet.getBoundingClientRect();
  var ButtonRect2 = button5.getBoundingClientRect();

  if (!isPressedButton2){
  // Перевірка пересічення з гравцем Pet
  if (isColliding(petRect, ButtonRect2)) {
    button5.style.display = 'none'; // Приховуємо предмет
    button6.style.display = 'inline';
    Autodoor2.style.display = 'none';
    isPressedButton2 = true;
    playKnopka();
  }
  else
  {
    button5.style.display = 'inline';
    button6.style.display = 'none';
    Autodoor2.style.display = 'inline';
    isPressedButton2 = false;
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
