
function addCubeToScene(text, x, y, margin, lineHeight, width, height) {
    // Only Face 5 is being used since it's the front facing one.
    var props = { face5: { text: text, margin: margin, lineHeight: lineHeight }, x: x, y: y, width: width, height: height };

    createCube(props);
}

function createProjectWorkBreakDownStructure() {

    // Dia de Doar
    var initialX = 0, initialY = 250;
    var verticalDelta = 100, horizontalDelta = 150;
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

    initialX = -475, horizontalDelta = 120;
    addCubeToScene("  Divulgação do   Evento", initialX + horizontalDelta, initialY - 2*verticalDelta, 0.1, 0.30);
    addCubeToScene("     Selecionar     Canais", initialX + 1.25* horizontalDelta, initialY - 3*verticalDelta, 0.1, 0.30);
    addCubeToScene("Preparar Material de Divulgação", initialX + 1.25*horizontalDelta, initialY - 4*verticalDelta, 0.1, 0.30);
    addCubeToScene("       Publicar       Candidatura", initialX + horizontalDelta, initialY - 5*verticalDelta, 0.1, 0.30);
    addCubeToScene("Avaliar Perfis", initialX + horizontalDelta, initialY - 6*verticalDelta, 0.1, 0.43);
    addCubeToScene("       Publicar       Lista Final", initialX + horizontalDelta, initialY - 7*verticalDelta, 0.1, 0.30);

    initialX = 0, horizontalDelta = 50
    addCubeToScene("   Seleção do    Tema", initialX - 3.75 * horizontalDelta, initialY - 2*verticalDelta, 0.1, 0.30, 120);
    addCubeToScene("   Estudo do     Tema", initialX - 0.75* horizontalDelta, initialY - 2*verticalDelta, 0.1, 0.30, 120);
    addCubeToScene("     Elaborar     Discurso", initialX + 2.25*horizontalDelta, initialY - 2*verticalDelta, 0.1, 0.30, 120);
    addCubeToScene("      Treinar     Participantes", initialX + 5.25*horizontalDelta, initialY - 2*verticalDelta, 0.1, 0.30, 120);

    initialX = -145, initialY = 150;
    addCubeToScene("  Elencar Temas  Candidatos", initialX, initialY - 2 * verticalDelta, 0.1, 0.30);
    addCubeToScene(" Avaliar Impacto dos Temas", initialX, initialY - 3 * verticalDelta, 0.1, 0.30);
    addCubeToScene("   Escolher Tema de Maior Impacto", initialX, initialY - 4 * verticalDelta, 0.1, 0.30);

    initialX = 35, initialY = 150;
    addCubeToScene("      Levantar      Bibliografia", initialX, initialY - 2 * verticalDelta, 0.1, 0.30);
    addCubeToScene("Compilar Material", initialX, initialY - 3 * verticalDelta, 0.1, 0.43);

    initialX = 335, initialY = 50;
    addCubeToScene("Reunir Equipe", initialX, initialY - verticalDelta, 0.1, 0.43, 160);
    addCubeToScene("Deslocamento", initialX, initialY - 2*verticalDelta, 0.1, 0.43, 160);
    addCubeToScene("Distribuir Estratégia de Abordagem", initialX, initialY - 3 * verticalDelta, 0.1, 0.30, 160);
    addCubeToScene("Abordar", initialX, initialY - 4 * verticalDelta, 0.1, 0.43, 160);

    initialX = 560, initialY = 150;
    addCubeToScene("Desmobilizar Equipe", initialX, initialY - verticalDelta, 0.1, 0.43, 160);
    addCubeToScene("  Encerramento de  Contratos", initialX, initialY - 2*verticalDelta, 0.1, 0.3, 160);
    addCubeToScene("Avaliar e Apresentar Resultados", initialX, initialY - 6 * verticalDelta, 0.1, 0.30, 160);
    addCubeToScene("   Registrar Lições   Aprendidas", initialX, initialY - 7 * verticalDelta, 0.1, 0.3, 160);

    initialX = 530, initialY = -50;
    addCubeToScene("Contatar Fornecedor", initialX, initialY - verticalDelta, 0.09, 0.43, 160);
    addCubeToScene("Elaborar Termo de  Encerramento", initialX, initialY - 2*verticalDelta, 0.1, 0.3, 160);
    addCubeToScene("Colher Assinaturas", initialX, initialY - 3*verticalDelta, 0.1, 0.43, 160);

    createLines();
}

function createLines() {

    // 1st level horizontal line
    // Lines goes from 600 to -600 horizontally [ X axis ]
    // Lines are drawn between each consecutive pair of vertices, but not between the first and last (the line is not closed)
    // More info here: https://github.com/mrdoob/three.js/wiki/Drawing-lines

    // 1st level - Dia de Doar
    var x1 = 600, y1 = 200; y2 = 140, deltaY = 100, deltaX = 225;
    createLine("DiaDoar->Children", x1, y1, -x1, y1);
    createLine("DiaDoarHorizontal", x1 - x1, y1, 0, 2 * y2);
    createLine("DiaDoar->GestaoProjeto", -x1, y1, -x1, y2);
    createLine("DiaDoar->SelecaoParticipantes", -x1 + deltaX, y1, -x1 + deltaX, y2);
    createLine("DiaDoar->Discurso", -x1 + x1, y1, -x1 + x1, y2);
    createLine("DiaDoar->Mobilizacao", x1 - deltaX, y1, x1 - deltaX, y2);
    createLine("DiaDoar->Encerramento", x1, y1, x1, y2);

    // 2nd level - Gestão de Projeto
    var x1 = -660, x2 = -605; y1 = 150, deltaY = 100;
    createLine("GestaoProjeto->Children", x1, y1, x1, y1 - 9 * deltaY);
    createLine("GestaoProjeto->Integracao", x1, y1 - 1 * deltaY, x2, y1 - deltaY);
    createLine("GestaoProjeto->Escopo", x1, y1 - 2 * deltaY, x2, y1 - 2 * deltaY);
    createLine("GestaoProjeto->Tempo", x1, y1 - 3 * deltaY, x2, y1 - 3 * deltaY);
    createLine("GestaoProjeto->Custo", x1, y1 - 4 * deltaY, x2, y1 - 4 * deltaY);
    createLine("GestaoProjeto->Qualidade", x1, y1 - 5 * deltaY, x2, y1 - 5 * deltaY);
    createLine("GestaoProjeto->RecursosHumanos", x1, y1 - 6 * deltaY, x2, y1 - 6 * deltaY);
    createLine("GestaoProjeto->Comunicação", x1, y1 - 7 * deltaY, x2, y1 - 7 * deltaY);
    createLine("GestaoProjeto->Risco", x1, y1 - 8 * deltaY, x2, y1 - 8 * deltaY);
    createLine("GestaoProjeto->Aquisições", x1, y1 - 9 * deltaY, x2, y1 - 9 * deltaY);

    // Seleção de Participantes
    x1 = -435, y1 = 150, deltaY = 100;
    createLine("SelecaoParticipantes->Children", x1, y1, x1, -(y1 + 3 * deltaY));
    createLine("SelecaoParticipantes->DivulgacaoEvento", x1, y1 - deltaY, x1+50, y1 - deltaY);
    createLine("SelecaoParticipantes->PublicarCandidatura", x1, -y1 - deltaY, x1 + 50, -(y1 + deltaY));
    createLine("SelecaoParticipantes->AvaliarPerfis", x1, -y1 - 2*deltaY, x1 +50, -(y1 + 2 * deltaY));
    createLine("SelecaoParticipantes->PublicarListaFinal", x1, -y1 - 3*deltaY, x1+50, -(y1 + 3 * deltaY));

    // Divulgação do Evento
    x1 = -415;
    createLine("DivulgacaoEvento->Children", x1, y1-deltaY, x1, -y1);
    createLine("DivulgacaoEvento->SelecionarCanais", x1, y1-2*deltaY, x1 + 50, -y1+deltaY);
    createLine("DivulgacaoEvento->PrepararMaterialDivulgacao", x1, y1-3*deltaY, x1 + 50, -y1);

    // Discurso
    var x1 = 185, y1 = 100; y2 = 50, deltaY = 100, deltaX = 150;
    createLine("Discurso->Children", x1+80, y1, -x1, y1);
    createLine("DiscursoVertical", x1 - x1, y1, x1-x1, y1+50);
    createLine("Discurso->SelecaoTema", -x1, y1, -x1, y2);
    createLine("Discurso->EstudoTema", -x1 + deltaX, y1, -x1 + deltaX, y2);
    createLine("Discurso->ElaborarDiscurso", -x1 + 2*deltaX, y1, -x1 + 2*deltaX, y2);
    createLine("Discurso->TreinarParticipantes", -x1 +3*deltaX, y1, -x1 +3*deltaX, y2);

    // Seleção do Tema
    x1 = -235, y1 = 50; x2 = -235, y2 = -250, deltaY = 100, deltaX = 150;
    createLine("SelecaoTema->Children", x1, y1, x2, y2);
    createLine("SelecaoTema->ElencarTemasCandidatos", x1, y1-deltaY, x1 + 50, y1-deltaY);
    createLine("SelecaoTema->AvaliarImpactorTemas", x1, y1-2*deltaY, x1 + 50, y1-2*deltaY);
    createLine("SelecaoTema->EscolherTemaMaiorImpacto", x1, y1-3*deltaY, x1 + 50, y1-3*deltaY);

    // Estudo do Tema
    x1 = -55, y1 = 50; x2 = -55, y2 = -150, deltaY = 100, deltaX = 150;
    createLine("EstudoTema->Children", x1, y1, x2, y2);
    createLine("EstudoTema->LevantarBibliografia", x1, y1-deltaY, x1 + 50, y1-deltaY);
    createLine("EstudoTema->CompilarMaterial", x1, y1-2*deltaY, x1 + 50, y1-2*deltaY);

    // Mobilização
    x1 = 435, y1 = 150; x2 = 435, y2 = -370, deltaY = 100, deltaX = 150;
    createLine("Mobilizacao->Children", x1, y1, x2, y2);
    createLine("Mobilizacao->ReunirEquipe", x1, y1-2*deltaY, x1 -50, y1-2*deltaY);
    createLine("Mobilizacao->Deslocamento", x1, y1-3*deltaY, x1 -50, y1-3*deltaY);
    createLine("Mobilizacao->DistribuirEstrategiaAbordagem", x1, y1-4*deltaY, x1 -50, y1-4*deltaY);
    createLine("Mobilizacao->Abordar", x1, y1-5*deltaY, x1 -50, y1-5*deltaY);

    // Encerramento
    x1 = 660, y1 = 150, deltaY = 100;
    createLine("Encerramento->Children", x1, y1, x1, -(y1 + 4 * deltaY));
    createLine("Encerramento->DesmobilizarEquipe", x1, y1 - deltaY, x1-50, y1 - deltaY);
    createLine("Encerramento->EncerramentoContratos", x1, y1 - 2*deltaY, x1-50, y1 -2*deltaY);
    createLine("Encerramento->AvaliarApresentarResultados", x1, -y1 - 3*deltaY, x1 -50, -(y1 + 3 * deltaY));
    createLine("Encerramento->RegistrarLicoesAprendidas", x1, -y1 - 4*deltaY, x1-50, -(y1 + 4 * deltaY));


    // Encerramento de Contratos
    x1 = 630, y1 = -50, deltaY = -100;
    createLine("EncerramentoContratos->Children", x1, y1, x1, 3.5 * deltaY);
    createLine("EncerramentoContratos->ContatarFornecedor", x1, y1 + deltaY, x1-50, y1 + deltaY);
    createLine("EncerramentoContratos->ElaborarTermoEncerramento", x1, y1 + 2*deltaY, x1-50, y1 + 2*deltaY);
    createLine("EncerramentoContratos->ColherAssinaturas", x1, y1 + 3*deltaY, x1-50, y1 + 3*deltaY);
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