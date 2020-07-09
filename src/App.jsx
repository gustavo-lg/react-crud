import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Remove from './components/Remove';


const App = () => {

  return(
    <Router>
        <Navbar bg="dark" defaultActiveKey="home" fluid collapseOnSelect>
            <Nav>
                <Nav.Item>
                    <Navbar.Brand>
                        <Link to="/" eventKey="home">Home</Link>
                    </Navbar.Brand>
                </Nav.Item>
            </Nav>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Navbar.Brand>
                                <Link to="/add">Add</Link>
                            </Navbar.Brand>
                        </Nav.Item>
                        <Nav.Item>
                            <Navbar.Brand>
                                <Link to="/edit">Edit</Link>
                            </Navbar.Brand>
                        </Nav.Item>
                        <Nav.Item>
                            <Navbar.Brand>
                                <Link to="/remove">Remove</Link>
                            </Navbar.Brand>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>    

     
            <Route exact path="/"component={Home}/>
            <Route path="/add" component={Add}/>
            <Route path="/edit"component={Edit}/>
            <Route path="/remove" component={Remove}/>
        
    </Router>  
  );
}

export default App;