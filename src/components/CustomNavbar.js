import React, { useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from "reactstrap";

function CustomNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md" fixed="">
                <NavbarBrand tag={ReactLink} to="/">
                    EMS
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/login">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/signup">
                                Sign Up
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                More
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;
