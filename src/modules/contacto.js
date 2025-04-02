document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contacto-form");
    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");
    const alerta = document.querySelector(".alerta");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        if (!validarFormulario()) {
            mostrarAlerta("Por favor, completa todos los campos correctamente.", "error");
            return;
        }

        const formData = {
            nombre: nombre.value.trim(),
            email: email.value.trim(),
            mensaje: mensaje.value.trim()
        };

        // Simular envío al backend
        fetch("/api/enviar-contacto", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                mostrarAlerta("Mensaje enviado con éxito.", "exito");
                form.reset();
            } else {
                mostrarAlerta("Hubo un error al enviar el mensaje.", "error");
            }
        })
        .catch(() => mostrarAlerta("Error de conexión. Inténtalo nuevamente.", "error"));
    });

    function validarFormulario() {
        return nombre.value.trim() !== "" &&
               email.value.trim() !== "" &&
               /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) &&
               mensaje.value.trim().length >= 10;
    }

    function mostrarAlerta(mensaje, tipo) {
        alerta.textContent = mensaje;
        alerta.className = `alerta ${tipo}`;
        alerta.style.display = "block";
        setTimeout(() => alerta.style.display = "none", 3000);
    }
});