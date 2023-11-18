import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./assets/logo-tienda.png"
import "./NavBarComponent.css"
import Cart from "../CartComponent/CartWidgetComponent"
import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from 'axios';


function BasicExample() {

  const [categorias, setCategorias] = useState([])

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products/categories')
            .then(res => {
                setCategorias(res.data)
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <Navbar expand="lg" className="bg-body nav-style">
      <Container >
        <Link to={"/"}><img src={logo} alt="logo" style={{ width: 100, height: 70 }} /></Link>
        <Navbar.Brand><Link to={"/"}>All-Store</Link>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {
                categorias.map ((categoria, index) => {
                  return (
                    <NavDropdown.Item key={index}>
                      <Link to={`/category/${categoria}`}>
                        {categoria}
                      </Link>  
                    </NavDropdown.Item>
                  )    
                })
              }  
            </NavDropdown>
          </Nav>
          <Cart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;