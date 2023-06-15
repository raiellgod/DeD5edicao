function escolhaBarbaro() {
    preencher_status("Barbaro", 1, 14, 16, 15, 14, 11, 13, 9, 2, 12, "D12");
    preencher_modificadores(3, 2, 2, 0, 1, -1)
    preencher_proficiencia("Armaduras: Armaduras leves, armaduras médias e escudos Armas: Armas simples, armas marciais Ferramentas: Kit de herbalismo ")
};

function escolhaHumano() {
    preencher_dados("humano", 30, 1.83, 80, "9m", "comum, anão e dracónico ")
};

function escolhaNeutro() {
    preencher_dados2("neutro")
};

function escolhaEremita() {
    preencher_dados3("Eremita", "Um estojo de pergaminho cheio de notas dos seus estudos e orações, um cobertor de inverno, um conjunto de roupas comuns, um kit de herbalismo ", 5)
    preencher_tracos("Vida de Isolamento: Eu me afastei da sociedade após um evento que mudou minha vida.", "Eu estou alheio a etiqueta e expectativas sociais.", "Viva e Deixe Viver. Se intrometer nos assuntos dos outros só traz problemas.", "Eu entrei em reclusão porque eu amava alguém que eu não podia ter.", "Agora que voltei ao mundo, eu desfruto de seus prazeres um pouco demais.")
};

function escolhaFisica() {
    preencher_aparencia("Boromir", "preto", "parda", "preto", "Um homem alto e forte, as lutas da vida me colocaram muitas cicatrizes e uma feiura a carne que se misturam a lindas tatuagens de guerreiro", "Na tenra idade conheceu o amor da sua vida, mas o destino os afastou e ela acabou casada com outra pessoa isso me dessestabilizou e entrei numa viajem de autoconhecimento, mas apenas me desiludiu com as pessoas, mas agora que obtive um norte na vida não perco uma chance de aproveitar as boas coisas da vida muitos me chamariam de vagabundo mas eu me chamo de bon - vivant", "um colar dado a mim por minha amada e uma carta dela")
};

function preencher_status(classe, nivel, ponto_de_vida, forca, destreza, constituicao, inteligencia, sabedoria, carisma, bonus_prof, classe_arma, dado_vida) {
    localStorage.setItem("classe", classe);
    localStorage.setItem("nivel", nivel);
    localStorage.setItem("pv", ponto_de_vida);
    localStorage.setItem("forca", forca);
    localStorage.setItem("destreza", destreza);
    localStorage.setItem("constituicao", constituicao);
    localStorage.setItem("inteligencia", inteligencia);
    localStorage.setItem("sabedoria", sabedoria);
    localStorage.setItem("carisma", carisma);
    localStorage.setItem("proficiencia", bonus_prof);
    localStorage.setItem("armadura", classe_arma);
    localStorage.setItem("dado_vida", dado_vida);
};

function preencher_modificadores(mod_forca, mod_destreza, mod_constituicao, mod_inteligencia, mod_sabedoria, mod_carisma) {
    localStorage.setItem("mod-forca", mod_forca);
    localStorage.setItem("mod-destreza", mod_destreza);
    localStorage.setItem("mod-constituicao", mod_constituicao);
    localStorage.setItem("mod-inteligencia", mod_inteligencia);
    localStorage.setItem("mod-sabedoria", mod_sabedoria);
    localStorage.setItem("mod-carisma", mod_carisma);
};

function preencher_proficiencia(proficiencia) {
    localStorage.setItem("proficiencia", proficiencia);
};

function preencher_dados(raca, idade, tamanho, peso, deslocamento, linguagem) {
    localStorage.setItem("raca", raca);
    localStorage.setItem("idade", idade);
    localStorage.setItem("tamaho", tamanho);
    localStorage.setItem("peso", peso);
    localStorage.setItem("deslocamento", deslocamento);
    localStorage.setItem("lingua", linguagem);
};

function preencher_dados2(tendencia){
    localStorage.setItem("tendencia", tendencia);
};

function preencher_dados3(antecedencia, equipamentos, dinheiro) {
    localStorage.setItem("antecedencia", antecedencia);
    localStorage.setItem("equipamentos", equipamentos);
    localStorage.setItem("dinheiro", dinheiro);
};

function preencher_tracos(caracteristicas, traco_personal, ideal, vinculo, defeito) {
    localStorage.setItem("caracteristicas", caracteristicas);
    localStorage.setItem("personal", traco_personal);
    localStorage.setItem("ideal", ideal);
    ocalStorage.setItem("vinculo", vinculo);
    localStorage.setItem("defeito", defeito);
};


function preencher_aparencia(nome_personagem, olho, pele, cabelo, aparencia, historia, tesouro) {
    localStorage.setItem("nome_personagem", nome_personagem);
    localStorage.setItem("olho", olho);
    localStorage.setItem("pele", pele);
    localStorage.setItem("cabelo", cabelo);
    localStorage.setItem("aparencia", aparencia);
    ocalStorage.setItem("Historia", historia);
    localStorage.setItem("tesouro", tesouro);
};



var TelaDesbloqueada = "divEscolha1";
var BotaoBloqueado = "btnEscolha1";

function AbrirTela(id, idbutton) {
    document.getElementById(TelaDesbloqueada).style.display = "none";
    document.getElementById(id).style.display = "block";
    TelaDesbloqueada = id;
    document.getElementById(idbutton).disabled = true;
    document.getElementById(BotaoBloqueado).disabled = false;
    BotaoBloqueado = idbutton;
};