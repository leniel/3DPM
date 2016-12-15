function createProjectWorkBreakDownStructure()
{
var diaDoar = createCube({
            face1: {
                text: '1'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: '    Dia de     Doar'
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: 0,
            y: 250
        });

        var gestaoProjeto = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: 'Gestão do   Projeto'
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: -400,
            y: 150
        });

        var selecaoParticipantes = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: 'Seleção de  Participantes'
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: -200,
            y: 150
        });

        var discurso = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: 'Discurso',
                margin: 0.1,
                lineHeight: 0.43
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: 0,
            y: 150
        });

        var mobilizacao = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: 'Mobilização',
                margin: 0.1,
                lineHeight: 0.43
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: 200,
            y: 150
        });

        var encerramento = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: 'Encerramento',
                margin: 0.1,
                lineHeight: 0.43
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: 400,
            y: 150
        });

        var integracao = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: 'Integração',
                margin: 0.1,
                lineHeight: 0.43
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: -360,
            y: 75
        });

         var escopo = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: 'Escopo',
                margin: 0.1,
                lineHeight: 0.43
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: -360,
            y: 0
        });

        var escopo = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: 'Tempo',
                margin: 0.1,
                lineHeight: 0.43
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: -360,
            y: -75
        });

        var escopo = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: 'Custo',
                margin: 0.1,
                lineHeight: 0.45
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: -360,
            y: -150
        });

        var escopo = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: 'Qualidade',
                margin: 0.1,
                lineHeight: 0.43
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: -360,
            y: -225
        });

        var escopo = createCube({
            face1: {
                text: '1',
                textColor: 'yellow'
            },
            face2: {
                text: '2',
                textColor: 'blue'
            },
            face3: {
                text: '3',
                textColor: 'black'
            },
            face4: {
                text: '4',
                textColor: 'cyan'
            },
            face5: {
                text: '    Recursos    Humanos',
                margin: 0.1,
                lineHeight: 0.32
            },
            face6: {
                text: '6',
                textColor: 'gray'
            },
            x: -360,
            y: -300
        });

        createLines();
}

function createLines()
{
    var material = new THREE.LineBasicMaterial({
            color: 'black',
            linewidth: 1,
            fog: true
        });

        var line = new THREE.LineSegments(geometry, material);

        var geometry = new THREE.Geometry();

        // 1st level horizontal line
        // Lines goes from 600 to -600 horizontally [ X axis ]
        // Lines are drawn between each consecutive pair of vertices, but not between the first and last (the line is not closed)
        // More info here: https://github.com/mrdoob/three.js/wiki/Drawing-lines
        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(400, 200));
        geometry.vertices.push(new THREE.Vector3(-400, 200));

        var firstLevel = new THREE.Line(geometry, material);

        scene.add(firstLevel)

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(0, 200));
        geometry.vertices.push(new THREE.Vector3(0, 220));

        var diaDoarToChildren = new THREE.Line(geometry, material);

        scene.add(diaDoarToChildren)

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-400, 200));
        geometry.vertices.push(new THREE.Vector3(-400, 140));

        var diaDoarToGestaoProjeto = new THREE.Line(geometry, material);

        scene.add(diaDoarToGestaoProjeto)

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-200, 200));
        geometry.vertices.push(new THREE.Vector3(-200, 140));

        var diaDoarToSelecaoParticipantes = new THREE.Line(geometry, material);

        scene.add(diaDoarToSelecaoParticipantes)

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(0, 200));
        geometry.vertices.push(new THREE.Vector3(0, 140));

        var diaDoarToDiscurso = new THREE.Line(geometry, material);

        scene.add(diaDoarToDiscurso)

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(200, 200));
        geometry.vertices.push(new THREE.Vector3(200, 140));

        var diaDoarToMobilizacao = new THREE.Line(geometry, material);

        scene.add(diaDoarToMobilizacao)

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(400, 200));
        geometry.vertices.push(new THREE.Vector3(400, 140));

        var diaDoarToEncerramento = new THREE.Line(geometry, material);

        scene.add(diaDoarToEncerramento)

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-440, 150));
        geometry.vertices.push(new THREE.Vector3(-440, -300));

        var gestaoProjetoToChildren = new THREE.Line(geometry, material);

        scene.add(gestaoProjetoToChildren)

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-440, 75));
        geometry.vertices.push(new THREE.Vector3(-350, 75));

        var gestaoProjetoToIntegracao = new THREE.Line(geometry, material);

        scene.add(gestaoProjetoToIntegracao);

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-440, 0));
        geometry.vertices.push(new THREE.Vector3(-350, 0));

        var gestaoProjetoToEscopo = new THREE.Line(geometry, material);

        scene.add(gestaoProjetoToEscopo);

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-440, -75));
        geometry.vertices.push(new THREE.Vector3(-350, -75));

        var gestaoProjetoToTempo = new THREE.Line(geometry, material);

        scene.add(gestaoProjetoToTempo);

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-440, -150));
        geometry.vertices.push(new THREE.Vector3(-350, -150));

        var gestaoProjetoToCusto = new THREE.Line(geometry, material);

        scene.add(gestaoProjetoToCusto);

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-440, -225));
        geometry.vertices.push(new THREE.Vector3(-350, -225));

        var gestaoProjetoToQualidade = new THREE.Line(geometry, material);

        scene.add(gestaoProjetoToQualidade);

        geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-440, -300));
        geometry.vertices.push(new THREE.Vector3(-350, -300));

        var gestaoProjetoToRecursosHumanos = new THREE.Line(geometry, material);

        scene.add(gestaoProjetoToRecursosHumanos);
}