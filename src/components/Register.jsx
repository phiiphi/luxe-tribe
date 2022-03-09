import React from "react";
import { BsPerson} from "react-icons/bs";
import { FaUpload } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-white'>
      <div className='flex text-black mx-12'>
        <div className='flex flex-col w-full md:w-1/2 my-12'>
          <h3 className='text-2xl md:text-3xl'>
            Become a part of the <br /> Luxe Tribes!
          </h3>
          <div className='flex flex-row my-8'>
            <div class='flex overflow-hidden bg-gray-300 rounded-full w-16 h-16'>
              <BsPerson class='flex overflow-hidden text-7xl rounded-full' />
            </div>
            <div className='mx-4'>
              <h3 className='text-xl'>Add your photo (optional)</h3>
              <p className='text-sm text-gray-400'>
                Supported formats: jpg, jpeg, png.
              </p>
              <div class='flex flex-row'>
                <FaUpload />
                <p className='px-1'>click to upload</p>
              </div>
            </div>
          </div>
          <div>
            <div class='w-full border-t-2'>
              <form class='bg-white mt-6 rounded'>
                <div className='block md:flex flex-row'>
                  <div class='w-full my-2 md:w-1/2 mx-2'>
                    <input
                      class='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='Full Name'
                    />
                  </div>
                  <div class='w-full my-2 md:w-1/2 mx-2'>
                    <input
                      class='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='DOB'
                    />
                  </div>
                </div>
                <div className='block md:flex flex-row'>
                  <div class='flex flex-row w-full md:w-1/2 mx-2 border rounded h-12 px-2 py-3'>
                    <select class='w-full'>
                      <option>Select Country</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                  <div class='w-full my-2 md:w-1/2 mx-2'>
                    <input
                      class='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='Email'
                    />
                  </div>
                </div>
                <div className='block md:flex flex-row'>
                  <div class='w-full md:w-1/2 mx-2'>
                    <input
                      class='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='DOB'
                    />
                  </div>
                  <div class='w-full md:w-1/2 mx-2'>
                    <input
                      class='appearance-none border border-red rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
                      id='password'
                      type='password'
                      placeholder='Password'
                    />
                  </div>
                </div>
                <div class='md:flex-1 mt-2 mb:mt-0 md:px-3'>
                  <textarea
                    class='w-full p-4 border rounded'
                    placeholder='Tell us about you (optional)'
                    rows='6'
                  ></textarea>
                </div>
                <div class='flex items-center justify-center mt-4 h-10'>
                  <button
                    href='#'
                    class='rounded-2xl flex justify-center items-center bg-[#fbb3c1] w-full h-10'
                  >
                    Create my account
                  </button>
                </div>
                <div className='flex flex-row items-center my-2'>
                  <p className='items-center text-gray-400'>
                    Already having Account?
                  </p>
                  <div class='flex items-center justify-center mx-2 h-12'>
                    <button
                      href='#'
                      class='rounded-2xl flex justify-center items-center h-12'
                    >
                      <Link to='/login'> Log In</Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='hidden md:flex flex-row w-1/2'>
          <div className='flex items-center ml-8'>
            <div className='flex justify-center items-center h-96'>
              <img
                src='https://booking.luxetribes.com/images/background/back-4.svg'
                alt=''
                className='flex justify-center h-full object-cover items-center'
              />
            </div>
          </div>
          <div className='flex  justify-items-end ml-8'>
            <div className='flex flex-col my-8'>
              <img
                src='https://booking.luxetribes.com/images/background/back-5.svg'
                alt=''
                className='flex object-cover my-4'
              />
              <img
                src='https://booking.luxetribes.com/images/background/back-5.svg'
                alt=''
                className='flex object-cover my-4'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;