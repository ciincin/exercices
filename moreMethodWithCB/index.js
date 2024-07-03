const fs = require("fs");
// fs.appendFile("readme.txt", "\nthis is another content of readme file", (error) => {
//   if (error) throw error;
//   console.log("saved!");
// });


// fs.readFile("readme.txt", (error, data) => {
//   if (error) throw error;
//   console.log(data.toString());
// });

const days=[
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
]

// fs.writeFile("loopFile.txt", "Info:", (err)=>{
//   if (err) throw err
//   console.log("saved!");
// })

days.forEach(day =>{
  fs.appendFileSync("loopFile.txt", `\n${day}`, (err)=>{
    if(err) throw err;
    console.log(day)
  })
})
