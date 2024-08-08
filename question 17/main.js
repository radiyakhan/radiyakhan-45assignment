var guestlist = ["Ghaniya", "Subhan", "Huda", "Aliza"];
var dontcome = guestlist[2];
console.log(dontcome, "nahi aa sakti");
guestlist.splice(2, 1, "zainab");
console.log("GOOD NEWS! WE HAVE FOUND A BIGGER TABLE FOR DINNER🥳");
guestlist.unshift("Arooba");
guestlist.push("Mifra");
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "Hooriya");
console.log("Updated list of our guest");
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me?")); });
console.log("Oooooo ouuuuuu");
//inform that onlytwo guest canbe invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite only two guest to dinner with me");
//using while-loop to remove guest from the array until only two guest remain
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("Sorry, ".concat(removeguest, ", I can't invite you to dinner\uD83D\uDE14"));
}
//sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 guests");
guestlist.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ",You are still invited to dinner.\uD83E\uDD27")); });
//removing last 2 guest from the list
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
