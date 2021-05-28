import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    console.log("TCL ~ file: Navbar.js ~ line 6 ~ Navbar ~ router", router)

    const isActive = (route) => {
        if (route == router.pathname) {
            return 'active'
        }
        else ""

    }

    return (
        <nav>
            <div className="nav-wrapper #0d47a1 blue darken-4" >
                <Link href="/">
                    <a className="brand-logo">Logo</a>
                </Link>
                <ul id="nav-mobile" className="right">
                    <li className={isActive('/login')}>
                        <Link href="login">
                            <a>login</a>
                        </Link>
                    </li>
                    <li className={isActive('/signup')}>
                        <Link href="signup">
                            <a>signup</a>
                        </Link>
                    </li>
                    <li className={isActive('/create')}>
                        <Link href="create">
                            <a>create</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
