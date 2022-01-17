import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'


export const LogoutButton = () => {
    const { logout } = useAuth0();
    return <Nav.Link onClick={() => logout({ returnTo: window.location.origin})}>Cerrar Sesión</Nav.Link>

}