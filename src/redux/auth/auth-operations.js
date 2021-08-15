import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import actions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body { name, email, password }
 *
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk('auth/register', async credentials=>{
  try {
    const {data} = await axios.post('/users/signup', credentials);
    token.set(data.token)
    return data;
    
  } catch (error) {
    console.log(error)
  }
} );

  

/*
 * POST @ /users/login
 * body:
 *    { email, password }
 *
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn= createAsyncThunk('auth/login', async credentials=>{

  try {
    const {data} = await axios.post('/users/login', credentials);
    token.set(data.token)
    return data;

  } catch (error) {
    console.log(error)
  }
});

/*
 * POST @ /users/logout
 * headers:
 *    Authorization: Bearer token
 *
 * 1. После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut =createAsyncThunk('auth/logout',async ()=>{
  try {
    await axios.post('/users/logout');

    token.unset();
    //dispatch(actions.logoutSuccess());
  } catch (error) {
    //dispatch(actions.logoutError(error.message));
  }
});

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(actions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(actions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error.message));
  }
};
const operations={ register, logOut, logIn, getCurrentUser }
export default operations;