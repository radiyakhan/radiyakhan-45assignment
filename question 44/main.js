// define a function with a rest parameter that accept items argumentsrepresenting our sandwich
function makesandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich with the followings items\n");
    item.forEach(function (singleitems) { return console.log(singleitems); });
    console.log("\nNow enjoy Sandwich");
}
// call te function 3 times with 3 different number of arrguments
makesandwich("Chicken", "mayo", "garlic sauce", "cheese");
makesandwich("beef", "ketchap", "mayo", "cheese", "onion", "tomato");
makesandwich("bread", "butter");
