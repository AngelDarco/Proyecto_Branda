document.addEventListener('DOMContentLoaded',()=>{
const product = document.querySelectorAll('.product');
product.forEach(e=>{
        let nodo =  e.lastElementChild;
        nodo.addEventListener('click', (z)=>{
        let desc = e.childNodes[3];

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


         fetch('/php/create.php',{
                method:'POST',
                body:data
                })
                .then(res=>res.text())
                .then(dato=>{
                        if(dato=="agregado"){
                                Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Agregado al Carro',
                                        showConfirmButton: false,
                                        timer: 1500
                                      })
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


});