// import { FiChevronDown } from "react-icons/fi";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=' bg-white text-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between mx-2 md:mx-12 h-24'>
            <div className='flex items-center'>
              <div className='hidden md:flex'>
                <ul className='flex flex-row'>
                  <li className='flex justify-center items-center mx-2 text-sm font-medium'>
                    <Link to='/'>Group Trip</Link>
                  </li>
                  <li className='flex justify-center items-center mx-2 text-sm font-medium'>
                    <Link to='/' className='flex justify-center items-center'>
                      <h1 className='hover:text-purple w-20'>Private Trip</h1>
                    </Link>
                  </li>{" "}
                  <li className='flex justify-center items-center mx-2 text-sm font-medium'>
                    <Link to='/' className='flex justify-center items-center'>
                      <h1 className='hover:text-purple w-32'>
                        Past Trip & Review
                      </h1>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='flex items-start justify-start md:justify-center'>
              <div className='flex'>
                <ul>
                  <li className='flex md:items-center px-0 md:px-2 py-2 rounded-md text-lg font-medium'>
                    <Link to='/'>Luxe Tribe</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='flex justify-between'>
              <ul className='hidden md:flex'>
                <li className='flex justify-center items-center mx-2 text-sm font-medium'>
                  <Link to='/' className='flex justify-center items-center'>
                    <h1 className='hover:text-purple w-20'>About Us</h1>
                  </Link>
                </li>
                <li className='flex justify-center items-center mx-2 text-sm font-medium'>
                  <Link to='/services' className='flex flex-row items-center'>
                    <h1 className=' hover:text-purple'>FAQs</h1>
                  </Link>
                </li>
                <li className='flex justify-center items-center mx-2 text-sm font-medium'>
                  <Link to='/services' className='flex flex-row items-center'>
                    <h1 className=' hover:text-purple'>Blogs</h1>
                  </Link>
                </li>
                <li className='flex justify-center items-center mx-2 text-sm font-medium'>
                  <Link to='/services' className='flex flex-row items-center'>
                    <h1 className=' hover:text-purple w-20'>Contact Us</h1>
                  </Link>
                </li>
                <li className='flex justify-center items-center px-3 py-2 text-sm font-medium border-2 border-black rounded'>
                  <Link
                    to='/services'
                    className='flex flex-row items-center justify-center'
                  >
                    <BiSearch className='flex items-center justify-center text-2xl w-10' />
                  </Link>
                </li>
                <li className='flex flex-row justify-center items-center mx-3 py-2 text-sm font-medium w-20 border-2 border-black rounded'>
                  <Link
                    to='/services'
                    className='flex flex-row items-center justify-center'
                  >
                    <BsFillPersonFill className='flex items-center justify-center text-2xl' />
                    <h1 className=' hover:text-purple'>Log In</h1>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <AiOutlineMenu className='border-2 rounded w-8 h-8  fill-black text-2xl' />
                ) : (
                  <AiOutlineClose />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className='ml-6 md:hidden' id='mobile-menu'>
              <div ref={ref} className=' sm:px-3'>
                <ul>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className='px-3 py-4 rounded-md text-sm font-medium'
                  >
                    <Link to='/services'>Groupe trips</Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className=' px-3 py-4 rounded-md text-sm font-medium'
                  >
                    <Link to='/portfolio'></Link>Private trips
                  </li>

                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className='px-3 py-2 rounded-md text-sm font-medium'
                  >
                    <Link to='/testimonials'>Past trips & reviews</Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className='px-3 py-2 rounded-md text-sm font-medium'
                  >
                    <Link to='/testimonials'>About Us</Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className='px-3 py-2 rounded-md text-sm font-medium'
                  >
                    <Link to='/testimonials'>FAQs</Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className='px-3 py-2 rounded-md text-sm font-medium'
                  >
                    <Link to='/testimonials'>Blogs</Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className='px-3 py-2 rounded-md text-sm font-medium'
                  >
                    <Link to='/testimonials'>Contact us</Link>
                  </li>
                  <li className='flex justify-center items-center my-2 px-3 py-2 text-sm font-medium w-10 border-2 border-black rounded-xl'>
                  <Link
                    to='/services'
                    className='flex flex-row items-center justify-center'
                  >
                    <BiSearch className='flex items-center justify-center text-2xl w-8' />
                  </Link>
                </li>
                  <li className='flex flex-row justify-center items-center py-2 text-sm font-medium w-20 border-2 border-black rounded-xl'>
                  <Link
                    to='/services'
                    className='flex flex-row items-center justify-center'
                  >
                    <BsFillPersonFill className='flex items-center justify-center text-2xl' />
                    <h1 className=' hover:text-purple'>Log In</h1>
                  </Link>
                </li>
                  
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
