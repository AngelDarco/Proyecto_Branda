window.addEventListener("DOMContentLoaded",()=>{

    document.getElementById('carro').addEventListener('click',()=>{
        fetch('/php/sesion.php')
        .then(res => res.json())
        .then(data =>{
            let salida = data.split(';');
        let id = salida[1];
        let user = salida[0];

            if (data==='SesionNoIniciada'&&isNaN(id)){
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Debes Iniciar Sesion Primero',
                    showConfirmButton: false,
                    timer: 1000,
                });
            }else{
                window.location='/html/carro.html';
            }
        })
        .catch(err => console.log(err));
    });


})