// ==UserScript==
// @name         aulasEDA
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=ProfessorTurmaAulasEditar&codigo=1411305*
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
         *PREENCHE AULAS
        */
        //TODO: evitar dois loops.
        eda.aulas.forEach(item => {
            var button = document.getElementById('botao_adicionar_aula');
            button.click();
        });

        let lines = document.querySelectorAll("table > tbody > tr");
        lines.forEach( (item, index) => {
            let registers = lines[index].querySelectorAll("td");

            // insert date
            const inputDate = registers[1].querySelector("input");
            inputDate.value = eda.aulas[index].data;

            // insert credits
            const inputCredits = registers[2].querySelector("input");
            inputCredits.value = eda.aulas[index].creditos;

            // insert subject
            const inputSubject = registers[3].querySelector("textarea");
            inputSubject.value = eda.aulas[index].assunto;

        });

    });
})();
