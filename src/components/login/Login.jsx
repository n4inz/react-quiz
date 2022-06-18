import React, {useState, useEffect} from "react";
import {useNavigate } from 'react-router-dom'
import Images from './../../assets/images/bg.jpg';
import Logo from '../../assets/images/ass.png'
import axios from "axios";
import Endpoint from "../config/api";
import cookies from "../config/cookie";
import { Context } from "../../App";
function Login() {
  const navigate = useNavigate();
  const value = React.useContext(Context);  
  const [data, setData] = useState({
    'email' :"",
    'password' : "",
  })
  const [error, setError] = useState({
    'status' : 200,
    'email': 'bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900',
    'password': 'bg-gray-200 border border-gray-300 placeholder-gray-500 text-gray-900'
  })

  const [button, setButton] = useState(false)
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
    setButton(true)
    try {
      const response = await axios.post(`${Endpoint}/login`, data)
      cookies.set('credensial', response.data, { path: '/' });
      navigate('/home')
    }
    catch(errors) {
      const err = errors.response.data
      const data = {...error}

      if(errors.response.status = 401){
        setError({
          'email' : "bg-red-50 border border-red-500 text-red-900 placeholder-red-700",
          'password' : "bg-red-50 border border-red-500 text-red-900 placeholder-red-700",
          'status' : 401
        })
      }
      if (err.email){
        data.email = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700"
        setError(data)
      }
      
      if(err.password){
        data.password = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700"
        setError(data)
      }

      setButton(false)
    }

  }


    return (
        <div className=" font-IndieFlower  bg-cover h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'url('+Images+')' }}>
          <div className="max-w-md w-full space-y-8">
            <div>
              
              <img
                className="mx-auto h-48 w-auto"
                src={Logo}
                alt="Workflow"
              />
              <h2 className="mt-6  text-center text-4xl font-extrabold text-gray-700">Masuk Dan Mulai Bermain</h2>
            </div>
            
            <div className=" space-y-6" action="#">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px opacity-90">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    
                    className={`${error.email} appearance-none rounded-none relative block w-full px-3 py-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
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
                    
                    className={`${error.password} appearance-none rounded-none relative block w-full px-3 py-2 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Password"
                    onChange={input}
                  />
                </div>
                <p className="float-right p-5 text-gray-800 font-bold">Belum punya akun ? <span onClick={() => navigate('/register')} className="text-blue-600 hover:cursor-pointer">Daftar</span></p>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={sumbit}
                >
                  {
                  button ? (
                      <svg role="status" className="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>) :

                      (<span>Login</span>)
                  }
                </button>

              </div>
              {
                error.status == 401 ? (<div className="text-center text-red-600 font-semibold text-xl">Email atau password salah !!!</div>) : ""
              }
            </div>
          </div>
        </div>
    );
}


export default Login;