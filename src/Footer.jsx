import React from 'react'
import "./App.css"

const Footer=()=>{
    const year=new Date().getFullYear();

    return(
        <>
        <footer className='  fixed-bottom  text-center mb-3'>Copyrights {year}</footer>
        </>
    )
}

export default Footer;