import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Home from "./Home.js";
import About from "./About.js";
import Users from "./Users.js";
import Contact from "./Contact.js";
import CreateUser from "./CreateUser.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">JN</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/list">User List</Link>
            </Nav.Link>{" "}
            <Nav.Link href="#pricing">
              <Link to="/create">Create User</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default Header;
