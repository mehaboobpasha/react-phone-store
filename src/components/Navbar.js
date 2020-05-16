import React,{Component} from "react";
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import  styled from "styled-components";
import {ButtonContainer} from "./Button"

const style ={
    textDecoration:'none',
    color:'#fff',
    fontWeight:'bold',
    textTransform:'capitalize'

}

export default class Nvabar extends Component{
    render(){
        return(
   
<React.Fragment>

<nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color">
{/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

<Link to="/">
<img src ={logo} alt="store" className="navbar-brand" />
</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul className="navbar-nav mr-auto">
    <Link to ="/" className="nav-link">
      <li className="nav-item active">
        <a className="nav-link" href="#">Products
          <span className="sr-only">(current)</span>
        </a>
      </li>
      </Link>
    
    </ul>
    <ul className="navbar-nav ml-auto nav-flex-icons">

      <li className="nav-item">
      <Link style={style} to="/cart" className="ml-auto">
        <a className="nav-link waves-effect waves-light">
        <i className="fas fa-cart-plus"></i> my cart
        </a>
        </Link>
      </li>
      
    </ul>
  </div>
</nav>

</React.Fragment>

        )
    }
}

