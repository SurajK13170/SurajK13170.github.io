// dark mode toggle 
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', function () {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkModeEnabled', true);
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkModeEnabled', false);
}

// Check if dark mode was previously enabled
const darkModeEnabled = localStorage.getItem('darkModeEnabled');
if (darkModeEnabled && darkModeEnabled === 'true') {
  darkModeToggle.checked = true;
  enableDarkMode();
}
else {
  darkModeToggle.checked = false;
  disableDarkMode();
}


const userNameElement = document.getElementById('user-detail-name');
const userIntroElement = document.getElementById('user-detail-intro');
const names = ['SURAJ KUMAR']; // Add more names here
const intros = ['Full Stack Developer']; // Add more intros here

function startTypingEffect() {
  let currentIndex = 0;

  function typeNextDetail() {
    if (currentIndex < names.length) {
      const name = names[currentIndex];
      const intro = intros[currentIndex];

      typeText(userNameElement, name, 0, () => {
        typeText(userIntroElement, intro, 0, () => {
          currentIndex++;
          setTimeout(typeNextDetail, 1000);
        });
      });
    } else {
      currentIndex = 0;
      setTimeout(startTypingEffect, 1000);
    }
  }

  typeNextDetail();
}

function typeText(element, text, index, callback) {
  if (index < text.length) {
    element.textContent = text.slice(0, index + 1);
    setTimeout(() => {
      typeText(element, text, index + 1, callback);
    }, 100);
  } else {
    setTimeout(callback, 1000);
  }
}

startTypingEffect();
