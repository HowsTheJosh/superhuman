import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md" id="navbar">
          <NavbarBrand href="/superhuman" style={{ color: "white" }}>
            LOGO
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
