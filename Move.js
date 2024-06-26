var currentPlayer = 'Man';
var manMovesLeft = 5;
var petMovesLeft = 5;

var currentPlayerText = '';

function updateDisplay() {
  if (currentPlayer === 'Man') {
    currentPlayerText = 'Лона';
  } else {
    currentPlayerText = 'Слизько';
  }
  
  document.getElementById('currentPlayer').textContent = currentPlayerText;
  if (currentPlayer === 'Man') {
    document.getElementById('movesLeft').textContent = manMovesLeft;
  } else {
    document.getElementById('movesLeft').textContent = petMovesLeft;
  }
}

function checkWallCollision(player, direction) {
  var playerRect = player.getBoundingClientRect();
  var obstacles = document.querySelectorAll('[id*="Stena"]');
  var collisionDistance = 10;

  for (var i = 0; i < obstacles.length; i++) {
    var obstacleRect = obstacles[i].getBoundingClientRect();
    switch (direction) {
      case 'ArrowUp':
      case 'w':
        if (playerRect.top <= obstacleRect.bottom + collisionDistance && playerRect.top >= obstacleRect.top &&
            playerRect.left < obstacleRect.right && playerRect.right > obstacleRect.left) {
          return true;
        }
        break;
      case 'ArrowDown':
      case 's':
        if (playerRect.bottom >= obstacleRect.top - collisionDistance && playerRect.bottom <= obstacleRect.bottom &&
            playerRect.left < obstacleRect.right && playerRect.right > obstacleRect.left) {
          return true;
        }
        break;
      case 'ArrowLeft':
      case 'a':
        if (playerRect.left <= obstacleRect.right + collisionDistance && playerRect.left >= obstacleRect.left &&
            playerRect.top < obstacleRect.bottom && playerRect.bottom > obstacleRect.top) {
          return true;
        }
        break;
      case 'ArrowRight':
      case 'd':
        if (playerRect.right >= obstacleRect.left - collisionDistance && playerRect.right <= obstacleRect.right &&
            playerRect.top < obstacleRect.bottom && playerRect.bottom > obstacleRect.top) {
          return true;
        }
        break;
      default:
        return false;
    }
  }

  return false;
}
function destroyEnemy() {
  var enemies = document.querySelectorAll('.enemy');
  var playerMan = document.getElementById('Man');
  var manRect = playerMan.getBoundingClientRect();
  var attackRange = 15;
  enemies.forEach(function(enemy) {
    var enemyRect = enemy.getBoundingClientRect();
    if (
      manRect.left < enemyRect.right + attackRange &&
      manRect.right > enemyRect.left - attackRange &&
      manRect.top < enemyRect.bottom + attackRange &&
      manRect.bottom > enemyRect.top - attackRange
    ) {
      enemy.style.display = 'none';
      playDeathEnemy();
    }
  });
}
function moveMan(direction) {
  var step = 20;
  var player = document.getElementById('Man');
  if (checkWallCollision(player, direction)) {
    return;
  }
  if (direction !== null) {
    switch (direction) {
      case 'ArrowUp':
        if (parseInt(player.style.top) > 10) {
          player.style.top = (parseInt(player.style.top) - step) + 'px';
          player.className = 'player man2';
        }
        break;
      case 'ArrowDown':
        if (parseInt(player.style.top) < 400) {
          player.style.top = (parseInt(player.style.top) + step) + 'px';
          player.className = 'player man1';
        }
        break;
      case 'ArrowLeft':
        if (parseInt(player.style.left) > 10) {
          player.style.left = (parseInt(player.style.left) - step) + 'px';
          player.className = 'player man3';
        }
        break;
      case 'ArrowRight':
        if (parseInt(player.style.left) < 930) {
          player.style.left = (parseInt(player.style.left) + step) + 'px';
          player.className = 'player man4';
        }
        break;
    }
  }
  checkCollision();
}
function movePet(direction) {
  var step = 20;
  var player = document.getElementById('Pet');
  if (checkWallCollision(player, direction)) {
    return;
  }
  if (direction !== null) {
    switch (direction) {
      case 'w':
        if (parseInt(player.style.top) > 20) {
          player.style.top = (parseInt(player.style.top) - step) + 'px';
          player.className = 'pets pet4';
        }
        break;
      case 's':
        if (parseInt(player.style.top) < 435) {
          player.style.top = (parseInt(player.style.top) + step) + 'px';
          player.className = 'pets pet1';
        }
        break;
      case 'a':
        if (parseInt(player.style.left) > 20) {
          player.style.left = (parseInt(player.style.left) - step) + 'px';
          player.className = 'pets pet3';
        }
        break;
      case 'd':
        if (parseInt(player.style.left) < 960) {
          player.style.left = (parseInt(player.style.left) + step) + 'px';
          player.className = 'pets pet2';
        }
        break;
    }
  }
  checkCollision();
}

var restartMessage = document.getElementById('restart-message');
function checkCollision() {
  var playerMan = document.getElementById('Man');
  var playerPet = document.getElementById('Pet');
  var enemies = document.querySelectorAll('.enemy');
  var playerManRect = playerMan.getBoundingClientRect();
  var playerPetRect = playerPet.getBoundingClientRect();
  enemies.forEach(function(enemy) {
    var enemyRect = enemy.getBoundingClientRect();
    if (checkPlayerCollision(playerManRect, enemyRect)) {
      showRestartMessage();
      return;
    }
    if (checkPlayerCollision(playerPetRect, enemyRect)) {
      showRestartMessage();
      return;
    }
  });
  if (checkPlayerCollision(playerManRect, playerPetRect)) {
    showLevelPassedDialog();
  }
}

function checkPlayerCollision(rect1, rect2) {
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}
var canMove = true;

document.addEventListener('keydown', function(event) {
  if (!canMove) return;
  if (currentPlayer === 'Pet' && (event.key === 'w' || event.key === 's' || event.key === 'a' || event.key === 'd') && petMovesLeft > 0) {
    petDirection = event.key;
    event.preventDefault();
    movePet(petDirection);
    petMovesLeft--;
    if (petMovesLeft === 0) {
      currentPlayer = 'Man';
      manMovesLeft = 5;
      petMovesLeft = 5;
    }
  } else if (currentPlayer === 'Man' && (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') && manMovesLeft > 0) {
    manDirection = event.key;
    event.preventDefault();
    if (!checkWallCollision(document.getElementById('Man'), manDirection)) {
      moveMan(manDirection);
      manMovesLeft--;
      if (manMovesLeft === 0) {
        currentPlayer = 'Pet';
        manMovesLeft = 5;
        petMovesLeft = 5;
      }
    }
  } else if (event.key === 'f') {
    var playerMan = document.getElementById('Man');
    if (playerMan.className === 'player man3') {
      playerMan.className = 'player man3Attack';
      playUdar();
      destroyEnemy();
      setTimeout(function() {
        playerMan.className = 'player man3';
      }, 500);
    } else if (playerMan.className === 'player man4') {
      playerMan.className = 'player man4Attack';
      playUdar();
      destroyEnemy();
      setTimeout(function() {
        playerMan.className = 'player man4';
      }, 500);
    } else if (playerMan.className === 'player man1') {
      playerMan.className = 'player man1Attack';
      playUdar();
      destroyEnemy();
      setTimeout(function() {
        playerMan.className = 'player man1';
      }, 500);
    } else if (playerMan.className === 'player man2') {
      playerMan.className = 'player man2Attack';
      playUdar();
      destroyEnemy();
      setTimeout(function() {
        playerMan.className = 'player man2';
      }, 500);
    }
  }
  updateDisplay();
});
let levelCompleteSoundPlayed = false;
function showLevelPassedDialog() {
  var dialog = document.getElementById('level-passed-dialog');
  dialog.style.display = 'block';
  canMove = false;
  if (!levelCompleteSoundPlayed) {
    playLevelCompleteSound();
    levelCompleteSoundPlayed = true;
  }
  StopAudio();
}
function showRestartMessage() {
  var restartMessage = document.getElementById('restartMessage');
  restartMessage.style.display = 'block';
  if (canMove === true){playDeath()}
  canMove = false;
}
function restartLevel() {
  setTimeout(function() {
    window.location.reload();
  }, 300);
}
function cancelRestart() {
  restartMessage.style.display = 'none';
}
document.getElementById("exit-button").addEventListener("click", function() {
  window.location.href = "index.html";
});
setInterval(checkCollision, 100);
