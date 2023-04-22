import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import Favorite from '../Favorite/Favorite'
import Login from '../login/Login'
import { Getfavoritesong } from '../redux/Product/ProductAction'
import './library.css'

const Library = () => {
    const products = useSelector(state => state.products)
    const { loading, product, error } = products
    const dispatch = useDispatch();
    const { song } = useSelector(state => state.favroutesong)
    console.log(song)
    const { songs } = song
    console.log(songs)

    useEffect(() => {
        dispatch(Getfavoritesong())
    }, [dispatch])

    return (<>
     {loading ? (<h1>loading...</h1>) : error ? (<Login/>) :
       ( <div className='MainContainer'>
            <div className='Latestsongs'>
                <div className='topSection'>
                    <h1 className='SongHeading1'>Latest Songs</h1>
                    <Link to='/Songs' className='homeLink'>
                        <h3 className='SongHeading3'>Show all</h3>
                    </Link>
                </div>
                <div className='contentSection'>
                    {
                       songs?.favoriteProduct.map((song) => {
                            return (
                                <Card song={song} />
                            )
                        })
                    }
                   

                </div>
            </div>

        </div>
       )
                }



        {/* <Favorite/> */}

    </>
    )
}

export default Library