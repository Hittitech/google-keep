import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add'


const CreateNote=(props)=>{
    const[expand,setExpand]=useState(false)

        const [note,setNote]=useState({
            title:"",
            data:""
        })

    const Changed=(event)=>{
            
        const {name,value}=event.target;
    
        setNote((olditems)=>{
            return{
                ...olditems,
                [name]:value
            }
        })
        
     
    }
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            data:""
        })
    }
    const showData=()=>{
        setExpand(true)
    }
    const hideData=()=>{
        setExpand(false)
    }
    return(
        <>
        
        <div className='main' onDoubleClick={hideData}>
            <form className='content mt-3'>
           { expand?
            <input className='title'
             placeholder='Title'
              name='title'
               autoComplete='off' 
               onChange={Changed}
                value={note.title}
               />:null}

            <textarea className='noteData' 
            placeholder='Write a note...' 
            name='data'
             rows=' '
              onChange={Changed}
                value={note.data}
                onClick={showData}
                
              />
              {expand?
                <i class="fa fa-sharp fa-regular fa-plus icon" 
                onClick={addEvent}>
                </i>:null}
            </form>
        </div>

        </>
    )
}
export default CreateNote;