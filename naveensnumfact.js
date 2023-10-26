let inputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");


function getfact(event) {
    let number = inputEl.value;
    let url = "https://apis.ccbp.in/numbers-fact?number=" + number;
    if (event.key === "Enter") {
        if (inputEl.value === "") {
            alert("enter the number")
        } else {
            let option = {
                method: "get",
            }
            fetch(url, option)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    factEl.textContent = data.fact;
                })
        }
    }
}



inputEl.addEventListener("keydown", getfact)