
//Part 1 - Instantiation

//Create an object literal called "myPackage" that has the following properties:
//a "height" of 100 units
//a "width" of 200 units
//a "length" of 250 units
//"numOfItems" which stores the number of items in the box
//"contents" an empty array which will contain the items of the package. 


var myPackage = {
	height: 100, 
	width: 200, 
	length: 250, 
	numOfItems: 0,
	contents: []
}
//Extra Credit
//a function "changeHeight" => changes the package's height
//a function "changeWidth" => changes the package's length
//a function "changeLength" => changes the package's length
//a function "getVolume" => calculates and returns the package's volume
function changeHeight(height){
    myPackage.height = height; 
};
function changeWidth(width){
    myPackage.width = width; 
};
function changeLength(length){
    myPackage.length = length; 
};
function getVolume(volume){
    myPackage.numOfItems = volume; 
};

//Part 2 - Accessing values
//Using dot notation, add the property "color" and assign a string to it.
//Can you accomplish the same task using bracket notation??
myPackage.color = "Red"; 
myPackage.color = "Blue"; 
myPackage['color'] = "Yellow";


//Using dot notation, add the property "serialNumber" and assign a number to it.
//Can you accomplish the same task using bracket notation?? 
myPackage.serialNumber = 33; 
myPackage['serialNumber'] = 22; 
var items = ["Calculators", "Rulers", "Math Textbooks"];

//Using whichever method, access "contents" of "myPackage" and update it with "items"
myPackage['contents'] = items;
 
//Using whichever method, access "numOfItems" of "myPackage" and manually update it with how many "items" there are
myPackage['numOfItems'] = items.length; 

//Add another item to the "contents" array called "Teddy Bear".
var contents = [];
contents['contents'] = 'TeddyBear';
console.log(contents); 
// not sure if TeddyBear just replaced the items array or appended...so..
// maybe  [[items], ["Teddy Bear"]]



//Part 3 - Looping
//Using a proper loop (for or for-in??) log all KEYS of the object "myPackage"
for(key in myPackage){
    console.log(key); 
}


//Using a proper loop (for or for-in??) log all items in the "contents"

for(item in contents){
    console.log(item);
}


