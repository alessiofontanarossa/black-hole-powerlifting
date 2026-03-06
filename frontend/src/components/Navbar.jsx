import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const menuItems = [
    { label: 'Squat', path: '/squat' },
    { label: 'Panca', path: '/panca' },
    { label: 'Stacco', path: '/stacco' },
    { label: 'Mobilità', path: '/mobilita' },
    { label: 'Stretching', path: '/stretching' },
    { label: 'Dips', path: '/dips' },
    { label: 'Trazioni', path: '/trazioni' },
    { label: 'Complementari', path: '/complementari' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const dropRef = useRef(null)

    useEffect(() => {
        function handleClick(e) {
            if (dropRef.current && !dropRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [])

    return (
        <nav className="navbar">
            <div className="navbar-inner">

                <Link to="/" className="navbar-logo-link">
                    <img src="/logo2.png" alt="Blackhole Powerlifting Team" className="navbar-logo-img" />
                </Link>
                <span className="navbar-tagline">Let results be your voice</span>
                <ul className="navbar-nav">
                    <li>
                        <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <SearchBar />
                    </li>
                    <li className="nav-dropdown" ref={dropRef}>
                        <button
                            className={`dropdown-trigger${open ? ' open' : ''}`}
                            onClick={() => setOpen(v => !v)}
                            aria-expanded={open}
                        >
                            Esercizi
                            <span className="chevron">▼</span>
                        </button>
                        {open && (
                            <div className="dropdown-menu">
                                {menuItems.map(item => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className="dropdown-item"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}
