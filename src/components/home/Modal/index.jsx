import React from 'react'
import Sd from './../../../assets/icon/sd.png';
import Smp from './../../../assets/icon/smp.png';
import Sma from './../../../assets/icon/Sma.png';

function index() {
    return (

            <div tabIndex="-1" className="overflow-y-auto mx-auto overflow-x-hidden fixed top-40 right-0 left-0 z-50 w-full h-modal md:h-full">
                <div className="relative mx-auto p-4 w-full max-w-md h-full md:h-auto">  
                    <div className="relative bg-white opacity-60 rounded-lg shadow dark:bg-gray-700">
                        <div className="relative rounded-t dark:border-gray-600">
                            <h3 className='text-center text-3xl'>Level</h3>
                            <button type="button" className="absolute top-0 right-0 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                            </button>
                        </div>
        
                        <div className="p-6 space-y-6">
                            <div className='space-y-3'>
                                <div className="w-full flex items-center space-x-8 bg-green-300 p-1 rounded">
                                    <div className='w-20'>
                                        <img src={Sd} alt="" />
                                    </div>
                                    <span className='text-3xl'>Sd</span>
                                </div>
                                <div className="w-full flex items-center space-x-8 p-1">
                                    <div className='w-20'>
                                        <img src={Smp} alt="" />
                                    </div>
                                    <span className='text-3xl'>Smp</span>
                                </div>
                                <div className="w-full flex items-center space-x-8 p-1">
                                    <div className='w-20'>
                                        <img src={Sma} alt="" />
                                    </div>
                                    <span className='text-3xl'>Sma</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default index
