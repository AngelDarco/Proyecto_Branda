<?php
    session_start();
    $saludo = '';
    if(!isset($_SESSION["usuario"])){
        $saludo = 'Invitado';
    }else{
    $saludo = $_SESSION["usuario"];
    };
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="/css/productos.css">
    <script src="/js/delete.js"></script>
    <script src="/js/sweetalert2.all.min.js"></script>


    <style>
        body{
            background:#0009;
            width:100%;
            display:flex;
            flex-flow:row wrap;
            align-items:center;
        }
        .card__carro{
            display:block;
            width:20%;
            height:30%;
            margin: 20% 10%;        
        }
        h1{
            position:absolute;
            top:0;
            left:0;
        }
    </style>
</head>
<body>
    <h1>Estas en el carro de Compras de: <?php echo $saludo; ?> </h1>

    <div class="card__carro">
        <?php
            require 'read.php';
        ?>
    </div>

</body>
</html>