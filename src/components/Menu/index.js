import React from 'react';
import logo from '../../assets/img/Logo.png'
import './menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

function Menu() {
  return(
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={logo} alt="QUALEFLIX logo"/>
        </a>

        <Button as="a"className="ButtonLink" href="/">
          Alucinar
        </Button> 

      </nav>
  );
}

export default Menu;