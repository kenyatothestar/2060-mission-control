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

function startFuel(){

    if(fuelTimer){
        clearInterval(fuelTimer);
    }

    fuelLevel = 100;

    updateFuel();

    fuelTimer = setInterval(function(){

        fuelLevel -= 2;

        if(fuelLevel < 0){
            fuelLevel = 0;
        }

        updateFuel();

        if(fuelLevel === 0){
            clearInterval(fuelTimer);
            fuelTimer = null;
        }

    },1000);
}

if(document.readyState === "loading"){

    document.addEventListener(
        "DOMContentLoaded",
        updateFuel
    );

}else{

    updateFuel();

}
