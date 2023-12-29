import styles from './AuthorizationPage.module.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { error } from 'console';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCallback, useEffect } from 'react';

const AuthorizationPage = () => {
  const accessToken = "Token 3cfe8bd2de4392f263242d37d026a32a38361d88";
  const apiUrl = "http://127.0.0.1:8000/api/v2";
  // const authAxios = axios.create({
  //   baseURL: apiUrl,
  //   headers: {
  //     Authorization: accessToken,
  //   }
  // })
  // useEffect(() => {
  //   axios
  //     .get('http://127.0.0.1:8000/api/v2/users/?format=json', {
  //       baseURL: apiUrl,
  //       method: "GET",
  //       headers: {          
  //         Authorization: accessToken,
  //       }
  //     })
  //     .then(data =>
  //       console.log(data))
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, [])


  useEffect(() => {
    const response = axios
                        .get('https://658d5b8c7c48dce947390555.mockapi.io/api/v2/users')
                        .then((response) => console.log(response))
                        .catch((error) => console.log(error));
    console.log(response);
  }, [])

  // const fetchData = async () => {
  //     const response = axios
  //                         .get('http://127.0.0.1:8000/api/v2', {
  //                           method: 'GET',
  //                           baseURL: '/users/?format=json',
  //                           headers: {
  //                             'Content-Type': 'application/json',
  //                             'Authorization': "Token 3cfe8bd2de4392f263242d37d026a32a38361d88",
  //                           }
  //                         })
  //                         .then((response) => console.log(response))
  //                         .catch((error) => console.log(error));
  //   }

  // const response = fetch('http://127.0.0.1:8000/api/v2/users/?format=json', {
  //   method: 'GET',
  //   mode: "no-cors",
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': 'Token 3cfe8bd2de4392f263242d37d026a32a38361d88',
  //   }
  // }).then((response) => console.log(response))
  //   .catch((error) => console.log('Ошибка:', error))
  
  const navigate = useNavigate();
  
  return (
    <>
      <div className={styles.authWrapper}>
        <div className={styles.authBlock}>
          <h1 className={styles.authHeader}>Авторизация</h1>
          <Input className={styles.authInputLogin} size="large" prefix={<UserOutlined />} />
          <Input.Password className={styles.authInputPassword} size="large" prefix={<LockOutlined />}/>
          <Button className={styles.authButton} type="primary" onClick={() => navigate('/main')}>Войти</Button>
        </div>
      </div>
    </>
  )
}

export default AuthorizationPage;