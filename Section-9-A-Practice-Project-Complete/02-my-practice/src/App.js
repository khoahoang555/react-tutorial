import React, {useState} from "react";
import "./index.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import Modal from "./components/UI/Modal";

function App() {
    const [isShowModal, setIsShowModal] = useState(false);
    const [errMessage, setErrMessage] = useState({});
    const [users, setUsers] = useState([]);

    const addNewUserHandler = user => {
        if (user.username.trim().length === 0 || user.age.trim().length === 0) {
            setIsShowModal(true);
            setErrMessage((prevState) => {
                return {
                    title: "Invalid input",
                    content: "Please enter a valid name and age (non-empty values)!"
                }
            });
            console.log(errMessage);
            return;
        }
        if (user.age < 0) {
            setIsShowModal(true);
            setErrMessage((prevState) => {
                return {
                    title: "Invalid input",
                    content: "Please enter a valid age (>0)"
                }
            });
            return;
        }
        setUsers((prevState) => [...prevState, user]);
    }

    const closeModalHandler = value => {
        setIsShowModal(false);
    }

    return (
        <div>
            <Modal
                isShow={isShowModal}
                onCloseModal={closeModalHandler}
                title={errMessage.title}
                content={errMessage.content}/>
            <UserForm onAddNewUser={addNewUserHandler}/>
            <UserList items={users}/>
        </div>
    );
}

export default App;
