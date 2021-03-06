import React, {useRef} from 'react';
import {BrowserRouter as ReactRoute,Switch , Route, NavLink, Redirect, useHistory,useParams, useLocation, BrowserRouter} from 'react-router-dom';
import ProviderLogin from './component/login/providerLogin';
import Controller from './component/controller/controller';
import Error_Component from './component/error_component/error';
import './style/global.css';

function ApplicationMovie() {
    return(
        <BrowserRouter forceRefresh={true}>   
            <Switch>
                <Route exact path='/' component={ProviderLogin}  />

                <Route path='/movie' component={Controller}/>

                <Route component={Error_Component}/>
            </Switch>
        </BrowserRouter> 
    )
}

export default ApplicationMovie;