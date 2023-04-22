import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SongsList from '../Card/SongsList';
import Media from '../MediaPlayer/Media';
import { productsAction } from '../redux/Product/ProductAction';
import './Songs.css'

const Songs = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const { loading, product, error } = products
    // console.log(product)
    const [media, setmedia] = useState();
    console.log(media)


    useEffect(() => {
        dispatch(productsAction())
    }, [])





    return (
        <div className='SongMainContainer'>
            <div className='SongSection'>
                <h1>Latest Songs</h1>
                <span className='SongHeading'>
                    <h2>#</h2>
                    <h2>Name</h2>
                    <h3>Singer</h3>
                    <h3>Year</h3>
                    <h4>Add to favroute</h4>
                </span>
                <div className='SonglistSection'>
                    {
                        product && product.map((product, id) => {
                            // console.log(id)
                            function Media(song) {
                                const products = product
                                // console.log(products)
                                setmedia(products)
                            }
                            return (
                                <>
                                    <div className='Songlist' onClick={Media}>
                                        <p>{id + 1}</p>
                                        <SongsList product={product} song={media} />
                                    </div>
                                    <hr />
                                </>
                            )
                        })
                    }
                    <div className='Songlist'>

                    </div>


                </div>
            </div>
            <Media Song={media?.Song} />
        </div>
    )
}

export default Songs