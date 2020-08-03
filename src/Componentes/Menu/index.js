import React from 'react';
import Logo from '../../Assets/img/logo-maior.png';
import Button from '../Button/index';


// import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img class="Logo" src={Logo} alt="MiFlix" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; 