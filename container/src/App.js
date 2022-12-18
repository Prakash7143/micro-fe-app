import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { 
    StylesProvider, 
    createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";
// import AuthApp from "./components/AuthApp";
// import MarketingApp from './components/MarketingApp';


const AuthApp = lazy(() =>  import("./components/AuthApp"));
const MarketingApp = lazy(() => import("./components/MarketingApp"));

const generateClassName = createGenerateClassName({
    productionPrefix: "container"
});

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <h3>Container App MicroServices New</h3>
                    <hr/>
                    <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route exact path="/"  component={MarketingApp} />
                            <Route path="/auth">
                                <AuthApp onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/*" component={MarketingApp} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
        
    )
}