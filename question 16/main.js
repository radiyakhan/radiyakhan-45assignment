var guestlist = ["Ghaniya", "Subhan", "Huda", "Aliza"];
var dontcome = guestlist[2];
console.log(dontcome, "nahi aa sakti");
guestlist.splice(2, 1, "zainab");
console.log("GOOD NEWS! WE HAVE FOUND A BIGGER TABLE FOR DINNER");
// add new person to array in 0 index
guestlist.unshift("Arooba");
// add new person to array in the end
guestlist.push("Mifra");
// get new person in the middle
var middleindex = Math.floor(guestlist.length / 2);
//adding a new person in middle index
guestlist.splice(middleindex, 0, "Hooriya");
console.log("Updated list of our guest");
// guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me?`));
