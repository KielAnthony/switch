function submitForm(event) {
  event.preventDefault()

  let firstName = document.getElementById('firstName').value.trim();
  let middleName = document.getElementById('middleName').value.trim();
  let lastName = document.getElementById('lastName').value.trim();
  let email = document.getElementById('email').value.trim();
  let gender = document.getElementById('gender').value.trim();
  let dateOfBirth = document.getElementById('dateOfBirth').value.trim();
  let phoneNumber = document.getElementById('phoneNumber').value.trim();
  let password = document.getElementById('password').value.trim();

  if (
    firstName === '' ||
    middleName === '' ||
    lastName === '' ||
    email === '' ||
    dateOfBirth === '' ||
    phoneNumber === '' ||
    password === ''
  ) {
    alert('Please fill in all required fields')
    return
  }

  let genderIsValid = false;
  switch (gender.toLowerCase()) {
    case 'male':
    case 'female':
    case 'other':
      genderIsValid = true;
      break;
    default:
      alert('Please select a valid gender');
  }

  if (!genderIsValid) return;

  window.location.href = "https://kielanthony.github.io/layout6/";
}