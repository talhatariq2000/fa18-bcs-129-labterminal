$(function(){
    loadteams();
    $("#kka").click(kka);
    $("#pza").click(pza);
    $("#qga").click(qga);
    $("#iua").click(iua);
    $("#msa").click(msa);
    $("#lqa").click(lqa);

    $("#kkb").click(kkb);
    $("#pzb").click(pzb);
    $("#qgb").click(qgb);
    $("#iub").click(iub);
    $("#msb").click(msb);
    $("#lqb").click(lqb);
});

function kka() {
    $("#teama").append("Karachi Kings");
}
function pza() {
    $("#teama").val("Peshawar Zalmi");
}
function qga() {
    $("#teama").val("Quetta Gladiators");
}
function iua() {
    $("#teama").val("Islamabad United");
}
function lqa() {
    $("#teama").val("Lahore Qalandars");
}
function kka() {
    $("#teama").val("");
}

function handleadda() {
    var newa = $(".adda").id();

    $("#todos").append();
}

function loadteams() {
    
}

