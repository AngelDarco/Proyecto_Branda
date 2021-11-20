document.addEventListener('DOMContentLoaded',()=>{
    const caja = document.querySelector('.container-products');
    const template = document.querySelector('.template').content;
    const fragment = new DocumentFragment();

    
    fetch('/php/carro.php')
    .then(res => res.json())
    .then(data =>{

        data.forEach(item =>{
        template.querySelector('.myimg').setAttribute('src',item.img);
        template.querySelector('.product__title').innerHTML=item.nombre;
        template.querySelector('.product__txt').innerHTML=item.seccion;
        template.querySelector('.product__price').innerHTML=item.precio;
        template.querySelector('.product i').setAttribute('id',item.id);
        template.querySelector('.product i').setAttribute('class',"product__icon fa fa-trash");

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        caja.appendChild(fragment);
        });

        const borrar = document.querySelectorAll('.fa-trash');
            borrar.forEach(element => {
                element.addEventListener('click',(e)=>{
                    
                    let id = e.target.getAttribute('id');
                    let data = new FormData();
                    data.append('id',id);

                    fetch('/php/borrar.php',{
                        method: 'POST',
                        body: data
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data==='Eliminado'){
                            Swal.fire({
                                position: 'center',
                                icon: 'warning',
                                title: 'Producto Eliminado',
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }else{
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Ha ocurrido un error',
                                showConfirmButton: false,
                                timer: 1500
                              });
                            
                        }
                    })
                    .catch(err => console.log(err));
                });
            });
        
    })
    .catch(err => console.log(err))

    fetch('/php/sesion.php')
    .then(res => res.json())
    .then(data =>{
        let nombre = data.split(';');
        let user = nombre[0];
        document.getElementById('user').innerHTML=user;
    });

    


})