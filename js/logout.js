document.addEventListener('DOMContentLoaded',()=>{
    let sesion = document.getElementById('logout');
    sesion.addEventListener('click',()=>{

        fetch('/php/logout.php')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data === "Logout"){
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Session Cerrada',
                showConfirmButton: false,
                timer: 1000,
            });
            location.reload();
        }
    })
    .catch(err => {
        console.log(err);
    })

    });
})