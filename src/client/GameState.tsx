import {observable} from "mobx";
import * as THREE from "three";

export default class State {
    @observable cubeRotation = new THREE.Euler(0, 0, 0);

    tick() {
        this.cubeRotation =
            new THREE.Euler(this.cubeRotation.x + 0.1, this.cubeRotation.y + 0.1, this.cubeRotation.z + 0.1);
    }
}
