import * as React from "react";
import * as _ from "lodash";
import * as async from "async";
import * as React3 from "react-three-renderer";
import * as THREE from "three";
import {observable} from "mobx";
import {observer} from "mobx-react";
import DevTools from "mobx-react-devtools";

import * as style from "./style/variables";

import Store from "./Store";
import Robot from "./Robot";

@observer
export default class View extends React.Component<{}, {}> {

    cameraPosition: THREE.Vector3;

    constructor(props, context) {
        super(props, context);

        this.cameraPosition = new THREE.Vector3(0, 0, 5);
    }

    onAnimate() {
        Store.tick();
    }

    render() {
        let width = window.innerWidth,
        height = window.innerHeight - style.headerHeight;
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

                    <Robot />

                    <mesh
                        rotation = { Store.cubeRotation}
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

