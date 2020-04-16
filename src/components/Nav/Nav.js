import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/qpl_logo.svg';

const Nav = () => {
    return (
        <div className="container is-fluid">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <img src={logo} alt="logo" className="main-logo" />

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="main-links">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="main-links" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <Link className="bold main" to="/">Home</Link>
                        </div>
                        <div class="navbar-item">
                            <Link className="bold main" to="/about">About</Link>
                        </div>
                        <div class="navbar-item">
                            <a className="bold main" href="https://github.com/alexpierola/quickplantuml">View on GitHub</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
