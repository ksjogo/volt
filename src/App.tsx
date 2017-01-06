import * as React from 'react';
import View2 from './View2';
import GameState from "./GameState";

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends React.Component<{
    game: GameState
},{
}> {
    render() {
        return (
            <div>
                <View2 game={this.props.game} />
            </div>
        );
    }
}
