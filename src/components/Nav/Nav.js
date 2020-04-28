import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/qpl_logo.svg';

const Nav = () => {
    document.addEventListener('DOMContentLoaded', () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }

    });

    return (
        <div className="container is-fluid">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <img src={logo} alt="logo" className="main-logo" />

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="main-links">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="main-links" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Link className="bold main" to="/">Home</Link>
                        </div>
                        <div className="navbar-item">
                            <Link className="bold main" to="/about">About</Link>
                        </div>
                        <div className="navbar-item">
                            <a className="bold main" href="https://github.com/alexpierola/quickplantuml">View on GitHub</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
