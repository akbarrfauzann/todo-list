import { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  return (
    <form className="w-full mb-4 text-center" onSubmit={handleSubmit}>
      <input type="text" className="p-2 mb-2 outline-none text-center border bg-transparent rounded-sm text-white placeholder:text-slate-100" placeholder="what is the task today?" onChange={(e) => setValue(e.target.value)} value={value} />
      <button className="py-2 px-4 ml-2 bg-gray-500 border-none text-white font-bold cursor-pointer rounded-sm">Add task</button>
    </form>
  );
};

export default Form;
