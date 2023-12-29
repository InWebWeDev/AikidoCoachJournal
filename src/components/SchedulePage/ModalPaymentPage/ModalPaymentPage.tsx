import styles from './ModalPaymentPage.module.css'
import { Button } from 'antd';

const ModalPaymentPage = ({isActive, setModalActive, currentUser} : any) => {
  const modalClasses= isActive ? [styles.modalWrapper, styles.modalWrapperActive].join(' ') : styles.modalWrapper;
  const onSaveButtonClick = () => {
    setModalActive(false);
  }

  return (
    <>
      <div className={modalClasses}>
        <div className={styles.modalContent}>
          <span className={styles.modalHeader}>Ангелина Маратова</span>
          <div className={styles.paymentStatus}>
            <span>Статус оплаты</span>
            <button className={styles.okButton}>Оплачено</button>
            <button className={styles.notokButton}>Не оплачено</button>
          </div>
          <Button className={styles.modalButton} type='primary' onClick={onSaveButtonClick}>Сохранить</Button>
        </div>
      </div>
    </>
  )
}

export default ModalPaymentPage;