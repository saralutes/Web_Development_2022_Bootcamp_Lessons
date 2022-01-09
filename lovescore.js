function loveCalc() {
    name1 = prompt("What is your name?");
    name2 = prompt("What is your crush's name?");
    var loveScore = ((Math.random() * 100) + 1);
    loveScore = Math.floor(loveScore);
    window.alert(name1 + " you are " + loveScore + "% compatible with " + name2);

}

loveCalc();
