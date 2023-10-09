document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const warnings = document.getElementById("warnings");

    form.addEventListener("submit", function (event) {
        // Detiene el envío del formulario
        event.preventDefault();

        // Realiza la validación de los campos aquí
        const name = document.getElementById("name").value.trim();
        const user = document.getElementById("user").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const checkbox = document.getElementById("checkbox");
        const contrasena = document.getElementById("contrasena").value.trim();
        const contrasena1 = document.getElementById("contrasena1").value.trim();


        // Restablece los mensajes de advertencia
        warnings.innerHTML = "";

        // Realiza las validaciones que desees
        if (name === "" && user === "" && correo === "" && contrasena === "" && contrasena1 === "" && contrasena1 === "" ) {
            warnings.innerHTML += "Porfavor debes de rellenar todo el formulario completo .<br>";
        }
        
        if(contrasena != contrasena1){
            warnings.innerHTML += "Las contraseñan no coinciden<br><br>";
        }
        
       
        
        if (checkbox.checked){
            
            alert("Has aceptado los términos y condiciones.");
        }
        else{
            warnings.innerHTML += "Tienes que aceptar los terminos.<br>";
        }

        // Si hay mensajes de advertencia, no se envía el formulario
        if (warnings.innerHTML !== "") {
            return false;
        }

        // Si la validación pasa, puedes enviar el formulario
        form.submit();
    });
});

