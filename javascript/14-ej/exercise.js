const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

// function uncompletedNotes(arrayItems) {
//   arrayItems.forEach((item) => {
//     item.todos.forEach((done) => {
//       if (done.done === false) {
//          return console.log(done);
//       }
//     });
//   });
// }

function uncompletedNotes(arrayItems) {
  arrayItems.forEach((item) => {
    let result = item.todos.filter((todo) => {
      return todo.done === false;
    });
    console.log(result);
  });
}

uncompletedNotes(notes);
