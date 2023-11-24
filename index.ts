window.addEventListener("DOMContentLoaded", code)




function code(){


    
    interface Smartphone{
        carica:number;
        numeroChiamate:number
    }

    class User implements Smartphone{
        carica: number;
        numeroChiamate: number = 0;

        ricarica(){
            return Math.floor(Math.random()*100)
        }

        chiamata(){
            let minuti:number = Math.floor(Math.random()*10)
            let costChiamata = minuti * 0.2
            return costChiamata
        }

        numero404(ricarica, chiamata){
            return ricarica - chiamata
        }

        getNumeroChiamate(){
            this.numeroChiamate++
            return this.numeroChiamate
        }

        azzeraChiamate(nChiamate){
            return nChiamate = 0
        }
    }
    const Utente = new User();

    const phone = document!.getElementById("phone") as HTMLAnchorElement | null;

    const paypal = document.getElementById("paypal") as HTMLAnchorElement | null;

    paypal?.addEventListener("click", ricaricaPaypal)

    let ric = 0;

    function ricaricaPaypal(){

        const alertP = document.getElementById("alertP") as HTMLParagraphElement | null
        const divAler = document.getElementsByClassName("alert")[0] as HTMLDivElement | null

        let ricarica = Utente.ricarica()
        console.log("Ricarica di:", ricarica)

        ric = ricarica;

        alertP!.innerText= "Ricarica effettuata di "+ ric.toString() + "€"
        divAler?.classList.add("d-flex")
        divAler?.classList.remove("d-none")

        
    }

    phone?.addEventListener("click", phoneCallVisualize)

    
    function phoneCallVisualize(){

        const divAler = document.getElementsByClassName("alert")[0] as HTMLDivElement | null
        divAler?.classList.remove("d-block")
        divAler?.classList.add("d-none")

        const saldoTot = document.getElementById("saldoTot") as HTMLHeadElement | null
        saldoTot!.innerText = "Credito residuo: " + ric.toString() +"€";
    
        const appsContainer = document.getElementById("appsContainer") as HTMLDivElement | null
        const downApp = document.getElementById("downApp") as HTMLDivElement | null
        const smartphone = document.getElementById("smartphone") as HTMLDivElement | null 
    
        appsContainer?.classList.add("d-none")
        downApp?.classList.add("d-none")
    
        smartphone!.style.background = "none";
        smartphone!.style.backgroundColor = "white"
    
        const rubrica = document.getElementById("rubrica") as HTMLDivElement | null
        rubrica?.classList.add("d-block")
        rubrica?.classList.remove("d-none")

        
        const chiamateList =  document.getElementById("chiamateList") as HTMLUListElement | null


    
    
        const call = document.getElementById("call") as HTMLAnchorElement | null
        call?.addEventListener("click", avvioChiamata)
    
        function avvioChiamata(){
            
            const li = document.createElement("li")

            const p = document.createElement("p")

            let costoChiamata = Utente.chiamata()
            console.log("Costo chiamata:", costoChiamata)

            let nChiamate = Utente.getNumeroChiamate()
            console.log("Index", nChiamate)

            let ricaricaRimanente = Utente.numero404(ric, costoChiamata)
            console.log("Ricarica rimanente:", ricaricaRimanente)

            ric = ricaricaRimanente


            saldoTot!.innerText = "Credito residuo: " + ricaricaRimanente.toString()

            p.innerText = "Chiamata Effettuata!"+" Costo: " + costoChiamata +"€";

            li.appendChild(p)

            chiamateList?.appendChild(li)
  
        }


        
    }
}


