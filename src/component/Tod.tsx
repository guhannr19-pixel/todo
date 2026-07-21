import { useState } from "react";

function Todu() {
     const [task, setTask] = useState<string>("");
      const [todos, setTodos] = useState<string[]>([]);
    
      const handleAdd = () => {
        if (task.trim() === "") return;
    
        setTodos([...todos, task]);
        setTask("");
      };
    
      const handleDelete = (index: number) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
      };
    
    return (<>
    <div>HEllow World Data</div>

       <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>);
}
export default Todu;
