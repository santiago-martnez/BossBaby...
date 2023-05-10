
const user = document.getElementById("user");
const clave = document.getElementById("clave");


entrar.addEventListener("click", function(evento){
    if((user.value)=="user" && clave.value=="1234"){
        alert("ENTRAR");
        window.open("../js/index.html");
    }
    else{

        alert("sus datos:" + (user.value) + (clave.value) +", no coinciden con la cuenta de logueo.");
    }
});


