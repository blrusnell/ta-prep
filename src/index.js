import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <input type="submit" onClick={this.handleSubmit}></input>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
