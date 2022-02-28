import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
const App = () =>{
    return (
        <>
            <Header/>
            <Main nombre="Gaston" edad={12}/>
            <Footer/>

        </>
    )
} 

export default App