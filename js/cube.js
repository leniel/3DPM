function createDynamicTexture(props, width, height) {

    var dynamicTexture = new THREEx.DynamicTexture(width ? width : 140, height ? height : 60)
    dynamicTexture.clear('#1874CD');

    if (props) {
        dynamicTexture.context.font = props.font ? props.font : "normal 13px Verdana";
        dynamicTexture.clear(props.color ? props.color : '#1874CD');
        dynamicTexture.drawTextCooked(props.text ? props.text : '', {
            align: props.align ? props.align : undefined,
            lineHeight: props.lineHeight ? props.lineHeight : undefined,
            margin: props.margin ? props.margin : undefined,
            fillStyle: props.textColor ? props.textColor : 'white'
        });
    }

    dynamicTexture.needsUpdate = true;

    return dynamicTexture.texture;
}

function changeDynamicTexture(object, cubeFaceIndex, props) {
    object.material.materials[cubeFaceIndex].map = createDynamicTexture(props);
}

var cubeCount = 0;
var objects = {};

function createCube(props) {

    var cubeGeometry =
    new THREE.CubeGeometry(props.width ? props.width : 140, props.height ? props.height : 60, props.depth ? props.depth : 80); //x, y, z

    // One MeshBasicMaterial for each of the 6 cube faces
    var cubeMaterial = new THREE.MeshFaceMaterial(
        [
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face1, props.width, props.height)
            }),
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face2, props.width, props.height)
            }),
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face3, props.width, props.height)
            }),
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face4, props.width, props.height)
            }),
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face5, props.width, props.height),
                //wireframe: true
            }),
            new THREE.MeshBasicMaterial({
                map: createDynamicTexture(props.face6, props.width, props.height)
            })
        ]);

    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.position.set(props.x, props.y, 0);

    cube.name = props.face5.text;
    cube.userData.id = ++cubeCount;
    objects[cube.userData.id] = cube;

    scene.add(cube);
}