import React,{useContext,useState} from 'react';
import ListItem from './ListItem';
import './UpdateForm.css';

const List = (props) =>{
    const [disable,setDisable]= useState(0)
    const {collaborators,UpdateItem,toggle,setToggle,DeleteItem,ValidateEmail} = props;
    return(
            <ul>
                {
                collaborators.map((value,index)=>
                    <ListItem disable={disable} setDisable={setDisable} ValidateEmail={ValidateEmail} collaborators={collaborators} DeleteItem={DeleteItem} key={index} v={value} i={index} UpdateItem={UpdateItem} toggle={toggle} setToggle={setToggle}/>
                )}
            </ul>
    )
}

export default List;