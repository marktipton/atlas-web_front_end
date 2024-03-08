function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }

  const students = [];

  let i = 0;
  for (; i <= numberOfStudents; i++) {

  }

  students = studentSeat(i + 1);
}

let classRoom = createClassRoom();

classRoom(10);