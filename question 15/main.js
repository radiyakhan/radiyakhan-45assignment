var guestlist = ["Ghaniya", "Subhan", "Huda", "Aliza"];
var dontcome = guestlist[2];
console.log(dontcome, "nahi aa sakti");
guestlist.splice(2, 1, "zainab");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would you like to dinner with me?")); });
