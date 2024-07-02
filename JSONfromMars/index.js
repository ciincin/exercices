import { createServer } from "node:http";

const jsonData = { location: "Mars" };

const server = createServer((request, response) => {
  console.log("request received");
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Content-Length", 19);
  const jsonBody = JSON.stringify(jsonData);
  response.end(jsonBody);
});

server.listen(3000, () => {
  console.log(`server running at http://localhost:3000`);
});
