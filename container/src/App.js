import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import MarketingApp from './components/MarketingApp';
import { 
    StylesProvider, 
    createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
    productionPrefix: "container"
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <h3>Container App MicroServices New</h3>
                    <hr/>
                    <Header/>
                    <MarketingApp/>
                </div>
            </BrowserRouter>
        </StylesProvider>
        
    )
}