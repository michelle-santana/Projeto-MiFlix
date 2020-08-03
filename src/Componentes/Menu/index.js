import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../Assets/img/logo-maior.png';
import Button from '../Button/index';
import '../Menu'
// import ButtonLink from './components/ButtonLink';


import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img class="Logo" src={Logo} alt="MiFlix" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; 