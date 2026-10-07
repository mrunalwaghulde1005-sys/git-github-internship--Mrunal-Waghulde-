const form = document.querySelector('#login-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const message = document.querySelector('#message');
const togglePassword = document.querySelector('#toggle-password');
const forgotPassword = document.querySelector('#forgot-password');

function clearFeedback() {
  emailError.textContent = '';
  passwordError.textContent = '';
  email.removeAttribute('aria-invalid');
  password.removeAttribute('aria-invalid');
  message.textContent = '';
  message.className = 'form-message';
}

function validateEmail() {
  if (email.value.trim() === '') {
    emailError.textContent = 'Please enter your email address.';
    email.setAttribute('aria-invalid', 'true');
    email.focus();
    return false;
  }

  if (!email.validity.valid) {
    emailError.textContent = 'Please enter a valid email address.';
    email.setAttribute('aria-invalid', 'true');
    email.focus();
    return false;
  }

  email.removeAttribute('aria-invalid');
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearFeedback();

  if (!validateEmail()) {
    return;
  }

  if (password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    password.setAttribute('aria-invalid', 'true');
    password.focus();
    return;
  }

  password.removeAttribute('aria-invalid');
  message.textContent = 'Login successful!';
  message.classList.add('is-success');
});

togglePassword.addEventListener('click', () => {
  const isPasswordHidden = password.type === 'password';
  password.type = isPasswordHidden ? 'text' : 'password';
  togglePassword.textContent = isPasswordHidden ? 'Hide' : 'Show';
  togglePassword.setAttribute('aria-label', isPasswordHidden ? 'Hide password' : 'Show password');
  togglePassword.setAttribute('aria-pressed', String(isPasswordHidden));
});

forgotPassword.addEventListener('click', () => {
  clearFeedback();

  if (!validateEmail()) {
    return;
  }

  message.textContent = 'Password reset is not connected yet. This demo cannot send an email.';
  message.classList.add('is-success');
});