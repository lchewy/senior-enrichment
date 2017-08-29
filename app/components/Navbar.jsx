import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props)=> {

 
    return (
      <nav className="navbar navbar-light bg-faded">
        <Link to="/campuses"><button type="button" className="btn btn-lg btn-primary" >Our Campuses</button></Link>
        
        <Link to="/students"><button type="button" className="btn btn-secondary btn-lg" >Our Students</button></Link>
      
      </nav>
    );
  
}

export default Navbar;