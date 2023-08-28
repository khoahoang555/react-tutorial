import classes from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserForm = (props) => {
    return (
        <Card>
            <form className={classes.form}>
               <div className={classes['input-group']}>
                   <label>Username</label>
                   <input type="text"/>
               </div>
                <div className={classes['input-group']}>
                    <label>Age (Years)</label>
                    <input type="number"/>
                </div>
                <Button type="submit" className="button" title="Add User"/>
            </form>
        </Card>
    );
}

export default UserForm;