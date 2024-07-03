const figlet = require("figlet");
figlet("Hello world !", (error, data) => {
  if (error) {
    console.log("something went wrong...");
    console.dir(error);
    return;
  }

  console.log(data);
});
