const inputUsername = document.querySelector(".login-page #username")
const inputPassword = document.querySelector(".login-page #password")
const logInButton = document.querySelector(".login-page button")
const loginPage = document.querySelector(".login-page")
const managmentPage = document.querySelector(".managment-page")
const nameInput = document.querySelector("#name-input")
const surnameInput = document.querySelector("#surname-input")
const employmentInput = document.querySelector("#employment-input")
const salaryInput = document.querySelector("#salary-input")
const addButton = document.querySelector(".add-new-worker button")
const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
const searchButton = document.querySelector(".srch")

inputUsername.value = "admin"
inputPassword.value = "admin"
logInButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputUsername.value === "admin" && inputPassword.value === "admin") {
        loginPage.style.display = "none"
        managmentPage.style.display = "flex"
    } else {
        showAlert("warning", "Wrong Username or Password!!!");
    }

    function showAlert(type, message) {
        const div = document.createElement("div");
        const alert = document.querySelector("#alert")
        div.className = `alert alert-${type}`;
        div.textContent = message;
        alert.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 1500);
    }
})

const workersArray = [];



const worker = {
    id: 1,
    name: "Elmaddin",
    surname: "Mirzayev",
    employment: "Frontend Developer",
    salary: "5000$"
}
workersArray.push(worker)
createElement(worker)


addButton.addEventListener("click", () => {
    const newWorker = {}

    newWorker.id = workersArray.length + 1;
    newWorker.name = nameInput.value;
    newWorker.surname = surnameInput.value;
    newWorker.employment = employmentInput.value;
    newWorker.salary = salaryInput.value + "$";

    workersArray.push(newWorker)
    createElement(newWorker)

    nameInput.value = "";
    surnameInput.value = "";
    employmentInput.value = "";
    salaryInput.value = "";
})

function createElement(obj) {

    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const td4 = document.createElement("td")
    const td5 = document.createElement("td")

    td1.textContent = obj.id;
    td2.textContent = obj.name;
    td3.textContent = obj.surname;
    td4.textContent = obj.employment;
    td5.textContent = obj.salary;

    tbody.appendChild(tr);
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

}

function searchForName(searchText) {
    const searchData = workersArray.filter((item) => {
        return (
            item.name.includes(searchText) ||
            item.surname.includes(searchText)

        );

    });
    
    return searchData;


}

searchButton.addEventListener("change", () => {
    const searchText = searchButton.value;
    const searchData = searchForName(searchText);
    newTable(searchData);
})

function newTable(data) {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    tbody.removeChild(tbody.firstChild);

    createElement(data)
}