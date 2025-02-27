var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CustomDocumentType;
(function (CustomDocumentType) {
    CustomDocumentType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    CustomDocumentType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    CustomDocumentType["IDCard"] = "ID-\u043A\u0430\u0440\u0442\u0430";
})(CustomDocumentType || (CustomDocumentType = {}));
var Person = /** @class */ (function () {
    function Person(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthDate = birthDate;
        this.documentType = documentType;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }
    Person.prototype.displayInfo = function () {
        console.log("\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446: ".concat(this.lastName, " ").concat(this.firstName, " ").concat(this.middleName, ", \u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(this.birthDate.toDateString(), ", \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442: ").concat(this.documentType, " ").concat(this.documentSeries, " ").concat(this.documentNumber));
    };
    return Person;
}());
var Transport = /** @class */ (function () {
    function Transport(brand, model, year, vin, registrationNumber, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
    Transport.prototype.displayVehicleInfo = function () {
        console.log("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E: ".concat(this.brand, " ").concat(this.model, ", \u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ").concat(this.year, ", VIN: ").concat(this.vin, ", \u0420\u0435\u0433. \u043D\u043E\u043C\u0435\u0440: ").concat(this.registrationNumber));
    };
    return Transport;
}());
var CarBodyType;
(function (CarBodyType) {
    CarBodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    CarBodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    CarBodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
})(CarBodyType || (CarBodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
})(CarClass || (CarClass = {}));
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
        _this.bodyType = bodyType;
        _this.carClass = carClass;
        return _this;
    }
    Automobile.prototype.displayVehicleInfo = function () {
        _super.prototype.displayVehicleInfo.call(this);
        console.log("\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430: ".concat(this.bodyType, ", \u041A\u043B\u0430\u0441\u0441: ").concat(this.carClass));
    };
    return Automobile;
}(Transport));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(brand, model, year, vin, registrationNumber, owner, frameType, isForSport) {
        var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
        _this.frameType = frameType;
        _this.isForSport = isForSport;
        return _this;
    }
    Motorcycle.prototype.displayVehicleInfo = function () {
        _super.prototype.displayVehicleInfo.call(this);
        console.log("\u0422\u0438\u043F \u0440\u0430\u043C\u044B: ".concat(this.frameType, ", \u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439: ").concat(this.isForSport ? 'Да' : 'Нет'));
    };
    return Motorcycle;
}(Transport));
var Garage = /** @class */ (function () {
    function Garage(creationDate) {
        this.creationDate = creationDate;
        this.vehicles = [];
    }
    Garage.prototype.getAllVehicles = function () {
        return this.vehicles;
    };
    Garage.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    return Garage;
}());
var owner = new Person('Иванов', 'Иван', 'Иванович', new Date(1985, 6, 15), CustomDocumentType.Passport, '1234', '567890');
var car = new Automobile('Toyota', 'Camry', 2022, 'JTDBE32K502109123', 'А123ВС77', owner, CarBodyType.Sedan, CarClass.Business);
var bike = new Motorcycle('Yamaha', 'YZF-R1', 2021, 'JYARN23E5DA004321', 'Б456СД78', owner, 'Спортивная', true);
var garage = new Garage(new Date());
garage.addVehicle(car);
garage.addVehicle(bike);
console.log('--- Владелец ---');
owner.displayInfo();
console.log('--- Автомобиль ---');
car.displayVehicleInfo();
console.log('--- Мотоцикл ---');
bike.displayVehicleInfo();
console.log('--- Список ТС в гараже ---');
var vehicles = garage.getAllVehicles();
vehicles.forEach(function (vehicle) { return vehicle.displayVehicleInfo(); });
