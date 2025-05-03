import React, { useState, useEffect } from "react";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { register } from "../store/authSlice";
// import react-cookies
import { useCookies } from "react-cookie";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  // react-cookies
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the authentication logic
    console.log(isLogin ? "Logging in" : "Signing up", {
      email,
      password,
      name,
    });
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
    }
    else {
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
    // Clear form fields after submission
  };

  useEffect(() => {
    toast.success("Welcome to Login Page");
  }, []);

  return (
    <>
      {/* <Toaster /> */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Code
                </label>
                <input
                  type="text"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-600 hover:underline text-sm"
            >
              {isLogin
                ? "Need an account? Sign Up"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
