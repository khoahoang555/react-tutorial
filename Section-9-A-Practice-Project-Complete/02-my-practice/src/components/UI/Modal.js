import classes from "./Modal.module.css";
import Button from "./Button";

const Modal = props => {
    return (
      <div className={classes.modal}>
        <div className={classes["modal-content"]}>
            <div className={classes["modal-header"]}>
                <h2>Modal Header</h2>
            </div>
            <div className={classes["modal-body"]}>
                <p>Some text in the modal body</p>
                <p>Some other text...</p>
            </div>
            <div className={classes["modal-actions"]}>
                <Button title="Okay" className="button"/>
            </div>
        </div>
      </div>
    );
}

export default Modal;