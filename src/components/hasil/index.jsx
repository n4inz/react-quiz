import React, { useState, useEffect } from 'react';
import BgQuiz from './../../assets/images/bgQuiz.jpeg'
import Skor from './../../assets/icon/skor.png';
import { Context } from "../../App";
import {useNavigate } from 'react-router-dom';
import cookies from "../config/cookie";
import axios from "axios";
import Endpoint from '../config/api';

const token = cookies.get('credensial'); 
const Hasil = () => {
    const [peringkat, setPeringkat] = useState([]);
    const value = React.useContext(Context);
    const navigate = useNavigate();
    const [down, setDown] = useState(3);
    const timer = () => setDown(down - 1);

    useEffect(() => {
       
        if (down <= 0) {
            postData()
           
            return;
        }
        const id = setInterval(timer, 1000);
        return () => {
            clearInterval(id);
            
        }
    }, [down])


    async function postData() {
       
        const request = await axios({
            method : 'post',
            headers: { 'Content-Type': 'application/json'},
            headers: { Authorization: `Bearer ${token.access_token}` },
            data:{
                'user_id' : token.user.id,
                'poin':value.poin
            },
            // url: `${Endpoint}?page=1&level=SD&type=1`
            url: `${Endpoint}/rangking-store`

        })
        // console.log(request.data.peringkat)

        setPeringkat(request.data.peringkat)
        return request
    }

    const home = () => {
        value.setPoin(0)
        if(value.audio.playHome == true){
            value.audio.audio.play()
        }
        if(value.audio.playHome == false){
            value.audio.audio.pause()
        }
        navigate('/home')
      
    }

    const ulang = () => {
        value.setPoin(0)
       
        const acak = value.soal.sort(() => Math.random() - 0.5);
        value.setSoal(acak)
        navigate('/quiz')
    }


    return (

        <div className=" font-IndieFlower mx-auto flex flex-col items-center justify-center bg-cover h-screen  px-7 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${BgQuiz})` }}>
            <div className={`${down == 0 ? "hidden" : ""}`}>
                <span className=' text-6xl text-gray-50 font-semibold'>
                    {down}
                </span>
            </div>
            
            <div tabIndex="-1" className={`${down == 0 ? "" : "hidden"} overflow-y-auto mx-auto overflow-x-hidden fixed top-20 right-0 left-0 z-50 w-full h-modal md:h-full`}>
                <div className="relative mx-auto w-full max-w-md h-full md:h-auto">  
                    <div className='flex flex-col justify-center items-center mb-16 text-5xl'>
                        <span className=' text-gray-50 font-bold'>Skor</span>
                        <span className=' text-gray-50 font-bold'>{value.poin}</span>
                    </div>
                    <div className="relative m-5 bg-white opacity-60 rounded-lg shadow dark:bg-gray-700">
                        <div className="relative rounded-t dark:border-gray-600 mb-5 mt-2">
                            <h3 className='text-center text-3xl text-blue-400 font-bold'>Rangking</h3>
                        </div>

                        <div className="flex flex-col justify-center items-center text-center">                              
                            <div className='w-full '>
                                <table className='w-full border'>
                                    <thead>
                                        <tr className='border-b p-1 bg-blue-500 text-white font-semibold'>
                                            <td>P</td>
                                            <td>Nama</td>
                                            <td>Poin</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {peringkat.slice(0,5).map((val, key) => {
   
                                            return (
                                                <tr key={val.poins} className='border-b p-1'>
                                                    <td>{key+1}</td>
                                                    <td>
                                                        {val.nama && val.nama.name}
                                                    </td>
                                                    <td>{val.poins}</td>
                                                </tr>

                                            )
 
                                        })}

                                        {peringkat.map((val, key) => {

                                            if(val.nama && val.nama.id == token.user.id){
                                                return (
                                                    <tr key={val.poins} className='border-b p-1 text-red-600 italic font-semibold'>
                                                        <td>*{key+1}</td>
                                                        <td>
                                                            {val.nama && val.nama.name}
                                                        </td>
                                                        <td>{val.poins}</td>
                                                    </tr>
    
                                                )

                                            }
                                        })}
                                    
                                   </tbody>
                                </table>
                                {/* <img src={Skor} alt="Skor" /> */}
                            </div>
                        </div>

                        <div className='text-center space-x-3 py-5'>
                            <button onClick={ulang} className='p-2 bg-blue-600 rounded-md text-gray-200 font-bold'>Ulangi</button>
                            <button onClick={home} className='p-2 bg-blue-600 rounded-md text-gray-200 font-bold'>Home</button>

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hasil;

