import React, { useEffect, useState } from "react";
import {useNavigate } from 'react-router-dom'
import Images from './../../assets/images/bg.jpg';
import Jemp from '../../assets/images/jemp.png'
import Cookies from "../config/cookie";
import axios from "axios";
import Endpoint from "../config/api";
import { Context } from "../../App";
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://127.0.0.1:8000";
function Register() {
  const navigate = useNavigate();
  const value = React.useContext(Context);  
  const [data, setData] = useState({
    'name' : "",
    'email' :"",
    'password' : "",
    'password_confirmation' : ""
  })

  const [error, setError] = useState({
    'name' : "bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900",
    // 'name' : 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700',
    'email': 'bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900',
    'password': 'bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900'
  })

  const [valid, setValid] = useState({})

  useEffect(() => {
    if(value.isLogin){
      navigate('/home')
    }
  })

  const input = (e) => {
    const value = {...data}
    value[e.target.name] = e.target.value
    setData(value)

    const err = {...error}
    err[e.target.name] = "bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900"
    setError(err)

  }

   const sumbit = async () => {
    try {
      const response = await axios.post(`${Endpoint}register`, data)
      Cookies.set('credensial', response.data, { path: '/' });
      navigate('/home')
    }
    catch(errors) {
      const err = errors.response.data
      const data = {...error}
      if(err.name){
        data.name = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700"
        setError(data)
      }
      if (err.email){
        data.email = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700"
        setError(data)
      }
      
      if(err.password){
        data.password = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700"
        setError(data)
      }

  
    }


    console.log(error)



    // const response = await axios.post(`${Endpoint}register`, data).catch(
    //   function (error) {
    //     console.log(error.response)
    //     return Promise.reject(error)
    //   }
    // );

    // console.log(response)

  }
    return (
        <div className=" font-IndieFlower  bg-cover h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'url('+Images+')' }}>
          <div className="max-w-md w-full space-y-8">
            <div>
              
              <img
                className="mx-auto h-36 w-auto opacity-60"
                src={Jemp}
                alt="Workflow"
               
              />
              <h2 className="text-center -mt-5 z-10 text-4xl font-extrabold text-gray-700 max-w-xs">Daftar Dan Mulai Bermain</h2>
            </div>
            <div className=" space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px opacity-90">
                <div>
                  <label htmlFor="Nama" className="sr-only">
                    Nama
                  </label>
                  <input
                    id="nama"
                    name="name"
                    type="text"
                    autoComplete="off"
                    required
                    className={`${error.name} appearance-none rounded-none relative block w-full px-3 py-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Nama"
                    onChange={input}
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="off"
                    required
                    className={`${error.email} appearance-none rounded-none relative block w-full px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Email address"
                    onChange={input}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className={`${error.password} appearance-none rounded-none relative block w-full px-3 py-2 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Password"
                    onChange={input}
                  />
                </div>
                <div>
                  <label htmlFor="password_confirmation" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    autoComplete="current-password"
                    required
                    className={`${error.password} appearance-none rounded-none relative block w-full px-3 py-2 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Confirmasi"
                    onChange={input}
                  />
                </div>
                <p className="float-right p-5 text-gray-800 font-bold">Sudah punya akun ? <span onClick={() => navigate('/')} className="text-blue-600 hover:cursor-pointer">Login</span></p>

              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={sumbit}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
    );
}


export default Register;