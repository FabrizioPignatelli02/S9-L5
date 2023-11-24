window.addEventListener("DOMContentLoaded", code);
function code() {
    var User = /** @class */ (function () {
        function User() {
            this.numeroChiamate = 0;
        }
        User.prototype.ricarica = function () {
            return Math.floor(Math.random() * 100);
        };
        User.prototype.chiamata = function () {
            var minuti = Math.floor(Math.random() * 10);
            var costChiamata = minuti * 0.2;
            return costChiamata;
        };
        User.prototype.numero404 = function (ricarica, chiamata) {
            return ricarica - chiamata;
        };
        User.prototype.getNumeroChiamate = function () {
            this.numeroChiamate++;
            return this.numeroChiamate;
        };
        User.prototype.azzeraChiamate = function (nChiamate) {
            return nChiamate = 0;
        };
        return User;
    }());
    var Utente = new User();
    var phone = document.getElementById("phone");
    var paypal = document.getElementById("paypal");
    paypal === null || paypal === void 0 ? void 0 : paypal.addEventListener("click", ricaricaPaypal);
    var ric = 0;
    function ricaricaPaypal() {
        var alertP = document.getElementById("alertP");
        var divAler = document.getElementsByClassName("alert")[0];
        var ricarica = Utente.ricarica();
        console.log("Ricarica di:", ricarica);
        ric = ricarica;
        alertP.innerText = "Ricarica effettuata di " + ric.toString() + "€";
        divAler === null || divAler === void 0 ? void 0 : divAler.classList.add("d-flex");
        divAler === null || divAler === void 0 ? void 0 : divAler.classList.remove("d-none");
    }
    phone === null || phone === void 0 ? void 0 : phone.addEventListener("click", phoneCallVisualize);
    function phoneCallVisualize() {
        var divAler = document.getElementsByClassName("alert")[0];
        divAler === null || divAler === void 0 ? void 0 : divAler.classList.remove("d-block");
        divAler === null || divAler === void 0 ? void 0 : divAler.classList.add("d-none");
        var saldoTot = document.getElementById("saldoTot");
        saldoTot.innerText = "Credito residuo: " + ric.toString() + "€";
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
        var chiamateList = document.getElementById("chiamateList");
        var call = document.getElementById("call");
        call === null || call === void 0 ? void 0 : call.addEventListener("click", avvioChiamata);
        function avvioChiamata() {
            var li = document.createElement("li");
            var p = document.createElement("p");
            var costoChiamata = Utente.chiamata();
            console.log("Costo chiamata:", costoChiamata);
            var nChiamate = Utente.getNumeroChiamate();
            console.log("Index", nChiamate);
            var ricaricaRimanente = Utente.numero404(ric, costoChiamata);
            console.log("Ricarica rimanente:", ricaricaRimanente);
            ric = ricaricaRimanente;
            saldoTot.innerText = "Credito residuo: " + ricaricaRimanente.toString();
            p.innerText = "Chiamata Effettuata!" + " Costo: " + costoChiamata + "€";
            li.appendChild(p);
            chiamateList === null || chiamateList === void 0 ? void 0 : chiamateList.appendChild(li);
        }
    }
}
