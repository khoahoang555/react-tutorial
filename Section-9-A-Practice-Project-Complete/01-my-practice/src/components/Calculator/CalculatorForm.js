import React, {useState} from "react";
import "./CalculatorForm.css";
import Button from "../UI/Button";

const initialData = {
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    duration: ''
};

const CalculatorForm = props => {
    const [calculateForm, setCalculateForm] = useState(initialData);

    const formChangeHandler = event => {
        const {name, value} = event.target;
        setCalculateForm((prevState) => {
           return {
               ...prevState,
               [name]: value
           }
        });
    }

    const submitHandler = event => {
        event.preventDefault();
        props.onCalculate(calculateForm);
        resetFormHandler();
    }

    const resetFormHandler = () => {
        setCalculateForm(initialData);
    }

    return (
        <form className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        name="currentSavings"
                        id="current-savings"
                        value={calculateForm.currentSavings}
                        onChange={formChangeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        type="number"
                        name="yearlyContribution"
                        id="yearly-contribution"
                        value={calculateForm.yearlyContribution}
                        onChange={formChangeHandler}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        type="number"
                        name="expectedReturn"
                        id="expected-return"
                        value={calculateForm.expectedReturn}
                        onChange={formChangeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        type="number"
                        name="duration"
                        id="duration"
                        value={calculateForm.duration}
                        onChange={formChangeHandler}
                    />
                </p>
            </div>
            <p className="actions">
                <Button title="Reset" type="reset" className="buttonAlt" onClick={resetFormHandler}/>
                <Button title="Calculate" type="submit" className="button" onClick={submitHandler}/>
            </p>
        </form>
    );
}

export default CalculatorForm;