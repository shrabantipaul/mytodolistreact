import React,{useState} from 'react';
import List from './components/List';
import Modal from './components/modal';
function App() {
  const [showForm,setShowForm] = useState(false);
  const [toggle, setToggle] = useState(false);
    const [collaborators,setCollaborators] = useState([]);
    const addItem = (name,id,email)=> {
      setCollaborators([
        ...collaborators,
        {
          name:name,
          id:id,
          email:email
        }
      ])
      setShowForm(false)
      // debugger;
    };

    const UpdateItem = (name,id,email,j)=>{
      const newVal=collaborators.map((v,i)=>{
        if(i==j){
          return {
                  name : name,
                  id : id,
                  email : email
                }
        }
        return v;
      })
  
      setCollaborators([...newVal]);
      
    }

    const DeleteItem = (j) =>{
      setCollaborators([...collaborators.filter((v,i)=>i!=j)]);
    }

    const ValidateEmail = (val) => {
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!filter.test(val)) {
            alert('Please provide a valid email address');
            return false;
    }
    return true;
  }

  const validateID = (val) => {
    var filter = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(filter.test(val)){
      collaborators.map((v)=>{
        if(v.id==val){
          alert("ID already exists");
          return false;
        }
      })
      return true;
    }
      alert('ID must contain an uppercase, a lower case and a number');
      return false;
  } 
    return(
        <div>
           <Modal collaborators={collaborators} validateID={validateID} addItem={addItem} showForm={showForm} setShowForm={setShowForm} ValidateEmail={ValidateEmail}/>
           <List validateID={validateID} collaborators={collaborators} ValidateEmail={ValidateEmail} DeleteItem={DeleteItem} UpdateItem={UpdateItem} toggle={toggle} setToggle={setToggle}/>
        </div>
    )
}

export default App;
