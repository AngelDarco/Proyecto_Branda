window.addEventListener("DOMContentLoaded",()=>{
const product = document.querySelectorAll('.product');

product.forEach(e=>{
        let nodo =  e.lastElementChild;
        nodo.addEventListener('click', (z)=>{
        let desc = e.childNodes[3];
                console.log(nodo);

        let id = z.target.getAttribute('id');
        let img = e.childNodes[1].getAttribute('src');  
        let nombre = desc.children[0].innerHTML;
        let seccion = desc.children[1].innerHTML;
        let precio = desc.children[2].innerHTML;
        
   
        let data = new FormData();
        data.append('imagen',img);
        data.append('nombre',nombre);
        data.append('seccion',seccion);
        data.append('precio',precio);
        data.append('id',id);

         fetch('/php/add.php',{
                method:'POST',
                body:data
                })
                .then(res=>res.json())
                .then(dato=>{
                        if(dato==='Agregado'){
                                Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Agregado al Carro',
                                        showConfirmButton: false,
                                        timer: 1500
                                      });


                /*  let array = [];
                const carrito = document.querySelectorAll('.product__icon');
                    carrito.forEach(item=>{
                            item.addEventListener('click', (e)=>{
                            let producto = item.parentNode;
                            producto.classList.toggle('agregado');
                            console.log(producto);
                            console.log(item);
            
                            if(producto.classList.contains('agregado')){
                                array.push(producto);
                                console.log('agregado');


                                 fetch ('/php/carro.php')
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                })
                                .catch(err =>{
                                    console.log("You Failed ... ",err);
                                })

                                
                            }else{
            
                                console.log('Eliminado');
                            } 
            
                        });
                    }); */
                        
                                

                        }else{
                                Swal.fire({
                                        position: 'center',
                                        icon: 'error',
                                        title: 'Debes Iniciar Sesion Primero',
                                        showConfirmButton: false,
                                        timer: 1500
                                      })
                        }
                })
                .catch(error => {
                        console.log(error);
                });
            });
        });
})