import React from "react";
import { Route, Switch } from "react-router-dom";
//import App from './../App';
import Login from "../components/Access/Login";
import SignUp from "../components/Access/SignUp";
import Content from "../components/View/Content";
import Header from "../components/View/Header";
import Navigator from "../components/View/Navigator";
import Paperbase from "../components/View/Paperbase";
// import Menu from "./../components/menu";
// import Menu1 from "./../components/menu1";


const Router = () => {
    return(
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path ="/SignUp" component={SignUp} />
            <Route path ="/Content" component={Content} />
            <Route path ="/Header" component={Header} />
            <Route path ="/Navigator" component={Navigator} />
            <Route path ="/Paperbase" component={Paperbase} />
            {/* <Route path="/login" component={} />
            <Route path="/menu" component={Menu} />
            <Route path="/menu1/:name" component={Menu1} /> */}
        </Switch>
    )
        }

export default Router;