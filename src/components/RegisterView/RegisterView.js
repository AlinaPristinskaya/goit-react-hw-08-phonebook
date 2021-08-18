import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './RegisterView.module.css'



function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }


  return (
    <div className={s.container}>
      <h3>Введите данные для регистрации</h3>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={s.form}
      >
        <div className={s.row}>
          <div className={s.col25}>
            <label className={s.label}>
              Имя
              <div className={s.col75}>
                <input
                  className={s.input}
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                /></div>
            </label></div></div>

        <div className={s.row}>
          <div className={s.col25}>
            <label className={s.label}>
              Почта
              <div className={s.col75}>
                <input
                  className={s.input}
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}

                /></div>
            </label></div></div>

        <div className={s.row}>
          <div classNamr={s.col25}>
            <label className={s.label}>
              Пароль
              <div className={s.col75}>
                <input
                  className={s.input}
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}

                /></div>
            </label></div></div>

        <button type="submit" className={s.gradientButton}>Зарегистрироваться</button>
      </form>
    </div>
  );
}


const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
