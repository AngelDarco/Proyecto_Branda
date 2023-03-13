<?php
session_start();
require 'conexion.php';
$usuario = $_SESSION['usuario'];
$itemId = $_POST['id'];
try {
    if (!isset($usuario)) return;
    $sqlCount = "SELECT COUNT(*) FROM productosbranda WHERE id = ? AND cantidad >= 2";
    $resultCount = $conexion->prepare($sqlCount);
    $resultCount->execute([$itemId]);
    $row = $resultCount->fetchColumn();

    if ($row > 0) {
        $sqlDecrease = "UPDATE `productosbranda` SET cantidad = cantidad - 1 WHERE id = $itemId";
        $resultDecrease = $conexion->prepare($sqlDecrease);
        $resultDecrease->execute();
        echo json_encode('menosUno');
        $resultCount->closeCursor();
        $conexion = null;
        return;
    }

    $sql = "DELETE FROM productosbranda WHERE id = :id";
    $result = $conexion->prepare($sql);
    $result->execute(array(':id' => $itemId));
    if ($result->fetch(PDO::FETCH_ASSOC)) {
        echo json_encode('Fail');
        $result->closeCursor();
        $sql = null;
        $conexion = null;
    } else {
        echo json_encode("Eliminado");
        $result->closeCursor();
        $sql = null;
        $conexion = null;
    }
} catch (Exception $e) {
    echo json_encode($e->getMessage());
}
