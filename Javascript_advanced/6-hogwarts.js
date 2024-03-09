const studentHogwarts = (function () {

  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  this.setName = function(newName) {
    name = newName;
    return (name);
  }

  this.rewardStudent = changeScoreBy(1);

  this.penalizeStudent = changeScoreBy(-1);

  this.getScore = function() {
    return (name + ": " + privateScore);
  }
})