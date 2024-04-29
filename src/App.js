import React, { useState } from 'react';
import UserForm from './component/UserForm';
import UserTable from './pages/UserTable';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    setUsers([...users, userData]); // Добавляем нового пользователя в массив
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const deleteAllUsers = () => {
    setUsers([]);
  };

  return (
    <div className="App">
      <h1>Создание и управление пользователями</h1>
      <UserForm onSubmit={addUser} />
      <UserTable users={users} onDeleteUser={deleteUser} onDeleteAll={deleteAllUsers} />
    </div>
  );
}

export default App;
