import ModalPaymentPage from '../ModalPaymentPage/ModalPaymentPage'
import styles from "./PaymentPage.module.css";
import { useState, useEffect } from "react";
import logo from "./profile.svg";
import axios from "axios";

const PaymentPage = () => {
  const [groups, setGroups] = useState([]);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const fetchPosts = async () => {
    const response = await axios.get(
      "https://658d5b8c7c48dce947390555.mockapi.io/api/v2/groups"
    );
    setGroups(response.data);
  };

  const changePaymentStatus = (e) => {
    setIsActiveModal(true);
    // console.log('clck');
    // console.log(e.target.closest(`${styles.userContainer}`));
    // const nameClass = styles.profileName;
    // const paymentClass = styles.paymentStatus;
    // setCurrentUser({name: e.target.querySelector(nameClass), payment: e.taget.querySelector(paymentClass)});
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <ModalPaymentPage isActive={isActiveModal} setModalActive={setIsActiveModal} currentUser={currentUser}/>
      <div className={styles.scheduleContainer}>
        {groups.map((group) => (
          <>
            <div className={styles.groupContainer}>
              <div>
                <span>{`АТ-0` + group.id}</span>
              </div>
              <div className={styles.userContainer} onClick={changePaymentStatus}>
                <img src={logo} alt="Аватар профиля" />
                <span className={styles.profileName}>Ангелина Маратова</span>
                <span className={styles.paymentStatus}>Оплачено</span>
              </div>
              {group.users.map((user) => (
                <div className={styles.groupContainer}>
                  <img src={logo} alt="Аватар профиля" />
                  <span className={styles.profileName}>{user.username}</span>
                  <span className={styles.paymentStatus}>{user.status}</span>
                </div>
              ))}
            </div>
          </>
        ))}
        {/* <div className={styles.groupContainer}>
          <div>
            <span>АТ-08</span>
          </div>
          <div>
            
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Марат Ангелинов</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Игорь Павлов</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Павел Игорев</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Максим Мишев</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Михаил Мишев</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Дмитрий Александров</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Александр Дмитриев</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div>
            <span>АТ-09</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Евгений Евгеньев</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Макар Макаров</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Елизавета Лужева</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Богдан Степанов</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Кристина Красивова</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Лев Тугарин</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Екатерина Подушкина</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Семён Бобриков</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Максим Бобриков</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Игорь Стариков</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Пётр Первов</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Николай Зиплев</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div>
            <span>АТ-10</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Сергей Серёжев</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Дмитрий Токарев</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Роман Романов</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Анна Павлова</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Ян Янович</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Владимир Горин</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Диана Дианова</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Ксения Огурцова</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Артем Артемов</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div>
            <span>АТ-11</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Олег Плебеев</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Никита Никитин</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Илья Николаев</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Ирина Иринова</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Екатерина Молодчикова</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div>
            <span>АТ-12</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Адам Евов</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Ева Адамова</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Зинаида Зинаидова</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Лев Тигров</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Александр Радиков</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
          <div>
            <img src={logo} alt="Аватар профиля"/>
            <span className={styles.profileName}>Георгий Матмехов</span>
            <span className={styles.paymentStatus}>Оплачено</span>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PaymentPage;
