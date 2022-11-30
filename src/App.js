
import TopBar from "./Components/topbar/TopBar"
import Login from "./pages/Login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Button,Col,Row,Card,Container } from 'react-bootstrap';
function App() {
  const currentUser = false;
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/posts">
        <Home/>
        </Route>
        <Route path="/register">
          {/* {currentUser ? <Home/> : <Register/>} */}
        </Route>
        <Route path="/login">{currentUser ? <Home/> : <Login/>}</Route>
        <Route path="/post/:id">
        <Single/>
        </Route>
        <Route path="/write" component={Login}></Route>
          {/* {currentUser ? <Write/> : <Login/>}</Route> */}
        <Route path="/settings">
          {currentUser ? <Settings/> : <Login/>}
        </Route>
      </Switch>
    </Router>
  );
}


export default App;

    
