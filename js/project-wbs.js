/**
 * @author Leniel Macaferi <leniel@gmail.com>
 * 2016-12-18
 */

function addCubeToScene(text, x, y, margin, lineHeight, width, height, color, textColor) {

    // Only Face 5 is being used since it's the front facing one.
    var props =
        {
            face1:
            { margin: margin, lineHeight: lineHeight, color: color, textColor: textColor }, x: x, y: y, width: width, height: height,
            face2: { margin: margin, lineHeight: lineHeight, color: color, textColor: textColor }, x: x, y: y, width: width, height: height
            ,
            face3:
            { margin: margin, lineHeight: lineHeight, color: color, textColor: textColor }, x: x, y: y, width: width, height: height
            ,
            face4:
            { margin: margin, lineHeight: lineHeight, color: color, textColor: textColor }, x: x, y: y, width: width, height: height
            ,
            face5:
            { text: text, margin: margin, lineHeight: lineHeight, color: color, textColor: textColor }, x: x, y: y, width: width, height: height
            ,
            face6:
            { margin: margin, lineHeight: lineHeight, color: color, textColor: textColor }, x: x, y: y, width: width, height: height

        };

    createCube(props);
}

function createProjectWorkBreakDownStructure() {

    // Dia de Doar
    var initialX = 0, initialY = 250;
    var verticalDelta = 150, horizontalDelta = 150;
    addCubeToScene("Dia de Doar", initialX, initialY, 0.1, 0.43);

    addCubeToScene("Gestão do Projeto", initialX - 4 * horizontalDelta, initialY - verticalDelta, 0.1, 0.43);
    addCubeToScene("     Seleção de     Participantes", initialX - 2.5 * horizontalDelta, initialY - verticalDelta, 0.1, 0.3);
    addCubeToScene("Discurso", initialX, initialY - verticalDelta, 0.1, 0.43);
    addCubeToScene("Mobilização", initialX + 2.5 * horizontalDelta, initialY - verticalDelta, 0.1, 0.43);
    addCubeToScene("Encerramento", initialX + 4 * horizontalDelta, initialY - verticalDelta, 0.1, 0.43);

    initialX = -570;
    addCubeToScene("Integração", initialX, initialY - 2 * verticalDelta, 0.1, 0.43);
    addCubeToScene("Escopo", initialX, initialY - 3 * verticalDelta, 0.1, 0.43);
    addCubeToScene("Tempo", initialX, initialY - 4 * verticalDelta, 0.1, 0.43);
    addCubeToScene("Custo", initialX, initialY - 5 * verticalDelta, 0.1, 0.43);
    addCubeToScene("Qualidade", initialX, initialY - 6 * verticalDelta, 0.1, 0.43);
    addCubeToScene("      Recursos      Humanos", initialX, initialY - 7 * verticalDelta, 0.1, 0.30);
    addCubeToScene("Comunicação", initialX, initialY - 8 * verticalDelta, 0.1, 0.43);
    addCubeToScene("Risco", initialX, initialY - 9 * verticalDelta, 0.1, 0.43);
    addCubeToScene("Aquisições", initialX, initialY - 10 * verticalDelta, 0.1, 0.43);

    initialX = -465, horizontalDelta = 120;
    addCubeToScene("  Divulgação do   Evento", initialX + horizontalDelta, initialY - 2 * verticalDelta, 0.1, 0.30);
    addCubeToScene("     Selecionar     Canais", initialX + 1.25 * horizontalDelta, initialY - 3 * verticalDelta, 0.1, 0.30);
    addCubeToScene("Preparar Material de Divulgação", initialX + 1.25 * horizontalDelta, initialY - 4 * verticalDelta, 0.1, 0.30);
    addCubeToScene("       Publicar       Candidatura", initialX + horizontalDelta, initialY - 5 * verticalDelta, 0.1, 0.30);
    addCubeToScene("Avaliar Perfis", initialX + horizontalDelta, initialY - 6 * verticalDelta, 0.1, 0.43);
    addCubeToScene("       Publicar       Lista Final", initialX + horizontalDelta, initialY - 7 * verticalDelta, 0.1, 0.30);

    initialX = 45, horizontalDelta = 50
    addCubeToScene("   Seleção do    Tema", initialX - 3.75 * horizontalDelta, initialY - 2 * verticalDelta, 0.1, 0.30, 120);
    addCubeToScene("   Estudo do     Tema", initialX - 0.75 * horizontalDelta, initialY - 2 * verticalDelta, 0.1, 0.30, 120);
    addCubeToScene("     Elaborar     Discurso", initialX + 2.25 * horizontalDelta, initialY - 2 * verticalDelta, 0.1, 0.30, 120);
    addCubeToScene("      Treinar     Participantes", initialX + 5.25 * horizontalDelta, initialY - 2 * verticalDelta, 0.1, 0.30, 120);

    initialX = -50, initialY = 100;
    addCubeToScene("  Elencar Temas  Candidatos", initialX, initialY - 2 * verticalDelta, 0.1, 0.30);
    addCubeToScene(" Avaliar Impacto dos Temas", initialX, initialY - 3 * verticalDelta, 0.1, 0.30);
    addCubeToScene("   Escolher Tema de Maior Impacto", initialX, initialY - 4 * verticalDelta, 0.1, 0.30);

    initialX = 135
    addCubeToScene("      Levantar      Bibliografia", initialX, initialY - 2 * verticalDelta, 0.1, 0.30);
    addCubeToScene("Compilar Material", initialX, initialY - 3 * verticalDelta, 0.1, 0.43);

    initialX = 335, initialY = -50;
    addCubeToScene("Reunir Equipe", initialX, initialY - verticalDelta, 0.1, 0.43, 160);
    addCubeToScene("Deslocamento", initialX, initialY - 2 * verticalDelta, 0.1, 0.43, 160);
    addCubeToScene("Distribuir Estratégia de Abordagem", initialX, initialY - 3 * verticalDelta, 0.1, 0.30, 160);
    addCubeToScene("Abordar", initialX, initialY - 4 * verticalDelta, 0.1, 0.43, 160);

    initialX = 570, initialY = 100;
    addCubeToScene("   Desmobilizar    Equipe", initialX, initialY - verticalDelta, 0.1, 0.3);
    addCubeToScene("Encerramento de    Contratos", initialX, initialY - 2 * verticalDelta, 0.1, 0.3);
    addCubeToScene("Avaliar e Apresentar Resultados", initialX - 10, initialY - 6 * verticalDelta, 0.1, 0.3, 160);
    addCubeToScene(" Registrar Lições   Aprendidas", initialX, initialY - 7 * verticalDelta, 0.1, 0.3);

    initialX = 530, initialY = -200;
    addCubeToScene("      Contatar       Fornecedor", initialX, initialY - verticalDelta, 0.09, 0.3);
    addCubeToScene(" Elaborar Termo  de  Encerramento", initialX, initialY - 2 * verticalDelta, 0.1, 0.3);
    addCubeToScene("Colher Assinaturas", initialX, initialY - 3 * verticalDelta, 0.08, 0.43);

    createLines();
}

function createLines() {

    // Lines goes from 600 to -600 horizontally [ X axis ]
    // Lines are drawn between each consecutive pair of vertices, but not between the first and last (the line is not closed)
    // More info here: https://github.com/mrdoob/three.js/wiki/Drawing-lines

    // Dia de Doar
    var x1 = 600, y1 = 175; x2 = 0, y2 = 175, deltaY = 100, deltaX = 225;
    createLine("DiaDoar->Horizontal", x1, y1, -x1, y2);
    createLine("DiaDoarVertical", x1 - x1, y1, x2, y2 + 50);
    createLine("DiaDoar->GestaoProjeto", -x1, deltaY, -x1, y2);
    createLine("DiaDoar->SelecaoParticipantes", -x1 + deltaX, deltaY, -x1 + deltaX, y2);
    createLine("DiaDoar->Discurso", -x1 + x1, deltaY, -x1 + x1, y2);
    createLine("DiaDoar->Mobilizacao", x1 - deltaX, deltaY, x1 - deltaX, y2);
    createLine("DiaDoar->Encerramento", x1, deltaY, x1, y2);

    // Gestão de Projeto
    var x1 = -660, x2 = -605; y1 = 100;
    createLine("GestaoProjeto->Vertical", x1, y1, x1, -12.5 * y1);
    createLine("GestaoProjeto->Integracao", x1, -deltaY + y1 / 2, x2, -deltaY + y1 / 2);
    createLine("GestaoProjeto->Escopo", x1, -2 * deltaY, x2, -2 * deltaY);
    createLine("GestaoProjeto->Tempo", x1, - 3.5 * deltaY, x2, - 3.5 * deltaY);
    createLine("GestaoProjeto->Custo", x1, -5 * deltaY, x2, - 5 * deltaY);
    createLine("GestaoProjeto->Qualidade", x1, -6.5 * deltaY, x2, -6.5 * deltaY);
    createLine("GestaoProjeto->RecursosHumanos", x1, - 8 * deltaY, x2, - 8 * deltaY);
    createLine("GestaoProjeto->Comunicação", x1, - 9.5 * deltaY, x2, - 9.5 * deltaY);
    createLine("GestaoProjeto->Risco", x1, -11 * deltaY, x2, -11 * deltaY);
    createLine("GestaoProjeto->Aquisições", x1, -12.5 * deltaY, x2, - 12.5 * deltaY);

    // Seleção de Participantes
    x1 = -435, x2 = -400;
    createLine("SelecaoParticipantes->Vertical", x1, y1, x1, -8 * y1);
    createLine("SelecaoParticipantes->DivulgacaoEvento", x1, - 0.5 * deltaY, x2, - 0.5 * deltaY);
    createLine("SelecaoParticipantes->PublicarCandidatura", x1, - 5 * deltaY, x2, -5 * deltaY);
    createLine("SelecaoParticipantes->AvaliarPerfis", x1, - 6.5 * deltaY, x2, -6.5 * deltaY);
    createLine("SelecaoParticipantes->PublicarListaFinal", x1, -8 * deltaY, x2, -8 * deltaY);

    // Divulgação do Evento
    x1 = -405, y1 = -50, x2 = -380;
    createLine("DivulgacaoEvento->Vertical", x1, y1, x1, 7 * y1);
    createLine("DivulgacaoEvento->SelecionarCanais", x1, y1 - 1.5 * deltaY, x2, y1 - 1.5 * deltaY);
    createLine("DivulgacaoEvento->PrepararMaterialDivulgacao", x1, y1 - 3 * deltaY, x2, y1 - 3 * deltaY);

    // Discurso
    x1 = -140, y1 = 25; x2 = 310, deltaX = 150;
    createLine("Discurso->Horizontal", x1, y1, x2, y1);
    createLine("Discurso->Vertical", x1 - x1, y1, x1 - x1, y1 + 50);
    createLine("Discurso->SelecaoTema", x1, y1 - deltaY, x1, y1);
    createLine("Discurso->EstudoTema", x1 + deltaX, y1 - deltaY, x1 + deltaX, y1);
    createLine("Discurso->ElaborarDiscurso", x1 + 2 * deltaX, y1 - deltaY, x1 + 2 * deltaX, y1);
    createLine("Discurso->TreinarParticipantes", x1 + 3 * deltaX, y1 - deltaY, x1 + 3 * deltaX, y1);

    // Seleção do Tema
    x1 = -140, y1 = -50, y2 = -500;
    createLine("SelecaoTema->Vertical", x1, y1, x1, y2);
    createLine("SelecaoTema->ElencarTemasCandidatos", x1, - 2 * deltaY, x1 / 2, - 2 * deltaY);
    createLine("SelecaoTema->AvaliarImpactorTemas", x1, - 3.5 * deltaY, x1 / 2, - 3.5 * deltaY);
    createLine("SelecaoTema->EscolherTemaMaiorImpacto", x1, - 5 * deltaY, x1 / 2, - 5 * deltaY);

    // Estudo do Tema
    x1 = 45, y1 = -50; y2 = -350;
    createLine("EstudoTema->Vertical", x1, y1, x1, y2);
    createLine("EstudoTema->LevantarBibliografia", x1, - 2 * deltaY, x2 / 2, - 2 * deltaY);
    createLine("EstudoTema->CompilarMaterial", x1, - 3.5 * deltaY, x2 / 2, - 3.5 * deltaY);

    // Mobilização
    x1 = 435, y1 = 100; y2 = -650;
    createLine("Mobilizacao->Vertical", x1, y1, x1, y2);
    createLine("Mobilizacao->ReunirEquipe", x1, - 2 * deltaY, x1 - 50, - 2 * deltaY);
    createLine("Mobilizacao->Deslocamento", x1, - 3.5 * deltaY, x1 - 50, - 3.5 * deltaY);
    createLine("Mobilizacao->DistribuirEstrategiaAbordagem", x1, - 5 * deltaY, x1 - 50, - 5 * deltaY);
    createLine("Mobilizacao->Abordar", x1, - 6.5 * deltaY, x1 - 50, - 6.5 * deltaY);

    // Encerramento
    x1 = 660, y1 = 100, y2 = -950;
    createLine("Encerramento->Vertical", x1, y1, x1, y2);
    createLine("Encerramento->DesmobilizarEquipe", x1, -0.5 * deltaY, x1 - 50, -0.5 * deltaY);
    createLine("Encerramento->EncerramentoContratos", x1, -2 * deltaY, x1 - 50, -2 * deltaY);
    createLine("Encerramento->AvaliarApresentarResultados", x1, -8 * deltaY, x1 - 50, -8 * deltaY);
    createLine("Encerramento->RegistrarLicoesAprendidas", x1, -9.5 * deltaY, x1 - 50, -9.5 * deltaY);

    // Encerramento de Contratos
    x1 = 620, y1 = -200, y2 = -650;
    createLine("EncerramentoContratos->Vertical", x1, y1, x1, y2);
    createLine("EncerramentoContratos->ContatarFornecedor", x1, -3.5 * deltaY, x1 - 50, -3.5 * deltaY);
    createLine("EncerramentoContratos->ElaborarTermoEncerramento", x1, -5 * deltaY, x1 - 50, -5 * deltaY);
    createLine("EncerramentoContratos->ColherAssinaturas", x1, -6.5 * deltaY, x1 - 50, -6.5 * deltaY);
}

function createLine(name, x1, y1, x2, y2) {

    var material = new THREE.LineBasicMaterial({
        color: 'black',
        linewidth: 2,
        fog: true
    });

    geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(x1, y1));
    geometry.vertices.push(new THREE.Vector3(x2, y2));

    var line = new THREE.Line(geometry, material);
    line.name = name;

    scene.add(line);
}


function createCriticalPath() {

    var cubes = paintCriticalPathRed();

    addExtraCubes(cubes);
}

function paintCriticalPathRed() {
    // Selecting a possible Critical Path...
    var criticalPath = objects.filter(function (cube, i, array) {
        return array.indexOf(cube) === 1 ||
            array.indexOf(cube) === 3 ||
            array.indexOf(cube) === 16 ||
            array.indexOf(cube) === 17
    });

    var newCubes = [];

    criticalPath.forEach(function (cube) {

        var props = paintCube(cube, '#CC0000');

        scene.remove(cube); // Removing the "old" cube 
        //console.log(scene.children.length)

        var cube = createCube(props); // Recreating the cube with a new color 

        newCubes.push(cube);
    });

    debugger;

    // Linkifying the the last cube...
    // https://github.com/jeromeetienne/threex.domevents
    var url = '/package-activities.html?packageid=A2D5F0030'
    THREEx.Linkify(domEvents, newCubes.pop(), url)

    return criticalPath;
}

function addExtraCubes(cubes) {

    var lastCube = cubes.pop();

    var props = paintCube(lastCube, "#FFE135");

    // Time
    props["face1"].text = props["face2"].text = props["face3"].text =
        props["face4"].text = props["face5"].text = props["face6"].text = "4 dias a mais";
    props["face1"].textColor = props["face2"].textColor = props["face3"].textColor =
        props["face4"].textColor = props["face5"].textColor = props["face6"].textColor = "black";
    props["face1"].lineHeight = props["face2"].lineHeight = props["face3"].lineHeight =
        props["face4"].lineHeight = props["face5"].lineHeight = props["face6"].lineHeight = 0.5;
    props["face3"].text = "Tempo";
    props["face3"].margin = .1;

    props.x = lastCube.position.x;
    props.y = lastCube.position.y + 53;
    props.z = lastCube.position.z - 43;

    props.height = 40;
    props.depth = 165;

    createCube(props);

    // Cost
    props["face1"].text = props["face2"].text = props["face3"].text =
        props["face4"].text = props["face5"].text = props["face6"].text = "      R$ 160,00       a mais";
    props["face1"].textColor = props["face2"].textColor = props["face3"].textColor =
        props["face4"].textColor = props["face5"].textColor = props["face6"].textColor = "black";
    props["face1"].lineHeight = props["face2"].lineHeight = props["face3"].lineHeight =
        props["face4"].lineHeight = props["face5"].lineHeight = props["face6"].lineHeight = 0.35;
    // props["face3"].height = 60;
    // props["face3"].width = 100;
    props["face3"].text = "Custo";
    props["face3"].lineHeight = 0.5;
    //props["face3"].align = "right";
    props["face3"].margin = 0;

    props.x = lastCube.position.x + 120;
    props.y = lastCube.position.y;
    props.z = lastCube.position.z - 85;

    props.height = 60;
    props.depth = 80;

    createCube(props);
}

function paintCube(cube, color) {
    // Retrieving the properties that were used to create this cube...
    // props is saved in the method createCube() in cube.js
    var props = cube.userData.props;

    for (var prop in props) {

        // If the property is an object like face1, face2, face3, face4, face5 or face6
        if (isObject(props[prop])) {

            props[prop].color = color; // Changing the color to Red
        }
    }

    return props;
}

function isObject(val) {
    return val instanceof Object;
}