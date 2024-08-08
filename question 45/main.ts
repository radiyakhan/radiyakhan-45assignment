function create_car(manufacture, model, ...options){
    let car = {
        manufacture: manufacture,
        model: model
    };
    // add aditional options to the car objects
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim(); 
    });
    return car;
}

let my_car = create_car("toyota", "corolla", "color:Black","sunroof:True","year:2024")
console.log(my_car);
