import React, { useState } from 'react'
import { BsSpotify } from 'react-icons/bs'
import { BiSearchAlt, BiLibrary } from 'react-icons/bi'
import { ImHome3 } from 'react-icons/im'
import { FcLikePlaceholder } from 'react-icons/fc'
import '../Left/left.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'




const Left = () => {
    const UserDetails = useSelector(state => state.Profile)
    const { user } = UserDetails





    return (<>
        <div className='leftContainer'>
            <div className='logoContainer'>
                <i><BsSpotify /></i>
                <h3>Spotify</h3>
            </div>
            <div className='SearchContainer'>
                <i><BiSearchAlt /></i>
                <input type="search" placeholder='Search...' />
            </div>

            <div className='leftmenuContainer'>
                <div className='leftContentContainer'>
                    <Link to="/">
                        <span className='leftMenuContent'>
                            <i> <ImHome3 /></i>
                            <h4>Home</h4>
                        </span>
                    </Link>
                </div>
                <div className='leftContentContainer'>
                    <Link to='/library'>
                        <span className='leftMenuContent'>
                            <i><BiLibrary /></i>
                            <h4>Your Library</h4>
                        </span>
                    </Link>
                </div>

                <div className='leftContentContainer'>
                    <Link to='/favorite'>

                        <span className='leftMenuContent'>
                            <i><FcLikePlaceholder /></i>
                            <h4>liked Songs</h4>
                        </span>
                    </Link>
                </div>

    
            </div>
        </div>
    </>
    )
}

export default Left