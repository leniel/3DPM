function createDynamicTexture(props) {
    var dynamicTexture = new THREEx.DynamicTexture(120, 60)
    dynamicTexture.context.font = props.font ? props.font : "normal 14px Verdana";
    dynamicTexture.clear(props.color ? props.color : '#1874CD'); // White Canvas object - http://stackoverflow.com/a/39310110/114029
    dynamicTexture.drawTextCooked(props.text ? props.text : '', {
        align: props.align ? props.align : undefined,
        lineHeight: props.lineHeight ? props.lineHeight : undefined,
        margin: props.margin ? props.margin : undefined,
        fillStyle: props.textColor ? props.textColor : 'white'
    });

    dynamicTexture.needsUpdate = true;

    return dynamicTexture.texture;
}

function changeDynamicTexture(object, cubeFaceIndex, props) {
    object.material.materials[cubeFaceIndex].map = createDynamicTexture(props);
}

function createCube(props) {

    var cubeGeometry = new THREE.CubeGeometry(120, 60, 80);

    var cubeMaterial = new THREE.MeshFaceMaterial(
        [
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face1)
            }),
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face2)
            }),
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face3)
            }),
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face4)
            }),
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face5)
            }),
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face6)
            })
        ]);

    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.position.set(props.x, props.y, 0);

    cube.name = props.face5.text;

    scene.add(cube);

    return cube;
}