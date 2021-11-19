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
        template.querySelector('.product__icon').setAttribute('id',item.id);
   

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
        caja.appendChild(fragment);
        });
    })
    .catch(err => console.log(err))

    fetch('/php/sesion.php')
    .then(res => res.json())
    .then(data =>{
        let nombre = data.split(';');
        let user = nombre[0];
        document.getElementById('user').innerHTML=user;
    })

})