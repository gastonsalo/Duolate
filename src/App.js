import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import {BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import MiProvider from "./context/CartContext"

const App = () =>{
    return (
        <MiProvider>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
                <ToastContainer/>
            </BrowserRouter>
        </MiProvider>
    )
} 

export default App