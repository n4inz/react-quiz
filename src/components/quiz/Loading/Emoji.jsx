import React from 'react'
import Love from "./../../../assets/icon/love.png";
import Sad from "./../../../assets/icon/sad.png";
function Emoji(props) {
    if(props.cek.j_jawaban_benar == 1){
       return (
            <div className={`${props.className} flex flex-col items-center`}>
                <div className='w-20'>
                    <img src={Love} alt="Love" />
                </div>
                <span className='text-3xl  text-center max-w-sm'>Yay Jawaban anda betul ...</span> 
            </div>
        )
    }else if(props.cek.j_jawaban_benar == null){
       return (   
            <div className={`${props.className} flex flex-col items-center`}>
                <div className='w-20'>
                    <img src={Sad} alt="Sad" />
                </div>
                <span className='text-3xl  text-center max-w-sm'>Yaaa Jawaban anda salah ...</span>

            </div>
        )
    }
}

export default Emoji;
