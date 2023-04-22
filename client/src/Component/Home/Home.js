import React, { useEffect, useState } from 'react'
import './Home.css'
import { productsAction} from '../redux/Product/ProductAction'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Media from '../MediaPlayer/Media'
import SongsList from '../Card/SongsList'
import Login from '../login/Login'

function Home() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const { loading, product, error } = products
    // console.log(product[0])
    const i = product[0];
    console.log(i)
    const [media, setmedia] = useState();
    // setmedia(product[i])
    console.log(media)
    // if(product){
    // }else{
    //     dispatch(productsAction())
        
    // }

    useEffect(() => {
        dispatch(productsAction())
    }, [dispatch])
    
   

    return (<>
        {loading ? (<h1>loading...</h1>) : error ? (<Login/>) :
            <div className='MainContainer'>
                <span>
                    <div className='Latestsongs'>
                        <div className='topSection'>
                            <h1 className='SongHeading1'>Latest Songs</h1>
                            <Link to='/Songs' className='homeLink'>
                                <h3 className='SongHeading3'>Show all</h3>
                            </Link>
                        </div>
                        
                        
                        {media?
                        (
                        <div className='ContentSection'>
                        <img src={`http://localhost:27017/uplode/musicImg/${media?.SongImg}`} alt='' />
                        <span>
                        <h1>{media?.AlbumName}</h1>
                        <h2>{media?.SongName}</h2>
                        <h3>{media?.ArtistName}</h3>
                        <h4>{media?.Year}</h4>
                        </span>
                        </div>
                        )   : ( <div className='HomeBanner'>
                            <img src={`http://localhost:27017/uplode/musicImg/${i?.SongImg}`} alt='' />
                            </div>)
                        }
                        
                    </div>
                    <div className='HomeSongList'>
                        <div className='HomeSongListSection'>
                            <span className='SongHeading'>
                                <h2>#</h2>
                                <h2>Name</h2>
                                <h3>Singer</h3>
                                <h3>Year</h3>
                                <h4>Add to favroute</h4>
                            </span>
                            <div className='SonglistSection'>
                                {
                                    product && product?.map((product, id) => {
                                        // console.log(id)
                                        function Media() {
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


                            </div>
                        </div>

                    </div>
                </span>
                <Media Song={media?.Song} />
            </div>
        }
    </>
    )
}

export default Home