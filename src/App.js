import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/about";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Signin from "./components/signin";
import SignUp from "./components/signup";
import Puppy from "./components/puppy";
import Pink from "./components/pink";
import Order from "./components/order";
import Navbar from "./components/Navbar";
import Topnav from "./components/topnav";
import Confirmation from "./components/confirmation";
import History from "./components/history";
import Order1 from "./components/order";
import Payment from "./components/payment";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Topnav />
          <Home />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/about">
          <Topnav />
          <About />
        </Route>
        <Route path="/dashboard">
          <Navbar />
          <Dashboard />
        </Route>
        <Route path="/open/1">
          <Navbar />
          <Puppy />
        </Route>
        <Route path="/open/2">
          <Navbar />
          <Pink />
        </Route>
        <Route path="/order/1">
          <Navbar />
          <Order1 />
        </Route>
        <Route path="/payment/1">
          <Navbar />
          <Payment />
        </Route>
        <Route path="/confirmation">
          <Navbar />
          <Confirmation />
        </Route>
        <Route path="/history">
          <Navbar />
          <History />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
