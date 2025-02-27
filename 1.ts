enum CustomDocumentType {
	Passport = 'Паспорт',
	DriverLicense = 'Водительское удостоверение',
	IDCard = 'ID-карта',
}

interface Owner {
	lastName: string
	firstName: string
	middleName: string
	birthDate: Date
	documentType: CustomDocumentType
	documentSeries: string
	documentNumber: string
	displayInfo(): void
}

class Person implements Owner {
	constructor(
		public lastName: string,
		public firstName: string,
		public middleName: string,
		public birthDate: Date,
		public documentType: CustomDocumentType,
		public documentSeries: string,
		public documentNumber: string
	) {}
	displayInfo(): void {
		console.log(`Владелец: ${this.lastName} ${this.firstName} ${this.middleName}, Дата рождения: ${this.birthDate.toDateString()}, Документ: ${this.documentType} ${this.documentSeries} ${this.documentNumber}`)
	}
}

interface Vehicle {
	brand: string
	model: string
	year: number
	vin: string
	registrationNumber: string
	owner: Owner
	displayVehicleInfo(): void
}

class Transport implements Vehicle {
	constructor(
		public brand: string,
		public model: string,
		public year: number,
		public vin: string,
		public registrationNumber: string,
		public owner: Owner
	) {}
	displayVehicleInfo(): void {
		console.log(`Транспортное средство: ${this.brand} ${this.model}, Год выпуска: ${this.year}, VIN: ${this.vin}, Рег. номер: ${this.registrationNumber}`)
	}
}

enum CarBodyType {
	Sedan = 'Седан',
	SUV = 'Внедорожник',
	Coupe = 'Купе',
}

enum CarClass {
	Economy = 'Эконом',
	Business = 'Бизнес',
	Premium = 'Премиум',
}

interface Car extends Vehicle {
	bodyType: CarBodyType
	carClass: CarClass
}

class Automobile extends Transport implements Car {
	constructor(
		brand: string,
		model: string,
		year: number,
		vin: string,
		registrationNumber: string,
		owner: Owner,
		public bodyType: CarBodyType,
		public carClass: CarClass
	) {
		super(brand, model, year, vin, registrationNumber, owner)
	}
	displayVehicleInfo(): void {
		super.displayVehicleInfo()
		console.log(`Тип кузова: ${this.bodyType}, Класс: ${this.carClass}`)
	}
}

interface Motorbike extends Vehicle {
	frameType: string
	isForSport: boolean
}

class Motorcycle extends Transport implements Motorbike {
	constructor(
		brand: string,
		model: string,
		year: number,
		vin: string,
		registrationNumber: string,
		owner: Owner,
		public frameType: string,
		public isForSport: boolean
	) {
		super(brand, model, year, vin, registrationNumber, owner)
	}
	displayVehicleInfo(): void {
		super.displayVehicleInfo()
		console.log(`Тип рамы: ${this.frameType}, Спортивный: ${this.isForSport ? 'Да' : 'Нет'}`)
	}
}

interface VehicleStorage<T extends Vehicle> {
	creationDate: Date
	vehicles: T[]
	getAllVehicles(): T[]
}

class Garage<T extends Vehicle> implements VehicleStorage<T> {
	vehicles: T[] = []
	constructor(public creationDate: Date) {}
	getAllVehicles(): T[] {
		return this.vehicles
	}
	addVehicle(vehicle: T): void {
		this.vehicles.push(vehicle)
	}
}

const owner = new Person(
	'Иванов',
	'Иван',
	'Иванович',
	new Date(1985, 6, 15),
	CustomDocumentType.Passport,
	'1234',
	'567890'
)

const car = new Automobile(
	'Toyota',
	'Camry',
	2022,
	'JTDBE32K502109123',
	'А123ВС77',
	owner,
	CarBodyType.Sedan,
	CarClass.Business
)

const bike = new Motorcycle(
	'Yamaha',
	'YZF-R1',
	2021,
	'JYARN23E5DA004321',
	'Б456СД78',
	owner,
	'Спортивная',
	true
)

const garage = new Garage<Vehicle>(new Date())
garage.addVehicle(car)
garage.addVehicle(bike)

console.log('--- Владелец ---')
owner.displayInfo()

console.log('--- Автомобиль ---')
car.displayVehicleInfo()

console.log('--- Мотоцикл ---')
bike.displayVehicleInfo()

console.log('--- Список ТС в гараже ---')
const vehicles = garage.getAllVehicles()
vehicles.forEach(vehicle => vehicle.displayVehicleInfo())
