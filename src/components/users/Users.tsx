import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => setErrorMsg(error.message));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {errorMsg && <p>{errorMsg}</p>}
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <p>{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
