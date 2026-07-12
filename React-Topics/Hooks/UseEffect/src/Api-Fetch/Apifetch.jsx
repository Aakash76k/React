import { useState, useEffect } from "react";
import "./Apifetch.css";

const Apifetch = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">User List</h1>

        <input
          type="text"
          placeholder="Search User..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="userlist">
          {users

            .filter((user) =>
              user.name.toLowerCase().includes(search.toLowerCase()),
            )

            .map((user) => (
              <div className="user" key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Apifetch;
