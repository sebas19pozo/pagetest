const botones = document.querySelectorAll(".tipo-btn");
const formulario = document.getElementById("registro");
const cliente = document.getElementById("camposCliente");
const empresa = document.getElementById("camposEmpresa");
const contenedorBotones = document.getElementById("tipoUsuarioBotones");

botones.forEach(btn => {
    btn.addEventListener("click", () => {
        const tipo = btn.getAttribute("data-tipo");

        // Oculta los botones y muestra el formulario
        contenedorBotones.style.display = "none";
        formulario.style.display = "flex";

        if(tipo === "cliente") {
            cliente.style.display = "flex";
            empresa.style.display = "none";
        } else if(tipo === "empresa") {
            empresa.style.display = "flex";
            cliente.style.display = "none";
        }
    });
});
