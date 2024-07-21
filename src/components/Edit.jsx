import { useState } from "react";
const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="w-full mb-2 text-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-[340px] p-2 mb-2 mt-2 outline-none text-center border bg-transparent text-white placeholder:text-slate-100 rounded-sm"
        placeholder="update task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="py-2 px-4 ml-2 bg-gray-500 border-none text-white font-bold cursor-pointer rounded-sm">Edit</button>
    </form>
  );
};

export default Edit;
