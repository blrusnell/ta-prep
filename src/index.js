import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
      todos: ['placeholder']
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit() {
    axios.post('/todo', {todo: this.state.todo})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount(e) {
    //e.preventDefault();
    axios.get('/todo')
    .then((response) => {
      this.setState({
        todos: response.data
      })
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <input type="submit" onClick={this.handleSubmit}></input>
        {/* <p>{this.state.todos[0]}</p> */}
        {this.state.todos.map((todo) => <p>{todo.text}</p>)}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
