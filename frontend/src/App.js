import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./utils/HandleApi";
// import { BiColorFill } from "react-icons/bi"

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getTodos(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };

  return (
    <div className="app">
      
      <div className="logo2">
      <img src="\logo3.png" alt="Logo"/>

      </div>
      <div className="container">
        
        <div>
        
        <h1 > Task Manager App</h1><br /><br />
        
        
        <h2>Welcome...😊</h2><p> To our Task Manager app📝⏳ here you can simply write, update and delete your tasks Seamlessly with ease and efficiency and to stay productive and in control of your workload. </p>

        </div>
        
        <div className="top">
          <input
            type="text"
            placeholder="Add Task..."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div
            className="add_todo"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(todoId, text, setTodo, setText, setIsUpdating)
                : () => addTodo(text, setText, setTodo)
            }
          >
            {isUpdating ? "UPDATE" : "ADD"}
          </div>
        </div>

        <div className="todo_list">
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
