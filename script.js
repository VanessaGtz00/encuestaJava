function mostrarResultados() {
    // Obtener las respuestas seleccionadas
    var respuesta1 = document.getElementById("pregunta1").value;
    var respuesta2 = document.getElementById("pregunta2").value;
    var respuesta3 = document.getElementById("pregunta3").value;
    var respuesta4 = document.getElementById("pregunta4").value;

    // Mostrar las respuestas en la página
    document.getElementById("resultado1").innerText = "1. Calidad del servicio: " + respuesta1;
    document.getElementById("resultado2").innerText = "2. Atención recibida: " + respuesta2;
    document.getElementById("resultado3").innerText = "3. ¿Recomendaría nuestros productos?: " + respuesta3;
    document.getElementById("resultado4").innerText = "4. Relación calidad-precio: " + respuesta4;
}