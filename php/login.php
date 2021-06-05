<?php    
        require 'conexion.php';

        $query = "SELECT*FROM registrosbranda WHERE email=:email AND pass=:pass";   
        $result = $conexion->prepare($query);
        $email = $_POST['email'];
        $pass = htmlentities(addslashes($_POST['pass']));

        $result->bindValue(":email",$email);
        $result->bindValue(":pass",$pass);

        $result->execute();

        $userdata = $result->fetch(PDO::FETCH_ASSOC);
        $data = $result->rowCount();

        if($data!=0){
            session_start();

            $_SESSION["usuario"] = $userdata['name'];
            $_SESSION["id"] = $userdata['id'];

            echo '<h2>Registro Exitoso</h2>';
            echo"<script>alert('Sesion Iniciada');</script>";
            echo"<script>window.location.href='/index.php'</script>";
        }else{
            echo"<script>alert('Error: El email o contraseña no coinciden')</script>";
            echo"<script>window.location.href='/html/login.html'</script>";
        };   


        mysqli_close($conexion);
?>



