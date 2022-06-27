import {useNavigate } from 'react-router-dom';
import React , { useEffect, useState } from "react";
import BgHome from  './../../assets/images/homeBg.jpeg';
import Setting from './../../assets/icon/setting.png';
import Speaker from './../../assets/icon/speaker.png';
import Alquran from './../../assets/icon/alquran.png';
import Keislaman from './../../assets/icon/keislaman.png';
import Fiqih from './../../assets/icon/fiqih.png';
import Akidah from './../../assets/icon/akidah.png';
import Modal from './Modal/index';
import axios from "axios";
import Endpoint from './../../components/config/api'
import { Context } from "../../App";
import Music from './../../assets/audio/a.mp3';

const Home = () => {
    const value = React.useContext(Context);  
    const navigate = useNavigate();

    const [modal, setModal] = useState('hidden');
    const toggle = () => {
        setModal('')
    }


    const submits = async (e) => {

        const data = {...value.kriteria}
        data['type'] = e.target.value
        value.setKriteria(data);
        value.setPoin(0);
        value.audio.audio.pause()
        axios.get(`${Endpoint}/total?level=${value.kriteria.level}&type=${e.target.value}`)
        .then(function (response) {
            if(response.data.data.length == 0) {
                navigate('/404')
                return false;
            }
            const acak = response.data.data.sort(() => Math.random() - 0.5);
            value.setSoal(acak)
            navigate('/quiz')
        });

        return false;

    }

    const playAudio = () => {
         
        const data = {...value.audio}
            data.play = !data.play
            data.playHome = !data.playHome
            value.setAudio( data )

        if(value.audio.playHome == false){
            // alert('nyala')
            value.audio.audio.play()
        }
        if(value.audio.playHome == true){
            // alert('mati')
            value.audio.audio.pause()
        }
        
        
    }

    return (
        <>
            <div className="relative flex flex-col items-center font-IndieFlower  bg-cover h-screen " style={{ backgroundImage: `url(${BgHome})` }}>
                <div className='w-full px-7'>
                    <div className="w-full py-5">
                        <div onClick={toggle} className="float-right w-7 shadow-sm rounded-full hover:cursor-pointer">
                            <img src={Setting} alt="" />
                        </div>
                        <div onClick={playAudio} className="relative float-left w-12 shadow-sm rounded-full hover:cursor-pointer">
                            
                            <img src={Speaker} alt="" />
                            <div className={`${value.audio.play ? "hidden" : ""} h-[2px] w-7 -rotate-45  rounded-full bg-slate-700 absolute top-3 left-2`}/>
                        </div>
                    </div>
                </div>
                <div className=" mt-20 grid grid-cols-2 gap-4 uppercase">
                    
                    <label htmlFor="1">
                        <div className="hover:cursor-pointer flex-col justify-center items-center w-36 h-36 rounded-xl shadow-xl p-2 space-y-2">
                            <div className="w-28 mx-auto">
                                <img src={Alquran} alt="Alqur'an" />
                            </div>
                            <div className="text-xs font-semibold text-center max-w-xs text-gray-700">Alqur'an Dan Sunnah</div>
                        </div>
                        <input onChange={submits} id="1" className="hidden" type="radio" value="1" name="pilihan"/>
                    </label>
                    
                    <label htmlFor="2">
                        <div className="hover:cursor-pointer flex-col justify-center items-center w-36 h-36 rounded-xl shadow-xl p-2 space-y-2">
                            <div className="w-20 mx-auto">
                                <img src={Keislaman} alt="Keislaman" />
                            </div>
                            <div className="text-xs font-semibold text-center max-w-xs text-gray-700">Keislaman</div>
                        </div>
                        <input onChange={submits} id="2" className="hidden" type="radio" value="2" name="pilihan"/>
                    </label>

                    <label htmlFor="3">
                        <div className="hover:cursor-pointer flex-col justify-center items-center w-36 h-36 rounded-xl shadow-xl p-2 space-y-2">
                            <div className="w-20 mx-auto">
                                <img src={Fiqih} alt="Fiqih" />
                            </div>
                            <div className="text-xs font-semibold text-center max-w-xs text-gray-700">Fiqih</div>
                        </div>
                        <input onChange={submits} id="3" className="hidden" type="radio" value="3" name="pilihan"/>
                    </label>

                    <label htmlFor="4">
                        <div className="hover:cursor-pointer flex-col justify-center items-center w-36 h-36 rounded-xl shadow-xl p-2 space-y-2">
                            <div className="w-24 mx-auto">
                                <img src={Akidah} alt="Akidah" />
                            </div>
                            <div className="text-xs font-semibold text-center max-w-xs text-gray-700">Akidah Dan Akhlak</div>
                        </div>
                        <input onChange={submits} id="4" className="hidden" type="radio" value="4" name="pilihan"/>
                    </label>


                </div>

                <Modal
                    isOpen={modal}
                    modal={(val) => setModal(val)}
                    value={(val) => value.setKriteria(val)}
                />
     
            </div>
            
 
        </>
    )

}

export default Home;