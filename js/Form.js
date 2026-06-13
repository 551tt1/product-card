export class Form {
  constructor(id) {
    this.id = id;
    this.form = document.getElementById(this.id);
  };

  getAllForms(){
    const formData = new FormData(this.form);
    return  {
      name: formData.get("name"),
      surname: formData.get("surname"),
      birthdate: formData.get("birthdate"),
      login: formData.get("login"),
      password: formData.get("password"),
      confirmPassword: formData.get('confirm-password'),
    };
  }
  isValidity() {
    return this.form.checkValidity();
  }
  resetAllForms() {
    this.form.reset();
  }
}

