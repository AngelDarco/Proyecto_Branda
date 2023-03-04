document.addEventListener("DOMContentLoaded",()=>{

    fetch('/php/sesion.php')
    .then(res => res.json())
    .then(data =>{
        let salida = data.split(';');
        let id = salida[1];
        let user = salida[0];

        if (!isNaN(id)&&data!="SesionNoIniciada"){
            document.getElementById('usuario').innerHTML=user;
        }
    })
    .catch(err=>{
        console.error("Error en la Matrix ",err);
    })


})