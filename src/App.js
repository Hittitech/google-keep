import React, { useState } from "react";
import Header from "./Header";
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App=()=>{
  let [addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    // alert("item added")
    
    setAddItem((oldvalues)=>{
      return [...oldvalues,note]
    })
  }
  const onDelete=(id)=>{
    setAddItem((olditems)=>
      olditems.filter((currdata,index)=>{
        return index!==id
      })
    )
    
  }
  return (
    <>
      <Header  />
      <CreateNote 
        passNote={ addNote}
      />
      
      {<div className="whole">
      {addItem.map((val,index)=>{
        return <Note
          key={index}
          id={index}
          title={val.title}
          data={val.data}
          deleteItem={onDelete}
        />
      })}
      </div>}
      
      <Footer
        className="footy"
      />
        
    </>
  )
}
export default App;