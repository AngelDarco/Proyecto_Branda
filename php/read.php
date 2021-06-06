<?php
session_start();
    require 'conexion.php';
try{
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_name",$db_user,$db_password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }catch(Exception $e){
        echo "Error Connection Failure ".$e;
    }
    
    if(isset($_SESSION['usuario'])){
        $sql = "SELECT*FROM productosbranda WHERE id = :id";
        $result = $conexion->prepare($sql);
        $result->bindParam(':id',$_SESSION['id']);
        $result->execute();

        while($row=$result->fetch()){

        $id = $row['id'];
        $img = $row['img'];
        $nombre = $row['nombre'];
        $seccion = $row['seccion'];
        $precio = $row['precio'];
        $code = $row['code'];

           echo '<div class="product">';
                   echo "<img src='$img'>";
                   echo "<div class='product__description'>";
                       echo "<h3 class='product__title'>$nombre</h3>";
                       echo "<P class='product__txt'>$seccion</P>";
                       echo "<span class='product__price'>$precio</span>";
                   echo '</div>';
                   echo "<i id='$id' class='product__icon fas fa-cart-plus'></i>";
               echo '</div>';
               echo "<input class='borrar' type='button' value='Borrar' id='$code'>";
        }

    }else{
        echo "<script>Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Debes Iniciar Sesion Primero',
            showConfirmButton: false,
            timer: 1500
          })</script>";
    }
    





?>