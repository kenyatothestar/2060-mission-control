let fuelLevel = 100;
let fuelTimer = null;

function getFuelDisplay(){

    const cards =
        document.querySelectorAll(".card");

    if(cards.length < 3){
        return null;
    }

    return cards[2].querySelector("strong");
}


function updateFuel(){

    const display =
        getFuelDisplay();

    if(!display){
        return;
    }

    display.innerText =
        fuelLevel + " %";
}


function startFuel(){

    if(fuelTimer){
        clearInterval(fuelTimer);
    }

    fuelLevel = 100;

    updateFuel();

    fuelTimer =
        setInterval(function(){

            fuelLevel -= 2;

            if(fuelLevel < 0){
                fuelLevel = 0;
            }

            updateFuel();

            if(fuelLevel === 0){

                clearInterval(
                    fuelTimer
                );

                fuelTimer = null;
            }

        },1000);
}


/*
Watch the launch button
without changing the
original launch code.
*/

function connectFuel(){

    const button =
        document.getElementById(
            "launchButton"
        );

    if(!button){
        return;
    }

    button.addEventListener(
        "click",
        function(){

            startFuel();

        },
        {once:false}
    );
}


if(document.readyState === "loading"){

    document.addEventListener(
        "DOMContentLoaded",
        connectFuel
    );

}else{

    connectFuel();

}
