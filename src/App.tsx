import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MarketPage } from "./Pages/market-page/market-page";
import "./App.css";
import { Navbar } from "./Components/navbar/navbar";
import { MainPage } from "./Pages/main-page/main-page";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/market" component={MarketPage} />
          <Route
            path="/:id"
            render={props => <div>{props.match.params.id}</div>}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
