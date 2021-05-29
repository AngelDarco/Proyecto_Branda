
<?php 

$name =$_POST['nombre'];
$email=$_POST['correo'];
$pass =$_POST['password'];
$pass2=$_POST[''];

require 'conexion.php';

        //Registrar Usuarios

        if(!empty($name)&&!empty($email)&&!empty($pass)){
            $consulta = "INSERT INTO registrosbranda (name,email,pass) VALUES ('$name','$email','$pass')"; 
            $resultado = mysqli_query($conexion,$consulta);
        };

        if($resultado) echo'<h1>Felicidades tu Registro a sido Exitoso</h1>';
        else echo'Error en el Registro';
        mysqli_close($conexion);

?>