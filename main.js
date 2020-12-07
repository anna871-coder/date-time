function pageLoad() {

    let inputElement = document.querySelector("#date");
    let dateValue = new Date();
    let actualDate = dateValue.getFullYear() + "-" + (dateValue.getMonth() + 1) + "-" + (dateValue.getDate() + "").padStart(2, "0");
    console.log(actualDate);
    inputElement.setAttribute("min", actualDate);
}

window.addEventListener("load", pageLoad);
