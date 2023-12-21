import styles from './AuthorizationPage.module.css';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const AuthorizationPage = () => {
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