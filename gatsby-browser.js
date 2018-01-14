/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 import React from 'react'
 import { Router } from 'react-router-dom'
 import { Provider } from 'react-redux'

 import store from './src/state/store'

 exports.replaceRouterComponent = ({ history }) => {

     const ConnectedRouterWrapper = ({ children }) => (
         <Provider store={store}>
           <Router history={history}>{children}</Router>
         </Provider>
     )

     return ConnectedRouterWrapper
 }
