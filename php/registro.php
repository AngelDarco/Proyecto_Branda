<?php
require 'conexion.php';

$name = $_POST['nombre'];
$email = $_POST['correo'];
$pass = $_POST['password'];

    if(!empty($name)&&!empty($email)&&!empty($pass)){
try {

    $sql2 = "SELECT email FROM registrosbranda WHERE email=:email";
    $result2 = $conexion->prepare($sql2);
    $result2->execute(array(':email'=>$email));
    
            if($result2->rowcount()){
                echo json_encode('Registrado');
                $result2->closeCursor();
                $conexion->null;
                $sql2->null;
        }else{
    $sql = "INSERT INTO registrosbranda (email, pass, name) values(:email, :pass, :name)";
    $result = $conexion->prepare($sql);
    $result->execute(array(':name'=>$name,':email'=>$email,':pass'=>$pass));
    echo json_encode("UserAdd");
    $result->closeCursor();
    $conexion->null;
    $sql->null;
        }
}catch (Exception $e){
    echo json_encode("Failed " .$e->getMessage());
    $conexion->null;
    $sql->null;
}
    } else echo json_encode("CamposVacios");