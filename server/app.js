const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  return response.status(200).send("This API Is currently live");
});
app.get("/test", async (req, res) => {
  res.send("This API Is currently live");
});

app.get("/reservations", async (request, response) => {
  return response.status(200).send(formattedReservations);
});

module.exports app;