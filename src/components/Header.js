import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import history from "./History";
class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md" id="navbar">
          <NavbarBrand href="/superhuman" style={{ color: "white" }}>
            LOGO
          </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <button
                style={{ marginLeft: "20%" }}
                className="btn btn-secondary"
                onClick={() => history.push("/superhuman")}
              >
                Home
              </button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
