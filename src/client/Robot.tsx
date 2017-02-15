import * as React from "react";
import Store from "./Store";
import {observer} from "mobx-react";

@observer
export default class Robot extends React.Component<{
}, {}> {
    render() {
        return <mesh
                   rotation={Store.cubeRotation}
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
