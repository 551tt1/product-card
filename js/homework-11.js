class Drink {
  #temperature;
  constructor(name, volume, cost){
    if (new.target === Drink) {
      throw new Error("Drink is abstract");
    }
    this.name = name;
    this.volume = volume;
    this.cost = cost;
  };
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
    console.log(this.name + " is made");
  }
  serveDrink(){
    this.#makeDrink();
    console.log(this.getInfo() + " served");
  }
};

class Soda extends Drink {
  constructor(name, volume, cost, flavor) {
    super(name, volume, cost);
    this.flavor = flavor;
  }
  getInfo() {
    return [ this.name, this.volume, this.cost, this.getTemperature(), this. flavor ];
  }
}

class Coffee extends Drink {
  constructor(name, volume, cost, typeOfGrain, typeOfMilk, syrop){
    super(name, volume, cost);
    this.typeOfGrain = typeOfGrain;
    this.typeOfMilk = typeOfMilk;
    this.syrop = syrop;
  }
  getInfo() {
    return [ this.name, this.volume, this.cost, this.getTemperature(), this.typeOfGrain, this.typeOfMilk, this.syrop ];
  }
}

class Tea extends Drink {
  constructor(name, volume, cost, teaType, typeOfMilk){
      super(name, volume, cost);
      this.teaType = teaType;
      this.typeOfMilk = typeOfMilk;
   }
   getInfo() {
    return [ this.name, this.volume, this.cost, this.getTemperature(), this.teaType, this.typeOfMilk ];
   }
}

//.4
class CoffeeShop {
  constructor (name, placement) {
    this.name = name;
    this.placement = placement;
  }

  getInfo() {
    return [ this.name, this.placement ];
  }
  orderDrink(drink) {
    drink.serveDrink();
  }
}
const drink = new Tea("greenField", 400, 90, "black", "no milk");
drink.setTemperature(50);
console.log(drink.getInfo());
const shop = new CoffeeShop("Skurat", "Kazan");
shop.orderDrink(drink);
console.log(shop.getInfo().join(", "));


