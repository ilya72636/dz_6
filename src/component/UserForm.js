import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Поле обязательно для заполнения'),
  username: Yup.string().required('Поле обязательно для заполнения'),
  email: Yup.string().email('Некорректный адрес электронной почты').required('Поле обязательно для заполнения'),
  phone: Yup.string().required('Поле обязательно для заполнения'),
  website: Yup.string(),
});

const UserForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset, errors } = useForm({
    validationSchema,
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset(); // Очищаем форму после отправки
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input type="text" name="name" placeholder="Name" ref={register} />
      {errors.name && <p>{errors.name.message}</p>}

      <input type="text" name="username" placeholder="Username" ref={register} />
      {errors.username && <p>{errors.username.message}</p>}

      <input type="text" name="email" placeholder="Email" ref={register} />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="text" name="phone" placeholder="Phone" ref={register} />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input type="text" name="website" placeholder="Website" ref={register} />

      <button type="submit">Создать</button>
    </form>
  );
};

export default UserForm;
