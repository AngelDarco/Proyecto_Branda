<?php

$db_host = "localhost";
$db_name = "brandabbdd";
$db_user = "root";
$db_pass = "";

    try {
        $conexion = new PDO("mysql:host=$db_host;dbname=$db_name",$db_user,$db_pass);
        $conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        $conexion->exec("SET CHARACTER SET utf8");
         /* echo "Connection Successfully"; */ 
    } catch (Exception $e) {
        echo "ERROR 404 ". $e->getMessage. $e->getErrorCode. $e->getError;
    }