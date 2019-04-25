import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";



export default class Header extends Component {
  render() {
    
    return (
      
      <div >
        <Navbar style={{ backgroundColor: " black" }} color="faded" light expand="md">
          <NavbarBrand href="/" className="mr-auto">
          <img src="https://jurnalapps.co.id/assets/img/content/1492358786_go-food-1.jpg" width="50%"></img>
            <h1
              style={{
                fontFamily: "Times New Roman",
                fontWeight: "bold",
                color: "white"
                }}>
              
            </h1>
           
            
          </NavbarBrand>
          <NavbarBrand>
          <Button outline color="success" href="/">Home</Button>{' '}
          <Button outline color="success" href="/dashboard">Menu</Button>{' '}
              
          </NavbarBrand>
        </Navbar>
        
      </div>
    );
  }
}
