<?php
    session_start();
    require 'conexion.php';
    $datos = [];
    $i=0;

    $usuario = $_SESSION['id'];

    try {
    $sql = "SELECT * FROM productosbranda";
    $result = $conexion->prepare($sql);
    $result->execute();
    
    if (!$sql) {
        print_r($result->errorInfo());
        print_r($result->errorCode());
    }

    foreach($conexion->query($sql) as $row) {
        $objeto = new stdClass();

        $objeto->id = $row['id'];
        $objeto->nombre = $row['nombre'];
        $objeto->seccion = $row['seccion'];
        $objeto->precio = $row['precio'];
        $objeto->img = $row['img'];

        $datos[$i] = $objeto;
        $i++;
    }

        echo json_encode($datos);
        $result->closeCursor();
        $conexion = null;
        $sql = null;

    } catch (Exception $e) {
        echo json_encode($e->getMessage());
    }
