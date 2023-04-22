import React from 'react'
import { Link } from 'react-router-dom'
import '../Card/Card.css'

const Card = ({ song }) => {
  console.log(song)
  console.log(song.SongName)
  return (
    <Link to={`/music/${song._id}`} className='Cardlink'>
      <div className='CardContainer' key={song._id} >
        <img src={`http://localhost:27017/uplode/musicImg/${song?.SongImg}`} alt='' />
        <span>
          <h3>{song.SongName}</h3>
          <p>{song.ArtistName}</p>
          <p>{song.Year}</p>
        </span>
      </div>
    </Link>
  )
}

export default Card