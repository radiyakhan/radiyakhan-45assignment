function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_name = ["Harry Poter", "Radiya", "Subhan"];
var great_magicians = make_great(magician_name);
//console.log(great_magicians);
// show_magician(great_magicians);
// making copy of orignal array
var copy_magicians_name = magician_name.slice();
var copy_great_magicians = make_great(copy_magicians_name);
//orignal
console.log("Orignal Array\n");
show_magician(magician_name);
//copied
console.log("\nCoppied array\n");
show_magician(copy_great_magicians);
