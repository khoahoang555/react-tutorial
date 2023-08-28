import React, {useState} from "react";
import './index.css';
import Header from "./components/UI/Header";
import CalculatorForm from "./components/Calculator/CalculatorForm";
import InvestmentList from "./components/Investment/InvestmentList";

function App() {
    const [investments, setInvestments] = useState([]);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });


    const calculateHandler = (userInput) => {
        const yearlyData = [];
        let currentSavings = +userInput['currentSavings'];
        const yearlyContribution = +userInput['yearlyContribution'];
        const expectedReturn = +userInput['expectedReturn'] / 100;
        const duration = +userInput['duration'];

        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: formatter.format(yearlyInterest),
                savingsEndOfYear: formatter.format(currentSavings),
                yearlyContribution: formatter.format(yearlyContribution),
            });
        }
        setInvestments(yearlyData);
    }

    return (
        <div>
            <Header />
            <CalculatorForm onCalculate={calculateHandler} />
            <InvestmentList items={investments}/>
        </div>
    );
}

export default App;
