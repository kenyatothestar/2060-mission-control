// 2060 Mission Control V2.4.4
// SAFE INDEPENDENT FUEL MONITOR

let fuelLevel = 100;

let fuelTimer = null;

function updateFuel(){

    const cards = document.querySelectorAll(".card");

    if(cards.length < 3){
        return;
    }

    const fuelDisplay =
        cards[2].querySelector("strong");

    if(!fuelDisplay){
        return;
    }

    fuelDisplay.innerText =
        fuelLevel + " %";
}


function startFuelMonitor(){

    if(fuelTimer){
        clearInterval(fuelTimer);
    }

    fuelLevel = 100;

    updateFuel();

    fuelTimer = setInterval(function(){

        fuelLevel -= 1;

        if(fuelLevel < 0){
            fuelLevel = 0;
        }

        updateFuel();

        if(fuelLevel === 0){
            clearInterval(fuelTimer);
            fuelTimer = null;
        }

    },2000);
}


if(document.readyState === "loading"){

    document.addEventListener(
        "DOMContentLoaded",
        startFuelMonitor
    );

}else{

    startFuelMonitor();

}
