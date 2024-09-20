import { useState } from "react";
import { AppProvider } from "./app-context";
import "./App.css";
import Add from "./components/add";
import { TODO } from "./types";
import ListItem from "./list-item";

/**This is a ToDO list application */
function App() {
  const [list, setList] = useState<Array<TODO>>([]);

  const deleteById = (id: string) => {
    const filteredList = list.filter((value) => value.id !== id);
    setList(filteredList);
  };

  const addToDo = (newTask: string) => {
    setList([...list, { task: newTask, id: `${list.length}` }]);
  };

  return (
    <div className="app">
      <h3>Todo List App</h3>
      <AppProvider value={{ list, deleteById, addToDo }}>
        <Add />
        <ul>
          {list.map((item) => {
            return (
              <ListItem key={item.id} id={item.id}>
                {item.task}
              </ListItem>
            );
          })}
        </ul>
      </AppProvider>
    </div>
  );
}

export default App;
