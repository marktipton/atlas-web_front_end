function setCookies() {
  var firstNameInput = document.getElementById('firstname').value;
    var emailInput = document.getElementById('email').value;

    var now = new Date();
    now.setDate(now.getDate() + 10);

    var expireUTC = now.toUTCString();
    document.cookie = 'firstname=' + firstNameInput + '; expires=' + expireUTC +'; path=/;';
    document.cookie = 'email=' + emailInput + '; expires='+ expireUTC +'; path=/;';

    showWelcomeMessageOrForm();
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
    // return null;
  }

  function showForm() {
    // remove welcome message and show form
    // const loginForm = document.querySelector('#loginForm');
    let welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
      welcomeMessage.parentNode.removeChild(welcomeMessage);
    }
    let loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.style.display = 'block';
    } else {
      console.error('Login form not found');
    }
  }

  function hideForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'none';
  }

  function deleteCookiesAndShowForm() {
    document.cookie = 'firstname=; expires=Tue, 01 June 1995 06:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Tue, 01 June 1995 06:00:00 UTC; path=/;';

    showForm();
  }

  function showWelcomeMessageOrForm() {
    const email = getCookies('email');
    const firstName = getCookies('firstname');
    const body = document.body;

    if (firstName && email) {
      const welcomeMessage = document.createElement('h1');
      welcomeMessage.textContent = 'Welcome ' + firstName + ' ';

      const logoutLink = document.createElement('a');
      logoutLink.textContent = '(logout)';
      logoutLink.style.fontStyle = 'italic';
      logoutLink.style.fontWeight = 'normal';
      logoutLink.style.marginLeft = '10px';
      logoutLink.href = '#';
      logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        deleteCookiesAndShowForm();
        hideForm();
      });

      welcomeMessage.appendChild(logoutLink);
      body.innerHTML = '';
      body.appendChild(welcomeMessage);
    } else {
      showForm();
    }
  }

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('logInButton').addEventListener('click', function() {
    setCookies();
  });

  document.getElementById('showCookiesButton').addEventListener('click', function() {
    showCookies();
  });

});

