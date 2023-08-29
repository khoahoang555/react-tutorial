import classes from "./Modal.module.css";
import Button from "./Button";

const Modal = props => {
    const confirmHandler = () => {
        props.onCloseModal(true);
    }

    return (
      <div className={classes.modal} style={{display: props.isShow ? "" : "none"}}>
        <div className={classes["modal-content"]}>
            <div className={classes["modal-header"]}>
                <h2>{props.title}</h2>
            </div>
            <div className={classes["modal-body"]}>
                <p>{props.content}</p>
            </div>
            <div className={classes["modal-actions"]}>
                <Button title="Okay" onClick={confirmHandler} className="button"/>
            </div>
        </div>
      </div>
    );
}

export default Modal;