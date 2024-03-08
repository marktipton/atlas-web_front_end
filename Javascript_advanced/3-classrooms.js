function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }

  const students = [];

  for (let i = 0; i < numberOfStudents; i++) {
    const addSeats = studentSeat(i + 1);
    students.push(addSeats());
  }

  students = studentSeat(i + 1);
}

const classRoom = createClassRoom(10);
