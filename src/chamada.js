/* eslint-env jquery*/

// ==UserScript==
// @name         chamadaEDA
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=ProfessorTurmaFrequenciaEditar&codigo=1411305*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==


(function() {
    console.log("preenchendo chamada - tampermonkey");
    'use strict';
    // preenche chamada a partir desse json. se quiser outra disciplina, construir o json
    // neste formato e mudar o link em @match.
    $.getJSON('https://raw.githubusercontent.com/joaoarthurbm/controle-academico/master/data/2022.1-chamada-eda.json', function(chamada) {

        // extrai datas do header
        let headers = Array.from(document.querySelectorAll("thead > tr > th")).slice(3, -2);
        var datas = headers.map(item => $(item).text().split("\n")[2]);


        let lines = document.querySelectorAll("table > tbody > tr");
        lines.forEach( (item) => {
            let registers = item.querySelectorAll("td");

            let matriculaAluno = $(registers[1]).text();
            let aluno = chamada[matriculaAluno];

            // apenas as aulas. exclui linha, nome, matrícula e qtde de faltas (do final). Por isso o for de 3 ao fim - 2.
            for (let i = 3; i < registers.length - 2; i++) {
                console.log(datas[i - 3]+"/2022");
                registers[i].querySelector("input").value = aluno[datas[i - 3]+"/2022"];
            }


        });


    });

    /**

    let urlPrincipal = "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=ProfessorTurmaFrequencia&codigo=1411305&turma=01"
    let urlPag2 = "https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=ProfessorTurmaFrequencia&codigo=1411305&turma=01&p=2";

    // vai para a página 2
    if (window.location.href == urlPrincipal) {
        let pag2 = document.querySelectorAll("ul")[2].querySelectorAll("li")[3];
        location.href = pag2.querySelector("a").href;

        // pega tabela
        // console.log(document.querySelector("table").querySelector("tbody"));

    // vai para a pagina 3
    } else if (window.location.href == urlPag2) {
       let pag3 = document.querySelectorAll("ul")[2].querySelectorAll("li")[4];
       location.href = pag3.querySelector("a").href;
    }
    **/

})();
