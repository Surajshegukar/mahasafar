import { use, useEffect, useState } from "react";
import { ChevronDown, Cookie, LogOut, User } from "lucide-react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import Cookies from 'js-cookie';
import toast, { Toaster } from "react-hot-toast";


export default function Header() {
  const [isItinerariesOpen, setIsItinerariesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook to programmatically navigate
  const dispatch = useDispatch(); // Use the useDispatch hook to dispatch actions
  
 
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action to the Redux store
    toast.success("Logout successfull!");
    navigate("/login"); // Redirect to the login page after logout

  }
 const cookies = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null ;
 const token = Cookies.get("token");


  
 if(!cookies  && !window.location.pathname.includes("/login") && !token && !window.location.pathname.includes("/home")
){
    toast.error("please login to continoue !");
  setTimeout(() => {
    window.location.href = "/login"; // Redirect to login page if not authenticated
  }, 3000);
}


  
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/home" className="flex items-center">
            <span className="uppercase text-2xl font-medium text-orange-500">Maha </span>
            <span className="uppercase text-2xl font-light text-gray-500">safar</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* My Itineraries Dropdown */}
          <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-orange-500 focus:outline-none"
              onClick={() => setIsItinerariesOpen(!isItinerariesOpen)}
            >
              My Itineraries
              <ChevronDown size={16} className="ml-1" />
            </button>
            {isItinerariesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a
                  href="/my-itineraries"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  View All Itineraries
                </a>
                {/* <a
                  href="/saved-itineraries"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Saved Itineraries
                </a> */}
                
                <a
                  href="/create-itinerary"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Create New
                </a>
              </div>
            )}
          </div>
          <a
            href="/home"
            className="text-gray-700 hover:text-orange-500"
          >
            Home
          </a>

          {/* Other Nav Links */}
          <a
            href="/create-itinerary"
            className="text-gray-700 hover:text-orange-500"
          >
            Create Itinerary
          </a>
          
        </nav>

        {/* User Controls */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          {/* <div className="relative">
            <button
              className="flex items-center text-gray-700 hover:text-orange-500 focus:outline-none"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              EN
              <ChevronDown size={16} className="ml-1" />
            </button>
            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-10">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  EN
                </button>
                {/* <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ES
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  FR
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  DE
                </button>
              </div>
            )}
          </div> */}

          {/* <div className="h-6 border-l border-gray-300"></div> */}
          

          {/* User Profile or Login */}
          { cookies && window.location.pathname !== "/login" && token 
           ? (
             <div className="flex items-center space-x-2">
              <span className="text-gray-700">{cookies?.name}</span>
              <div className="h-6 border-l border-gray-300"></div>
              <button
                onClick={handleLogout}
                className="text-gray-700 hover:text-orange-500 focus:outline-none flex gap-x-2"
              >
                 Logout <LogOut />
              </button>
            </div>
          ) : (
            <a
              href="/login"
              className="flex items-center text-gray-700 hover:text-orange-500"
            >
              <User size={20} className="mr-2" />
              Log in
            </a>
          )}
        </div>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    removeDelay: 1000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      iconTheme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    </header>
  );
}
