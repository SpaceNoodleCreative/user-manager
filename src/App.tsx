import React, { useState } from "react";
import "./App.scss";
import List from "./List";
import { FcLike } from "react-icons/fc";

function App() {
  const [users, setUsers] = useState([]);
  if (!users.length) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }
  return (
    <div>
      <h2>SimpleCRM</h2>
      {users.length && <List users={users} />}
      <div className="btn-wrap">
        <button className="pr">+ Add</button>
      </div>
      <footer>
        Made with <FcLike />
      </footer>
    </div>
  );
}

export default App;
