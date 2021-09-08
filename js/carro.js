export function carro(){

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

};