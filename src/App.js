import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core/";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase.config";
import firebase from 'firebase'
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // ? when the apps loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // ! the code here run once whenever app lodes
    db.collection("todos").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, [input]);

  const addTodo = (e) => {
    e.preventDefault(); // ? this will stop refreshing the page
    // ! This will fire a event whenever you press key
    
    db.collection('todos').add({
      todo: input, 
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(""); //? it will clear up the input field
  };
  return (
    <div className="container">
      <h1>Hello world</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">Add Todo</InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
      </FormControl>
      <Button
        type="submit"
        onClick={addTodo}
        variant="contained"
        color="primary"
        disabled={!input}
      >
        Add Todo
      </Button>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} id={todos.indexOf(todo)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
