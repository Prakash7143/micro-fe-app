import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from 'history';

// Mount fn() to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath], // since it doesn't have a default "/" route
    });
    if(onNavigate) history.listen(onNavigate);
    ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

    return {
        // onParentNavigate(location)  {
        //     console.log('from marketing', location);
        // }
        onParentNavigate({ pathname: nextPathFromMarketing})  {
            const { pathname: currentActiveUrl } = history.location;

            if(currentActiveUrl !== nextPathFromMarketing) history.push(nextPathFromMarketing);
        }
    }
};


// If we are in development & in isolation, call mount immediately
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_auth-dev-root');
    if(devRoot){
        mount(devRoot, {
            defaultHistory: createBrowserHistory()
        });
    }
}

// We are running through container & we should export the mount function.
export { mount };