import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../store/authSlice";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      dispatch(login({ email, password }))
        .unwrap()
        .then((response) => {
          navigate("/");
          toast.success("Login successful!");
        })
        .catch((error) => {
          toast.error("Login failed. Please try again.");
        });
    } else {
      dispatch(register({ email, password, name, code }))
        .unwrap()
        .then((response) => {
          navigate("/");
          toast.success("Registration successful!");
        })
        .catch((error) => {
          console.error("Registration error:", error);
          toast.error("Registration failed. Please try again.");
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-none w-full max-w-4xl flex overflow-hidden my-10">
        {/* Left Section with Form */}
        <div className="w-1/2 p-12">
        <a href="javascript:void(0)" className="flex items-center justify-center mb-5">
            <span className="uppercase text-2xl font-medium text-orange-500">Maha </span>
            <span className="uppercase text-2xl font-light text-gray-500">Safar</span>
          </a>
          
          <h2 className="text-md font-medium text-gray-800 mb-8">
            {isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
          </h2>
          
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:outline-none focus:border-orange-500"
                    required
                  />
                  <div className="absolute left-3 top-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username or email"
                  className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:outline-none focus:border-orange-500"
                  required
                />
                <div className="absolute left-3 top-4 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:outline-none focus:border-orange-500"
                  required
                />
                <div className="absolute left-3 top-4 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {!isLogin && (
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Invitation code"
                    className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:outline-none focus:border-orange-500"
                    required
                  />
                  <div className="absolute left-3 top-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                      <path d="M11 4a1 1 0 100 2h4a1 1 0 100-2h-4zm0 10a1 1 0 100 2h4a1 1 0 100-2h-4zm-8-6a1 1 0 100 2h8a1 1 0 100-2H3z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
            
            {isLogin && (
              <div className="flex items-center mb-6">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors font-medium"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
            
          
          </form>
          
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
        
        {/* Right Section with Pattern */}
        <div className="w-1/2 bg-gray-100">
          <div className="h-full w-full bg-cover bg-center" style={{ 
            backgroundImage: `url('/trip.jpg')`,
            backgroundColor: '#f3f4f6'
          }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;