var phone = document.getElementById("phone");
phone === null || phone === void 0 ? void 0 : phone.addEventListener("click", phoneCallVisualize);
function phoneCallVisualize() {
    var appsContainer = document.getElementById("appsContainer");
    var downApp = document.getElementById("downApp");
    var smartphone = document.getElementById("smartphone");
    appsContainer === null || appsContainer === void 0 ? void 0 : appsContainer.classList.add("d-none");
    downApp === null || downApp === void 0 ? void 0 : downApp.classList.add("d-none");
    smartphone.style.background = "none";
    smartphone.style.backgroundColor = "white";
    var rubrica = document.getElementById("rubrica");
    rubrica === null || rubrica === void 0 ? void 0 : rubrica.classList.add("d-block");
    rubrica === null || rubrica === void 0 ? void 0 : rubrica.classList.remove("d-none");
    var call = document.getElementById("call");
    call === null || call === void 0 ? void 0 : call.addEventListener("click", avvioChiamata);
}
