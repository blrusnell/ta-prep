const mysql = require('mysql');


const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "todos"
  });
  
  conn.connect(function(err) {
    if (err) {
     console.log(err);
    }
    console.log("Connected!");
  });

  const addOneTodo = (todo, callback) => {
    conn.query(`INSERT into todolist (text) values ('${todo}')`,(err, todo) => {
      if (err) {
          console.log('error going into db', err);
      } else {
          callback(null, todo);
      }
    }); 
}

const getAllTodos = (callback) => {
    conn.query('SELECT text from todolist', (err, todos) => {
        if (err) {
            console.log('error getting all todos', err)
            callback(err);
        } else {
            callback(null, todos)
        }
    });
}

module.exports = {addOneTodo, getAllTodos};