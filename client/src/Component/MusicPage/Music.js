import React, { useEffect } from 'react'
import Media from '../MediaPlayer/Media'
import { BsHeart } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Addtofavorite, productDetails } from '../redux/Product/ProductAction'

import './Music.css'
import { useParams } from 'react-router-dom'

const Music = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    console.log(id)
    const productDetail = useSelector(state => state.productDetails)
    const { loading, product, error } = productDetail
    console.log(product)
    const { singledetails } = product;
    console.log(singledetails)
    // const {song} = singledetails
    // console.log(song)

    useEffect(() => {
        dispatch(productDetails(id))
    }, [dispatch, id])



    const addtofavorite = (event) => {
        event.preventDefault();
        const data = product._id
        dispatch(Addtofavorite({ data }))
        // console.log(data)
    }



    return (<>

        {loading ? (<h1>loading...</h1>) : error ? ("four Zero Four Error") :
            <div className='MusicContainer'>
                <div className='list'>
                <img src={`http://localhost:27017/uplode/musicImg/${singledetails?.SongImg}`} alt='' />
                </div>
                <div className='Musicbanner'>
                    <img src={`http://localhost:27017/uplode/musicImg/${singledetails?.SongImg}`} alt='' />
                    <span>
                        <h2>{singledetails?.AlbumName}</h2>
                        <h1>{singledetails?.SongName}</h1>
                        <h3>{singledetails?.ArtistName}</h3>
                        <h4>{singledetails?.Year}</h4>
                    </span>
                    <h3 onClick={addtofavorite}><i><BsHeart /></i></h3>
                </div>
                <Media Song={singledetails?.Song} />

            </div>
        }
    </>



    )
}

export default Music