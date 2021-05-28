<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    


    <h1>PHP Working ...</h1>




<?php


    $db_host='fdb27.freehostingeu.com';
    $db_name='registrosbranda';
    $db_user='3788800_darcobbdd';
    $db_password='922494eMe';

    $conexion=mysqli_connect($db_host,$db_user,$db_password,$db_name);
    $query='SELECT * FROM 3788800_darcobbdd';
    $results=mysqli_query($conexion,$query);

    
    $data=mysqli_fetch_row($results);

    echo $data[0];



?>



</body>
</html>