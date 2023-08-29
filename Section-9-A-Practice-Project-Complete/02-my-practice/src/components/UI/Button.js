import classes from "./Button.module.css";

const Button = props => {
    return <button
        type={props.type}
        onClick={props.onClick}
        className={classes[props.className]}
        style={props.style}
    >
        {props.title}
    </button>
}

export default Button;