import React from "react";
import logo from "./images/googlekeep.png"
 


const Header=()=>{
    return(
        <>  
            <div className="header mt-1">
            <img src={logo} alt="logo" className=" me-lg-3 ms-lg-1"  ></img>
            <h3 className="Title text-white">Google Keep</h3>
            </div>
            
        </>
    )
}
export default Header;