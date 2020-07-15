import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="todo"
          placeholder="Add Todo..."
          style={{ flex: "10" }}
          onChange={this.onChange}
          value={this.state.title}
        />
        <input
          type="submit"
          value="Add"
          className="btn"
          style={{ flex: "0.5", padding: "10px" }}
        />
      </form>
    );
  }
}

export default AddTodo;
