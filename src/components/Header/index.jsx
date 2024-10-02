'use client'
import Link from "next/link";
import AccountIcon from '@/img/icons/ic_account.svg'
import styles from './styles.module.css'
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    const show = pathname.includes('/login') || pathname.includes('/signup')

    return (
        <div className={styles.header}>
            <Link href="/" className={styles.link}>
                <h1 className={styles.title}>Eventum</h1>
            </Link>
            {
                !show && 
                <div className={styles.accountContainer}>
                    <div className={styles.accountWrapper}>
                        <AccountIcon className={styles.headerIcon}/>
                        <p>Username</p>
                    </div>
                    <p className={styles.logout}>Cerrar sesión</p>
                </div>
            }
        </div>
    )
}