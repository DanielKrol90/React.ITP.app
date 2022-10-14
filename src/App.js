import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { About, Contact, Home, News, Offer, Shop } from './components' 
import "./App.scss";

function App() {
  return <div className="App">
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Strona Główna</Link>
          </li>
          <li>
            <Link to="/o-firmie">O Firmie</Link>
          </li>
          <li>
            <Link to="/aktualnosci">Aktualności</Link>
          </li>
          <li>
            <Link to="/oferta">Oferta</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link to="/sklep">Sklep</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/o-firmie">
            <About />
          </Route>
          <Route path="/kontakt">
            <Contact />
          </Route>
          <Route path="/aktualnosci">
            <News />
          </Route>
          <Route path="/oferta">
            <Offer />
          </Route>
          <Route path="/sklep">
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>;
}

export default App;
