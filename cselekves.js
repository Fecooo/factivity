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

    document.getElementById("talalt").disabled = false;
    document.getElementById("nemtalalt").disabled = false;
    document.getElementById("buttonk").disabled = true;
}