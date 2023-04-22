import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { Registration } from '../redux/user/UserAction'

const Signup = () => {

  const dispatch = useDispatch()

  const [User, setUser] = useState({
    Name: '', Email: '', Password: '', Cpassword: ''
  })

  const handelchange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUser({ ...User, [name]: value })
  }

  const submitdata = (e) => {
    e.preventDefault();
    dispatch(Registration(User))
  }


  return (
    <div className='LoginContainer'>
      <div className='inputfield'>
        <h1 className='heading'>Registration</h1>
        <input name='Name' type='text' className='username' placeholder='Name' value={User.Name} onChange={handelchange} />
        <input type='email' name='Email' className='username' placeholder='Username/Email' value={User.Email} onChange={handelchange}/>
        <input type='password' name='Password' className='Password' placeholder='Password' value={User.Password} onChange={handelchange}/>
        <input type='password' name='Cpassword' className='Password' placeholder='Confirm Password' value={User.Cpassword} onChange={handelchange}/>
        <div className='link'>
          <Link to="/login" ><span className='signuplink'>Sign In</span></Link>
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

export default Signup