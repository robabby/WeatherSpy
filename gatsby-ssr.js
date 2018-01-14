/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 import React from 'react'
 import { Provider } from 'react-redux'
 import { renderToString } from 'react-dom/server'

 import createStore from './src/state/createStore'

 exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {

     const store = createStore()

     const ConnectedBody = () => (
         <Provider store={store}>
             {bodyComponent}
         </Provider>
     )
     replaceBodyHTMLString(renderToString(<ConnectedBody/>))
 }
