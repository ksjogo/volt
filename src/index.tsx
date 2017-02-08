import { AppContainer } from "react-hot-loader";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import GameState from "./GameState";
import * as injectTapEventPlugin from "react-tap-event-plugin";

const gameState = new GameState();
const rootEl = document.getElementById("root");

injectTapEventPlugin();

ReactDOM.render(
    <AppContainer>
        <App game={gameState} />
    </AppContainer>,
    rootEl
);

declare global {
    let module: any;
    let require: any;
}

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        ReactDOM.render(
            <AppContainer>
                <NextApp game={gameState}/>
            </AppContainer>,
            rootEl
        );
    });
}
