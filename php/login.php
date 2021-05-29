<?php
session_start();
    
        require 'conexion.php';

        $query = "SELECT*FROM registrosbranda WHERE email=:email AND pass=:pass";   
        $result = $conexion->prepare($query);
        $email = $_POST['email'];
        $pass = htmlentities(addslashes($_POST['pass']));

        $result->bindValue(":email",$email);
        $result->bindValue(":pass",$pass);

        $result->execute();

        $data = $result->rowCount();

        if($data!=0){
            echo '<h2>Registro Exitoso</h2>';
            $_SESSION["usuario"] = $data["name"];
            
           // header("Location: users.php");

            //header("Location: users.php");
           // echo"<script>window.location='users.php'</script>";
        }else{
            echo '<h1>No se pudo Completar el Registro</h1>';
            //header("Location: index.php");
           // echo"<script>window.location='index.php'</script>";
        };   

?>



