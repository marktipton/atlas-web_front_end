function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.fontTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}



function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');


  const welcomeP = document.createElement('p');
  welcomeP.textContent = 'Welcome Holberton!';
  document.body.appendChild(welcomeP);


  let spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.addEventListener('click', spooky);
  document.body.appendChild(spookyButton);

  let darkButton = document.createElement('button');
  darkButton.textContent = 'Dark mode';
  darkButton.addEventListener('click', darkMode);
  document.body.appendChild(darkButton);


  let screamButton = document.createElement('button');
  screamButton.textContent = 'Scream mode';
  screamButton.addEventListener('click', screamMode);
  document.body.appendChild(screamButton);
}

main();