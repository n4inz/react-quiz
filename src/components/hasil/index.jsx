import React, { useState } from 'react';
import BgQuiz from './../../assets/images/bgQuiz.jpeg'
import Skor from './../../assets/icon/skor.png';


const Hasil = () => {

    const [isOpen, setIsOpen] = useState('hidden')


    return (
        <>
            <div className="font-IndieFlower mx-auto flex flex-col items-center justify-center bg-cover h-screen  px-7 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${BgQuiz})` }}>
                <div tabIndex="-1" className="overflow-y-auto mx-auto overflow-x-hidden fixed top-40 right-0 left-0 z-50 w-full h-modal md:h-full">
                    <div className="relative mx-auto p-4 w-full max-w-md h-full md:h-auto">  
                        <div className="relative bg-white opacity-60 rounded-lg shadow dark:bg-gray-700">
                            <div className="relative rounded-t dark:border-gray-600">
                                <h3 className='text-center text-3xl text-blue-400 font-bold'>SKOR</h3>
                            </div>
            
                            {/* <div className="p-6 text-center flex items-center justify-center">
                                <div className='w-2/5'>
                                    <img src={Skor} alt="Skor" />
                                </div>
                                <div className='w-2/5'>
                                    <span className='text-7xl text-blue-400 font-bold'>60</span>
                                </div>
                                <div className='w-2/5'>
                                    
                                </div>
                            </div> */}

                            <div className="flex flex-col justify-center items-center text-center">
                                
                                <span className='text-3xl text-blue-400 font-bold'>60</span>
                                <div className='w-16'>
                                    <img src={Skor} alt="Skor" />
                                </div>
                            </div>

                            <div className='text-center space-x-3 py-5'>
                                <button className='p-2 bg-blue-600 rounded-md text-gray-200 font-bold'>Ulangi</button>
                                <button className='p-2 bg-blue-600 rounded-md text-gray-200 font-bold'>Home</button>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hasil;

