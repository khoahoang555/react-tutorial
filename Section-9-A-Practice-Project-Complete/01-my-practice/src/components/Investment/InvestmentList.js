import React from "react";
import "./InvestmentList.css";

const InvestmentList = props => {
    if (props.items.length === 0) {
        return;
    }

    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>YEAR NUMBER</td>
                    <td>TOTAL SAVINGS END OF YEAR</td>
                    <td>INTEREST GAINED IN YEAR</td>
                    <td>TOTAL INTEREST GAINED</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                </tr>
                {props.items.map(item => (
                    <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{item.savingsEndOfYear}</td>
                        <td>{item.yearlyInterest}</td>
                        <td>{item.yearlyInterest}</td>
                        <td>{item.yearlyContribution}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default InvestmentList;