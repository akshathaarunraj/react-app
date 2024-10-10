import React, { useEffect, useReducer, useRef } from "react";
import { Helmet } from "react-helmet-async";
import "../index.scss";
import { todoReducer } from "../reducers/todoReducer";
import axios from "axios";

const TodosPage = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const [todoState, todoDispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => {
        console.log(response.data);
        todoDispatch({
          type: "LIST_TODOS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddTodo = () => {
    // read the value from todo input
    console.log(todoInputRef?.current?.value);
    // let's dispatch an action to the reducer
    todoDispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        title: todoInputRef?.current?.value,
        isCompleted: false,
      },
    });
  };

  return (
    <div>
      <Helmet>
      <title>Todo</title>
      </Helmet>
      <h1>Todos App</h1>
      <div className="row">
        <div className="col-auto">
          {/* Uncontrolled component */}
          <input type="text" className="form-control" ref={todoInputRef} />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoState?.map((todo: any) => {
                return (
                  <li className="list-group-item" key={todo.id}>
                    {todo.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
