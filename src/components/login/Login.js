import React from "react";
import {useNavigate } from 'react-router-dom'
import Images from './../../assets/images/bg.jpg';
import Logo from '../../assets/images/ass.png'
function Login() {
  const navigate = useNavigate();
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
            <form className="mt-8 space-y-6" action="#" method="POST">
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
                    required
                    className="appearance-none bg-gray-200 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
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
                    className="appearance-none bg-gray-200 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <p className="float-right p-5 text-gray-800 font-bold">Belum punya akun ? <span onClick={() => navigate('/register')} className="text-blue-600 hover:cursor-pointer">Daftar</span></p>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >

                  Sign in
                </button>

              </div>
            </form>
          </div>
        </div>
    );
}


export default Login;