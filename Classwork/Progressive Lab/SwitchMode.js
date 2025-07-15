// starting mode will always be dark (as it should be)
let lightmode = localStorage.getItem("lightmode");

const modeswitch = document.getElementById("switch-mode");


const enableLightmode = () => {
    document.body.classList.add("lightmode")
    localStorage.setItem("lightmode", "active")
    modeswitch.textContent = "Enable Dark Mode"
}

const disableLightmode = () => {
    document.body.classList.remove("lightmode")
    localStorage.setItem("lightmode", null)
}


if(lightmode=="active"){
    enableLightmode();
}

modeswitch.addEventListener("click", () => {

    lightmode = localStorage.getItem("lightmode")
    if(lightmode != "active") {
        enableLightmode();
    } 
    else{
        disableLightmode();
        modeswitch.textContent = "Enable Light Mode"
    }

    

});



