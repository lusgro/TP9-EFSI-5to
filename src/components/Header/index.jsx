'use client'
import Link from "next/link";
import AccountIcon from '@/img/icons/ic_account.svg'
import styles from './styles.module.css'
import { usePathname, useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useLogin";

export default function Header() {
    const { session, cleanSession, isLoggedIn } = useLogin()
    const router = useRouter();

    const closeSession = () => {
        cleanSession()
        router.push('/login')
    }

    return (
        <div className={styles.header}>
            {
                isLoggedIn 
                ? 
                <Link href="/" className={styles.link}>
                    <h1 className={styles.title}>Eventum</h1>
                </Link>
                :
                <h1 className={styles.title}>Eventum</h1>
            }
            {
                isLoggedIn && 
                <div className={styles.accountContainer}>
                    <div className={styles.accountWrapper}>
                        <AccountIcon className={styles.headerIcon}/>
                        {session && <p>{session.username}</p>}
                    </div>
                    <p className={styles.logout} onClick={closeSession}>Cerrar sesión</p>
                </div>
            }
            {
                !isLoggedIn &&
                <div className="flex flex-row items-center gap-4">
                    <h3 className="cursor-pointer" onClick={() => router.push('/login')}>Iniciar sesión</h3>
                    <h3 className="cursor-pointer" onClick={() => router.push('/signup')}>Crear cuenta</h3>
                </div>    
            }
        </div>
    )
}