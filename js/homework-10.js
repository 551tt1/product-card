import { Modal} from "./Modal";
import { Form } from "./Form";
class Telephone {
  constructor(model, brand) {
    this.model = model;
    this.brand = brand;
  }

  call() {
    console.log(`${this.brand} ${this.model} is calling!`);
  }
}

class Smartphone extends Telephone {
  constructor(model, brand, hasInternet) {
    super(model, brand);
    this.hasInternet = hasInternet;
  }

  browseInternet() {
    if(this.hasInternet) 
      { 
        console.log("`${this.brand} ${this.model} successfully connected to the Network!");
      }
      else {
        console.log("No Internet");
      }
  }
}

const modal = new Modal("registration-modal");
const form = new Form("registration-form");

document.querySelector("#registration-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if(!form.isValidity()) return;
  const data = form.getAllForms();
  if(data.password !== data.confirmPassword) 
  return;
  const user = {
  ...data,
  createdOn: new Date()
  }
  modal.close();
  form.resetAllForms();
});

