import React from "react";

const UserList = ({ users, deleteUser, filterUsers }) => {
  return (
    <div>
      <h3>User List</h3>
      <input
        type="text"
        placeholder="Filter users by username"
        onChange={(e) => filterUsers(e.target.value)}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

