import React, { useEffect, useState }  from 'react';
import BgQuiz from './../../assets/images/bgQuiz.jpeg'
import Test from './../../assets/icon/fiqih.png';
import { Context } from "../../App";
import axios from "axios";
import Endpoint from './../../components/config/api';
import {useNavigate } from 'react-router-dom';
window.onbeforeunload = function() { return alert('ups') };
const Quiz = () => {
    const [data, setData] = useState([]);
    const value = React.useContext(Context);
    const [page, setPage] = useState(0);
    const [poin,setPoin] = useState(0);
    const navigate = useNavigate();
    const [down, setDown] = useState(3);
    const timer = () => setDown(down - 1);
    useEffect(() => {
        if (down <= 0) {
            fetchData()
            return;
        }
        const id = setInterval(timer, 1000);
        return () => {
            clearInterval(id);
            
        }
      }, [down])

    async function fetchData() {
    const request = await axios.get(`${Endpoint}?page=${value.soal[page]}&level=${value.kriteria.level}&type=${value.kriteria.type}`)
    setData(request.data.data.data)
    return request
    }

    const next = (pilihan, poins) => {
        if(value.audio.playHome == true){
            // alert('nyala')
            value.audio.audioClick.play()
        }
        if(value.audio.playHome == false){
            // alert('mati')
            value.audio.audioClick.pause()
        }

      

        setDown(3)
        if(value.soal.length-1 == page-1){
            navigate('/hasil')
            return false;
        }
        if(pilihan == 1){
            value.setPoin(parseInt(value.poin)+parseInt(poins))
            console.log(value.poin)
        }
        axios.get(`${Endpoint}?page=${value.soal[page+1]}&level=${value.kriteria.level}&type=${value.kriteria.type}`)
        .then((e) => {
            setData(e.data.data.data)
            setPage(page+1)
        })

    }

    console.log()
    return (
        <div className="font-IndieFlower mx-auto flex flex-col items-center justify-center bg-cover h-screen  px-7 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${BgQuiz})` }}>
            <span className={`${down == 0 ? "hidden" : ""} text-6xl text-gray-50 font-semibold`}>{down}</span>
            
            
            {data.map((e) => {
                return (
                    <div className={`${down == 0 ? "" : "hidden"}`} key={e.id}>
                    <div className='text-center'>
                        <span className=" text-2xl text-gray-100 font-semibold">{e.s_soal}</span>
                        <span></span>
                    </div>
                    <div id="1" className='relative grid grid-cols-2 gap-12   mt-10 text-sm font-bold text-gray-100'>
                        {/* Text */}

                            {e.jawaban.map((jawab) => {

                                if(jawab.j_type == 'text'){
                                    return (
                                        // <h1 onClick={() => next(jawab.j_jawaban_benar, e.s_poin)}>{jawab.j_type}</h1>
                                        <div onClick={() => next(jawab.j_jawaban_benar, e.s_poin)} key={jawab.id} className='shadow-md hover:cursor-pointer border flex justify-center items-center w-40 h-40  text-center p-2'>
                                            {jawab.j_jawaban}
                                        </div>
                                    )
                                }
                                
                                if(jawab.j_type == 'image'){
                                    return (
                                        // <h1 onClick={() => next(jawab.j_jawaban_benar, e.s_poin)} >{jawab.j_type}</h1>
                                        <div key={jawab.id} onClick={() => next(jawab.j_jawaban_benar, e.s_poin)}  className=' hover:cursor-pointer flex justify-center items-center w-40 h-40 text-center p-2'>
                                            <img  src={`http://127.0.0.1:8000/Soal/${jawab.j_jawaban}`} alt="img" />
                                        </div> 
                                    )
                                }
                            })}
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Quiz;

