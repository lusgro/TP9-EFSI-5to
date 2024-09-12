import styles from './Footer.module.css'
import Link from "next/link";

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 className={styles.title}>Eventum</h1>
                <Link href="/contacto" className={styles.footerContact}>Contacto</Link>
            </div>
        </footer>
    )
}