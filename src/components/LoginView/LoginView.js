import React,{useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import s from './LoginView.module.css'


function LoginView(){
  const dispatch=useDispatch();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleChange=({target:{name,value}})=>{
    switch(name){
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;      
    }
  }

  const handleSubmit=e=>{
    e.preventDefault();
    dispatch(authOperations.logIn({email,password}));
    setEmail('');
    setPassword('');
  }

  return (
      <div className={s.container}>
        <h3>Войдите в свой аккаунт</h3>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className={s.form}
        > <div class={s.row}>
          <div class={s.col25}>
          <label className={s.label}>
           
            Почта
            <div class="col-75">
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            /></div>
          </label></div></div>
          <div class={s.row}>
          <div class={s.col25}>

          <label className={s.label}>
            Пароль
            <div class="col-75">
            <input
            className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            /></div>
          </label></div></div>

          <button type="submit" className={s.gradientButton}>Войти</button>
        </form>
      </div>
    );
  }


const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
