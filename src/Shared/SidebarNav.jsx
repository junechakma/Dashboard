
import { AiOutlineHome, AiOutlineCloseSquare, AiOutlineEdit, AiOutlineCalendar, AiOutlineMenu, AiOutlineFileSync, AiOutlineUser, AiOutlineFileAdd, AiOutlineInbox, AiOutlineShoppingCart, AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { auth } from '../../config';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo from '../../src/assets/logo.png'
function SidebarNav() {

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login");
      console.log("Signed out successfully")
    }).catch((error) => {
      // An error happened.
    });
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <div className='absolute md:static'>

      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ml-0 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <AiOutlineMenu className="w-6 h-6" />
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed md:static top-0 left-0 z-40 w-64 h-full min-h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

          <div className='flex justify-between items-center'>


            <Link to="/home">
              <img
                src={logo}
                className="w-40 h-full"
                alt="Flowbite Logo"
              />
            </Link>


            <button
              type="button"
              onClick={toggleSidebar}
              className="inline-flex items-center p-2 mt-2 ml-0 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Close sidebar</span>
              <AiOutlineCloseSquare className="w-6 h-6" />
            </button>
          </div>

          <ul className="space-y-2 font-medium py-10">
            <li>
              <Link
                to="/home"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineHome className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Home</span>
              </Link>
            </li>

            <li>
              <Link
                to="/reservation"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineCalendar className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Reservation</span>
              </Link>
            </li>

            <li>
              <Link
                to="/today"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineFileSync className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Today's Reservation</span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span> */}
              </Link>
            </li>

            <li>
              <Link
                to="/application"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineUser className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Applications</span>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">0</span> */}
              </Link>
            </li>

            <li>
              <Link
                to="/addRe"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineFileAdd className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Add Review</span>
              </Link>
            </li>
            
            <li>
              <Link
                to="/notes"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineEdit className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Notes</span>
              </Link>
            </li>
           
            <li className='py-10'>
              <button to="/login"
                onClick={handleLogout}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineLogin className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Sign Out</span>
              </button>
            </li>

          </ul>
        </div>
      </aside>
    </div>
  )
}

export default SidebarNav