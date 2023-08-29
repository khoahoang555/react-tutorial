import "./index.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import Modal from "./components/UI/Modal";

function App() {
    return (
        <div>
            <Modal/>
            <UserForm/>
            <UserList/>
        </div>
    );
}

export default App;
