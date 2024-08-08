let guestlist = ["Ghaniya","Subhan", "Huda", "Aliza"];

let dontcome = guestlist[2];

console.log(dontcome, "nahi aa sakti");

guestlist.splice(2, 1, "zainab");

console.log("GOOD NEWS! WE HAVE FOUND A BIGGER TABLE FOR DINNER🥳");

guestlist.unshift("Arooba");

guestlist.push("Mifra");

let middleindex: number = Math.floor(guestlist.length / 2);

guestlist.splice(middleindex, 0, "Hooriya");

console.log("Updated list of our guest");

guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me?`));

console.log("Oooooo ouuuuuu");

//inform that onlytwo guest canbe invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite only two guest to dinner with me");

//using while-loop to remove guest from the array until only two guest remain
while(guestlist.length > 2){
    let removeguest = guestlist.pop();
    console.log(`Sorry, ${removeguest}, I can't invite you to dinner😔`)
}

//sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 guests");
guestlist.forEach(lasttwo => console.log(`luckly ${lasttwo},You are still invited to dinner.🤧`));

//removing last 2 guest from the list
guestlist.pop();
guestlist.pop();

console.log("Empty List:", guestlist);