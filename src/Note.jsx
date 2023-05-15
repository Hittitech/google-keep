import React from 'react'
// import DeleteOutLine from '@material-ui/icons/DeleteOutline'
import "./Note.css"



const Note=(props)=>{
    const DeleteNote=()=>{
        props.deleteItem(props.id);
    }
    return(
        <>
        <div className='card'>
            <div className='contentCard'>
                <h1 className='title'>{props.title}</h1>
                <p>{props.data}</p>
                <div className='icons'>
                <i class="fa fa-solid fa-trash icon1"
                    onClick={DeleteNote}
                ></i> 
                </div>
                 
                
            </div>
        </div>

        </>
    )
}

export default Note