//#region valtozok
var kek = 0;
var piros = 0;
var sarga = 0;
var zold = 0;
var narancs = 0;
var nyert = 0;
var szin = "";
var nextplayer = 0;
var ujpontozas = 0;
var randomformat = 0;
var randomword = 0;
//#endregion

//#region oldal betoltes
function onLoadFunctions() {
    document.getElementById("talalt").disabled = true;
    document.getElementById("nemtalalt").disabled = true;
    document.getElementById("next").disabled = true;
    document.getElementById("buttonf").disabled = true;
    document.getElementById("buttonk").disabled = true;
    document.getElementById("egypont").disabled = true;
    document.getElementById("ketpont").disabled = true;
    document.getElementById("harompont").disabled = true;
    document.getElementById("negypont").disabled = true;
    document.getElementById("otpont").disabled = true;
    document.getElementById("wordboxcsel").disabled = true;
    document.getElementById("wordboxsz").disabled = true;
    document.getElementById("kektalalt").disabled = true;
    document.getElementById("pirostalalt").disabled = true;
    document.getElementById("sargatalalt").disabled = true;
    document.getElementById("zoldtalalt").disabled = true;
    document.getElementById("narancstalalt").disabled = true;
    document.getElementById("tabla").style = "visibility: hidden"
}
window.onload = onLoadFunctions;
//#endregion

//#region szinvalasztas
function kekbabu(){
    szin = "Kék";
    szindisable();
}

function pirosbabu(){
    szin = "Piros";
    szindisable();
}

function sargababu(){
    szin = "Sárga";
    szindisable();
}

function zoldbabu(){
    szin = "Zöld";
    szindisable();
}

function narancsbabu(){
    szin = "Narancs";
    szindisable();
}

function szindisable(){
    document.getElementById("kekbabu").style = "visibility:hidden";
    document.getElementById("pirosbabu").style = "visibility:hidden";
    document.getElementById("sargababu").style = "visibility:hidden";
    document.getElementById("zoldbabu").style = "visibility:hidden";
    document.getElementById("narancsbabu").style = "visibility:hidden";
    document.getElementById("start").style = "visibility:visible; margin: auto; display: block; margin-top: 10px;";
    document.getElementById("valaszt").innerHTML = szin + " bábu kiválasztva. <br> A játék elkezdéséhez nyomd meg a START gombot.";
}
//#endregion

//#region talalt/nemtalalt, lepes
function START(){
    document.getElementById("kezdet").style = "visibility:hidden; margin:auto; padding:0; margin-top:-50px";
    document.getElementById("valaszt").style = "visibility:visible; margin:auto; padding:0;";
    document.getElementById("start").style = "visibility:hidden; margin:0; padding:0; margin-bottom:-50px";
    document.getElementById("valaszt").style = "visibility:hidden; margin: 0; padding:0; margin-top:-50px;"
            /* bejövetel */
                document.getElementById("tabla").style = "visibility:visible; transform: rotate(360deg); transition: transform 1s";
                document.getElementById("talalt").style = "transform: rotate(360deg); transition: transform 1.2s";
                document.getElementById("nemtalalt").style = "transform: rotate(360deg); transition: transform 1.4s";
                document.getElementById("next").style = "transform: rotate(360deg); transition: transform 1.6s";
                document.getElementById("wordboxsz").style = "transform: rotate(360deg); transition: transform 1.8s";
                document.getElementById("wordboxcsel").style = "transform: rotate(360deg); transition: transform 2s";
                document.getElementById("buttonf").style = "transform: rotate(360deg); transition: transform 2.2s";
                document.getElementById("buttonk").style = "transform: rotate(360deg); transition: transform 2.4s";
                document.getElementById("egypont").style = "transform: rotate(360deg); transition: transform 2.6s";
                document.getElementById("ketpont").style = "transform: rotate(360deg); transition: transform 2.8s";
                document.getElementById("harompont").style = "transform: rotate(360deg); transition: transform 3s";
                document.getElementById("negypont").style = "transform: rotate(360deg); transition: transform 3.2s";
                document.getElementById("otpont").style = "transform: rotate(360deg); transition: transform 3.4s";
                document.getElementById("kekbabukep").style = "transform: rotate(360deg); transition: transform 3.6s";
                document.getElementById("pirosbabukep").style = "transform: rotate(360deg); transition: transform 3.8s";
                document.getElementById("sargababukep").style = "transform: rotate(360deg); transition: transform 4s";
                document.getElementById("zoldbabukep").style = "transform: rotate(360deg); transition: transform 4.2s";
                document.getElementById("narancsbabukep").style = "transform: rotate(360deg); transition: transform 4.4s";
                document.getElementById("kekered").style = "transform: rotate(360deg); transition: transform 4.6s";
                document.getElementById("pirosered").style = "transform: rotate(360deg); transition: transform 4.8s";
                document.getElementById("sargaered").style = "transform: rotate(360deg); transition: transform 5s";
                document.getElementById("zoldered").style = "transform: rotate(360deg); transition: transform 5.2s";
                document.getElementById("narancsered").style = "transform: rotate(360deg); transition: transform 5.4s";
    
    if (szin == "Kék") {
        document.getElementById("kekkep").style = "background-color: #009900"
        document.getElementById("piroskep").style = "background-color: #ff9900"
        document.getElementById("buttonf").disabled = false;
        document.getElementById("buttonk").disabled = false;
        document.getElementById("wordboxcsel").disabled = false;
        document.getElementById("wordboxsz").disabled = false;
    } else {
        document.getElementById("kekkep").style = "background-color: #009900"
        document.getElementById("piroskep").style = "background-color: #ff9900"
        document.getElementById("talalt").disabled = false;
        document.getElementById("nemtalalt").disabled = false;
        document.getElementById("wordboxcsel").disabled = true;
        document.getElementById("wordboxsz").disabled = true;
    }
}

function lepes1() {
    pont = 1;
}
function lepes2() {
    pont = 2;
}
function lepes3() {
    pont = 3;
}
function lepes4() {
    pont = 4;
}
function lepes5() {
    pont = 5;
}

function talalt(){
    document.getElementById("talalt").disabled = true;
    document.getElementById("nemtalalt").disabled = true;
    document.getElementById("kektalalt").disabled = false;
    document.getElementById("pirostalalt").disabled = false;
    document.getElementById("sargatalalt").disabled = false;
    document.getElementById("zoldtalalt").disabled = false;
    document.getElementById("narancstalalt").disabled = false;

    if (nextplayer == 0){
        document.getElementById("kektalalt").disabled = true;
    } else if (nextplayer == 1){
        document.getElementById("pirostalalt").disabled = true;
    } else if (nextplayer == 2){
        document.getElementById("sargatalalt").disabled = true;
    } else if (nextplayer == 3){
        document.getElementById("zoldtalalt").disabled = true;
    } else if (nextplayer == 4){
        document.getElementById("narancstalalt").disabled = true;
    }

    if (kek == 36) {
        document.getElementById("kektalalt").disabled = true;
    }
    if (piros == 36) {
        document.getElementById("pirostalalt").disabled = true;
    } 
    if (sarga == 36) {
        document.getElementById("sargatalalt").disabled = true;
    } 
    if (zold == 36) {
        document.getElementById("zoldtalalt").disabled = true;
    } 
    if (narancs == 36) {
        document.getElementById("narancstalalt").disabled = true;
    }
}

function talaltpont(){    
    document.getElementById("kektalalt").disabled = true;
    document.getElementById("pirostalalt").disabled = true;
    document.getElementById("sargatalalt").disabled = true;
    document.getElementById("zoldtalalt").disabled = true;
    document.getElementById("narancstalalt").disabled = true;
    document.getElementById("egypont").disabled = false;
    document.getElementById("ketpont").disabled = false;
    document.getElementById("harompont").disabled = false;
    document.getElementById("negypont").disabled = false;
    document.getElementById("otpont").disabled = false;
}

function talaltpontoff() {
    document.getElementById("egypont").disabled = true;
    document.getElementById("ketpont").disabled = true;
    document.getElementById("harompont").disabled = true;
    document.getElementById("negypont").disabled = true;
    document.getElementById("otpont").disabled = true;
}

function ujpontkek(){
    ujpontozas = 0;
}
function ujpontpiros(){
    ujpontozas = 1;
}
function ujpontsarga(){
    ujpontozas = 2;
}
function ujpontzold(){
    ujpontozas = 3;
}
function ujpontnarancs(){
    ujpontozas = 4;
}

function lepes(){
    if (ujpontozas == 0){
        pont += kek;
        for (let i = kek; i < pont; i++){
            pluszkek();
        }
    } else if(ujpontozas == 1){
        pont += piros;
        for (let i = piros; i < pont; i++){
            pluszpiros();
        }
    } else if(ujpontozas == 2){
        pont += sarga;
        for (let i = sarga; i < pont; i++){
            pluszsarga();
        }
    } else if(ujpontozas == 3){
        pont += zold;
        for (let i = zold; i < pont; i++){
            pluszzold();
        }
    }
    else if(ujpontozas == 4){
        pont += narancs;
        for (let i = narancs; i < pont; i++){
            plusznarancs();
        }
    }
    document.getElementById("next").disabled = false;
}

function nemtalalt(){
    document.getElementById("next").disabled = false;
    document.getElementById("talalt").disabled = true;
    document.getElementById("nemtalalt").disabled = true;
}
//#endregion

//#region kovetkezo jatekos
function next() {
    if (nextplayer == 0){
        if(piros < 36){
            nextplayer = 1;
        }
        else if(sarga < 36){
            nextplayer = 2;
        }
        else if(zold < 36){
            nextplayer = 3;
        }
        else if(narancs < 36){
            nextplayer = 4;
        }
    }
    else if(nextplayer == 1){
        if(sarga < 36){
            nextplayer = 2;
        }
        else if(zold < 36){
            nextplayer = 3;
        }
        else if(narancs < 36){
            nextplayer = 4;
        }
        else if (kek < 36){
            nextplayer = 0;
        }
    }
    else if(nextplayer == 2){
        if(zold < 36){
            nextplayer = 3;
        }
        else if(narancs < 36){
            nextplayer = 4;
        }
        else if (kek < 36){
            nextplayer = 0;
        }
        else if(piros < 36){
            nextplayer = 1;
        }
    }
    else if(nextplayer == 3){
        if(narancs < 36){
            nextplayer = 4;
        }
        else if (kek < 36){
            nextplayer = 0;
        }
        else if(piros < 36){
            nextplayer = 1;
        }
        else if(sarga < 36){
            nextplayer = 2;
        }
    }
    else if (nextplayer == 4){
        if(kek < 36){
            nextplayer = 0;
        }
        else if(piros < 36){
            nextplayer = 1;
        }
        else if(sarga < 36){
            nextplayer = 2;
        }
        else if(zold < 36){
            nextplayer = 3;
        }
    }
    
    kovijatekos();
    document.getElementById("wordboxsz").value = "";
    document.getElementById("wordboxcsel").value = "";
    document.getElementById("egypont").disabled = true;
    document.getElementById("ketpont").disabled = true;
    document.getElementById("harompont").disabled = true;
    document.getElementById("negypont").disabled = true;
    document.getElementById("otpont").disabled = true;
    pont = 0; 
}

function kovijatekos(){
    if (nextplayer == 0){
        if (szin == "Kék") {
            document.getElementById("kekkep").style = "background-color: #009900"
            document.getElementById("piroskep").style = "background-color: #ff9900"
            document.getElementById("narancskep").style = "background-color: #b00000"
            document.getElementById("zoldkep").style = "background-color: none"
            document.getElementById("buttonf").disabled = false;
            document.getElementById("buttonk").disabled = false;
            document.getElementById("wordboxcsel").disabled = false;
            document.getElementById("wordboxsz").disabled = false;
        } else {
            document.getElementById("kekkep").style = "background-color: #009900"
            document.getElementById("piroskep").style = "background-color: #ff9900"
            document.getElementById("narancskep").style = "background-color: #b00000"
            document.getElementById("zoldkep").style = "background-color: none"
            document.getElementById("talalt").disabled = false;
            document.getElementById("nemtalalt").disabled = false;
            document.getElementById("wordboxcsel").disabled = true;
            document.getElementById("wordboxsz").disabled = true;
        }

    } else if (nextplayer == 1){
        if (szin == "Piros") {
            document.getElementById("piroskep").style = "background-color: #009900"
            document.getElementById("sargakep").style = "background-color: #ff9900"
            document.getElementById("kekkep").style = "background-color: #b00000"
            document.getElementById("narancskep").style = "background-color: none"
            document.getElementById("buttonf").disabled = false;
            document.getElementById("buttonk").disabled = false;
            document.getElementById("wordboxcsel").disabled = false;
            document.getElementById("wordboxsz").disabled = false;
        } else {
            document.getElementById("piroskep").style = "background-color: #009900"
            document.getElementById("sargakep").style = "background-color: #ff9900"
            document.getElementById("kekkep").style = "background-color: #b00000"
            document.getElementById("narancskep").style = "background-color: none"
            document.getElementById("talalt").disabled = false;
            document.getElementById("nemtalalt").disabled = false;
            document.getElementById("wordboxcsel").disabled = true;
            document.getElementById("wordboxsz").disabled = true;
        }

    } else if (nextplayer == 2){
        if (szin == "Sárga") {
            document.getElementById("sargakep").style = "background-color: #009900"
            document.getElementById("zoldkep").style = "background-color: #ff9900"
            document.getElementById("piroskep").style = "background-color: #b00000"
            document.getElementById("kekkep").style = "background-color: none"
            document.getElementById("buttonf").disabled = false;
            document.getElementById("buttonk").disabled = false;
            document.getElementById("wordboxcsel").disabled = false;
            document.getElementById("wordboxsz").disabled = false;
        } else {
            document.getElementById("sargakep").style = "background-color: #009900"
            document.getElementById("zoldkep").style = "background-color: #ff9900"
            document.getElementById("piroskep").style = "background-color: #b00000"
            document.getElementById("kekkep").style = "background-color: none"
            document.getElementById("talalt").disabled = false;
            document.getElementById("nemtalalt").disabled = false;
            document.getElementById("wordboxcsel").disabled = true;
            document.getElementById("wordboxsz").disabled = true;
        }

    } else if (nextplayer == 3){
        if (szin == "Zöld") {
            document.getElementById("zoldkep").style = "background-color: #009900"
            document.getElementById("narancskep").style = "background-color: #ff9900"
            document.getElementById("sargakep").style = "background-color: #b00000"
            document.getElementById("piroskep").style = "background-color: none"
            document.getElementById("buttonf").disabled = false;
            document.getElementById("buttonk").disabled = false;
            document.getElementById("wordboxcsel").disabled = false;
            document.getElementById("wordboxsz").disabled = false;
        } else {
            document.getElementById("zoldkep").style = "background-color: #009900"
            document.getElementById("narancskep").style = "background-color: #ff9900"
            document.getElementById("sargakep").style = "background-color: #b00000"
            document.getElementById("piroskep").style = "background-color: none"
            document.getElementById("talalt").disabled = false;
            document.getElementById("nemtalalt").disabled = false;
            document.getElementById("wordboxcsel").disabled = true;
            document.getElementById("wordboxsz").disabled = true;
        }
        
    } else if (nextplayer == 4){
        if (szin == "Narancs") {
            document.getElementById("narancskep").style = "background-color: #009900"
            document.getElementById("kekkep").style = "background-color: #ff9900"
            document.getElementById("zoldkep").style = "background-color: #b00000"
            document.getElementById("sargakep").style = "background-color: none"
            document.getElementById("buttonf").disabled = false;
            document.getElementById("buttonk").disabled = false;
            document.getElementById("wordboxcsel").disabled = false;
            document.getElementById("wordboxsz").disabled = false;
        } else {
            document.getElementById("narancskep").style = "background-color: #009900"
            document.getElementById("kekkep").style = "background-color: #ff9900"
            document.getElementById("zoldkep").style = "background-color: #b00000"
            document.getElementById("sargakep").style = "background-color: none"
            document.getElementById("talalt").disabled = false;
            document.getElementById("nemtalalt").disabled = false;
            document.getElementById("wordboxcsel").disabled = true;
            document.getElementById("wordboxsz").disabled = true;
        }
    }
    if (kek >= 36) {
        kek = 35;
        pluszkek()
    }
    if (piros >= 36) {
        piros = 35;
        pluszpiros()
    }
    if (sarga >= 36) {
        sarga = 35;
        pluszsarga()
    }
    if (zold >= 36) {
        zold = 35;
        pluszzold()
    }
    if (narancs >= 36) {
        narancs = 35;
        plusznarancs()
    }

    document.getElementById("next").disabled = true;
}
//#endregion

//#region kek
function pluszkek(){
    if (piros == kek && sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirossargazoldnarancs.png");
    } else if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezopirossargazold.png");
    } else if (piros == kek && sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirossarganarancs.png");
    } else if (piros == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezopiroszoldnarancs.png");
    } else if (sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezosargazoldnarancs.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezopirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezopiroszold.png");
    } else if (piros == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirosnarancs.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezosargazold.png");
    } else if (sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezosarganarancs.png");
    } else if (zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezozoldnarancs.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezopiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezosarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezozold.png");
    } else if (narancs == kek){
        $("#" + kek).attr("src","mezonarancs.png");
    } else {
        $("#" + kek).attr("src","mezo.png");
    }
    document.getElementById("kekered").innerHTML = `<p id="kekered" style="margin-top: -23px; margin-left: 2.8px;"><span id="kekeredspan">${kek+1}</span></p>`
    console.log(kek+1)

    kek++;

    if (piros == kek && sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpirossargazold.png");
    } else if (piros == kek && sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirossarganarancs.png");
    } else if (piros == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpiroszoldnarancs.png");
    } else if (sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezokekpirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpiroszold.png");
    } else if (piros == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirosnarancs.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokeksargazold.png");
    } else if (sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezokeksarganarancs.png");
    } else if (zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekzoldnarancs.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezokekpiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezokeksarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezokekzold.png");
    } else if (narancs == kek){
        $("#" + kek).attr("src","mezokeknarancs.png");
    } else {
        $("#" + kek).attr("src","mezokek.png");
    }
}

/*function minuszkek(){
    if (piros == kek && sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirossargazoldnarancs.png");
    } else if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezopirossargazold.png");
    } else if (piros == kek && sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirossarganarancs.png");
    } else if (piros == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezopiroszoldnarancs.png");
    } else if (sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezosargazoldnarancs.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezopirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezopiroszold.png");
    } else if (piros == kek && narancs == kek){
        $("#" + kek).attr("src","mezopirosnarancs.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezosargazold.png");
    } else if (sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezosarganarancs.png");
    } else if (zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezozoldnarancs.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezopiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezosarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezozold.png");
    } else if (narancs == kek){
        $("#" + kek).attr("src","mezonarancs.png");
    } else {
        $("#" + kek).attr("src","mezo.png");
    }

    kek--;

    if (piros == kek && sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpirossargazold.png");
    } else if (piros == kek && sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirossarganarancs.png");
    } else if (piros == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpiroszoldnarancs.png");
    } else if (sarga == kek && zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezokekpirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpiroszold.png");
    } else if (piros == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekpirosnarancs.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokeksargazold.png");
    } else if (sarga == kek && narancs == kek){
        $("#" + kek).attr("src","mezokeksarganarancs.png");
    } else if (zold == kek && narancs == kek){
        $("#" + kek).attr("src","mezokekzoldnarancs.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezokekpiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezokeksarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezokekzold.png");
    } else if (narancs == kek){
        $("#" + kek).attr("src","mezokeknarancs.png");
    } else {
        $("#" + kek).attr("src","mezokek.png");
    }
}*/
//#endregion

//#region piros
function pluszpiros(){
    if (kek == piros && sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeksargazoldnarancs.png");
    } else if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokeksargazold.png");
    } else if (kek == piros && sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeksarganarancs.png");
    } else if (kek == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekzoldnarancs.png");
    } else if (sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezosargazoldnarancs.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokeksarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekzold.png");
    } else if (kek == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeknarancs.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezosargazold.png");
    } else if (sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezosarganarancs.png");
    } else if (zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezozoldnarancs.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokek.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezosarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezozold.png");
    } else if (narancs == piros){
        $("#" + piros).attr("src","mezonarancs.png");
    } else {
        $("#" + piros).attr("src","mezo.png");
    }
    document.getElementById("pirosered").innerHTML = `<p id="pirosered" style="margin-top: -23px; margin-left: 4px;"><span id="piroseredspan">${piros+1}</span></p>`
    console.log(piros+1)

    piros++;

    if (kek == piros && sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpirossargazold.png");
    } else if (kek == piros && sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpiroszoldnarancs.png");
    } else if (sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokekpirossarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpiroszold.png");
    } else if (kek == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirosnarancs.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezopirossargazold.png");
    } else if (sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezopirossarganarancs.png");
    } else if (zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezopiroszoldnarancs.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokekpiros.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezopirossarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezopiroszold.png");
    } else if (narancs == piros){
        $("#" + piros).attr("src","mezopirosnarancs.png");
    } else {
        $("#" + piros).attr("src","mezopiros.png");
    }
}

/*function minuszpiros(){
    if (kek == piros && sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeksargazoldnarancs.png");
    } else if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokeksargazold.png");
    } else if (kek == piros && sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeksarganarancs.png");
    } else if (kek == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekzoldnarancs.png");
    } else if (sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezosargazoldnarancs.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokeksarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekzold.png");
    } else if (kek == piros && narancs == piros){
        $("#" + piros).attr("src","mezokeknarancs.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezosargazold.png");
    } else if (sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezosarganarancs.png");
    } else if (zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezozoldnarancs.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokek.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezosarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezozold.png");
    } else if (narancs == piros){
        $("#" + piros).attr("src","mezonarancs.png");
    } else {
        $("#" + piros).attr("src","mezo.png");
    }

    piros--;

    if (kek == piros && sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpirossargazold.png");
    } else if (kek == piros && sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpiroszoldnarancs.png");
    } else if (sarga == piros && zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokekpirossarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpiroszold.png");
    } else if (kek == piros && narancs == piros){
        $("#" + piros).attr("src","mezokekpirosnarancs.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezopirossargazold.png");
    } else if (sarga == piros && narancs == piros){
        $("#" + piros).attr("src","mezopirossarganarancs.png");
    } else if (zold == piros && narancs == piros){
        $("#" + piros).attr("src","mezopiroszoldnarancs.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokekpiros.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezopirossarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezopiroszold.png");
    } else if (narancs == piros){
        $("#" + piros).attr("src","mezopirosnarancs.png");
    } else {
        $("#" + piros).attr("src","mezopiros.png");
    }
}*/
//#endregion

//#region sarga
function pluszsarga(){
    if (kek == sarga && piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpiroszold.png");
    } else if (kek == sarga && piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirosnarancs.png");
    } else if (kek == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekzoldnarancs.png");
    } else if (piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopiroszoldnarancs.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpiros.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekzold.png");
    } else if (kek == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeknarancs.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopiroszold.png");
    } else if (piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirosnarancs.png");
    } else if (zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezozoldnarancs.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokek.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopiros.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezozold.png");
    } else if (narancs == sarga){
        $("#" + sarga).attr("src","mezonarancs.png");
    } else {
        $("#" + sarga).attr("src","mezo.png");
    }
    document.getElementById("sargaered").innerHTML = `<p id="sargaered" style="margin-top: -23px; margin-left: 4px;"><span id="sargaeredspan">${sarga+1}</span></p>`
    console.log(sarga+1)

    sarga++;

    if (kek == sarga && piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpirossargazold.png");
    } else if (kek == sarga && piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpirossarga.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokeksargazold.png");
    } else if (kek == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeksarganarancs.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopirossargazold.png");
    } else if (piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirossarganarancs.png");
    } else if (zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezosargazoldnarancs.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokeksarga.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopirossarga.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezosargazold.png");
    } else if (narancs == sarga){
        $("#" + sarga).attr("src","mezosarganarancs.png");
    } else {
        $("#" + sarga).attr("src","mezosarga.png");
    }
}

/*function minuszsarga(){
    if (kek == sarga && piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpiroszold.png");
    } else if (kek == sarga && piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirosnarancs.png");
    } else if (kek == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekzoldnarancs.png");
    } else if (piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopiroszoldnarancs.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpiros.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekzold.png");
    } else if (kek == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeknarancs.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopiroszold.png");
    } else if (piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirosnarancs.png");
    } else if (zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezozoldnarancs.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokek.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopiros.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezozold.png");
    } else if (narancs == sarga){
        $("#" + sarga).attr("src","mezonarancs.png");
    } else {
        $("#" + sarga).attr("src","mezo.png");
    }

    sarga--;

    if (kek == sarga && piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpirossargazold.png");
    } else if (kek == sarga && piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == sarga && zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpirossarga.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokeksargazold.png");
    } else if (kek == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezokeksarganarancs.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopirossargazold.png");
    } else if (piros == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezopirossarganarancs.png");
    } else if (zold == sarga && narancs == sarga){
        $("#" + sarga).attr("src","mezosargazoldnarancs.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokeksarga.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopirossarga.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezosargazold.png");
    } else if (narancs == sarga){
        $("#" + sarga).attr("src","mezosarganarancs.png");
    } else {
        $("#" + sarga).attr("src","mezosarga.png");
    }
}*/
//#endregion

//#region zold
function pluszzold(){
    if (kek == zold && piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == zold && piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezokekpirossarga.png");
    } else if (kek == zold && piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirosnarancs.png");
    } else if (kek == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeksarganarancs.png");
    } else if (piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirossarganarancs.png");
    } else if (kek == zold && piros == zold){
        $("#" + zold).attr("src","mezokekpiros.png");
    } else if (kek == zold && sarga == zold){
        $("#" + zold).attr("src","mezokeksarga.png");
    } else if (kek == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeknarancs.png");
    } else if (piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezopirossarga.png");
    } else if (piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirosnarancs.png");
    } else if (sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezosarganarancs.png");
    } else if (kek == zold){
        $("#" + zold).attr("src","mezokek.png");
    } else if (piros == zold){
        $("#" + zold).attr("src","mezopiros.png");
    } else if (sarga == zold){
        $("#" + zold).attr("src","mezosarga.png");
    } else if (narancs == zold){
        $("#" + zold).attr("src","mezonarancs.png");
    } else {
        $("#" + zold).attr("src","mezo.png");
    }
    document.getElementById("zoldered").innerHTML = `<p id="zoldered" style="margin-top: -23px; margin-left: 4px;"><span id="zolderedspan">${zold+1}</span></p>`
    console.log(zold+1)

    zold++;

    if (kek == zold && piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == zold && piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezokekpirossargazold.png");
    } else if (kek == zold && piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == zold && piros == zold){
        $("#" + zold).attr("src","mezokekpiroszold.png");
    } else if (kek == zold && sarga == zold){
        $("#" + zold).attr("src","mezokeksargazold.png");
    } else if (kek == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekzoldnarancs.png");
    } else if (piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezopirossargazold.png");
    } else if (piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezopiroszoldnarancs.png");
    } else if (sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezosargazoldnarancs.png");
    } else if (kek == zold){
        $("#" + zold).attr("src","mezokekzold.png");
    } else if (piros == zold){
        $("#" + zold).attr("src","mezopiroszold.png");
    } else if (sarga == zold){
        $("#" + zold).attr("src","mezosargazold.png");
    } else if (narancs == zold){
        $("#" + zold).attr("src","mezozoldnarancs.png");
    } else {
        $("#" + zold).attr("src","mezozold.png");
    }
}

/*function minuszzold(){
    if (kek == zold && piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == zold && piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezokekpirossarga.png");
    } else if (kek == zold && piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirosnarancs.png");
    } else if (kek == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeksarganarancs.png");
    } else if (piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirossarganarancs.png");
    } else if (kek == zold && piros == zold){
        $("#" + zold).attr("src","mezokekpiros.png");
    } else if (kek == zold && sarga == zold){
        $("#" + zold).attr("src","mezokeksarga.png");
    } else if (kek == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeknarancs.png");
    } else if (piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezopirossarga.png");
    } else if (piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirosnarancs.png");
    } else if (sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezosarganarancs.png");
    } else if (kek == zold){
        $("#" + zold).attr("src","mezokek.png");
    } else if (piros == zold){
        $("#" + zold).attr("src","mezopiros.png");
    } else if (sarga == zold){
        $("#" + zold).attr("src","mezosarga.png");
    } else if (narancs == zold){
        $("#" + zold).attr("src","mezonarancs.png");
    } else {
        $("#" + zold).attr("src","mezo.png");
    }

    zold--;

    if (kek == zold && piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == zold && piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezokekpirossargazold.png");
    } else if (kek == zold && piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == zold && sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == zold && piros == zold){
        $("#" + zold).attr("src","mezokekpiroszold.png");
    } else if (kek == zold && sarga == zold){
        $("#" + zold).attr("src","mezokeksargazold.png");
    } else if (kek == zold && narancs == zold){
        $("#" + zold).attr("src","mezokekzoldnarancs.png");
    } else if (piros == zold && sarga == zold){
        $("#" + zold).attr("src","mezopirossargazold.png");
    } else if (piros == zold && narancs == zold){
        $("#" + zold).attr("src","mezopiroszoldnarancs.png");
    } else if (sarga == zold && narancs == zold){
        $("#" + zold).attr("src","mezosargazoldnarancs.png");
    } else if (kek == zold){
        $("#" + zold).attr("src","mezokekzold.png");
    } else if (piros == zold){
        $("#" + zold).attr("src","mezopiroszold.png");
    } else if (sarga == zold){
        $("#" + zold).attr("src","mezosargazold.png");
    } else if (narancs == zold){
        $("#" + zold).attr("src","mezozoldnarancs.png");
    } else {
        $("#" + zold).attr("src","mezozold.png");
    }
}*/
//#endregion

//#region narancs
function plusznarancs(){
    if (kek == narancs && piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpirossargazold.png");
    } else if (kek == narancs && piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokekpirossarga.png");
    } else if (kek == narancs && piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpiroszold.png");
    } else if (kek == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokeksargazold.png");
    } else if (piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirossargazold.png");
    } else if (kek == narancs && piros == narancs){
        $("#" + narancs).attr("src","mezokekpiros.png");
    } else if (kek == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokeksarga.png");
    } else if (kek == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekzold.png");
    } else if (piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezopirossarga.png");
    } else if (piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopiroszold.png");
    } else if (sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezosargazold.png");
    } else if (kek == narancs){
        $("#" + narancs).attr("src","mezokek.png");
    } else if (piros == narancs){
        $("#" + narancs).attr("src","mezopiros.png");
    } else if (sarga == narancs){
        $("#" + narancs).attr("src","mezosarga.png");
    } else if (zold == narancs){
        $("#" + narancs).attr("src","mezozold.png");
    } else {
        $("#" + narancs).attr("src","mezo.png");
    }
    document.getElementById("narancsered").innerHTML = `<p id="narancsered" style="margin-top: -23px; margin-left: 4px;"><span id="narancseredspan">${narancs+1}</span></p>`
    console.log(narancs+1)

    narancs++;

    if (kek == narancs && piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == narancs && piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == narancs && piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == narancs && piros == narancs){
        $("#" + narancs).attr("src","mezokekpirosnarancs.png");
    } else if (kek == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokeksarganarancs.png");
    } else if (kek == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekzoldnarancs.png");
    } else if (piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezopirossarganarancs.png");
    } else if (piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopiroszoldnarancs.png");
    } else if (sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezosargazoldnarancs.png");
    } else if (kek == narancs){
        $("#" + narancs).attr("src","mezokeknarancs.png");
    } else if (piros == narancs){
        $("#" + narancs).attr("src","mezopirosnarancs.png");
    } else if (sarga == narancs){
        $("#" + narancs).attr("src","mezosarganarancs.png");
    } else if (zold == narancs){
        $("#" + narancs).attr("src","mezozoldnarancs.png");
    } else {
        $("#" + narancs).attr("src","mezonarancs.png");
    }
}

/*function minusznarancs(){
    if (kek == narancs && piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpirossargazold.png");
    } else if (kek == narancs && piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokekpirossarga.png");
    } else if (kek == narancs && piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpiroszold.png");
    } else if (kek == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokeksargazold.png");
    } else if (piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirossargazold.png");
    } else if (kek == narancs && piros == narancs){
        $("#" + narancs).attr("src","mezokekpiros.png");
    } else if (kek == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokeksarga.png");
    } else if (kek == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekzold.png");
    } else if (piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezopirossarga.png");
    } else if (piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirosnarancs.png");
    } else if (sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezosarganarancs.png");
    } else if (kek == narancs){
        $("#" + narancs).attr("src","mezokek.png");
    } else if (piros == narancs){
        $("#" + narancs).attr("src","mezopiros.png");
    } else if (sarga == narancs){
        $("#" + narancs).attr("src","mezosarga.png");
    } else if (zold == narancs){
        $("#" + narancs).attr("src","mezozold.png");
    } else {
        $("#" + narancs).attr("src","mezo.png");
    }

    narancs--;

    if (kek == narancs && piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpirossargazoldnarancs.png");
    } else if (kek == narancs && piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokekpirossarganarancs.png");
    } else if (kek == narancs && piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekpiroszoldnarancs.png");
    } else if (kek == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokeksargazoldnarancs.png");
    } else if (piros == narancs && sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirossargazoldnarancs.png");
    } else if (kek == narancs && piros == narancs){
        $("#" + narancs).attr("src","mezokekpirosnarancs.png");
    } else if (kek == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezokeksarganarancs.png");
    } else if (kek == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezokekzoldnarancs.png");
    } else if (piros == narancs && sarga == narancs){
        $("#" + narancs).attr("src","mezopirossarganarancs.png");
    } else if (piros == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezopirosnarancsnarancs.png");
    } else if (sarga == narancs && zold == narancs){
        $("#" + narancs).attr("src","mezosarganarancsnarancs.png");
    } else if (kek == narancs){
        $("#" + narancs).attr("src","mezokeknarancs.png");
    } else if (piros == narancs){
        $("#" + narancs).attr("src","mezopirosnarancs.png");
    } else if (sarga == narancs){
        $("#" + narancs).attr("src","mezosarganarancs.png");
    } else if (zold == narancs){
        $("#" + narancs).attr("src","mezozoldnarancs.png");
    } else {
        $("#" + narancs).attr("src","mezonarancs.png");
    }
}*/
//#endregion

var NumberOfWords = 16252
var NumberOfNumbers = 16252

var words = new BuildArray(NumberOfWords)
var numbers = new BuildArray(NumberOfNumbers)
// Use the following variables to 
// define your random words:
document.writeln("<script type='text/javascript' src='szavak.js'></script>");
document.writeln("<script type='text/javascript' src='szamok.js'></script>");

function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

function PickRandomWord() {
    // Generate a random number between 1 and NumberOfWords
    var rnd = Math.ceil(Math.random() * NumberOfWords)
    // Display the word inside the text box
    document.getElementById("wordboxsz").value = words[rnd] + " (" + numbers[rnd] + ")"

    console.log(words[rnd] + " (" + numbers[rnd] + ")")

    document.getElementById("buttonf").disabled = true;

    randomword = 1;
    if (randomformat == 1 && randomword == 1){
        document.getElementById("talalt").disabled = false;
        document.getElementById("nemtalalt").disabled = false;
        document.getElementById("buttonk").disabled = true;
        randomformat = 0;
        randomword = 0;
    }

}


function ok1() {
    document.getElementById("jatekos1").readOnly = true;
}
function ok2() {
    document.getElementById("jatekos2").readOnly = true;
}
function ok3() {
    document.getElementById("jatekos3").readOnly = true;
}
function ok4() {
    document.getElementById("jatekos4").readOnly = true;
}
function ok5() {
    document.getElementById("jatekos5").readOnly = true;
}

var szavakszama = 3

var szo = new BuildArray(szavakszama)

// Use the following variables to 
// define your random words:
szo[1] = "rajzol"
szo[2] = "mutogat"
szo[3] = "körülír"

function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

function PickRandomFormat() {
    // Generate a random number between 1 and NumberOfWords
    var rnd = Math.ceil(Math.random() * 3)

    // Display the word inside the text box
    document.getElementById("wordboxcsel").value = szo[rnd]

    console.log(szo[rnd])

    randomformat = 1;
    if (randomformat == 1 && randomword == 1){
        document.getElementById("talalt").disabled = false;
        document.getElementById("nemtalalt").disabled = false;
        document.getElementById("buttonk").disabled = true;
        randomformat = 0;
        randomword = 0;
    }

    document.getElementById("buttonk").disabled = true;
}