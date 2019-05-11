const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const db = require('../database/index.js')

const app = express();

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("dist"));


// puts todo into database
app.post('/todo', (req, res) => {
  newTodo = req.body.todo;
  db.addOneTodo(newTodo, (err, todo) => {
    if (err) {
      console.log('error posting to db', err)
    } else {
      console.log('newtodo', todo)
      res.send('added a todo!')
    }
  });
})

app.get('/todo', (req, res) => {
  db.getAllTodos((err, todos) => {
    if (err) {
      console.log('error getting all todos', err)
    } else {
      console.log('got all todos', todos)
      res.send(todos);
    }
  })
})

// make api request
// app.get("/api", (req, res) => {
//   console.log("successful request!");
//   res.send("Hi there");
// });

app.listen(3010, () => console.log("Now listening on port 3010!"));
