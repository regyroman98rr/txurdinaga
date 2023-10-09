const nombre = document.getElementById("name")
const user = document.getElementById("user")
const correo = document.getElementById("correo")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    
    if(nombre.Value.length == 0){
        alert("No puedes dejar el campo vacio")
        e.preventDefault();
    }
});
