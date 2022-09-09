// ==UserScript==
// @name         chamadaEDA
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pre.ufcg.edu.br:8443/ControleAcademicoOnline/Controlador?command=ProfessorTurmaFrequencia&codigo=1411305&turma=01*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==


// TODO: mudar link para edição, preencher automaticamente a partir do json.
(function() {
    'use strict';
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


})();
