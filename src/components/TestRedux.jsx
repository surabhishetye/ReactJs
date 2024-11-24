import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodos,
  addNewTodo,
  removeTodo,
  toggleTodo,
} from "../actions/actions";

const TestRedux = () => {
  const [dataList, setDataList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const resp = await data.json();
      //   setDataList(resp.slice(0, 5));
      dispatch(setTodos(resp.slice(0, 5)));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTodoChange = (e) => {
    const { value } = e.target;
    setNewTodo(value);
  };

  const handleAddNewTodo = () => {
    dispatch(
      addNewTodo({
        title: `${newTodo}`,
        id: Math.random(),
        completed: false,
      })
    );
    setNewTodo("");
    // setDataList([
    //   ...dataList,
    //   {
    //     title: `${newTodo}`,
    //     id: Math.random(),
    //     completed: false,
    //   },
    // ]);
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("SURR test", todos);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <span>This is my todo list!!</span>
      </div>
      <div>
        {todos.map((item, index) => (
          <>
            <li key={index}>
              {item.title}
              <button
                onClick={() => handleDeleteTodo(item.id)}
                style={{ color: "red", marginLeft: "10px" }}
              >
                del
              </button>
              <button
                onClick={() => handleToggleTodo(item.id)}
                style={{ marginLeft: "10px" }}
              >
                {item.completed ? "Complete" : "In-Complete"}
              </button>
            </li>
          </>
        ))}
      </div>
      <div style={{ padding: "20px" }}>
        <label>Type to add new todo to above list</label>
        <input name="text" value={newTodo} onChange={handleAddTodoChange} />
        <button onClick={handleAddNewTodo}>ADD</button>
      </div>
    </>
  );
};

export default TestRedux;
