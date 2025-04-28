const counterBtnEl = document.querySelector(".number_btn");
const BtnEl = document.querySelector(".number_btn span");

let offset = JSON.parse(localStorage.getItem("counter")) || 0;
BtnEl.innerHTML = offset;

counterBtnEl.addEventListener("click", () => {
    offset++;
   BtnEl.innerHTML = offset;

})
counterBtnEl.addEventListener("dblclick", () => {
    offset = 0;
    BtnEl.innerHTML = offset;
})


//=======================================================================================
const SeemoreEl = document.querySelector(".user_btn");
const userInfo = document.querySelector(".user_info");

SeemoreEl.innerHTML = "See more";
let count = 0;
SeemoreEl.addEventListener("click", () => {
    count++;
    userInfo.classList.toggle("show");
    if (count % 2 === 0) {
        SeemoreEl.innerHTML = "See more";
    } else {
        SeemoreEl.innerHTML = "See less";
    }
})


// =====================================================================================
const form = document.querySelector('.inputs_form');
const inputs = form.querySelectorAll('input');
const tbody = document.querySelector('tbody');

let item = 0;

form.addEventListener('submit', function(Event) {
  const firstName = !inputs.value.trim();
  const lastName = !inputs.value.trim();

  if (firstName && lastName) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item++}</td>
      <td>${firstName}</td>
      <td>${lastName}</td>
    `;
    tbody.appendChild(tr);
    

    inputs.value = '';
    inputs.value = '';
  }
});


//===================================================================
const loginEl = document.querySelector(".login");
const passvordEl = document.querySelector(".login_text");

loginEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (loginEl.children[0].value.trim() === "" || loginEl.children[1].value.trim() === "") {
        return null;
    }
    if (loginEl.children[0].value === "john32" && loginEl.children[1].value === "123456") {
        passvordEl.innerHTML = "Hush kelibsiz"
    } else {
        passvordEl.innerHTML = "Bunday foydalanuvchi mavjud emas yoki parol xato";
    }
    loginEl.children[0].value = "";
    loginEl.children[1].value = "";
})

