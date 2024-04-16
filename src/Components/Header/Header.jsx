import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes } from "react-icons/fa"
import reactLogo from '../../assets/logo.svg'
import React, { useState } from 'react';
import CustomDropdown from '../Dropdown/Dropdown'; 


function Header(){
    return(
        <header className={styles.main}>
            <div className={styles.container}>
                <div className={styles.logo}>
                        <img src={reactLogo} alt="React Logo" />
                        <h3>Monnaie<span>Master</span></h3>
                </div>
                <nav className={styles.links} >
                    <ul>
                        <li><Link  className={styles.link}  to="/">Accueil</Link></li>
                        <li><Link  className={styles.link}  to="/Change">Convertisseur</Link></li>
                        <li><Link  className={styles.link}  to="/Simulateur">Simulateur</Link></li>
                    </ul>
                </nav>
                <div>
                    <CustomDropdown/>
                </div>
            </div>
        </header>
    )
}

export default Header;
