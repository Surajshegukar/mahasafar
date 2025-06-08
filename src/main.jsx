import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "./store/store.js";
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';



createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="209611950053-5lqtk3rg0ac8e08u3ir1pp784524ttpi.apps.googleusercontent.com">
  <Provider store={store}>
    <CookiesProvider>
    <App />
    </CookiesProvider>
  </Provider>
 </GoogleOAuthProvider>
    ,
)
