<?php

// $db_host = "fdb34.awardspace.net";
// $db_name = "4013044_darcobbdd";
// $db_user = "4013044_darcobbdd";
// $db_pass = "12346789eme";

$db_host = "localhost";
$db_name = "darcodb";
$db_user = "root";
$db_pass = "";

    try {
        $conexion = new PDO("mysql:host=$db_host;dbname=$db_name",$db_user,$db_pass);
        $conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        $conexion->exec("SET CHARACTER SET utf8");
         /* echo "Connection Successfully"; */ 
    } catch (Exception $e) {
        echo "ERROR 404 ". $e->getMessage();
    }
