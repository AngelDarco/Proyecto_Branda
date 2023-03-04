<?php
    require 'conexion.php';
    $id = $_POST['id'];
    try{
        $sql = "DELETE FROM productosbranda WHERE id = :id";
        $result = $conexion->prepare($sql);
        $result->execute(array(':id'=>$id));
        if($result->fetch(PDO::FETCH_ASSOC)){
        echo json_encode('Fail');
            $result->closeCursor();
            $sql = null;
            $conexion = null;        
        }else{
        echo json_encode("Eliminado");
            $result->closeCursor();
            $sql = null;
            $conexion = null;    
        }
    }catch (Exception $e) {
        echo json_encode($e->getMessage());
    }