const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("dist"));

app.post('/todo', (req, res) => {
  console.log(req.body  );
  res.end();
})

// make api request
// app.get("/api", (req, res) => {
//   console.log("successful request!");
//   res.send("Hi there");
// });

app.listen(3010, () => console.log("Now listening on port 3010!"));
