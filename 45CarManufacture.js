
console.log(make_car("Toyota", "1998", "Fenders", "Spoilers"));

function make_car(manufacturer, model, ...accessories) {
    let objCar = {};
    objCar.manufacturer = manufacturer;
    objCar.model = model;
    accessories.forEach(item => {
        objCar[item] = item;
    });
    return objCar;
}