import React from 'react';

const UserTable = ({ users, onDeleteUser, onDeleteAll }) => {
  return (
    <div>
      {users.length === 0 ? (
        <p>Таблица пуста</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <button onClick={() => onDeleteUser(index)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={onDeleteAll}>Очистить таблицу</button>
    </div>
  );
};

export default UserTable;
