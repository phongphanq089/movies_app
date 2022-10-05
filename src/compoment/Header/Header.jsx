import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./header.scss";

const hearderNav = [
    {
        display: "Trending",
        path: "/"
    },
    {
        display: "Movies",
        path: "/movies"
    },
    {
        display: "TVmovies",
        path: "/tv"
    },
    {
        display: "Search",
        path: "/search"
    },
]
const Header = () => {
    const { pathname } = useLocation()
    const history = useNavigate()
    const headerRef = useRef(null)
    const active = hearderNav.findIndex(item => item.path === pathname);
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header")
        header.classList.toggle("shrink", window.scrollY > 100)
    })
    return (
        <div className="header" ref={headerRef} >
            <div className="logo"><Link to="/">LOGO</Link></div>
            <div className="navbar-menu" >
                {
                    hearderNav.map((item, index) => (
                        <h4 key={index} className={`${index === active ? 'active' : ''}`}>
                            <Link to={item.path}>
                                {item.display}
                            </Link>
                        </h4>
                    ))
                }
            </div>
        </div>
    )
}

export default Header