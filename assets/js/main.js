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

let home = document.getElementById("home");

function chapitre01() {
    home.style.display = "none";
    chapitre01Div.style.display = "block";
}

function choix1() {
    chapitre01Div.style.display = "none";
    chapitre03Div.style.display = "block";
}

function choix2() {
    chapitre01Div.style.display = "none";
    chapitre02Div.style.display = "block";
}


function chapitre02() {
    chapitre01Div.style.display = "none";
    chapitre04Div.style.display = "block"

}

function choix3() {
    chapitre01Div.style.display = "none";
    chapitre02Div.style.display = "block";
}

function choix4() {
    chapitre01Div.style.display = "none";
    document.body.style.backgroundImage = "url('assets/img/death.jpg')";
}

function chapitre03() {
    chapitre01Div.style.display = "none";
    chapitre04Div.style.display = "block"

}