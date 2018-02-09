//for loop

var bottles;
            document.write("A longer example that I removed the alert from, because I didn't want anyone to recieve too many alerts." + "<br />" + "<br />");
			document.write("Bottles of Beer on the Wall" + "<br />" + "<br />");
         
            for(bottles = 97; bottles > 79; bottles= bottles-1){
               document.write("Current number of Bottles: " + bottles );
               document.write("<br />");
            }


//indexed array

var beerType = new Array ();
	beerType [0]= " Ale";
	beerType [1]= " IPA";
	beerType [2]= " Sour";
	beerType [3]= " Stout";
	beerType [4]= " Lambic";

		document.write("Some different types of beers: " + beerType.sort());
		document.write("<br />");

//indexed array

var breweries = new Array ();
	breweries [0]= " Ranger Creek";
	breweries [1]= " Freetail";
	breweries [2]= " Blue Star";
	breweries [3]= " Alamo Beer";
	breweries [4]= " Busted Sandal";

		document.write("Local Breweries: " + breweries.length);
		document.write("<br />");
		document.write(breweries.sort());

//for loop
			
for(var a=99; a>98; a= a-1){
	alert(a + " bottles of beer on the wall, " + a + " bottles of beer. Take one down, pass it around...");
}


//while loop

var b= 98;
while( b>97){
	alert(b + " bottles of beer on the wall, " + b + " bottles of beer. Take one down, pass it around...");
	b= b-1;
}
