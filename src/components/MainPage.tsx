import { useNavigate } from "react-router-dom";
import Header from "./SchedulePage/Header/Header";
import Schedule from "./SchedulePage/Schedule/Schedule";
import { useState, useEffect } from 'react';
import PaymentPage from "./SchedulePage/PaymentPage/PaymentPage";
import axios from "axios";

const MainPage = () => {
  const [current, setCurrent] = useState('schedule');
  const [groups, setGroups] = useState([]);
  
  

  return (
    <>
      <Header current={current} setCurrent={setCurrent}></Header>
      {current === 'schedule' ? <Schedule/> : <PaymentPage groups={groups}/>}
    </>
  )
}

export default MainPage;