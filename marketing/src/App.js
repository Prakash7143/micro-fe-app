import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import { 
    StylesProvider,
    createGenerateClassName,
} from "@material-ui/core/styles";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const generateClassName = createGenerateClassName({
    productionPrefix: "marketing"
});

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                {/* <BrowserRouter> */}
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </Router>
                {/* </BrowserRouter> */}
            </StylesProvider>
        </div>
    )
}