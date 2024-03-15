function setCookies() {
  var firstNameInput = document.getElementById('firstname').value;
  var emailInput = document.getElementById('email').value;

  var now = new Date();
  now.setDate(now.getDate() + 10);

  var expireUTC = now.toUTCString();
  document.cookie = 'firstname=' + firstNameInput + '; expires=' + expireUTC +'; path=/;';
  document.cookie = 'email=' + emailInput + '; expires='+ expireUTC +'; path=/;';
}

function showCookies() {
  var cookies = document.cookie.split(';');
  var paragraph = document.createElement('p');

  cookies.forEach(function(cookie) {

    const email = getCookies('email');
    const firstName = getCookies('firstname');
    paragraph.innerHTML = 'Email: ' + email + ' - Firstname: ' +  firstName;
    document.body.appendChild(paragraph);
  });
}

function getCookies(name) {
  var cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();

    if (cookie.startsWith(name + '=')) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

function showForm() {

}

function hideForm() {

}

function deleteCookiesAndShowForm() {

}

function showWelcomeMessageOrForm() {

}

document.getElementById('logInButton').addEventListener('click', function() {
  setCookies();
});

document.getElementById('showCookiesButton').addEventListener('click', function() {
  showCookies();
});
