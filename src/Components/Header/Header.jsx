import styles from './Header.module.scss'
import { Link } from 'react-router-dom'


function Header(){


    return(

        <header>
            
            <Link  className={styles.text}   to="/" >Accueil</Link>
            <Link className={styles.text}  to="/About" >About</Link>
     


        </header>
    )
}

export default Header