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


const App = () => {

  return(
    <Router>
        <Navbar bg="dark" defaultActiveKey="/" fluid collapseOnSelect>
            <Nav>
                <Nav.Item>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
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

        <Switch>
            <Route path="/">
                <Home/>
            </Route>
            <Route path="/add">
                <Add/>
            </Route>
            <Route path="/edit">
               
            </Route>
            <Route path="/remove">
                
            </Route>
        </Switch>
    </Router>  
  );
}

export default App;