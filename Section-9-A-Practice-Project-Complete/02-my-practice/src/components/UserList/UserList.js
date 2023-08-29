import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = props => {

    return (
        <Card>
            <div className={classes.list}>
                Max (31 years old)
            </div>
        </Card>
    );
}

export default UserList;