"use strict";
// making a function 
function make_shirt(size = "Large", printmessage = "I love TypeScript") {
    console.log(`creating a ${size} shirt with the ${printmessage} prints on shirt`);
}
// calling a function
make_shirt();
// making a function now with medium size and default message
make_shirt("Medium");
make_shirt("i love jaavascript");
// calling a function with small size and different message
make_shirt("small", "I love javascript");
