const express = require("express");
const mainRoutes = require("./routes/mainRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("/", mainRoutes);

app.listen(3000, () => {
  console.log(`server listening on:  http://localhost:3000`);
});
