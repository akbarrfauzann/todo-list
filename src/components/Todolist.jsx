import Form from "../components/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../components/Todo";
import Edit from "./Edit";
uuidv4();

const Todolist = () => {
  const [todoValue, setTodo] = useState([]);

  const createTodo = (todo) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodo(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodo(todoValue.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };

  const editTask = (task, id) => {
    setTodo(todoValue.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)));
  };

  const toggleComplete = (id) => {
    setTodo(todoValue.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <div className="container bg-slate-600 p-8 mt-10 flex flex-col items-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-white font-mono">To do List</h1>
      <div className="w-full max-w-md">
        <Form createTodo={createTodo} />
        {todoValue.map((todo, index) => (todo.isEditing ? <Edit key={index} editTodo={editTask} task={todo} /> : <Todo key={index} task={todo} editTodo={editTodo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />))}
      </div>
    </div>
  );
};

export default Todolist;
