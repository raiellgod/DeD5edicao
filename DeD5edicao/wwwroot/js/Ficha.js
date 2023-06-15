window.onload = function carregaAtributos() {
    document.getElementById("classe").value = localStorage.getItem("classe");
    document.getElementById("nivel").value = localStorage.getItem("nivel");
    document.getElementById("pvt").value = localStorage.getItem("pv");
    document.getElementById("pva").value = localStorage.getItem("pv");
    document.getElementById("StatusForca").value = localStorage.getItem("forca");
    document.getElementById("StatusDestreza").value = localStorage.getItem("destreza");
    document.getElementById("StatusConstituicao").value = localStorage.getItem("constituicao");
    document.getElementById("StatusInteligencia").value = localStorage.getItem("inteligencia");
    document.getElementById("StatusSabedoria").value = localStorage.getItem("sabedoria");
    document.getElementById("StatusCarisma").value = localStorage.getItem("carisma");
    document.getElementById("bonus_proficiencia").value = localStorage.getItem("proficiencia");
    document.getElementById("mod_forca").value = localStorage.getItem("mod_forca");
    document.getElementById("mod_destreza").value = localStorage.getItem("mod_destreza");
    document.getElementById("mod_constituicao").value = localStorage.getItem("mod_constituicao");
    document.getElementById("mod_inteligencia").value = localStorage.getItem("mod_inteligencia");
    document.getElementById("mod_sabedoria").value = localStorage.getItem("mod_sabedoria");
    document.getElementById("mod_carisma").value = localStorage.getItem("mod_carisma");
    document.getElementById("mod_iniciativa").value = localStorage.getItem("mod_destreza");
    document.getElementById("teste-forca").value = localStorage.getItem("mod_forca");
    document.getElementById("teste-destreza").value = localStorage.getItem("mod_destreza");
    document.getElementById("teste-constituicao").value = localStorage.getItem("mod_constituicao");
    document.getElementById("teste-inteligencia").value = localStorage.getItem("mod_inteligencia");
    document.getElementById("teste-sabedoria").value = localStorage.getItem("mod_sabedoria");
    document.getElementById("teste-carisma").value = localStorage.getItem("mod_carisma");
    document.getElementById("armaduras").value = localStorage.getItem("armadura");
    document.getElementById("deslocamentos").value = localStorage.getItem("deslocamento");
    document.getElementById("dado_vida").value = localStorage.getItem("dado_vida");
    document.getElementById("outra_caracteristica").value = localStorage.getItem("proficiencia");
};


window.onload = function carregaModificadores() {
    document.getElementById("pericia-acrobacia").value = localStorage.getItem("mod_destreza");
    document.getElementById("pericia-arcanismo").value = localStorage.getItem("mod_inteligencia");
    document.getElementById("pericia-atletismo").value = localStorage.getItem("mod_forca");
    document.getElementById("pericia-atuacao").value = localStorage.getItem("mod_carisma");
    document.getElementById("pericia-blefar").value = localStorage.getItem("mod_carisma");
    document.getElementById("pericia-furtividade").value = localStorage.getItem("mod_destreza");
    document.getElementById("pericia-historia").value = localStorage.getItem("mod_inteligencia");
    document.getElementById("pericia-intimidacao").value = localStorage.getItem("mod_carisma");
    document.getElementById("pericia-intuica").value = localStorage.getItem("mod_sabedoria");
    document.getElementById("pericia-investigacao").value = localStorage.getItem("mod_inteligencia");
    document.getElementById("pericia-animais").value = localStorage.getItem("mod_sabedoria");
    document.getElementById("pericia-medicina").value = localStorage.getItem("mod_sabedoria");
    document.getElementById("pericia-natureza").value = localStorage.getItem("mod_inteligencia");
    document.getElementById("pericia-percepcao").value = localStorage.getItem("mod_sabedoria");
    document.getElementById("pericia-persuasao").value = localStorage.getItem("mod_carisma");
    document.getElementById("pericia-prestidigitacao").value = localStorage.getItem("mod_destreza");
    document.getElementById("pericia-religiao").value = localStorage.getItem("mod_inteligencia");
    document.getElementById("pericia-sobrevivencia").value = localStorage.getItem("mod_sabedoria");
};
window.onload = function carregaHistoria() {
    document.getElementById("raca").value = localStorage.getItem("raca");
    document.getElementById("idade").value = localStorage.getItem("idade");
    document.getElementById("altura").value = localStorage.getItem("tamaho");
    document.getElementById("peso").value = localStorage.getItem("peso");
    document.getElementById("deslocamentos").value = localStorage.getItem("deslocamento");
    document.getElementById("linguas").value = localStorage.getItem("lingua");
    document.getElementById("tendencia").value = localStorage.getItem("tendencia");
    document.getElementById("antecedente").value = localStorage.getItem("antecedencia");
    document.getElementById("minha_bolsa").value = localStorage.getItem("equipamentos");
    document.getElementById("meu_po").value = localStorage.getItem("dinheiro");
    document.getElementById("caracteristicas").value = localStorage.getItem("caracteristicas");
    document.getElementById("meu_traco").value = localStorage.getItem("personal");
    document.getElementById("meu_ideal").value = localStorage.getItem("ideal");
    document.getElementById("meu_vinculo").value = localStorage.getItem("vinculo");
    document.getElementById("meu_defeito").value = localStorage.getItem("defeito");
    document.getElementById("personagem1").value = localStorage.getItem("nome_personagem");
    document.getElementById("personagem2").value = localStorage.getItem("nome_personagem");
    document.getElementById("olho").value = localStorage.getItem("olho");
    document.getElementById("pele").value = localStorage.getItem("pele");
    document.getElementById("cabelo").value = localStorage.getItem("cabelo");
    document.getElementById("minha aparencia").value = localStorage.getItem("aparencia");
    document.getElementById("minha_historia").value = localStorage.getItem("Historia");
    document.getElementById("meu_tesouro").value = localStorage.getItem("tesouro");
};

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