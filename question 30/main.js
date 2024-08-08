var username = ["subhan", "ghaniya", "admin", "arooba", "zainab"];
username.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", thank you for logging in again"));
    }
});
