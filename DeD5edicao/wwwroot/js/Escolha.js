function escolhaBarbaro() {
    alert("teste");
    preencher_status(10, 13, 5, 20, 2, 10, 7)
};

function escolhaMago() {
    preencher_status(2, 7, 2, 2, 20, 20, 12)
};

function preencher_status(ponto_de_vida, forca, destreza, constituicao, inteligencia, sabedoria, carisma) {
    alert("teste2");
    localStorage.setItem("pv", ponto_de_vida);
    localStorage.setItem("forca", forca);
    localStorage.setItem("destreza", destreza);
    localStorage.setItem("constituicao", constituicao);
    localStorage.setItem("inteligencia", inteligencia);
    localStorage.setItem("sabedoria", sabedoria);
    localStorage.setItem("carisma", carisma);
    window.location.href = "../Home/Ficha";
};