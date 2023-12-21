import {useState} from 'react';
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import styles from './Header.module.css'
import logo from '../Logo.png'
import Modal from '../ModalPage/Modal';

const Header = ({current, setCurrent}: any) => {
  const items: MenuProps['items'] = [
    {
      label: 'Расписание',
      key: 'schedule',

    },
    {
      label: 'Оплата',
      key: 'payment',
    },
  ]

  const [isModalActive, setModalActive] = useState(false);

  const onNavPanelClick = (e: any) => {
    setCurrent(e.key)
  } 

  const onProfileBtnClick = (e: any) => {
    setModalActive(true);
  }

  return (
    <>
      <header style={{marginBottom: "0px"}}>
        <nav className={styles.navMain}>
          <Menu onClick={onNavPanelClick} mode="horizontal" selectedKeys={[current]} items={items}></Menu>
          <Modal isActive={isModalActive} setModalActive={setModalActive}></Modal>
          <div className={styles.profileBtn} onClick={onProfileBtnClick}>
            <img style={{marginRight: '8px'}} src={logo} alt="Фото профиля" />
            <span style={{marginRight: '16px'}}>Имя Фамилия Отчество</span>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;