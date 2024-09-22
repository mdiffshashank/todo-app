import { useEffect, useState } from "react";
import { AppProvider } from "./app-context";
import "./App.css";
import Add from "./components/add";
import { TODO } from "./types";
import ListItem from "./components/list-item";
import { useLocalStorage } from "./hooks/useLocalStorage";

/**This is a ToDO list application */
function App() {
  const [value, setItem] = useLocalStorage({ key: "my-todo" });

  const [list, setList] = useState<Array<TODO>>(() => {
    try {
      if (value && Array.isArray(JSON.parse(value))) {
        return JSON.parse(value);
      }
      return [];
    } catch (err) {
      console.log(err);
    }
  });

  const deleteById = (id: string) => {
    const filteredList = list.filter((value) => value.id !== id);
    setList(filteredList);
  };

  const addToDo = (newTask: string) => {
    setList([...list, { task: newTask, id: `${list.length + 1}` }]);
  };

  useEffect(() => {
    setItem(JSON.stringify(list));
  }, [list]);

  return (
    <div className="app">
      <h3>Todo List App</h3>
      <AppProvider value={{ list, deleteById, addToDo }}>
        <Add />
        <ul>
          {list?.map((item) => {
            return (
              <ListItem key={item.id} id={item.id}>
                <p>{item.task}</p>
              </ListItem>
            );
          })}
        </ul>
      </AppProvider>
    </div>
  );
}

export default App;
