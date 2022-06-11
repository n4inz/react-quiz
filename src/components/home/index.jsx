import React from "react";
import BgHome from  './../../assets/images/homeBg.jpeg';
import Setting from './../../assets/icon/setting.png';
import Speaker from './../../assets/icon/speaker.png';
import Alquran from './../../assets/icon/alquran.png';
import Keislaman from './../../assets/icon/keislaman.png';
import Fiqih from './../../assets/icon/fiqih.png';
import Akidah from './../../assets/icon/akidah.png';


import Modal from './Modal/index';



const Home = () => {

    return (
        <>
            <div className="relative font-IndieFlower  bg-cover h-screen  px-7 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${BgHome})` }}>
                <div className="w-full py-5">
                    <div className="float-right w-7 shadow-sm rounded-full hover:cursor-pointer">
                        <img src={Setting} alt="" />
                    </div>
                    <div className="float-left w-12 shadow-sm rounded-full hover:cursor-pointer">
                        <img src={Speaker} alt="" />
                    </div>
                </div>


                    <div className="mt-20 grid grid-cols-2 gap-4 uppercase">
            
                        <div className="flex-col justify-center items-center w-36 h-36 rounded-xl shadow-xl p-2 space-y-2">
                            <div className="w-28 mx-auto">
                                <img src={Alquran} alt="Alqur'an" />
                            </div>
                            <div className="text-xs font-semibold text-center max-w-xs text-gray-700">Alqur'an Dan Sunnah</div>
                        </div>

                        <div className="flex-col justify-center items-center w-36 h-36 rounded-xl shadow-xl p-2 space-y-2">
                            <div className="w-20 mx-auto">
                                <img src={Keislaman} alt="Keislaman" />
                            </div>
                            <div className="text-xs font-semibold text-center max-w-xs text-gray-700">Keislaman</div>
                        </div>

                        <div className="flex-col justify-center items-center w-36 h-36 rounded-xl shadow-xl p-2 space-y-2">
                            <div className="w-20 mx-auto">
                                <img src={Fiqih} alt="Fiqih" />
                            </div>
                            <div className="text-xs font-semibold text-center max-w-xs text-gray-700">Fiqih</div>
                        </div>

                        <div className="flex-col justify-center items-center w-36 h-36 rounded-xl shadow-xl p-2 space-y-2">
                            <div className="w-24 mx-auto">
                                <img src={Akidah} alt="Akidah" />
                            </div>
                            <div className="text-xs font-semibold text-center max-w-xs text-gray-700">Akidah Dan Akhlak</div>
                        </div>



                    </div>


                {/* <Modal/> */}
     
            </div>
            
 
        </>
    )

}

export default Home;