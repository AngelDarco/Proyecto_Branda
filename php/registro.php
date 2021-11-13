<?php
require 'conexion.php';

$name = $_POST['nombre'];
$email = $_POST['correo'];
$pass = $_POST['password'];

$db_table = 'registrosbranda';

try {
    $sql = "INSERT INTO registrosbranda (email, pass, name) values(:email, :pass, :name)";
    $result = $conexion->prepare($sql);
    $result->execute(array(':name'=>$name,':email'=>$email,':pass'=>$pass));
    echo json_encode("UserAdd");
    $result->closeCursor();
    $conexion->null;
    $sql->null;

}catch (Exception $e){
    echo json_encode("Failed " .$e->getMessage());
    $conexion->null;
    $sql->null;
}