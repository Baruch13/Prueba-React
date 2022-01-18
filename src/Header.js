import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from './logo.svg';
import { LogoutButton } from "./Logout";
import { Route, Router, Routes } from "react-router";

import {Listar} from "./Listar";
import {Agregar} from "./Agregar";
import {Link} from 'react-router-dom';
export const Header = () => {
    return (
       
       
         
       
        <div className="App">
        <Navbar bg="dark" variant="dark"
          sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px" />{' '}
            Logo
          </Navbar.Brand>
  
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav>
            
              <Nav.Link href="#">Bodegas</Nav.Link>
              
              <LogoutButton />
            </Nav>
            
          </Navbar.Collapse>
  
        </Navbar>
        <div className="content">
       
        </div>
      </div>

 
    
    );
}