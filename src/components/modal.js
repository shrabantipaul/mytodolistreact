import React,{useState,useContext} from 'react';
import Form from './UpdateForm';
import './modal.css';
const Modal = (props) =>{
    
    const {addItem,showForm,setShowForm,ValidateEmail,validateID,collaborators}= props;
    const [addBtn,setAddBtn]=useState(false);
    const [checkid,setCheckid] = useState(false);
    const [checkmail,setCheckmail] = useState(false);

    return(
        <div className="main">
        <p className="container list">Collaborators List</p>
        <hr></hr>
        <p className="container heading">Collaborators</p>
        <p className="container description">Selected users will have the ability to edit the document</p>
        {((showForm)?<Form checkmail={checkmail} setCheckmail={setCheckmail} checkid={checkid} setCheckid={setCheckid} collaborators={collaborators} validateID={validateID} ValidateEmail={ValidateEmail} addItem={addItem} addBtn={addBtn} setShowForm={setShowForm}/>:
        <div>
        <input type="button" className="btn" value="Add Collaborators" onClick={()=>{
            setAddBtn(true);
            setShowForm(true)}} />
        </div>
        )}
    </div>

    )
}
export default Modal;