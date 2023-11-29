// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;

  Vehicle.prototype.drive = function (kmh) {
    return `Polly driving at ${kmh} kilometers per hour`
  };

  Vehicle.prototype.stop = function () {
    return 'Polly has stopped';
  };
}

function Train(driver) {
  Vehicle.call(this, driver);
}
Train.prototype = Object.create(Vehicle.prototype);
Train.prototype.constructor = Train;

function Truck(driver) {
  Vehicle.call(this, driver);

  Truck.prototype.loadCargo = function (cargo) {
    
  };
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.unloadCargo = function () {
   
};
// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
