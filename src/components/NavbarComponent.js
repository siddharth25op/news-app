import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "keep-react";

const NavbarComponent = () => {
  return (
    <div className="header">
      <Navbar fluid={true}>
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <Link to="/">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png"
                  alt="keep"
                  width="100"
                  height="30"
                  className="img"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-8"
            >
              <Link to="/">Home</Link>
              <Link to="/health">Health</Link>
              <Link to="/sports">Sports</Link>
              <Link to="/business">Business</Link>
              <Link to="/technology">Technology</Link>
              <Link to="/science">Science</Link>
              <Link to="/entertainment">Entertainment</Link>
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                <Link to="/">Home</Link>
                <Link to="/health">Health</Link>
                <Link to="/sports">Sports</Link>
                <Link to="/business">Business</Link>
                <Link to="/technology">Technology</Link>
                <Link to="/science">Science</Link>
                <Link to="/entertainment">Entertainment</Link>
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2">
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
