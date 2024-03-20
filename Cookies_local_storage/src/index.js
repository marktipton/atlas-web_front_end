function setCookies() {
  const firstName = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  document.cookie = 'firstname=' + encodeURIComponent(firstName) + '; path=;';
  document.cookie = 'email=' + encodeURIComponent(email) + '; path=/;';
}

function showCookies() {

}