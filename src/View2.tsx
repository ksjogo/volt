import * as React from 'react';
import * as _ from 'lodash';
import * as async from 'async';
import * as React3 from 'react-three-renderer';
import * as THREE from 'three';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import GameState from './GameState';
import Robot from './Robot';

export interface Test2Props {
    game: GameState
}

@observer
export default class View2 extends React.Component<Test2Props, {}> {

    cameraPosition : THREE.Vector3;

    constructor(props, context) {
        super(props, context);

        this.cameraPosition = new THREE.Vector3(0, 0, 5);
    }

    onAnimate() {
        this.props.game.tick();
    }

    render() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        return (
            <React3
                mainCamera="camera"
                width = { width }
                height = { height }
                onAnimate = { this.onAnimate.bind(this) }
            >
                <scene>
                    <perspectiveCamera
                        name="camera"
                        fov = { 75}
                        aspect = {width / height}
                        near={ 0.1}
                        far={ 1000}
                        position={ this.cameraPosition }
                    />

                    <Robot game={this.props.game}/>

                    <mesh
                        rotation = { this.props.game.cubeRotation}
                    >
                        <circleGeometry
                            width={0.5}
                            height={0.5}
                        />
                        <meshBasicMaterial
                            color={ 0xffffff }
                        />
                    </mesh>


                </scene>
            </React3>
        ) ;
    }
}

