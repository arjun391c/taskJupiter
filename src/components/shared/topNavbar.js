import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useHistory } from 'react-router-dom';

const TopNav = (props) => {
  const history = useHistory();
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const toggleDropdown = () => setdropdownOpen(!dropdownOpen);

  return (
    <React.Fragment>
      <Navbar color="dark" dark fixed="top" style={{ color: "white" }}>
        <NavbarBrand className="mr-auto ml-5">LOGO</NavbarBrand>
        {!props.isLogged ? null :
        <Nav>
        <Dropdown
          style={{ borderLeft: `1px solid white` }}
          isOpen={dropdownOpen}
          toggle={toggleDropdown}
        >
          <DropdownToggle nav caret style={{ color: "#fff" }}>
            <i className="fa fa-user-circle mr-2" /> User
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={()=> {props.toggleLogged(); history.push("/");}}>
              Logout
              <i className="fa fa-sign-out ml-4" style={{ color: "black" }} />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
        }
      </Navbar>
    </React.Fragment>
  );
};

export default TopNav;
