document.addEventListener('DOMContentLoaded', () => {
    
    const emailInput = document.getElementById('email-input');
    const form = document.querySelector('.subscribe-mailing-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailValue = emailInput.value.trim();

        if (emailValue) {
            console.log(`email: ${emailValue}`);
        } else {
            console.log('Введите email');
        }
    });

    const openModalBtn = document.querySelector("#registration-modal-btn");
    const closeModalBtn = document.querySelector("#close-modal-btn");
    const overlay = document.querySelector('.overlay');

    openModalBtn.addEventListener('click', ()=>{
      overlay.classList.add('modal-showed');
    });
    closeModalBtn.addEventListener('click', ()=>{
      overlay.classList.remove('modal-showed');
    });

    const regForm = document.querySelector('#registration-form');
    
    regForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      if(!regForm.checkValidity() ) {
        return;
      };

      const password = document.getElementById('modal-password').value;
      const confirmPassword = document.getElementById('modal-confirm-password').value;

      if (password !== confirmPassword) {
        alert("Регистрация отклонена!")
        return;
      }
      const user = {                    
        name: document.getElementById('modal-name').value,
        surname: document.getElementById('modal-surname').value,
        birthdate: document.getElementById('modal-birthdate').value,  
        login: document.getElementById('modal-login').value,
        password: document.getElementById('modal-password').value,
       createdOn: new Date()
      };
      console.log(user);

      overlay.classList.remove('modal-showed');

      regForm.reset();
    });
});

