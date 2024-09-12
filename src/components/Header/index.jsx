import Link from "next/link";
import styles from './Header.module.css'
import Image from 'next/image'
import logo from '@/img/logo.png'

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src={logo} alt="logo"/>
            <h1 className={styles.title}>Eventum</h1>
            <Link href="/">Hola</Link>
        </div>
    )
}