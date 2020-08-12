import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorButton from './components/CalculatorButton';

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [operator, setOperator] = useState(null);


  const inputDigit = digit => {
    if (waitingForSecondOperand === true) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      displayValue === "0" ? setDisplayValue(digit) : setDisplayValue(displayValue + digit);
   }
  }

  const inputDecimal = dot => {
    if (waitingForSecondOperand === true) return;
    if (!displayValue.includes(dot)) {
      setDisplayValue(displayValue + dot);
    }
  }

  const handleOperator = nextOperator => {
    const inputValue = parseFloat(displayValue);

    if (operator && waitingForSecondOperand) {
      setOperator(nextOperator);
      return;
    }
    if (firstOperand == null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);

      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  }

  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,

    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,

    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,

    '^': (firstOperand, secondOperand) => Math.pow(firstOperand, secondOperand),

    'max': (firstOperand, secondOperand) => Math.max(firstOperand, secondOperand),

    'min': (firstOperand, secondOperand) => Math.min(firstOperand, secondOperand),

    '=': (firstOperand, secondOperand) => secondOperand
  };

  const resetCalculator = () => {
    setOperator(null);
    setWaitingForSecondOperand(false);
    setDisplayValue("0");
    setFirstOperand(null)
  }

  return (
    <div>
      <Navigation />

      <Container className="mt-5">
        <Row>
          <Col>
            <div></div>
          </Col>

          <Col>
            <CalculatorDisplay display = {displayValue} />

            <CalculatorButton 
            numberClick = {inputDigit}
            decimalClick = {inputDecimal}
            operatorClick = {handleOperator}
            resetClick = {resetCalculator}
            />
          </Col>
          <Col>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

