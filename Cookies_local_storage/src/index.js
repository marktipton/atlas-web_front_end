function setCookies() {

}

function showCookies() {
  var cookies = document.cookie.split(';');

  cookies.forEach(function(cookie) {
    console.log(cookie.trim());
  });
}

document.getElementById('showCookiesButton').addEventListener('click', function() {
  showCookies();
});
