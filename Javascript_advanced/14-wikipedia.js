function createElement (data) {
  const paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia (callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      const responseData = JSON.parse(xhr.responseText);
      callback(null, responseData);
    }
  };

  xhr.send();
}

queryWikipedia(createElement);

