import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const emailBox = document.querySelector('label [name="email"]');
const messageBox = document.querySelector('label [name="message"]');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const email = emailBox.value;
  const message = messageBox.value;

  const formData = {
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

onPageReload();

function onPageReload() {
  const savedInput = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedInput) {
    emailBox.value = savedInput.email;
    messageBox.value = savedInput.message;
  }
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const email = emailBox.value;
  const message = messageBox.value;

  if (email == '' || message == '') {
    alert('Please complete the form inputs!');
    form.reset();
    return;
  }

  const formData = { email, message };
  console.log(formData);
  form.reset();

  localStorage.removeItem(STORAGE_KEY);
}
