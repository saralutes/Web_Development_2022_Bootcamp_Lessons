var numberOfBottles = 99

while ((numberOfBottles >= 1) && (numberOfBottles <= 99)) {
    var bottleWord = "bottles";
    
    if (numberOfBottles > 1) {
        lyrics();
    }
    else if (numberOfBottles === 1) {
        var bottleWord = "bottle"
        lyrics();
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store, buy some more, 99 bottles of beer on the wall.")
    } 

}

function lyrics() {

	if (numberOfBottles === 2) {
		console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord + " of beer, take one down, pass it around,");
	    numberOfBottles--;
        console.log(numberOfBottles + " bottle of beer on the wall.");
	}
	else {
	    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord + " of beer, take one down, pass it around,");
	    numberOfBottles--;
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
}
