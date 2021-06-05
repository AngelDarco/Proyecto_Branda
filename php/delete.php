<?php
    session_start();
    require 'conexion.php';
    $code = $_POST['id'];

    try{
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_name",$db_user,$db_password);
    $conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }catch (Exception $e){
        echo "Error: ".$e;
    }

    if(isset($_SESSION['usuario'])){
    $sql = "DELETE FROM productosbranda WHERE code LIKE :code";
    $result = $conexion->prepare($sql);
    $result->bindParam(":code",$code,PDO::PARAM_INT);
    $result->execute();
    $result->closeCursor();
    
    if($result->rowCount()>0){
      echo "<script>
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Borrado',
        showConfirmButton: false,
        timer: 1500
      })
      </script>";
        }else{
            echo "<script> Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Lo Sentimos Algo Salio Mal',
            showConfirmButton: false,
            timer: 1500
          })
          </script>";
        }
    }


?>