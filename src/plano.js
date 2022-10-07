// ==UserScript==
// @name         planoEDA
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=ProfessorTurmaPlanoCursoEditar&codigo=1411305*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==


(function() {
    'use strict';

    // preenche aulas a partir desse json. se quiser outra disciplina, construir o json
    // neste formato e mudar o link em @match.
    $.getJSON('https://raw.githubusercontent.com/joaoarthurbm/controle-academico/master/data/eda.json', function(eda) {

        /**
         *PREENCHE Plano
        */
        document.getElementsByName('ementa')[0].value = eda.plano.ementa;
        document.getElementsByName('objetivos')[0].value = eda.plano.objetivos;
        document.getElementsByName('conteudo')[0].value = eda.plano.conteudo;
        document.getElementsByName('metodologia')[0].value = eda.plano.metodologia;
        document.getElementsByName('avaliacao')[0].value = eda.plano.avaliacao;
        document.getElementsByName('referencias')[0].value = eda.plano.referencias;


    });
})();
