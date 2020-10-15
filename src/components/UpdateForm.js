import React, { useContext, useState, useEffect } from 'react';
import './UpdateForm.css';

const Form = (props) => {

    const { setCheckmail, checkmail, collaborators, checkid, setCheckid, validateID, value, UpdateItem, i, setRow, addItem, btn, addBtn, setDisable, setShowForm } = props;
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("")

    useEffect(() => {
        if (value) {
            setName(value.name);
            setId(value.id);
            setEmail(value.email);
        }
    }, [value])

    const IdValidate = (val) => {
        // console.log(collaborators);
        setId(val);
        if (/[a-z][A-Z][1-9]/.test(val)) {
            console.log("/////")
            const x = collaborators.filter((v) => (v.id == val));
            console.log(x);
            if ((x.length) > 0) {
                setCheckid(true)
            }
            else {
                setCheckid(false)
            }
            setCheckid(false)
        }
        else{
            console.log("inside else")
            setCheckid(true)
        }

    }

    const ValidateEmail = (val) => {
        setEmail(val)
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(val)) {
            setCheckmail(true);
        }
        else {
            setCheckmail(false);
        }
    }

    return (
        <div className="main">
            <div id="add-app">
                <div className="form-entry">
                    <label>Name</label>
                    <input className="formip" type="text" value={name} onChange={e => setName(e.target.value)} />

                </div>
                <div className="form-entry">
                    <label>ID</label>
                    <input className="formip" type="text" value={id} onChange={e => {
                        IdValidate(e.target.value)
                    }} />
                </div>
                {((checkid) ? <p className="incorrect">Incorrect ID</p> : null)}
                <div className="form-entry">
                    <label>Email</label>
                    <input className="formip" type="text" value={email} onChange={e => ValidateEmail(e.target.value)} />
                </div>
                {((checkmail) ? <p className="incorrect">Incorrect mail</p> : null)}
                {((btn) ?
                    <div className="buttons">
                        <button className="add"
                            disabled={(value.name == name && value.id == id && value.email == email) || checkid || checkmail}
                            onClick={() => {
                                UpdateItem(name, id, email, i)
                                setRow(false);
                                setDisable(false);
                            }}>Edit</button>
                        <button className="cancel" onClick={() => {
                            setDisable(false);
                            setRow(false)
                        }}>Cancel</button>
                    </div>
                    : null
                )}
                {((addBtn) ?
                    <div className="buttons">
                        <button className="add" disabled={checkid || checkmail}
                            onClick={() => {
                                addItem(name, id, email)
                            }
                            }>Add</button>
                        <button className="cancel" onClick={() => { setShowForm(false) }}>Cancel</button>
                    </div>
                    : null
                )}

            </div>
        </div>
    )
}

export default Form;