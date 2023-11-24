const phone = document.getElementById("phone") as HTMLAnchorElement | null;

phone?.addEventListener("click", phoneCallVisualize)

function phoneCallVisualize(){
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


    const call = document.getElementById("call") as HTMLAnchorElement | null
    call?.addEventListener("click", avvioChiamata)

    function avvioChiamata(){
        
    }
}