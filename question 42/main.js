function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_grate(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_name = ["Harry Poter", "Radiya", "Subhan"];
var great_magicians = make_grate(magician_name);
//console.log(great_magicians);
show_magician(great_magicians);
