function createDynamicTexture(props)
{
    var dynamicTexture = new THREEx.DynamicTexture(128, 128)
    dynamicTexture.context.font = "normal 18px Verdana";
    dynamicTexture.clear(props.color ? props.color : '#318CE7');
    dynamicTexture.drawTextCooked(props.text ? props.text : '', { fillStyle : props.textColor ? props.textColor : 'white' });

    return dynamicTexture.texture;
}

function createCube(props)
{
    var cubeGeometry = new THREE.CubeGeometry(120, 60, 80);

    var cubeMaterial = new THREE.MeshFaceMaterial(
        [
            new THREE.MeshBasicMaterial(
            {
                map: createDynamicTexture(props.face1)
            }),
            new THREE.MeshBasicMaterial(
            {
                map: createDynamicTexture(props.face2)
            }),
            new THREE.MeshBasicMaterial(
            {
                map: createDynamicTexture(props.face3)
            }),
            new THREE.MeshBasicMaterial(
            {
                map: createDynamicTexture(props.face4)
            }),
            new THREE.MeshBasicMaterial(
            {
                map: createDynamicTexture(props.face5)
            }),
            new THREE.MeshBasicMaterial(
            {
                map: createDynamicTexture(props.face6)
            })
        ]);

    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.position.set(props.x, props.y, 0);
    
    scene.add(cube);

    return cube;
}