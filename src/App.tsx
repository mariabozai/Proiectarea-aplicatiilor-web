import React from 'react';
import {useHistory, Route} from 'react-router-dom';

import './App.css';
//import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Navbar } from "./layouts/NavbarAndFooter/Navbar"
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { oktaConfig } from './lib/oktaConfig';
import {OktaAuth, toRelativeUrl} from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';


const oktaAuth = new OktaAuth(oktaConfig);

export const  App = () => {

  const customAuthHandler = () => {
    history.push('/login');
  }
  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <div>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
    <Navbar />
     <HomePage /> 
     <SearchBooksPage/> 
     <Route path='/login' render={
            () => <LoginWidget config={oktaConfig} /> 
            } 
      />
      <Route path='/login/callback' component={LoginCallback} />
    <Footer />
    </Security>
    </div>
  );
}

