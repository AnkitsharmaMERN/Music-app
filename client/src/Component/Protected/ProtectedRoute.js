import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const UserDetails = useSelector(state => state.login)
    const { user } = UserDetails
    // const {userData} = user
    console.log(user)
    if (!user) {
        return <Navigate to={'/login'} />
    }
    return children
}

export default ProtectedRoute