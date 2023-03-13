<?php
session_start();
require 'conexion.php';
$datos = [];
$i = 0;

$usuario = $_SESSION['id'];

try {
    $userExists = "SELECT COUNT(*) FROM productosbranda WHERE usuario = :usuario";
    $resultUser = $conexion->prepare($userExists);
    $resultUser->bindParam(':usuario', $usuario);
    $resultUser->execute();
    $count = $resultUser->fetchColumn();

    if (!$count) {
        echo json_encode('userNotFound');
        return;
    };
    $sql = "SELECT * FROM productosbranda WHERE usuario = :user";
    $result = $conexion->prepare($sql);
    $result->bindParam(':user', $usuario);
    $result->execute();

    if (!$sql) {
        print_r($result->errorInfo());
        print_r($result->errorCode());
    }

    // foreach ($conexion->query($sql) as $row) {
    $rows = $result->fetchAll(PDO::FETCH_ASSOC);
    foreach ($rows as $row) {
        $objeto = new stdClass();

        $objeto->id = $row['id'];
        $objeto->nombre = $row['nombre'];
        $objeto->seccion = $row['seccion'];
        $objeto->precio = $row['precio'];
        $objeto->img = $row['img'];
        $objeto->cantidad = $row['cantidad'];

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
