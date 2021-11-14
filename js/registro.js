window.addEventListener("DOMContentLoaded",()=>{

    let formulario = document.getElementById("formulario");

    formulario.addEventListener('submit',(e)=>{
        e.preventDefault();
    
    let data = new FormData(formulario);
    
    fetch ('/php/registro.php',{
        method: "POST",
        body: data
    })
        .then(res => res.json())
        .then(data => {
            if(data ==="Registrado"){
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: 'El Usuario ya esta registrado',
                        showConfirmButton: false,
                        timer: 1500,
                    });
            }else if (data==="UserAdd"){
                Swal.fire({
                    title: 'Usuario Registrado',
                    text: "Quieres iniciar Sesion!",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Iniciar Sesion'
                    }).then((result) => {
                    if (result.isConfirmed) window.location='/html/login.html';
                    else window.location='/index.html';
                    })
                        formulario.reset();
            }else if(data==="CamposVacios"){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Por favor llena todos los Campos',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch( err => {
            console.log(err);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error no especificado: '+err,
                showConfirmButton: false,
                timer: 1500
            });
        });
    });
})