<?php

    $db_host = 'localhost';
    $db_name = 'pruebas';
    $db_user = 'root';
    $db_pass = '';

    try{
      $conexion = new PDO("mysql:host=$db_host;dbname=$db_name",$db_user,$db_pass);
      $conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      $conexion->exec("SET CHARACTER SET utf8");   
    }catch(Exception $e){
        echo 'Error: ' .$e->getMessage();
    }