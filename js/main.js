













let number;
let valor = false;

const fondo = document.getElementById("fondo");
const boton = document.querySelector("#bt-1");
const boton2 = document.querySelector("#bt-2");
let input1 = document.querySelector('#contenido-input');
const entrar = document.querySelector("#entrar");

boton.addEventListener("click", function(evento){   
    let input = (input1.value);
    console.log(input);
    const div = document.createElement("h1"); 
    div.textContent = "BOSS BABY ESTA PENSADO EL NUMERO...";
    div.className = "pensamientos";
    div.id = "respuesta";  


    const app = document.querySelector("#centro2"); 
    app.insertAdjacentElement("beforeend", div);

    var numero_aleatorio= Math.ceil(Math.random()*10);

    setTimeout(function(){
        document.getElementById("respuesta").innerHTML = "El numero pensado por boss baby fue: <span class='rojo'>" + numero_aleatorio + "</span>";

        if(input!=numero_aleatorio){
            const h2 = document.createElement("h2");
            h2.textContent = "Perdiste, el numero que elegiste, no fue en el que penso Boss Baby."
            h2.id = "respuesta-borrar";
            h2.className ="pensamientos";
            app.insertAdjacentElement("beforeend",h2);
            
            document.getElementById('boss').src = "./js/img/bb enojado.png";
        }
        else{
            const h2 = document.createElement("h2");
            h2.textContent = "Ganaste, el numero que ingresaste coincide con el que penso Boss Baby."
            h2.className ="pensamientos";
            h2.id = "respuesta-borrar";
            app.insertAdjacentElement("beforeend",h2);
            
            document.getElementById('boss').src = "./js/img/bb feliz.png";
        }
    }, 2000);

});


boton2.addEventListener("click", function(evento){   
    text1 = document.getElementById("respuesta-borrar");
    text2 = document.getElementById("respuesta");

    padre = text1.parentNode; 
    madre = text2.parentNode;

    padre.removeChild(text1);
    madre.removeChild(text2);

    document.getElementById('boss').src = "./js/img/bb.png";
});


























