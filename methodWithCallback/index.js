const fs = require("fs");
fs.writeFile("readme.txt", "this is a readme file", (error) => {
  if (error) throw error;
  console.log("saved!");
});
