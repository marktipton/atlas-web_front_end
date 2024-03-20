function setCookies() {
  var firstNameInput = document.getElementById('firstname').value;
  var emailInput = document.getElementById('email').value;
  document.cookie = 'firstname=' + firstNameInput + '; path=/;';
  document.cookie = 'email=' + emailInput + '; path=/;';
}
function showCookies() {
  var cookies = document.cookie.split(';');

  cookies.forEach(function(cookie) {
    // console.log(cookie.trim());
    var paragraph = document.createElement('p');

    paragraph.innerHTML = 'Cookies: ' + cookie.trim();
    document.body.appendChild(paragraph);
  });
}

document.getElementById('logInButton').addEventListener('click', function() {
  setCookies();
});

document.getElementById('showCookiesButton').addEventListener('click', function() {
  showCookies();
});