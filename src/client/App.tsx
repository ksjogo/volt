import * as React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {AppBar} from "material-ui";

import "./style/style.css";

import View from "./View";

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends React.Component<{
}, {
}> {
    render() {
        return (
                <MuiThemeProvider>
                <div>
                    <AppBar title="Volt Game Again" />
                    <View/>
                </div>
                </MuiThemeProvider>
        );
    }
}
