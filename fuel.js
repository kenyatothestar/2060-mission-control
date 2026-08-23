let fuel = 100;

let fuelRunning = false;

function findFuelDisplay(){

    const cards = document.querySelectorAll(".card");

    if(cards.length < 3){
        return null;
    }

    return cards[2].querySelector("strong");
}


function showFuel(){

    const display = findFuelDisplay();

    if(!display){
        return;
    }

    display.innerText = fuel + " %";
}


function fuelLoop(){

    const rocket =
        document.getElementById("rocket");

    if(!rocket){
        return;
    }

    /*
    Start fuel consumption when
    the rocket is actually flying.
    */

    if(
        rocket.classList.contains("fly") &&
        !fuelRunning
    ){

        fuelRunning = true;
        fuel = 100;

        showFuel();

        setInterval(function(){

            if(
                rocket.classList.contains("fly")
            ){

                fuel -= 2;

                if(fuel < 0){
                    fuel = 0;
                }

                showFuel();

            }

        },1000);
    }

    /*
    Keep watching the rocket.
    */

    setTimeout(fuelLoop,200);
}


if(document.readyState === "loading"){

    document.addEventListener(
        "DOMContentLoaded",
        fuelLoop
    );

}else{

    fuelLoop();

}
