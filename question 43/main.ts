function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magician_name = ["Harry Poter", "Radiya", "Subhan"];

let great_magicians = make_great(magician_name);

//console.log(great_magicians);

// show_magician(great_magicians);

// making copy of orignal array
let  copy_magicians_name = magician_name.slice()

let copy_great_magicians = make_great(copy_magicians_name);

//orignal
console.log("Orignal Array\n");

show_magician(magician_name);

//copied
console.log("\nCoppied array\n");

show_magician(copy_great_magicians);