<?php
    require 'conexion.php';

        $sql2 = "SELECT * FROM registrosbranda WHERE email=:email AND pass=:pass";
        $result2 = $conexion->prepare($sql2);
        $result2->execute(array(':email'=>$email,'pass'=>$pass));
        