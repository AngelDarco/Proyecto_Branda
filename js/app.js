export function app(){
    const btnBuscar = document.getElementById('buscar');
    const contenedor = document.querySelector('.container__buscador');
    const btnCerrar = document.querySelector('.btn__cerrar');
    const buscador = document.querySelector('.main-header__input');

    btnBuscar.addEventListener('click', ()=>{
    contenedor.classList.remove('ocultar');

            //Borra la busqueda anterior
    while(btnCerrar.nextSibling!=null){
        contenedor.removeChild(btnCerrar.nextSibling)
    }
            //Compara la busqueda con los productos
    let filtros = ['maquillaje','hidratacion','tonicos','antioxidantes','acne']
    let texto = buscador.value.trim().toLowerCase();

    //Dibuja los resultados
    if (filtros.includes(texto)){
    let frame = document.createElement('iframe');
    frame.setAttribute('class','frames')
    frame.setAttribute('src','/html/'+`${texto}`+'.html')
    contenedor.appendChild(frame);
    }else{
    let frame = document.createElement('iframe');
    frame.setAttribute('class','frames')
    frame.setAttribute('src','img/error.png')
    contenedor.appendChild(frame);
    }
            //Resetea el buscador
    buscador.value = buscador.innerHTML="";
});

            //Oculta el Div de los resultados
    btnCerrar.addEventListener('click',()=>{
    contenedor.classList.add('ocultar');
    contenedor.removeChild(contenedor.lastChild);
    contador=0;
});


}; //Fin AddEventListener



