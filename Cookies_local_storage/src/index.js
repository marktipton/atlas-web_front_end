function setCookies() {
  const firstName = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  document.cookie = 'firstname=' + encodeURIComponent(firstName) + '; path=;';
  document.cookie = 'email=' + encodeURIComponent(email) + '; path=/;';
}

function showCookies() {
  const cookiesList = document.getElementById('cookiesList');
  cookiesList.innerHTML = '';
  const cookies = document.cookie.split(';');
  cookies.forEach(function(cookie) {
    const key = cookie.trim().split('=');
    const name = key[0];
    const value = key[1];

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Cookies: ' + decodeURIComponent(value);
    cookiesList.appendChild(paragraph);
  });
}