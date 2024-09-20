import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../app-context";

const Add = () => {
  const { addToDo, list } = useContext(AppContext);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    inputRef.current && addToDo(inputRef.current.value);
    inputRef.current && (inputRef.current.value = "");
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="addForm">
      <input
        type="text"
        ref={inputRef}
        name="new-task"
        placeholder="Enter new task"
      />
      <button>Add</button>
    </form>
  );
};

export default Add;
