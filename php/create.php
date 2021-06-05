<?php
    session_start();
    require 'conexion.php';

    $id = $_POST['id'];
    $img = $_POST['imagen'];
    $nombre = $_POST['nombre'];
    $seccion = $_POST['seccion'];
    $precio = $_POST['precio'];
    
    //echo "agregado";

    try{
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_name",$db_user,$db_password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }catch(Exception $e){
        echo "Error Connection Failure ".$e;
    }
        
    if(isset($_SESSION['usuario'])){
        
        $sql = "INSERT INTO productosbranda (id,nombre,seccion,precio,img) 
                VALUES (:id,:nombre,:seccion,:precio,:img)"; 
        $result = $conexion->prepare($sql);
        $result->execute(array(":id"=>$_SESSION['id'],":nombre"=>$nombre,":seccion"=>$seccion,":precio"=>$precio,":img"=>$img));

        echo "agregado";
        $result->closeCursor();

    }else{
        echo "Debes Inicir Sesion Primero";
    }


?>