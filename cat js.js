let bulbimgEl = document.getElementById("bulbimg");

let catimgEl = document.getElementById("catimg");

let btnoffEl = document.getElementById("btnOff");

let btnonEl = document.getElementById("btnOn");

let switchEl = document.getElementById("switch");




function onHideCat(){
    bulbimgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

    catimgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    btnoffEl.style.backgroundColor = "white";

    btnonEl.style.backgroundColor = "green";

    switchEl.textContent = "Switched On";
}

function onVisibleCat(){

    bulbimgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

    catimgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";

    btnonEl.style.backgroundColor = "white";

    btnoffEl.style.backgroundColor = "Red";

    switchEl.textContent = "Switched Off";
}
