class Drink {
  #temperature;
  constructor(name, volume, cost){
    this.name = name;
    this.volume = volume;
    this.cost = cost;
  };
  getInfo(){ };
  getTemperature(){ };
  setTemperature(temperature){ };
  #makeDrink() { };
  serveDrink(){ };
};

class Soda extends Drink {
  #temperature;
  constructor(name, volume, cost, flavor) {
    super(name, volume, cost);
    this.flavor = flavor;
  }
  getInfo(){
    return [ this.name, this.volume, this.cost, this.getTemperature() ];
  }
  getTemperature(){
    return this.#temperature;
  }
  setTemperature(temperature){
    this.#temperature = temperature;
  }
  #makeDrink() {
    console.log(this.getInfo() + " is maden");
  }
  serveDrink(){
    this.#makeDrink();
    console.log(this.getInfo() + " served");
  }
}

class Coffee extends Drink {
  #temperature;
  constructor(name, volume, cost, typeOfGrain, typeOfMilk, syrop){
    super(name, volume, cost);
    this.typeOfGrain = typeOfGrain;
    this.typeOfMilk = typeOfMilk;
    this.syrop = syrop;
  }

  getInfo(){
    return [ this.name, this.volume, this.cost, this.getTemperature() ];
  }
  getTemperature(){
    return this.#temperature;
  }
  setTemperature(temperature){
    this.#temperature = temperature;
  }
  #makeDrink() {
    console.log(this.getInfo() + " is maden");
  }
  serveDrink(){
    this.#makeDrink();
    console.log(this.getInfo() + " served");
  }
}

class Tea extends Drink {
  #temperature;
  constructor(name, volume, cost, teaType, typeOfMilk){
      super(name, volume, cost);
      this.teaType = teaType;
      this.typeOfMilk = typeOfMilk;
   }

  getInfo(){
    return [ this.name, this.volume, this.cost, this.getTemperature() ];
  }
  getTemperature(){
    return this.#temperature;
  }
  setTemperature(temperature){
    this.#temperature = temperature;
  }
  #makeDrink() {
    console.log(this.getInfo() + " is maden");
  }
  serveDrink(){
    this.#makeDrink();
    console.log(this.getInfo() + " served");
  }
}

//.4
class CoffeeShop {
  constructor (name, placement, object) {
    this.name = name;
    this.placement = placement;
    this.object = object;
  }

  getInfo() {
    return [ this.name, this.placement ];
  }
  orderDrink() {
    this.object.serveDrink();
  }
}
const blackTea = new Tea("greenField", 400, 90, "black", "no milk");
blackTea.setTemperature(50);
console.log(blackTea.getInfo());
const order = new CoffeeShop("Skurat", "Kazan", blackTea);
order.orderDrink();
console.log(order.getInfo().join(", "));


