import { loadingWindow } from "../js/loadingWindow.js";

if (JSON.parse(localStorage.getItem("users")) !== null) {
  console.log("already exist");
  const users = JSON.parse(localStorage.getItem("users"));
  renderUsers(users);
} else {
  const loading = new loadingWindow();
  fetch("./users.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка загрузки");
      }
      return response.json();
    })
    .then((users) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          loading.windowRemove();
          localStorage.setItem("users", JSON.stringify(users));
          renderUsers(users);
          resolve(users);
        }, 2000);
      });
    })
    .catch((error) => {
      alert("Ошибка при загрузке данных:", error);
      loading.windowRemove();
    });
}

function renderUsers(users) {
  const wrap = document.querySelector(".user-cards-wrapper");
  if (users.length === 0) {
    wrap.innerHTML = "";
    return;
  } else {
    wrap.innerHTML = "";
    users.forEach((user) => {
      const cardHTML = `
      <div class="user-card">
        <p class="user-card__text">ID: ${user.id} </p>
        <p class="user-card__text">Name: ${user.name} </p>
        <p class="user-card__text">Surname: ${user.surname} </p>
        <p class="user-card__text">Email: ${user.email} </p>
        <p class="user-card__text">Age: ${user.age} </p>
        <button class="delete-this-card-btn" data-id='${user.id}'>Delete this card</button>
      </div>
      `;
      wrap.insertAdjacentHTML("beforeend", cardHTML);
    });
    const deleteBtns = document.querySelectorAll(".delete-this-card-btn");
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", (event) => {
        let idCard = +event.target.dataset.id;
        const users = JSON.parse(localStorage.getItem("users"));
        if (users === null) {
          renderUsers([]);
          return;
        }
        const newUsers = users.filter((user) => {
          return user.id !== idCard;
        });
        localStorage.setItem("users", JSON.stringify(newUsers));
        renderUsers(newUsers);
      });
    });
  }
}
const deleteAllCardsBtn = document.querySelector("#delete-all-cards-btn");
deleteAllCardsBtn.addEventListener("click", () => {
  localStorage.setItem("users", JSON.stringify([]));
  renderUsers([]);
});
const getAllCardsBtn = document.querySelector("#get-all-cards-btn");
getAllCardsBtn.addEventListener("click", () => {
  console.log(JSON.parse(localStorage.getItem("users")));
});
