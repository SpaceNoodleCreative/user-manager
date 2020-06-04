import React, { useState } from "react";
import "./App.scss";
import List from "./List";
import { FcLike, FcApproval } from "react-icons/fc";
import { MdAdd } from "react-icons/md";

function App() {
  const [users, setUsers] = useState([]);
  if (!users.length) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }
  return (
    <div>
      <h2 className="header">
        <FcApproval /> SimpleCRM
      </h2>
      {users.length && <List users={users} />}
      <div className="btn-wrap">
        <button className="pr">
          <MdAdd /> Add
        </button>
      </div>
      <footer>
        Made with <FcLike />
      </footer>
    </div>
  );
}

export default App;
