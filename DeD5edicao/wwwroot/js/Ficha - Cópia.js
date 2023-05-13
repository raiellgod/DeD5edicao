window.onload = function carregaAtributos() {
    alert("teste3");
    document.getElementById("StatusForca").value = localStorage.getItem("forca");
    document.getElementById("StatusDestreza").value = localStorage.getItem("destreza");
}