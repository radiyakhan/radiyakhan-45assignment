var current_users = ["Subhan", "Ghaniya", "Arooba", "Zainab", "Aliza"];
var new_users = ["Huda", "mifra", "ghaniya", "zainab", "suhaira"];
new_users.forEach(function (new_oneuser) {
    var ourcondition = (current_users.some(function (current_oneusers) { return current_oneusers.toLowerCase() === new_oneuser.toLowerCase(); }));
    if (ourcondition) {
        console.log("Sorry ".concat(new_oneuser, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_oneuser, " is available!"));
    }
});
// for (let i = 0 ; i <= 500 ; i++){
//     console.log("subbu🥺❤️");
// }
