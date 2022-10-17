import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Home, About, News, Offer, Contact, Shop } from "../../routes";
import { images } from "../../constants";

import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={images.logo2} alt="logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Strona Główna</Link>
            <div />
          </li>
          <li>
            <Link to="o_firmie">O Firmie</Link>
            <div />
          </li>
          <li>
            <Link to="aktualnosci">Aktualności</Link>
            <div />
          </li>
          <li>
            <Link to="oferta">Oferta</Link>
            <div />
          </li>
          <li>
            <Link to="kontakt">Kontakt</Link>
            <div />
          </li>
          <li>
            <Link to="sklep">Sklep Online</Link>
            <div />
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="o_firmie/*" element={<About />} />
        <Route path="aktualnosci/*" element={<News />} />
        <Route path="oferta/*" element={<Offer />} />
        <Route path="kontakt/*" element={<Contact />} />
        <Route path="sklep/*" element={<Shop />} />
      </Routes>
    </>
  );
}

export default NavBar;
