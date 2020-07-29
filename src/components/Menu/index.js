import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/Logo.png';
import './menu.css';
import Button from '../Button';


//import ButtonLink from './components/ButtonLink';

function Menu() {
  return(
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={logo} alt="QUALEFLIX logo"/>
        </Link>

        <Button as={Link}className="ButtonLink" to="cadastro/video">
          Alucinar
        </Button> 

      </nav>
  );
}

export default Menu;