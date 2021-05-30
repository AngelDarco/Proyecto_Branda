
<?php 

$name =$_POST['nombre'];
$email=$_POST['correo'];
$pass =$_POST['password'];

require 'conexion.php';

$conexion=mysqli_connect($db_host, $db_user, $db_password, $db_name);

if(mysqli_connect_errno())echo 'Fallo Al conectar con la BBDD';
mysqli_set_charset($conexion,'UTF-8');
mysqli_select_db($conexion,$db_name) or die ('No se encuentra la BBDD');

        if(!empty($name)&&!empty($email)&&!empty($pass)){
             
            $registro = "SELECT email FROM registrosbranda WHERE email = '$email'";

            if(mysqli_num_rows(mysqli_query($conexion,$registro)) == 0){
            $insercion = "INSERT INTO registrosbranda (name,email,pass) VALUES ('$name','$email','$pass')"; 
            $resultado = mysqli_query($conexion,$insercion);
            }else{
            echo"<script>alert('Error el Email ya esta Registrado');</script>";
            echo'<script> window.location.href="/html/registro.html"</script>';
            mysqli_close($conexion);
            }
        };


        if($resultado){
            echo"<script>alert('Registro Exitoso ya puedes iniciar sesion');</script>";
            echo'<script> window.location.href="/html/login.html"</script>';
        }else{ 
            echo"<script>alert('Error en el Registro');</script>";
            echo'<script> window.location.href="/html/registro.html"</script>';
            mysqli_close($conexion);
        }
?>