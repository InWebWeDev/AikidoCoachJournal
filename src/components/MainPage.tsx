import { useNavigate } from "react-router-dom";
import Header from "./SchedulePage/Header/Header";
import Schedule from "./SchedulePage/Schedule/Schedule";
import { useState } from 'react';
import PaymentPage from "./SchedulePage/PaymentPage/PaymentPage";

const MainPage = () => {
  const [current, setCurrent] = useState('schedule');

  return (
    <>
      <Header current={current} setCurrent={setCurrent}></Header>
      {current === 'schedule' ? <Schedule/> : <PaymentPage/>}
    </>
  )
}

export default MainPage;