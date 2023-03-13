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
    if (isset($usuario)) {
        $sqlCount = "SELECT COUNT(*) FROM productosbranda WHERE id = $id";
        $resultCount = $conexion->prepare($sqlCount);
        $resultCount->execute();
        $row = $resultCount->fetchColumn();
        if ($row > 0) {
            $sqlIncrease = "UPDATE `productosbranda` SET cantidad = cantidad + 1 WHERE id = $id";
            $resultIncrease = $conexion->prepare($sqlIncrease);
            $resultIncrease->execute();
            echo json_encode('alreadyAdded');
            $resultCount->closeCursor();
            $conexion = null;
            return;
        }


        $sql = "INSERT INTO productosbranda (id, nombre, seccion, precio, img, usuario, cantidad) VALUES (:id, :nombre, :seccion, :precio, :img, :usuario, :cantidad)";
        $result = $conexion->prepare($sql);
        $result->execute(array(
            ':id' => $id, ':nombre' => $nombre, ':seccion' => $seccion, ':precio' => $precio, ':img' => $img, ':usuario' => $usuario,
            ':cantidad' => 1
        ));
        echo json_encode('Agregado');
        $result->closeCursor();
        $conexion = null;
    } else {
        echo json_encode('Error');
    }
} catch (Exception $e) {
    echo json_encode($e->getMessage());
}
