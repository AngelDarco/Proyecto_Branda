window.addEventListener("DOMContentLoaded",()=>{
    const log = document.getElementById('login');
    log.addEventListener('click',(e)=>{
        console.log(e.isTrusted);
        sesion(e);
    });sesion(e=false);
        
});

    function sesion(e){
        fetch('/php/sesion.php')
    .then(res => res.json())
    .then(data =>{
        let salida = data.split(';');
        let id = salida[1];
        let user = salida[0];

        if (!isNaN(id)&&data!="SesionNoIniciada"){
            document.getElementById('usuario').innerHTML=user;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Session Iniciada Como: '+ user,
                showConfirmButton: false,
                timer: 500,
            });
        }else if(e.isTrusted){
            window.location='/html/login.html';
        }
    })
    .catch(err=>{
        console.error("Error en la Matrix ",err);
    })
    };
