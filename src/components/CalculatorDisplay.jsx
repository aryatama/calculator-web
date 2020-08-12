import React from 'react';
import {
    Form
  } from 'react-bootstrap';

export default function CalculatorDisplay(props) {
    return (
            <Form>
              <Form.Control className="bg-dark text-light rounded" type="text" value={props.display} disabled></Form.Control>
            </Form>
    );
};
