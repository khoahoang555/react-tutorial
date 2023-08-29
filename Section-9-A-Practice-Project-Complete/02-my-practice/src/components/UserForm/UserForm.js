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
        console.log(userForm);
    }

    const changeValueHandler = async event => {
        const {name, value} = event.target;
        await setUserForm((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
        // setTimeout(() => console.log(userForm), 4000);
        console.log(userForm);
    }

    return (
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
                <Button type="reset" style={{marginLeft: "10px"}} className="button" title="Reset"/>
            </form>
        </Card>
    );
}

export default UserForm;