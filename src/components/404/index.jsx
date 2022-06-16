import React, {useState, useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import BgQuiz from './../../assets/images/bgQuiz.jpeg';
import { Context } from "../../App";

function Index() {
    const value = React.useContext(Context);  


    const navigate = useNavigate();

    const home = () => {

        if(value.audio.playHome == true){
            // alert('nyala')
            value.audio.audio.play()
        }
        if(value.audio.playHome == false){
            // alert('mati')
            value.audio.audio.pause()
        }
        navigate('/home')
    }


    return (
        <div className="font-IndieFlower mx-auto flex flex-col items-center justify-center bg-cover h-screen  px-7 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${BgQuiz})` }}>
            <span className='text-6xl text-gray-50 font-semibold'>Oops !</span>
            <p className='text-gray-50 text-3xl text-center'>Type dan level ini belum tersedia</p>
            <button onClick={home} className='p-2 bg-blue-600 rounded-md text-gray-200 font-bold'>Home</button>
        </div>
    )
}

export default Index
