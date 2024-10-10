import styles from './Footer.module.css'
import MenuList from "./MenuList";

const Footer = function() {
    const year='2024'
    return (
        <footer className="text-center">
            <hr />
           <div > <MenuList/> <p className={styles.purpleText}>Copyright {year} | Bosch</p>
           <p className={styles.greenText}>Happyily made in india</p></div>
        </footer>
    )
}

export default Footer;