import React, {useState} from "react";
import classes from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const initialForm = {
    username: "",
    age: ""
}

const UserForm = (props) => {
    const [userForm, setUserForm] = useState(initialForm);

    const submitHandler = event => {
        event.preventDefault();
        props.onAddNewUser(userForm);
    }

    const changeValueHandler = event => {
        const {name, value} = event.target;
        setUserForm((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const resetHandler = event => {
        setUserForm(initialForm);
    }

    return (
        <div>
            <Card>
                <form>
                   <div className={classes['input-group']}>
                       <label>Username</label>
                       <input type="text" value={userForm.username} name="username" onChange={changeValueHandler}/>
                   </div>
                    <div className={classes['input-group']}>
                        <label>Age (Years)</label>
                        <input type="number" value={userForm.age} name="age" onChange={changeValueHandler} />
                    </div>
                    <Button type="submit" className="button" title="Add User" onClick={submitHandler}/>
                    <Button type="reset" style={{marginLeft: "10px"}} onClick={resetHandler} className="button" title="Reset"/>
                </form>
            </Card>
        </div>
    );
}

export default UserForm;