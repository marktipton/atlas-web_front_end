function welcome(firstName, lastName) {

  const fullName = firstName + ' ' + lastName;
  function displayFullName(name) {
    alert('Welcome ' + name + '!');
  }

  displayFullName(fullName);
}