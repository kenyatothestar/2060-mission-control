// 2060 Mission Control V2.4.3
// SAFE FUEL SYSTEM

let fuelLevel = 100;

let fuelTimer = null;

function startFuelSystem(){

    fuelLevel = 100;

    const cards =
        document.querySelectorAll(".card");

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

    if(fuelTimer){
        clearInterval(fuelTimer);
    }

    fuelTimer = setInterval(function(){

        fuelLevel -= 2;

        if(fuelLevel < 0){
            fuelLevel = 0;
        }

        fuelDisplay.innerText =
            fuelLevel + " %";

        if(fuelLevel <= 20){
            fuelDisplay.style.color =
                "#ff4444";
        }

        if(fuelLevel === 0){
            clearInterval(fuelTimer);
        }

    },1000);
}
