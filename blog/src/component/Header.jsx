import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';

function Header() {
  return (
    <div> 
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarCollapse">
                    <div className="navbar-nav">
                        <NavLink activeclassname='active' to="/" className="nav-link  fw-bold">Home</NavLink>
                        <NavLink activeclassname='active' to="about" className="nav-link  fw-bold">About</NavLink>
                        <NavLink activeclassname='active' to="/projects" className="nav-link  fw-bold">Projects</NavLink>
                        <NavLink activeclassname='active' to="/contact" className="nav-link  fw-bold">Contact</NavLink>
                    </div>
                   
                </div>
                
            </div>
            
        </nav>
        <Outlet />
    </div>
   
    )
}

export default Header