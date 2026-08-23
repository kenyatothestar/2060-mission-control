let fuel = 100;
let fuelTimer = null;

function startFuel(){

    const display =
        document.getElementById("fuelDisplay");

    if(!display){
        return;
    }

    fuel = 100;

    display.innerText = "100 %";

    if(fuelTimer){
        clearInterval(fuelTimer);
    }

    fuelTimer = setInterval(function(){

        const rocket =
            document.getElementById("rocket");

        if(!rocket){
            return;
        }

        if(rocket.classList.contains("fly")){

            fuel -= 2;

            if(fuel < 0){
                fuel = 0;
            }

            display.innerText =
                fuel + " %";

        }

    },1000);
}


function watchRocket(){

    const rocket =
        document.getElementById("rocket");

    if(
        rocket &&
        rocket.classList.contains("fly")
    ){

        startFuel();

        return;
    }

    setTimeout(
        watchRocket,
        200
    );
}


if(document.readyState === "loading"){

    document.addEventListener(
        "DOMContentLoaded",
        watchRocket
    );

}else{

    watchRocket();

}
