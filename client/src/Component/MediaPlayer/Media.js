import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { BsPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs'
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md'
import { FaBackward, FaForward } from 'react-icons/fa'
import './Media.css'
import { useSelector } from 'react-redux'

const Media = ({ Song }) => {
    const products = useSelector(state => state.products)
    const { loading, product, error } = products
    // console.log(product)

    // const [currentSong, SetcurrentSong] = useState()
    let currentSong = Song;
    console.log(currentSong)
    const [isplaying, Setisplaying] = useState(false)
    const [duration, Setduration] = useState(0)
    const [currentTime, SetcurrentTime] = useState(0)

    const audioPlayer = useRef()
    const progressBar = useRef()

    // const curreSong = () => {
    //     for (let i = 0; i < product.length; i++) {
    //         // console.log(product)
    //         // console.log(Song)
    //         if (Song === product[i].Song) {
    //             // SetcurrentSong(product[i].Song)
    //             currentSong=product[i].Song
    //         }
    //     }
    // }
    const previous = () => {
        for (let i = 0; i < product.length; i++) {
            if (Song === product[i].Song) {
                // SetcurrentSong(product[i-1].Song)
                currentSong=product[i-1].Song
                // console.log(currentSong)
            }
        }
    }

    const Next = () => {
        for (let i = 0; i < product.length; i++) {
            if (i === product.length - 1) {
                // console.log(i)
                // console.log(product.length)
                console.log('you are in last postion')
            } else {

                if (Song === product[i].Song) {
                    // console.log(product[i + 1].Song)
                    // SetcurrentSong(product[i+1].Song)
                    return  (currentSong=product[i+1].Song)
             
                    // return (currentSong)
                }

            }
        }
    }

    useEffect(() => {
        // curreSong()
        // SetcurrentSong(Songs)
        console.log(currentSong)
        // this is for remove decimal (milisecond) and set the duration time of songs 
        const seconds = audioPlayer.current.duration
        Setduration(seconds)
        // this sextion is set the value of progress bar maximum value 
        progressBar.current.max = seconds;
        // SetcurrentSong(Song)

    }, [isplaying, currentTime,currentSong])



    // useEffect(()=>{
    //     // Next()
    // },[Next])


    // This function is convert/calculate the minute of song duration 
    const calculateTime = (secs) => {
        // this is the function to calculate seconds to minutes  
        const minutes = Math.floor(secs / 60)
        // console.log(minutes)
        // this is the short condition to check if minutes is less then 10then put 0 in front of minutes 
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        // console.log(returnedMinutes)
        // this is the function to calculate seconds to minutes after:seconds means complete duration    
        const seconds = Math.floor(secs % 60)
        // console.log(seconds)
        // this is the short condition to check if minutes is less then 10then put 0 in front of minutes 
        const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
        // console.log(returnSeconds)
        // here return the calculated value to the function call postion
        return `${returnedMinutes}:${returnSeconds}`
    }

    const changeRange = () => {
        // here current item update for when i can change through progressbar 
        // if(current){

        // }
        SetcurrentTime(progressBar.current.value)
        console.log(currentTime)
        // Here if i want to change through seek bar then seekbar of postion value is update in current song value  
        audioPlayer.current.currentTime = progressBar.current.value
        // console.log({progressBar})

    }

    const toggelbutton = () => {
        // const prevalue = isplaying;
        // this is for make the reverse of the button 
        Setisplaying(!isplaying)
        // Means if isplaying is reviverse like true then play song other wise stop
        if (!isplaying) {
            audioPlayer.current.play();

        }
        else {
            audioPlayer.current.pause();
        }
    }

    const progressPlaying = () => {
        // here songs of current time set in the cureent variable 
        const current = audioPlayer.current.currentTime
        // console.log(current)
        // now again update the current songs value because here value update automaticaly  like refres
        SetcurrentTime(current)
        // console.log(duration)
        // now here make a percentage and store to progress usestate for update the seekbar 
        // console.log(audioPlayer.current.currentTime)
        // console.log(audioPlayer.current.duration)
        // this is for convert play button after end the song
        if (audioPlayer.current.currentTime === audioPlayer.current.duration) {
            Setisplaying(!isplaying)
            timetravel()
        }
    }

    const timetravel = () => {
        const current = 0
        // console.log(current)
        audioPlayer.current.currentTime = current
        progressBar.current.value = current
    }
    const Backward = () => {
        const current = (audioPlayer.current.currentTime - 10)
        // console.log(current)
        audioPlayer.current.currentTime = current
        progressBar.current.value = current

    }

    const forward = () => {
        const current = (audioPlayer.current.currentTime + 10)
        // console.log(current)
        audioPlayer.current.currentTime = current
        progressBar.current.value = current
    }




    return (
        <div className='Mediaplayer'>
            <audio ref={audioPlayer} onTimeUpdate={progressPlaying} src={`http://localhost:27017/uplode/music/${currentSong}`} preload='metadata'></audio>
            <div className='Mediabuttonsection'>
                <div className='playpuse'>
                    <button onClick={previous}> <i><MdSkipPrevious /></i></button>
                    <button onClick={Backward}> <i><FaBackward /></i></button>
                    <button onClick={toggelbutton}>
                        <i>
                            {isplaying ? <BsFillPauseCircleFill /> : <BsPlayCircleFill />}
                        </i>
                    </button>

                    <button onClick={forward}><i><FaForward /></i></button>
                    <button onClick={Next}><i><MdSkipNext /></i></button>

                </div>
                <span>
                    <p>{calculateTime(currentTime)}</p>
                    <input type='range' ref={progressBar} className='rangebar' Value={currentTime} onChange={changeRange} />
                    <p>{calculateTime(duration)}</p>
                </span>
            </div>
        </div>
    )
}

export default Media