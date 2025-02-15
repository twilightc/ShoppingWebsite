import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MarketPage } from "./Pages/market-page/market-page";
import "./App.css";
import { Navbar } from "./Components/navbar/navbar";
import { MainPage } from "./Pages/main-page/main-page";
import { Topbar } from "./Components/topbar/topbar";
import { Searchbar } from "./Components/search-bar/search-bar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box } from "@material-ui/core";
import { LoginPage } from "./Pages/login-page/login-page";
import { ItemPage } from "./Pages/item-page/item-page";
import { BuggyPage } from "./Pages/buggy-page/buggy-page";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="SearchBar">
          <CssBaseline />
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            // justifyContent="Center"
            alignItems="Center"
          >
            <Searchbar />
          </Box>
        </div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/market" component={MarketPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/itempage" component={ItemPage} />
          <Route path="/buggypage" component={BuggyPage} />
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
