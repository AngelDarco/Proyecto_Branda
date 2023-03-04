document.addEventListener('DOMContentLoaded',()=>{

    (function login(){
        let formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', (e)=>{
            e.preventDefault();
            let data = new FormData(formulario);
    
            fetch ('/php/login.php',{
                method:'POST',
                body: data
            })
                .then(resp=>resp.json())
                .then(data=>{
                    console.log(data)
                    if(data==="Registrado"){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Session Iniciada',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                            window.location='/index.html';

                    }else if(data==="NoRegistrado"){
                        Swal.fire({
                            title: 'Usuario No Registrado',
                            text: "Debes Registrarte Primero!",
                            icon: 'error',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Registrar',
                            cancelButtonText: 'Reintentar'
                            }).then((result) => {
                            if (result.isConfirmed) window.location='/html/registro.html';
                            })
                    }else if(data==="Vacio"){
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Campos Vacios',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }else{
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Error no Especificado',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                })
                .catch(err =>{
                    
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Error',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    console.log(err);
                });
        });
    
    })();
})