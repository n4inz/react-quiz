import React, { useEffect, useState }  from 'react';
import BgQuiz from './../../assets/images/bgQuiz.jpeg'
import { Context } from "../../App";
import axios from "axios";
import Endpoint from './../../components/config/api';
import {useNavigate } from 'react-router-dom';
import Emoji from './Loading/Emoji';
import Jawaban from './Loading/Jawaban';
import cookies from "../config/cookie";
window.onbeforeunload = function() { return alert('ups') };
const Quiz = () => {
    const [data, setData] = useState([]);
    const value = React.useContext(Context);
    const [page, setPage] = useState(0);
    const [start,setStart] = useState(0);
    const navigate = useNavigate();
    const [down, setDown] = useState(3);
    const [cek,setCek] = useState({});
    const [nain, setNain] = useState("");
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
        const request = await axios({
            method : 'get',
            headers: { 'Content-Type': 'application/json'},
            url: `${Endpoint}?page=${value.soal[page]}&level=${value.kriteria.level}&type=${value.kriteria.type}`
        })
        setData(request.data.data.data)
        return request
    }

    const findJawaban = () => {
        const val =  data[0].jawaban
        val.map((res) => {
            if(res.j_jawaban_benar == 1){
                setNain(res.j_jawaban)
                // console.log(res)
            }
        })

        return false;
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

        if(pilihan.j_jawaban_benar == 1){
            value.setPoin(parseInt(value.poin)+parseInt(poins))
        }

        setDown(3);
        setPage(page+1);
        setCek(pilihan);
        setStart(1);
        if(value.soal.length == page+1){
            navigate('/hasil')
            return false;
        }

        axios({
            method : 'get',
            headers: { 'Content-Type': 'application/json'},
            url : `${Endpoint}?page=${value.soal[page+1]}&level=${value.kriteria.level}&type=${value.kriteria.type}`
        })
        .then((e) => {
            setData(e.data.data.data)
            
        })

        findJawaban()
    }

  

    return ( 
        <div className="font-IndieFlower mx-auto flex flex-col items-center justify-center bg-cover h-screen  px-7 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${BgQuiz})` }}>
           <div className={`${down == 0 ? "hidden" : ""} text-gray-50 flex flex-col items-center`}>
                <Emoji
                    down={down}
                    cek={cek}
                    className={`${start == 0 ? "hidden" : ""}`}
                />
    
                <span className=' text-6xl  font-semibold'>
                    {down}
                </span>
                <Jawaban
                    down={down}
                    cek={cek}
                    className={`${start == 0 ? "hidden" : ""}`}
                    jawab={nain}
                />

            </div>
            

            {data.map((e) => {
                return (
                    <div className={`${down == 0 ? "" : "hidden"} flex flex-col items-center`} key={e.id}>
                        <div className='text-center flex flex-col items-center shadow-sm p-2'>
                            <span className=" text-2xl text-gray-100 font-semibold">{e.s_soal}</span>
                            {
                                !e.s_gambar ? 
                                (<span></span>): 
                                (
                                    <div className='w-32 h-32'>
                                        <img  src={`https://quiz.nainz.my.id/Soal/${e.s_gambar}`} alt="img" />
                                    </div>
                                )
                            }
                        </div>
                        <div id="1" className='relative grid grid-cols-2 gap-12   mt-10 text-sm font-bold text-gray-100'>
                            {/* Text */}

                                {e.jawaban.map((jawab) => {

                                    if(jawab.j_type == 'text'){
                                        return (
                                            // <h1 onClick={() => next(jawab.j_jawaban_benar, e.s_poin)}>{jawab.j_type}</h1>
                                            <div onClick={() => next(jawab, e.s_poin)} key={jawab.id} className='shadow-md hover:cursor-pointer flex justify-center items-center w-28 h-28  text-center p-2'>
                                                {jawab.j_jawaban}
                                            </div>
                                        )
                                    }
                                    
                                    if(jawab.j_type == 'image'){
                                        return (
                                            // <h1 onClick={() => next(jawab.j_jawaban_benar, e.s_poin)} >{jawab.j_type}</h1>
                                            <div key={jawab.id} onClick={() => next(jawab, e.s_poin)}  className='shadow-sm hover:cursor-pointer flex justify-center items-center w-28 h-28 text-center p-2'>
                                                <img  src={`https://quiz.nainz.my.id/Soal/${jawab.j_jawaban}`} alt="img" />
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

