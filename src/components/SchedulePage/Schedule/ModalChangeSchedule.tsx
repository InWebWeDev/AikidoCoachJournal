import styles from './ModalChangeSchedule.module.css'
import {Button} from 'antd';

const ModalChangeSchedule = ({isModalActive, setModalActive, dayParams, setDayParams} : any) => {
  const modalClasses = isModalActive ? [styles.modalContainer, styles.modalActive].join(' ') : styles.modalContainer;

  const onSaveButtonClick = () => {
    
    setModalActive(false);
  }
  
  return (
    <>
      <div className={modalClasses}>
        <div className={styles.modalInfo}>
          <select name="" id="">
            <option value="" selected></option>
            <option value="">АТ-08</option>
            <option value="">АТ-09</option>
            <option value="">АТ-10</option>
            <option value="">АТ-11</option>
            <option value="">АТ-12</option>
          </select>
          <Button className={styles.modalButton} type='primary' onClick={onSaveButtonClick}>Сохранить</Button>
        </div>
      </div>
    </>
  )
}

export default ModalChangeSchedule;