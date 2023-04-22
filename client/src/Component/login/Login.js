import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/user/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import './Login.css'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector(state => state.login)
  const { loading, user, error } = userDetails

  const [User, setUser] = useState({
    Email: '', Password: ''
  })
  // const status = (user.status)
  useEffect(() => {
    if (user) {
      console.log(user)
      navigate('/')
    } else {
      console.log('user not exist ')
    }
  }, [user])



  const handelChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    // console.log(value)
    setUser({ ...User, [name]: value })
  }

  const submitdata = (e) => {
    e.preventDefault();
    dispatch(login(User))
  }


  return (
    <div className='LoginContainer'>
      <div className='inputfield'>
        <h1 className='heading'>User Login</h1>
        <input type='email' name='Email' className='username' placeholder='Username' value={User.Email} onChange={handelChange} />
        <input type='password' name='Password' className='Password' placeholder='Password' value={User.Password} onChange={handelChange} />
        <div className='link'>
          <Link to="/signup" ><span className='signuplink'>NEW USER?</span></Link>
          {/* <Link to="/forget_password"><span className='forgetlink'>FORGET PASSWORD?</span></Link> */}
        </div>
        <button type='button' className='loginbutton' onClick={submitdata}>SUBMIT</button>

      </div>
      <div className='ImageContainer'>
        <img className='img loginpic' src='./pictures/20824342_6343845.jpg' alt='pic' />
      </div>
    </div>
  )
}

export default Login