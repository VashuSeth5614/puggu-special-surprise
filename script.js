
function nextStage(number) {
  document.querySelectorAll('.stage').forEach(stage => {
    stage.classList.remove('active');
  });

  document.getElementById('stage' + number)
    .classList.add('active');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Reveal positive messages
function reveal(button, message) {
  document.getElementById('revealText').textContent = message;

  button.style.background = '#f3bfd4';
  button.style.transform = 'scale(1.12)';
  button.textContent = '♥';
}

// Final surprise
function makeMagic() {
  document.getElementById('finalMessage').textContent =
    'Sending you unlimited hugs, happiness and lots of love, Puggu! 🌸❤️';

  // Create floating hearts
  for (let i = 0; i < 25; i++) {
    createHeart();
  }
}

// Floating heart animation
function createHeart() {
  const heart = document.createElement('div');

  heart.textContent = ['💗', '💕', '🌸', '✨'][Math.floor(Math.random() * 4)];

  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-30px';
  heart.style.fontSize = (16 + Math.random() * 20) + 'px';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '10';

  document.body.appendChild(heart);

  const animation = heart.animate([
    {
      transform: 'translateY(0) rotate(0deg)',
      opacity: 1
    },
    {
      transform: 'translateY(-110vh) rotate(360deg)',
      opacity: 0
    }
  ], {
    duration: 3000 + Math.random() * 2000,
    easing: 'ease-out'
  });

  animation.onfinish = () => heart.remove();
}

// Background falling petals
function createPetal() {
  const petal = document.createElement('span');

  petal.className = 'petal';
  petal.textContent = ['🌸', '✿', '💕'][Math.floor(Math.random() * 3)];

  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (5 + Math.random() * 5) + 's';
  petal.style.fontSize = (12 + Math.random() * 13) + 'px';

  document.getElementById('petals').appendChild(petal);

  setTimeout(() => petal.remove(), 11000);
}

setInterval(createPetal, 700);
