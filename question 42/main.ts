function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_grate(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magician_name = ["Harry Poter", "Radiya", "Subhan"];

let great_magicians = make_grate(magician_name);

//console.log(great_magicians);

show_magician(great_magicians);