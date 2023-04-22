import React from 'react'
import {AiFillHeart} from 'react-icons/ai' 

const LikedSonglist = ({Song}) => {
console.log(Song)




    return (
    <>
        <div className='Songlist'>
            <img src={`http://localhost:27017/uplode/musicImg/${Song.SongImg}`} alt='' />
            <h2>{Song.SongName}</h2>
            <h4>{Song.ArtistName}</h4>
            <h4>{Song.Year}</h4>
            <h3><i><AiFillHeart/></i></h3>
        </div>
        <hr />
    </>
    
    )}

export default LikedSonglist