import {Route, Routes} from 'react-router-dom';
import './App.css';
import AuthorizationPage from './components/AuthorizationPage/AuthorizationPage';
import ProfilePage from './components/ProfilePage';

function App() {
  let isAuthorized = false;
  return (
    <>
      <Routes>
        <Route path='/' element={<AuthorizationPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
      </Routes>
    </>
  )
}

export default App
