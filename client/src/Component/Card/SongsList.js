import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Addtofavorite } from '../redux/Product/ProductAction'
import './SongsList.css'

const SongsList = ({ product }) => {
    const dispatch = useDispatch();
    // console.log(song._id)
    const addtofavorite = (event) => {
        event.preventDefault();
        const data = product._id
        dispatch(Addtofavorite({ data }))
        // console.log(data)
    }



    return (<>
        <img src={`http://localhost:27017/uplode/musicImg/${product?.SongImg}`} alt='' />
        <h2>{product.SongName}</h2>
        <h4>{product.ArtistName}</h4>
        <h4>{product.Year}</h4>
        <h3 onClick={addtofavorite}><i><BsHeart /></i></h3>
    </>
    )
}

export default SongsList