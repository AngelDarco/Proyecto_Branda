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

function carro(){

    const productos = document.querySelectorAll('.product__icon');
    let array = [];

        productos.forEach(item=>{
                item.addEventListener('click', (e)=>{
                producto = item.parentNode;
                producto.classList.toggle('agregado');

                if(producto.classList.contains('agregado')){

                    array.push(producto);
                    console.log('agregado');
                }else{


                    console.log('Eliminado');
                }

            });
        });

}
    carro();
})