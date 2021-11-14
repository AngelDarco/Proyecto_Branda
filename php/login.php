<?php
    require 'conexion.php';
    
    $email = $_POST['email'];
    $pass = $_POST['pass'];

    if (!empty($email)&&!empty($pass)){
        try {
            $sql2 = "SELECT * FROM registrosbranda WHERE email=:email AND pass=:pass";
            $result2 = $conexion->prepare($sql2);
            $result2->execute(array(':email'=>$email,'pass'=>$pass));
            
             if($result2->rowcount()) {
                
                session_start();
                session_set_cookie_params(10000);
                $userdata = $result2->fetch(PDO::FETCH_ASSOC);
                $_SESSION["usuario"] = $userdata['name'];
                $_SESSION["id"] = $userdata['id'];
                echo json_encode("Registrado");
             }
            else {
                echo json_encode("NoRegistrado");
                $result2->closeCursor();
                $conexion->null;
                $sql2->null;
            };
            
        } catch (Exception $e) {
            echo json_encode("Failed".$e);
                $conexion->null;
                $sql2->null;
        }  
    }else{
        
    }
