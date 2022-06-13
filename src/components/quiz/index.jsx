import React  from 'react';
import BgQuiz from './../../assets/images/bgQuiz.jpeg'
import Test from './../../assets/icon/fiqih.png';

const Quiz = () => {
    return (
        <>
            <div className="font-IndieFlower mx-auto flex flex-col items-center justify-center bg-cover h-screen  px-7 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${BgQuiz})` }}>
                <div className='text-center'>
                    <span className=" text-2xl text-gray-100 font-semibold">Nabi yang pernah di bakar dan di tolong langsung oleh Allah Swt</span>
                </div>
                <div className='relative grid grid-cols-2 gap-2   mt-10 text-sm font-bold text-gray-100'>
                    {/* Text */}
                    <div className='shadow-md border flex justify-center items-center w-full h-40  text-center p-2'>
                        Nabi Muahammad SAW dd 
                    </div>
                    <div className='shadow-md border flex justify-center items-center w-full h-40  text-center p-2'>
                        Nabi Ibrahim AS
                    </div>
                    <div className='shadow-md border flex justify-center items-center w-full h-40  text-center p-2'>
                        Nabi Musa As
                    </div> 

                    <div className='shadow-md border flex justify-center items-center w-full h-40  text-center p-2'>
                        Nabi Yusuf As
                    </div>            

                    {/* Gambar */}
                    {/* <div className='shadow-md border flex justify-center items-center w-full h-40  text-center p-2'>
                        <img src={Test} alt="" />
                    </div> 
                    <div className='shadow-md border flex justify-center items-center w-full h-40  text-center p-2'>
                        <img src={Test} alt="" />
                    </div> 
                    <div className='shadow-md border flex justify-center items-center w-full h-40  text-center p-2'>
                        <img src={Test} alt="" />
                    </div> 
                    <div className='shadow-md border flex justify-center items-center w-full h-40  text-center p-2'>
                        <img src={Test} alt="" />
                    </div>  */}
                </div>
            </div>
        </>
    )
}

export default Quiz;

