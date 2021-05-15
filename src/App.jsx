import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import TopNav from "./components/TopNav";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Session from "./components/Session";

function App() {
  return (
    // <BrowserRouter>
    //   <TopNav />
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/login" component={Login} />
    //     <Route exact path="/register" component={Register} />
    //   </Switch>
    // </BrowserRouter>
    <Session/>
  );
}

export default App;
