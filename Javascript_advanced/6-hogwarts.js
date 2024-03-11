const studentHogwarts = (function () {

  let privateScore = 0;
  let name = null;

  const changeScoreBy (points) {
    privateScore += points;
  };

  const setName = function(newName) {
    name = newName;
  }

  const rewardStudent = changeScoreBy(1);

  const penalizeStudent = changeScoreBy(-1);

  const getScore = function() {
    return (name + ": " + privateScore);
  }


})