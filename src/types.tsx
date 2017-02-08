declare module "react-three-renderer" {
    import * as React from "react";
    class React3 extends React.Component<any, any> {
    }
    namespace React3 {}
    export = React3;

    global {
        namespace JSX {
            interface IntrinsicElements {
                scene: any;
                perspectiveCamera: any;
                mesh: any;
                boxGeometry; any;
                meshBasicMaterial: any;
                circleGeometry: any;
            }
        }
    }
}
