const counterBtnEl = document.querySelector(".number_btn");
const BtnEl = document.querySelector(".number_btn span");



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

const Form = document.querySelector((".inputs_form"))
const input1 = document.querySelector((".input1"))
const input2 = document.querySelector((".input2"))
const tbody = document.querySelector((".tbody"))

let num = 1
Form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (input1.value.trim() === "" || input2.value.trim() === "") {
        return null;
    }
    console.log("ok");

    let tr = document.createElement("tr")
    tr.innerHTML = `
      <td>${num++}</td>
      <td>${input1.value}</td>
      <td>${input2.value}</td>
     `
    tbody.appendChild(tr)
    console.log(tr);


    input1.value = ""
    input2.value = ""

})




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


// 5-masala

const Start = document.querySelector(".Start")
const Center = document.querySelector(".Center")
const End = document.querySelector(".End")
const thin = document.querySelector(".thin")
const Bold = document.querySelector(".Bold")
const Normal = document.querySelector(".Normal")
const Italic = document.querySelector(".Italic")
const text = document.querySelector(".text")

Start.addEventListener("click", () => {
    text.style.fontStyle = "normal";

    text.style.textAlign = "start"
})
Center.addEventListener("click", () => {
    text.style.fontStyle = "normal";

    text.style.textAlign = "center"
})
End.addEventListener("click", () => {
    text.style.fontStyle = "normal";

    text.style.textAlign = "end"
})
thin.addEventListener("click", () => {
    text.style.fontStyle = "normal";

    text.style.fontWeight = "100"
})

Bold.addEventListener("click", () => {
    text.style.fontStyle = "normal";

    text.style.fontWeight = "bold"

})

Normal.addEventListener("click", () => {
    text.style.fontStyle = "normal";

    text.style.fontWeight = "normal"
})

Italic.addEventListener("click", () => {
    text.style.fontStyle = "normal";
    text.style.fontStyle = "italic";

})



