let current_users = ["Subhan","Ghaniya","Arooba","Zainab","Aliza"];

let new_users = ["Huda","mifra","ghaniya","zainab","suhaira"];

new_users.forEach(new_oneuser => {
    let ourcondition = (current_users.some(current_oneusers => current_oneusers.toLowerCase()===new_oneuser.toLowerCase()))
    if(ourcondition){
        console.log(`Sorry ${new_oneuser} is already taken!`);
    }else{
        console.log(`This username ${new_oneuser} is available!`);
    }
})
















// for (let i = 0 ; i <= 500 ; i++){
//     console.log("subbu🥺❤️");
    
// }