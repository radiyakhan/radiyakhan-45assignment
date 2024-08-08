let guestlist = ["Ghaniya","Subhan", "Huda", "Aliza"];
let dontcome = guestlist[2];
console.log(dontcome, "nahi aa sakti");
guestlist.splice(2, 1, "zainab");
guestlist.forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with me?`));