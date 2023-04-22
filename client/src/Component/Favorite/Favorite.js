import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'
import LikedSonglist from '../Card/LikedSonglist'
import { Getfavoritesong } from '../redux/Product/ProductAction'
import './favorite.css'

const Favorite = () => {
  const dispatch = useDispatch();
  const {song}  = useSelector(state => state.favroutesong)
   console.log(song)
  const { songs } = song
  console.log(songs)

  useEffect(() => {
    dispatch(Getfavoritesong())
  }, [dispatch])


  return (
    
    <div className='mainfavoriteContainer'>
      <div className='favListcontainer'>
        <h1>Favorite Songs </h1>
        <span className='SongHeading'>
                    <h2>#</h2>
                    <h2>Name</h2>
                    <h3>Singer</h3>
                    <h3>Year</h3>
                    <h4>Add to favroute</h4>
                </span>
      {
        songs?.favoriteProduct.map((song) => {
          return (<LikedSonglist Song={song} />
          )
        })

      }

      </div>
    </div>
  )
}

export default Favorite