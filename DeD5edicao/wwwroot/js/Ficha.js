﻿window.onload = function carregaAtributos() {
    document.getElementById("StatusForca").value = localStorage.getItem("forca");
    document.getElementById("StatusDestreza").value = localStorage.getItem("destreza");
}

var TelaDesbloqueada = "divFicha1";
var BotaoBloqueado = "btnFicha1";

function AbrirTela(id, idbutton) {
    document.getElementById(TelaDesbloqueada).style.display = "none";
    document.getElementById(id).style.display = "block";
    TelaDesbloqueada = id;
    document.getElementById(idbutton).disabled = true;
    document.getElementById(BotaoBloqueado).disabled = false;
    BotaoBloqueado = idbutton;
}