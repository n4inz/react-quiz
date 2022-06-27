import React from 'react'
function Jawaban(props) {
    if(props.cek.j_jawaban_benar == 1){
      return  (
            <>
                
            </>
        )
    }else if(props.cek.j_jawaban_benar == null){
      return  (   
            <div className={`${props.className} flex flex-col items-center`}>
                <div className='flex flex-col items-center'>
                    <span>Jawaban betul adalah</span>
                    {props.cek.j_type == "image" ? (
                        <div className='w-16'>
                            <img src={`https://quiz.nainz.my.id/Soal/${props.jawab}`} alt="Sad" />            
                        </div>
                    ): (
                        <span className='text-center'>{props.jawab}</span>
                    )}
                </div>

            </div>
        )
    }
}

export default Jawaban;
