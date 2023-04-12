Классы
class ElectricalDevice {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  // метод, который определяет прибор как включенный в розетку
  plugIn() {
    console.log(this.name + "it is plugged!");
    this.isPlugged = true;
  }
  
  // метод, который определяет прибор как выключеный из розетки
  unplug() {
    console.log(this.name + "it is unplugged!");
    this.isPlugged = false;
  }
}

// Прибор 1
class Lamp extends ElectricalDevice {
  constructor (name, power, bulbType) {
    super(name, power);
    this.bulbType = bulbType;
    this.isPlugged = true;
  }
}

// Прибор 2
class Computer extends ElectricalDevice {
  constructor(name, power, type, functionality) {
    super(name, power); 
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", 25, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", 410, "stationary", "for work");

// отключить лампу из розетки
tableLamp.unplug();

// включить homePC в розетку
homePC.plugIn();

// результат
console.log(homePC)
console.log(tableLamp)