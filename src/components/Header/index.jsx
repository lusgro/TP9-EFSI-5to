import Link from "next/link";
import AccountIcon from '@/img/icons/ic_account.svg'

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <nav className="flex items-center space-x-4">
                    <Link href="/" className="text-xl font-bold hover:text-gray-300">
                        Eventum
                    </Link>
                    <Link href="/" className="hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/contacto" className="hover:text-gray-300">
                        Contacto
                    </Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <AccountIcon className="w-6 h-6 mr-2" />
                        <span>Username</span>
                    </div>
                    <button className="text-sm hover:text-gray-300">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </header>
    )
}