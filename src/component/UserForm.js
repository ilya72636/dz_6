
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const UserForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Поле "Имя" обязательно для заполнения'),
    username: Yup.string().required('Поле "Имя пользователя" обязательно для заполнения'),
    email: Yup.string().email('Некорректный адрес электронной почты').required('Поле "Email" обязательно для заполнения'),
    phone: Yup.string().required('Поле "Телефон" обязательно для заполнения'),
    website: Yup.string(),
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    const newUser = {
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: data.website || '',
    };

    setUsers([...users, newUser]);
    reset();
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleClearTable = () => {
    setUsers([]);
  };

  const errorInputStyle = {
    border: '2px solid #b30000', 
    transition: 'border-color 0.3s ease',
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='inpus'>
        <input
          {...register('name')}
          placeholder="Имя"
          style={errors.name ? errorInputStyle : {}}
        />
        
        <input
          {...register('username')}
          placeholder="Имя пользователя"
          style={errors.username ? errorInputStyle : {}}
        />
        
        <input
          {...register('email')}
          placeholder="Email"
          style={errors.email ? errorInputStyle : {}}
        />
        
        <input
          {...register('phone')}
          placeholder="Телефон"
          style={errors.phone ? errorInputStyle : {}}
        />
        
        <input
          {...register('website')}
          placeholder="Сайт"
        />
        
        <button type="submit">Создать</button>
        <button type="button" onClick={handleClearTable}>Очистить таблицу</button>
      </form>

      {users.length === 0 ? (
        <p>Таблица пуста</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Имя пользователя</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Сайт</th>
              <th>Действие</th>
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
                  <button onClick={() => handleDelete(index)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserForm;
