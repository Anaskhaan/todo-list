import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import "./Styles/App.scss";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          {/* Additional Routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
