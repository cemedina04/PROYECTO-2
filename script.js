function calcularTiempo(){
// Se agrega un objeto Date para obtener la hora del equipo
    let tiempo = new Date();

// Se agregan variables para que la funcion get tome el tiempo del equipo
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
// Se corrigen las variables para poner cada variable de dos cifras
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;
// Combina las variables de hora, minutos y segundos en un formato de reloj
    let pantallaReloj = hora + ":" + minuto + ":" + segundo;
    let relojDigital = document.querySelector(".reloj");
    relojDigital.innerHTML = pantallaReloj;

}
// Ejecuta la funcion calcular tiempo cada 1000 milisegundos
setInterval(calcularTiempo, 1000);