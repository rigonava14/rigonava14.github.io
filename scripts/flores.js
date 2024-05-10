onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};
document.getElementById("boton").addEventListener("click", function () {
    // Redireccionar a la siguiente página
    window.location.href = "turtle.html";
});