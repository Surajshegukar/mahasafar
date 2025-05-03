import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "./store/store.js";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CookiesProvider>
    <App />
    </CookiesProvider>
  </Provider>
 
    ,
)
