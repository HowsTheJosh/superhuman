import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" style={{ color: "white" }}>
            LOGO
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
