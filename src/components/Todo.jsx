import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";

const Todo = ({ task, editTodo, deleteTodo, toggleComplete }) => {
  return (
    <div className=" flex justify-between bg-slate-700 text-center rounded-md text-white py-2 px-4 mb-1">
      <p className={`flex-1 text-left ${task.completed ? "line-through text-gray-400" : ""}`}>{task.task}</p>
      <div className="flex items-center gap-x-2">
        <IoMdCheckmark className="text-xl cursor-pointer" onClick={() => toggleComplete(task.id)} />
        <AiOutlineEdit className="text-xl cursor-pointer" onClick={() => editTodo(task.id)} />
        <AiOutlineDelete className="text-xl cursor-pointer" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
