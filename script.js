const form = document.querySelector('.landingpage__form');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('.form__error-message');
const button = document.querySelector('.form__button');

let debounceTimer;

// E-Mail Validation (Regex)
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

// Live-Check (2s debounce)
emailInput.addEventListener('input', () => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const value = emailInput.value.trim();

    if (value === '') {
      errorMessage.style.display = 'none';
      button.classList.remove('error');
      emailInput.classList.remove('error');
      return;
    }

    if (isValidEmail(value)) {
      errorMessage.style.display = 'none';
      button.classList.remove('error');
    } else {
      errorMessage.style.display = 'block';
      button.classList.add('error');
      emailInput.classList.add('error');
    }
  }, 2000);
});

// Submit Check
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = emailInput.value.trim();

  if (!isValidEmail(value)) {
    // invalid
    errorMessage.style.display = 'block';
    button.classList.add('error');
  } else {
    // valid
    errorMessage.style.display = 'none';
    button.classList.remove('error');
    emailInput.classList.remove('error');
    form.reset();
  }
});