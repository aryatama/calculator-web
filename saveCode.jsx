import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"

import {
  Container,
  Form,
  Row,
  Col,
  Button
} from 'react-bootstrap';

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [operator, setOperator] = useState(null);


  const inputDigit = e => {
    if (waitingForSecondOperand === true) {
      setDisplayValue(e.target.value);
      setWaitingForSecondOperand(true);
      console.log(operator, displayValue, waitingForSecondOperand, firstOperand);
    } else {
      displayValue === "0" ? setDisplayValue(()=> e.target.value) : setDisplayValue(displayValue + e.target.value);
      console.log(operator, displayValue, waitingForSecondOperand, firstOperand);
   }
  }

  const inputDecimal = e => {
    if (waitingForSecondOperand === true) return;
    if (!displayValue.includes(e.target.value)) {
      setDisplayValue(displayValue + e.target.value);
    }
  }

  const handleOperator = e => {
    const inputValue = parseFloat(displayValue);

    if (operator && waitingForSecondOperand) {
      setOperator(e.target.value);
      console.log(operator, displayValue, waitingForSecondOperand, firstOperand);
      return;
    }
    if (firstOperand == null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);

      setDisplayValue(String(result));
      setFirstOperand(result);
      console.log(result, operator, displayValue, waitingForSecondOperand, firstOperand);
    }

    setWaitingForSecondOperand(true);
    setOperator(e.target.value);
    console.log(operator, displayValue, waitingForSecondOperand, firstOperand);
   
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
            <Form>
              <Form.Control className="bg-dark text-light rounded" type="text" value={displayValue} disabled></Form.Control>
            </Form>
            <Row className="mt-3">
              <Col> <Button variant="warning" onClick={resetCalculator} block>AC</Button> </Col>
              <Col><Button variant="secondary" value ="max" onClick={handleOperator} block>MAX</Button></Col>
              <Col><Button variant="secondary" value ="min" onClick={handleOperator} block>MIN</Button></Col>
              <Col><Button variant="secondary" value ="^" onClick={handleOperator} block>^</Button></Col>
            </Row>
            <Row className="mt-3">
              <Col> <Button variant="primary" value="7" onClick={inputDigit} block>7</Button> </Col>
              <Col><Button variant="primary" value="8" onClick={inputDigit} block>8</Button></Col>
              <Col><Button variant="primary" value="9" onClick={inputDigit} block>9</Button></Col>
              <Col><Button variant="secondary" value ="/" onClick={handleOperator} block>÷</Button></Col>
            </Row>
            <Row className="mt-3">
              <Col> <Button variant="primary" value="4" onClick={inputDigit} block>4</Button> </Col>
              <Col><Button variant="primary" value="5" onClick={inputDigit} block>5</Button></Col>
              <Col><Button variant="primary" value="6" onClick={inputDigit} block>6</Button></Col>
              <Col><Button variant="secondary" value ="*" onClick={handleOperator} block>&times;</Button></Col>
            </Row>
            <Row className="mt-3">
              <Col> <Button variant="primary" value="1" onClick={() => { setDisplayValue('1'); console.log(displayValue)}} block>1</Button> </Col>
              <Col><Button variant="primary" value="2" onClick={inputDigit} block>2</Button></Col>
              <Col><Button variant="primary" value="3" onClick={inputDigit} block>3</Button></Col>
              <Col><Button variant="secondary" value ="-" onClick={handleOperator} block>-</Button></Col>
            </Row>
            <Row className="mt-3">
              <Col> <Button variant="success" value ="=" onClick={handleOperator} block>=</Button> </Col>
              <Col><Button variant="primary" value="2" onClick={inputDigit} block>0</Button></Col>
              <Col><Button variant="primary" value="." onClick={inputDecimal} block>.</Button></Col>
              <Col><Button variant="secondary" value ="+" onClick={handleOperator} block>+</Button></Col>
            </Row>
          </Col>

          <Col>
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

