import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes } from "react-icons/fa"
import reactLogo from '../../assets/logo.svg'
import React, { useState } from 'react';
import CustomDropdown from '../Dropdown/Dropdown'; // Renommer le composant Dropdown

function Header(){
    return(
        <header className={styles.main}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={reactLogo} alt="React Logo" />
                    </Link>
                </div>
                <nav className={styles.links} >
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/Change">Convertisseur</Link></li>
                        <li><Link to="/Simulateur">Simulateur</Link></li>
                    </ul>
                </nav>
                <div>
                    <CustomDropdown/> {/* Utiliser le composant renommé */}
                </div>
            </div>
        </header>
    )
}

export default Header;
