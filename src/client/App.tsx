import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AppBar} from "material-ui";

import View2 from "./View2";
import GameState from "./GameState";

import "./style/style.css";

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends React.Component<{
    game: GameState
}, {
}> {
    render() {
        return (
                <MuiThemeProvider>
                <div>
                    <AppBar title="Volt Game Again" />
                    <View2 game={this.props.game} />
                </div>
                </MuiThemeProvider>
        );
    }
}
