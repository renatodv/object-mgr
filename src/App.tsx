import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Providers from "./providers/Providers";
import GetObjectPage from "./pages/GetObject";
import CreateObjectPage from "./pages/CreateObject";
import FreeObjectPage from "./pages/FreeObject";
import Bar from "./components/Bar";

function App() {
  return (
    <Router>
      <Providers>
        <div className="App">
          <header className="App-header">
            <Bar />
          </header>
          <br />
          <Container maxWidth="sm">
            <Switch>
              <Route path="/free-object">
                <FreeObjectPage />
              </Route>
              <Route path="/create-object">
                <CreateObjectPage />
              </Route>
              <Route path="/">
                <GetObjectPage />
              </Route>
            </Switch>
          </Container>
        </div>
      </Providers>
    </Router>
  );
}

export default App;
