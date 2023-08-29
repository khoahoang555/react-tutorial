import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = props => {
    return (
        <Card>
            {props.items.length === 0 && <p style={{textAlign: "center", margin: 0}}>No data.</p>}
            {props.items.length !== 0 && props.items.map((item, index) => (
                <div key={index} className={classes.list}>
                    {item.username} ({item.age} years old)
                </div>
            ))}
        </Card>
    );
}

export default UserList;