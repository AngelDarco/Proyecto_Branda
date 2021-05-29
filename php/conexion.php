<?php

    $db_host='fdb27.freehostingeu.com';
    $db_name='3788800_darcobbdd';
    $db_user='3788800_darcobbdd';
    $db_password='922494eMe';
    try {
        $conexion = new PDO("mysql:host=$db_host; dbname=$db_name",$db_user,$db_password);
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch (Exception $e){
        die('Connection Failed: ' . $e->getMessage());
    };

?>