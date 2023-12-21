import { ConfigProvider } from "antd";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthorizationPage from "./components/AuthorizationPage/AuthorizationPage";
import MainPage from "./components/MainPage";
import ru_RU from "antd/lib/locale/ru_RU"
import dayjs from 'dayjs'
import 'dayjs/locale/ru'


function App() {
  dayjs.locale('ru');

  return (
    <>
      <ConfigProvider locale={ru_RU}>
        <Routes>
          <Route path="/" element={<AuthorizationPage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
