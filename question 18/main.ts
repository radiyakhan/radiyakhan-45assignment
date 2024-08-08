//making a array of countries and print its orignal order
let Countriestovisit: string[] = ["Denmark", "Brazil", "China", "Turkey", "Paris"];
console.log("orignal order:", Countriestovisit);

// print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical order:", [...Countriestovisit].sort());

//show that the array is still in the orignal order
console.log("still in orignal order:", Countriestovisit);

//print a array in reverse order without modifying the actual array list
console.log("Reverse order", [...Countriestovisit].reverse());

//show that the array is still in the orignal order
console.log("still in orignal order:", Countriestovisit);

//we have change the orignal array order now 
console.log("orignal array reversed", Countriestovisit.reverse());

//print the array to show that its back to its orignal order
console.log("back to orignal order:", Countriestovisit.reverse());

// print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical order:", Countriestovisit.sort());

//we have change again the orignal array order now in reverse order again
console.log("orignal array reversed again", Countriestovisit.reverse());