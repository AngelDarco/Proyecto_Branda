<?php
    session_start();
    require 'conexion.php';
        

    $nombre = $_POST['nombre'];
    $seccion = $_POST['seccion'];
    $precio = $_POST['precio'];
    $img = $_POST['imagen'];
    $id = $_POST['id'];
    $usuario = $_SESSION['id'];

    try {
        if(isset($usuario)){
    $sql = "INSERT INTO productosbranda (id, nombre, seccion, precio, img, usuario) VALUES (:id, :nombre, :seccion, :precio, :img, :usuario)";
    $result = $conexion->prepare($sql);
    $result->execute(array(':id'=>$id,':nombre'=>$nombre,':seccion'=>$seccion,':precio'=>$precio,':img'=>$img,':usuario'=>$usuario));
    echo json_encode('Agregado');
    $result->closeCursor();
    $conexion->null;
    $sql->null;
        }else{
            echo json_encode('Error');
        }
    } catch (Exception $e) {
        echo json_encode($e->getMessage);
    }