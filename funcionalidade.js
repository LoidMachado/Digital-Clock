const horas = document.querySelector(".horas")
const minutos = document.querySelector(".minutos")
const segundos = document.querySelector(".segundos")
window.onload= function(){
    setInterval(apresntarHoras,0)
}
function apresntarHoras() {
    let dataHoje = new Date();
    let hr = dataHoje.getHours();
    let min = dataHoje.getMinutes();
    let seg = dataHoje.getSeconds();
    if(hr < 10){
        hr = "0"+hr;
    }
    else if(min < 10){
        min = "0"+min;
    }
    else if(seg < 10){
        seg = "0"+seg;
    }
    
    document.querySelector("#horas").innerHTML = hr;
    document.querySelector("#minutos").innerHTML = min;
    document.querySelector("#segundos").innerHTML = seg;
}



/*
const relogio = setInterval(function time(){
    let dataHoje = new Date();
    let hr = dataHoje.getHours();
    let min = dataHoje.getMinutes();
    let seg = dataHoje.getSeconds();

    if(hr > 10){
        hr = "0"+hr;
    }
    else if(min > 10){
        min = "0"+min;
    }
    else if(seg > 10){
        seg = "0"+seg;
    }
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})
*/