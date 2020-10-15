import React, { useState, useEffect } from 'react';
import Form from './UpdateForm';
import './UpdateForm.css';

const ListItem = (props) => {
    const { v,validateID,disable,setDisable, UpdateItem, i, toggle, setToggle,collaborators,DeleteItem,ValidateEmail } = props;
    const [row, setRow] = useState(false);
    const [btn,setBtn]= useState(false);
    const [checkid,setCheckid] = useState(false);

    return (
        <div>
            <li>
                {((row) ?
                   <Form collaborators={collaborators} checkid={checkid} setCheckid={setCheckid} validateID={validateID} setDisable={setDisable} value={v} ValidateEmail={ValidateEmail} UpdateItem={UpdateItem} i={i} setRow={setRow} btn={btn} setBtn={setBtn}/> :
                    <div>
                            <p>NAME: {v.name} </p>
                            <p>ID: {v.id} </p>
                            <p>EMAIL: {v.email}</p>
                        <button className="add" 
                        disabled={disable!=0}
                        onClick={() => { 
                            // disableRest();
                            setDisable(-1);
                            setBtn(true);
                            setRow(true);
                            
                        }}>edit</button>
                        <button disabled={disable} className="cancel" onClick={()=>DeleteItem(i)}>delete</button>
                    </div>
                )}
            </li>
        </div>
    )
}
export default ListItem;