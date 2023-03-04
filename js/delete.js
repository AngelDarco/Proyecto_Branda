window.addEventListener("DOMContentLoaded",()=>{



function eliminar(){
const borrar = document.querySelectorAll('.borrar');

borrar.forEach(e=>{

    e.addEventListener('click', z=>{

        let card = z.target.getAttribute('id');

        let data = new FormData();
        data.append('id',card);

        fetch('/php/delete.php',{
            method: 'POST',
            body: data,
        })
            .then(data=>{
                data.text();
                if(data.statusText=='OK'){
                     Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Borrado',
                        showConfirmButton: false,
                        timer: 1500
                      })             
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Lo Sentimos Algo Salio Mal',
                        showConfirmButton: false,
                        timer: 1500
                      })
            
                }
            })
            .catch(e=>{
                console.log("Error ",e);
            })

        
    });
});

}
    eliminar();
})