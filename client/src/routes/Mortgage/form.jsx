
import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import FormInputGroup from "./forminputgroup";
import { Doughnut } from 'react-chartjs-2';
import "./form.scss";

function Form() {
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function calculateLoanAmount() {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
  }

  function calculateMonthlyPayment() {
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }
    // years to month conversion
    function yearsToMonths(year) {
      return year * 12;
    }
    setMonthlyPayment(
      (percentageToDecimal(interestRate) * loanAmount) / (1 - Math.pow(1 + percentageToDecimal(interestRate), -yearsToMonths(loanDuration)))
    );
    return monthlyPayment;
  }

  const data = {
    labels: ['Down Payment', 'Loan Amount', 'Monthly Payment'],
    datasets: [{
      label: 'Loan Breakdown',
      data: [downPayment, loanAmount, monthlyPayment],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1
    }]
  };

  return (
   
    <form onSubmit={(e) => e.preventDefault()}>
       <div className="form">
      <div className="input">
      <FormInputGroup text="Home Value " icon={<FaDollarSign />} placeholder={"Enter the value of the home"} value={homeValue} onInput={(e) => setHomeValue(e.target.value)} onkeyup={calculateLoanAmount} />
      <FormInputGroup text="Down payment" icon={<FaDollarSign />} placeholder={"Enter your funds"} value={downPayment} onInput={(e) => setDownPayment(e.target.value)} onkeyup={calculateLoanAmount} />
      <FormInputGroup text="Loan amount" icon={<FaDollarSign />} placeholder={"Enter your funds"} readOnly={true} value={loanAmount} />
      <FormInputGroup text="Interest Rate %" placeholder={"Enter your interest rate"} value={interestRate} onInput={(e) => setInterestRate(e.target.value)} />
      <FormInputGroup text="Loan Duration (years)" placeholder={"Enter the duration of your loan in years"} value={loanDuration} onInput={(e) => setLoanDuration(e.target.value)} />
      <h4 className="alert alert-info fw-bold"> Monthly payment: <FaDollarSign /> {parseFloat(monthlyPayment.toFixed(2))} </h4>
      <button type="submit" onClick={calculateMonthlyPayment} className="btn btn-primary btn-lg w-100 center " > Calculate </button>
      </div>
      <div className="graph">
      <Doughnut data={data} />
      </div>
      </div>
    </form>
    
  );
}

export default Form;

