const studentHogwarts = (function () {

  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  this.setName = function(newName) {
    name = newName;
  }
})
