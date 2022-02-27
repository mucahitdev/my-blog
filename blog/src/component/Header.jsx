import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { IntlProvider, FormattedMessage } from "react-intl";
import { nav } from "./lang/Langs";

function Header() {
  const { data, setData } = useData();
  const handleChange = (lang) => {
    setData(lang);
    console.log(data);
  };
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
            className="collapse navbar-collapse ms-5 justify-content-center"
            id="navbarCollapse"
          >
            <div className="navbar-nav">
              <IntlProvider locale={data} messages={nav[data]}>
                <NavLink
                  activeclassname="active"
                  to="/"
                  className="nav-link  fw-bold"
                >
                  <FormattedMessage id="home" />
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="about"
                  className="nav-link  fw-bold"
                >
                  <FormattedMessage id="about" />
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/projects"
                  className="nav-link  fw-bold"
                >
                  <FormattedMessage id="projects" />
                </NavLink>
                <NavLink
                  activeclassname="active"
                  to="/contact"
                  className="nav-link  fw-bold"
                >
                  <FormattedMessage id="contact" />
                </NavLink>
              </IntlProvider>
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
