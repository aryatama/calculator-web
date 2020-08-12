import React from 'react';
import {
    Row,
    Col,
    Button
  } from 'react-bootstrap';

  export default function CalculatorButton(props) {
    return (
        <div>
            <Row className="mt-3">
                <Col> <Button variant="warning" onClick={e => {props.resetClick(e.target.value)}} block>AC</Button> </Col>
                <Col><Button variant="secondary" value="max" onClick={e => {props.operatorClick(e.target.value)}} block>MAX</Button></Col>
                <Col><Button variant="secondary" value="min" onClick={e => {props.operatorClick(e.target.value)}} block>MIN</Button></Col>
                <Col><Button variant="secondary" value="^" onClick={e => {props.operatorClick(e.target.value)}} block>^</Button></Col>
            </Row>
            <Row className="mt-3">
                <Col> <Button variant="primary" value="7" onClick={e => {props.numberClick(e.target.value)}} block>7</Button> </Col>
                <Col><Button variant="primary" value="8" onClick={e => {props.numberClick(e.target.value)}} block>8</Button></Col>
                <Col><Button variant="primary" value="9" onClick={e => {props.numberClick(e.target.value)}} block>9</Button></Col>
                <Col><Button variant="secondary" value="/" onClick={e => {props.operatorClick(e.target.value)}} block>÷</Button></Col>
            </Row>
            <Row className="mt-3">
                <Col> <Button variant="primary" value="4" onClick={e => {props.numberClick(e.target.value)}} block>4</Button> </Col>
                <Col><Button variant="primary" value="5" onClick={e => {props.numberClick(e.target.value)}} block>5</Button></Col>
                <Col><Button variant="primary" value="6" onClick={e => {props.numberClick(e.target.value)}} block>6</Button></Col>
                <Col><Button variant="secondary" value="*" onClick={e => {props.operatorClick(e.target.value)}} block>&times;</Button></Col>
            </Row>
            <Row className="mt-3">
                <Col> <Button variant="primary" value="1" onClick={e => {props.numberClick(e.target.value)}} block>1</Button> </Col>
                <Col><Button variant="primary" value="2" onClick={e => {props.numberClick(e.target.value)}} block>2</Button></Col>
                <Col><Button variant="primary" value="3" onClick={e => {props.numberClick(e.target.value)}} block>3</Button></Col>
                <Col><Button variant="secondary" value="-" onClick={e => {props.operatorClick(e.target.value)}} block>-</Button></Col>
            </Row>
            <Row className="mt-3">
                <Col> <Button variant="success" value="=" onClick={e => {props.operatorClick(e.target.value)}} block>=</Button> </Col>
                <Col><Button variant="primary" value="2" onClick={e => {props.numberClick(e.target.value)}} block>0</Button></Col>
                <Col><Button variant="primary" value="." onClick={e => {props.decimalClick(e.target.value)}} block>.</Button></Col>
                <Col><Button variant="secondary" value="+" onClick={e => {props.operatorClick(e.target.value)}} block>+</Button></Col>
            </Row>
        </div>
    );
};
