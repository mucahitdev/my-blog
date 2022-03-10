import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { IntlProvider, FormattedMessage } from "react-intl";
import { nav } from "./lang/Langs";
import { Switch, useDarkreader } from 'react-darkreader';


function Header() {
  const { data, setData } = useData();
  const handleChange = (lang) => {
    setData(lang);
    console.log(data);
  };
  const [isDark, { toggle }] = useDarkreader(false);

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <button
            type="button"
            className="navbar-toggler shadow-none"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div
            className="collapse navbar-collapse  justify-content-center"
            id="navbarCollapse"
          >
            <Switch checked={isDark} onChange={toggle} />
            <div className="">
              <div className="navbar-nav">
                <IntlProvider locale={data} messages={nav[data]}>
                  <NavLink
                    activeclassname="active"
                    to="/"
                    className="nav-link fw-bold"
                  >
                    <span className="px-3 py-2"><FormattedMessage id="home" /></span>
                  </NavLink>
                  <NavLink
                    activeclassname="active"
                    to="about"
                    className="nav-link  fw-bold"
                  >
                    <span className="px-3 py-2"><FormattedMessage id="about" /></span>
                  </NavLink>
                  <NavLink
                    activeclassname="active"
                    to="/projects"
                    className="nav-link  fw-bold"
                  >
                    <span className="px-3 py-2"><FormattedMessage id="projects" /></span>
                  </NavLink>
                  <NavLink
                    activeclassname="active"
                    to="/contact"
                    className="nav-link  fw-bold"
                  >
                    <span className="px-3 py-2"><FormattedMessage id="contact" /></span>
                  </NavLink>
                </IntlProvider>
              </div>
            </div>
          </div>
          {data === "en-US" ? (
            <button
              className="btn  lang-btn shadow-none"
              onClick={() => handleChange("tr-TR")}
            >
              🇹🇷
            </button>
          ) : (
            <button
              className="btn  lang-btn shadow-none"
              onClick={() => handleChange("en-US")}
            >
              🇬🇧
            </button>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
