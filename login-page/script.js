const form = document.querySelector('#login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const emailError = document.querySelector('#email-error');
  const passwordError = document.querySelector('#password-error');
  const message = document.querySelector('#message');

  emailError.textContent = '';
  passwordError.textContent = '';
  message.textContent = '';

  if (email.value.trim() === '') {
    emailError.textContent = 'Please enter your email.';
    email.focus();
    return;
  }

  if (!email.validity.valid) {
    emailError.textContent = 'Please enter a valid email address.';
    email.focus();
    return;
  }

  if (password.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters.';
    password.focus();
    return;
  }

  message.textContent = 'The form is valid. Sign-in is not connected yet.';
});