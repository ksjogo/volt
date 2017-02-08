import * as React from "react";
import GameState from "./GameState";
import {observer} from "mobx-react";

@observer
export default class Robot extends React.Component<{
    game: GameState
}, {}> {
    render() {
        return <mesh
                   rotation={this.props.game.cubeRotation}
        >
            <boxGeometry
                width={ 2 }
                height = { 2}
                depth = { 2}
            />
            <meshBasicMaterial
                color={ 0xffff00 }
                opacity = { 0.5}
            />
        </mesh>;
    }
}
