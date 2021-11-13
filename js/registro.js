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
            if (data=="UserAdd"){
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
                        form.reset();
            }
            console.log(data);
        })
        .catch( err => {
            console.log(err);
        });

    });

})