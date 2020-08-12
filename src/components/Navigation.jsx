import React from 'react';
import { Navbar } from "react-bootstrap";

export default function Navigation() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">React Calculator </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    By : <a href="#login">Aryatama</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}


