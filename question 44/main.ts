// define a function with a rest parameter that accept items argumentsrepresenting our sandwich
function makesandwich(...item: string[]){
    console.log("\nMaking a Sandwich with the followings items\n");
    item.forEach(singleitems => console.log(singleitems));
    console.log("\nNow enjoy Sandwich");
}
// call te function 3 times with 3 different number of arrguments
makesandwich("Chicken","mayo","garlic sauce","cheese");
makesandwich("beef","ketchap","mayo","cheese","onion","tomato");
makesandwich("bread","butter");