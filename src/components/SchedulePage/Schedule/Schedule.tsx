import styles from "./Schedule.module.css";
import ModalChangeSchedule from "./ModalChangeSchedule";
import { useState } from "react";
// import dayjs from "dayjs";
// import isoWeek from 'dayjs/plugin/isoWeek'
// import flatpickr from "flatpickr";
// import Flatpickr from 'react-flatpickr'

const Schedule = () => {
  // flatpickr(`${styles.dateContainer}`, {})
  // dayjs.extend(isoWeek);
  // console.log(dayjs().isoWeekday());
  const [isModalActive, setModalActive] = useState(false);
  const [dayParams, setDayParams] = useState({group: '' , time: ''})
  const [currentGroup, setCurrentGroup] = useState();
  const handleScheduleChange = (e: any) => {
    if (e.target.className !== styles.dayDate) {
      setModalActive(true);
      setCurrentGroup(e.target.getElementByTagName('span')[0].value);
      setDayParams({group: e.target.getElementByTagName('span')[0].value, time: e.target.getElementByTagName('span')[1].value})
      console.log("click");
    }
  };

  return (
    <>
      <ModalChangeSchedule
        isModalActive={isModalActive}
        setModalActive={setModalActive}
        dayParams={dayParams}
        setDayParams={setDayParams}
      />
      <div className={styles.dateContainer}>
        {/* <input className={styles.inputDate} /> */}
      </div>
      <div className={styles.scheduleContainer} onClick={handleScheduleChange}>
        <div className={styles.scheduleDayContainer}>
          <div className={styles.dayDate}></div>
          <div>
            <span>АТ-08</span>
            <span>8:00</span>
          </div>
          <div>
            <span></span>
            <span>9:00</span>
          </div>
          <div>
            <span></span>
            <span>10:00</span>
          </div>
          <div>
            <span></span>
            <span>11:00</span>
          </div>
          <div>
            <span></span>
            <span>12:00</span>
          </div>
          <div>
            <span></span>
            <span>13:00</span>
          </div>
          <div>
            <span></span>
            <span>14:00</span>
          </div>
          <div>
            <span></span>
            <span>15:00</span>
          </div>
          <div>
            <span></span>
            <span>16:00</span>
          </div>
          <div>
            <span></span>
            <span>17:00</span>
          </div>
          <div>
            <span></span>
            <span>18:00</span>
          </div>
          <div>
            <span></span>
            <span>19:00</span>
          </div>
          <div>
            <span></span>
            <span>20:00</span>
          </div>
        </div>
        <div className={styles.scheduleDayContainer}>
          <div className={styles.dayDate}></div>
          <div>
            <span></span>
            <span>8:00</span>
          </div>
          <div>
            <span></span>
            <span>9:00</span>
          </div>
          <div>
            <span></span>
            <span>10:00</span>
          </div>
          <div>
            <span></span>
            <span>11:00</span>
          </div>
          <div>
            <span></span>
            <span>12:00</span>
          </div>
          <div>
            <span></span>
            <span>13:00</span>
          </div>
          <div>
            <span></span>
            <span>14:00</span>
          </div>
          <div>
            <span></span>
            <span>15:00</span>
          </div>
          <div>
            <span></span>
            <span>16:00</span>
          </div>
          <div>
            <span></span>
            <span>17:00</span>
          </div>
          <div>
            <span></span>
            <span>18:00</span>
          </div>
          <div>
            <span></span>
            <span>19:00</span>
          </div>
          <div>
            <span></span>
            <span>20:00</span>
          </div>
        </div>
        <div className={styles.scheduleDayContainer}>
          <div className={styles.dayDate}></div>
          <div>
            <span></span>
            <span>8:00</span>
          </div>
          <div>
            <span></span>
            <span>9:00</span>
          </div>
          <div>
            <span></span>
            <span>10:00</span>
          </div>
          <div>
            <span></span>
            <span>11:00</span>
          </div>
          <div>
            <span></span>
            <span>12:00</span>
          </div>
          <div>
            <span></span>
            <span>13:00</span>
          </div>
          <div>
            <span></span>
            <span>14:00</span>
          </div>
          <div>
            <span></span>
            <span>15:00</span>
          </div>
          <div>
            <span></span>
            <span>16:00</span>
          </div>
          <div>
            <span></span>
            <span>17:00</span>
          </div>
          <div>
            <span></span>
            <span>18:00</span>
          </div>
          <div>
            <span></span>
            <span>19:00</span>
          </div>
          <div>
            <span></span>
            <span>20:00</span>
          </div>
        </div>
        <div className={styles.scheduleDayContainer}>
          <div className={styles.dayDate}></div>
          <div>
            <span></span>
            <span>8:00</span>
          </div>
          <div>
            <span></span>
            <span>9:00</span>
          </div>
          <div>
            <span></span>
            <span>10:00</span>
          </div>
          <div>
            <span></span>
            <span>11:00</span>
          </div>
          <div>
            <span></span>
            <span>12:00</span>
          </div>
          <div>
            <span></span>
            <span>13:00</span>
          </div>
          <div>
            <span></span>
            <span>14:00</span>
          </div>
          <div>
            <span></span>
            <span>15:00</span>
          </div>
          <div>
            <span></span>
            <span>16:00</span>
          </div>
          <div>
            <span></span>
            <span>17:00</span>
          </div>
          <div>
            <span></span>
            <span>18:00</span>
          </div>
          <div>
            <span></span>
            <span>19:00</span>
          </div>
          <div>
            <span></span>
            <span>20:00</span>
          </div>
        </div>
        <div className={styles.scheduleDayContainer}>
          <div className={styles.dayDate}></div>
          <div>
            <span></span>
            <span>8:00</span>
          </div>
          <div>
            <span></span>
            <span>9:00</span>
          </div>
          <div>
            <span></span>
            <span>10:00</span>
          </div>
          <div>
            <span></span>
            <span>11:00</span>
          </div>
          <div>
            <span></span>
            <span>12:00</span>
          </div>
          <div>
            <span></span>
            <span>13:00</span>
          </div>
          <div>
            <span></span>
            <span>14:00</span>
          </div>
          <div>
            <span></span>
            <span>15:00</span>
          </div>
          <div>
            <span></span>
            <span>16:00</span>
          </div>
          <div>
            <span></span>
            <span>17:00</span>
          </div>
          <div>
            <span></span>
            <span>18:00</span>
          </div>
          <div>
            <span></span>
            <span>19:00</span>
          </div>
          <div>
            <span></span>
            <span>20:00</span>
          </div>
        </div>
        <div className={styles.scheduleDayContainer}>
          <div className={styles.dayDate}></div>
          <div>
            <span></span>
            <span>8:00</span>
          </div>
          <div>
            <span></span>
            <span>9:00</span>
          </div>
          <div>
            <span></span>
            <span>10:00</span>
          </div>
          <div>
            <span></span>
            <span>11:00</span>
          </div>
          <div>
            <span></span>
            <span>12:00</span>
          </div>
          <div>
            <span></span>
            <span>13:00</span>
          </div>
          <div>
            <span></span>
            <span>14:00</span>
          </div>
          <div>
            <span></span>
            <span>15:00</span>
          </div>
          <div>
            <span></span>
            <span>16:00</span>
          </div>
          <div>
            <span></span>
            <span>17:00</span>
          </div>
          <div>
            <span></span>
            <span>18:00</span>
          </div>
          <div>
            <span></span>
            <span>19:00</span>
          </div>
          <div>
            <span></span>
            <span>20:00</span>
          </div>
        </div>
        <div className={styles.scheduleDayContainer}>
          <div className={styles.dayDate}></div>
          <div>
            <span></span>
            <span>8:00</span>
          </div>
          <div>
            <span></span>
            <span>9:00</span>
          </div>
          <div>
            <span></span>
            <span>10:00</span>
          </div>
          <div>
            <span></span>
            <span>11:00</span>
          </div>
          <div>
            <span></span>
            <span>12:00</span>
          </div>
          <div>
            <span></span>
            <span>13:00</span>
          </div>
          <div>
            <span></span>
            <span>14:00</span>
          </div>
          <div>
            <span></span>
            <span>15:00</span>
          </div>
          <div>
            <span></span>
            <span>16:00</span>
          </div>
          <div>
            <span></span>
            <span>17:00</span>
          </div>
          <div>
            <span></span>
            <span>18:00</span>
          </div>
          <div>
            <span></span>
            <span>19:00</span>
          </div>
          <div>
            <span></span>
            <span>20:00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;