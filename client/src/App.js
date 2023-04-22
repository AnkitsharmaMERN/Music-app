import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/login/Login';
import Signup from './Component/Signup/Signup';
import Home from './Component/Home/Home';
import Left from '../src/Component/Left/left'
import Music from './Component/MusicPage/Music';
import Library from './Component/Library/Library';
import Favorite from './Component/Favorite/Favorite';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { UserDetails } from './Component/redux/user/UserAction';
import ProtectedRoute from './Component/Protected/ProtectedRoute';
import Songs from './Component/Songs/Songs';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserDetails())
  }, [dispatch])



  return (
    <>
      {/* <div> */}
      <Router>
        <Left />
        <Routes>
          <Route exact path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/music/:id' element={<ProtectedRoute><Music /></ProtectedRoute>} />
          <Route exact path='/library' element={<ProtectedRoute><Library /></ProtectedRoute>} />
          <Route exact path='/Songs' element={<ProtectedRoute><Songs /></ProtectedRoute>} />
          <Route exact path='/favorite' element={<ProtectedRoute><Favorite /></ProtectedRoute>} />
        </Routes>


      </Router>

      {/* </div> */}
    </>
  );
}

export default App;
