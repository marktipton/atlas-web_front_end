const studentHogwarts = (function () {

  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore += points;
  };

  function setName(newName) {
    name = newName;
  }

  function rewardStudent() {
    changeScoreBy(1);
  }

  function penalizeStudent() {
    changeScoreBy(-1);
  }

  function getScore() {
    return (name + ": " + privateScore);
  }

  return {
    setName,
    rewardStudent,
    penalizeStudent,
    getScore,
  };
});

let harry = studentHogwarts();

harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());


let draco = studentHogwarts();

draco.setName('Draco');
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());