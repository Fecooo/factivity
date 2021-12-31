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