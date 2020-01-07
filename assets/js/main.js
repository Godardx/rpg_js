function start() {
    document.body.style.backgroundImage = "url('assets/img/background.gif')";
    chapitre01();
}

function param() {
    document.body.innerHTML = "<h2>Pas encore développé ^^' !</h2>";
}

let chapitre01Div = document.getElementById("chapitre01");
let chapitre02Div = document.getElementById("chapitre02");
let chapitre03Div = document.getElementById("chapitre03");
let chapitre04Div = document.getElementById("chapitre04");
let chapitre05Div = document.getElementById("chapitre05");
let chapitre06Div = document.getElementById("chapitre06");
let chapitre07Div = document.getElementById("chapitre07");
let chapitre08Div = document.getElementById("chapitre08");
let chapitre09Div = document.getElementById("chapitre09");
let chapitre10Div = document.getElementById("chapitre10");
let chapitre11Div = document.getElementById("chapitre11");
let chapitre12Div = document.getElementById("chapitre12");
let chapitre13Div = document.getElementById("chapitre13");
let chapitre14Div = document.getElementById("chapitre14");
let chapitre15Div = document.getElementById("chapitre15");
let chapitre16Div = document.getElementById("chapitre16");
let chapitre17Div = document.getElementById("chapitre17");
let chapitre18Div = document.getElementById("chapitre18");
let chapitre19Div = document.getElementById("chapitre19");
let chapitre20Div = document.getElementById("chapitre20");

let home = document.getElementById("home");

function chapitre01() {
    home.style.display = "none";
    chapitre01Div.style.display = "block";
}

function choix1() {
    chapitre01Div.style.display = "none";
    chapitre02Div.style.display = "block";
}

function choix2() {
    chapitre01Div.style.display = "none";
    chapitre03Div.style.display = "block";
}


function chapitre02() {
    chapitre01Div.style.display = "none";
    chapitre04Div.style.display = "block";

}

function choix3() {
    chapitre02Div.style.display = "none";
    document.body.style.backgroundImage = "url('assets/img/ville.gif')";
    chapitre05Div.style.display = "block";
}

function choix4() {
    chapitre02Div.style.display = "none";
    chapitre04Div.style.display = "block";
    document.body.style.backgroundImage = "url('assets/img/death.jpg')";
}

function chapitre03() {
    chapitre01Div.style.display = "none";
    chapitre04Div.style.display = "block";

}

function chapitre06() {
    chapitre01Div.style.display = "none";
    chapitre06Div.style.display = "block"
}

function choix5() {
    chapitre03Div.style.display = "none";
    chapitre06Div.style.display = "block";
    document.body.style.backgroundImage = "url('assets/img/death.jpg')";
}

function choix6() {
    chapitre03Div.style.display = "none";
    chapitre07Div.style.display = "block";
    document.body.style.backgroundImage = "url('assets/img/ville.gif')";
}

function chapitre07() {
    chapitre07Div.style.display = "none";
    chapitre08Div.style.display = "block"
}

function suite() {
    chapitre07Div.style.display = "none";
    chapitre05Div.style.display = "none";
    chapitre08Div.style.display = "block";
}

function shop() {
    chapitre07Div.style.display = "none";
    chapitre08Div.style.display = "none";
    chapitre09Div.style.display = "block";
}

function chapitre08() {
    chapitre08Div.style.display = "none"
    document.body.style.backgroundImage = "url('assets/img/shop.gif')";
}