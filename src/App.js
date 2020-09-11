import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todo: "",
    todoItems: [],
  };

  constructor(props) {
    super(props);

    this.onTodoInput = this.onTodoInput.bind(this);
    this.onTodoSubmit = this.onTodoSubmit.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  onTodoSubmit(e) {
    e.preventDefault();

    if (this.state.todo === "") {
      return;
    }

    this.setState({
      todoItems: [...this.state.todoItems, this.state.todo],
      todo: "",
    });

    e.target.reset();
  }

  onTodoInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onDeleteItem(todo) {
    this.setState({
      todoItems: this.state.todoItems.filter((item) => item !== todo),
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__text">Todo App</h1>
        <form className="App__form" onSubmit={this.onTodoSubmit}>
          <input
            type="text"
            name="todo"
            onChange={this.onTodoInput}
            placeholder="Enter a todo item"
            className="App__formInput"
          />
          <input type="submit" value="Add" className="App__formSubmit" />
        </form>

        <ul className="todo">
          {/* <li className="todo__items">
            <span>Lorem ipsum dolor sit amet</span>
            <button className="button">&#10005;</button>
          </li> */}

          {/* {this.state.todoItems.map((todo, idx) => (
            <TodoList todo={todo} key={idx} state={this.setState} />
          ))} */}
          {this.state.todoItems.map((todo, idx) => (
            <li className="todo__items" key={idx}>
              <span>{todo}</span>
              <button
                className="button"
                onClick={() => {
                  this.onDeleteItem(todo);
                }}
              >
                &#10005;
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// class TodoList extends Component {
//   render() {
//     let { todo, state } = this.props;
//     return (
//       <li className="todo__items">
//         <span>{todo}</span>
//         <button className="button" ons>&#10005;</button>
//       </li>
//     );
//   }
// }

export default App;
