import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const inputEl = document.querySelector('input');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  const formData = { email: inputEl.value, message: textarea.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function checkStorage() {
  const parseSavedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (parseSavedData) {
    inputEl.value = parseSavedData.email;
    textarea.value = parseSavedData.message;
  } else {
    inputEl.value = '';
    textarea.value = '';
  }
}
checkStorage();