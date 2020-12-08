function pageLoad() {

    let inputElement = document.querySelector("#date");
    let dateValue = new Date();
    let year = dateValue.getFullYear();
    let month = (dateValue.getMonth() + 1 + "").padStart(2, "0");
    let day = (dateValue.getDate() + "").padStart(2, "0");
    let actualDate = `${year}-${month}-${day}`;
    console.log(actualDate);
    inputElement.setAttribute("min", actualDate);
}

window.addEventListener("load", pageLoad);
