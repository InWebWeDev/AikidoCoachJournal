import styles from './Modal.module.css'
import logo from '../Logo.svg'
import { Input, Button, Checkbox } from 'antd';
import { useState } from 'react';

const Modal = ({isActive, setModalActive} : any) => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isBtnChecked, setBtnChecked] = useState(false);

  const modalClasses = isActive ? [styles.modal, styles.modalActive].join(' ') : styles.modal;


  const onSaveButtonClick = () => {
    setBtnChecked(false);
    setButtonDisabled(true);
    setModalActive(false);
  }

  const onCheckButtonChange = (e: any) => {
    setBtnChecked(!isBtnChecked);
    setButtonDisabled(isBtnChecked);
  }

  return (
    <>
      <div className={modalClasses}>
        <div className={styles.modalContent}>
          <h1 className={styles.modalHeader}>Персональные данные</h1>
          <img className={styles.modalImg} src={logo} width={"120px"} height={"120px"} alt="Фото профиля" />
          <form className={styles.formContainer}>
            <span>Имя:</span>
            <Input></Input>
            <span>Фамилия:</span>
            <Input></Input>
            <span>Отчество:</span>
            <Input></Input>
            <span>Телефон:</span>
            <Input></Input>
            <span>E-mail:</span>
            <Input></Input>
            <span>Дата рождения:</span>
            <Input></Input>
            <Checkbox className={styles.modalCheckbox} checked={isBtnChecked} onChange={onCheckButtonChange}>Данные верны</Checkbox>
            <Button className={styles.modalButton} type='primary' onClick={onSaveButtonClick} disabled = {isButtonDisabled}>Сохранить</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Modal;