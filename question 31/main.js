var username = ["subhan", "ghaniya", "arooba", "zainab"];
username = [];
if (username.length === 0) {
    console.log("Your array is empty we need to find some user!");
}
else {
    username.forEach(function (oneuser) {
        if (oneuser === "subhan") {
            console.log("Hello ".concat(oneuser, ", would you like to see a status report"));
        }
        else {
            console.log("Hello ".concat(oneuser, ", thank you for logging in again"));
        }
    });
}
