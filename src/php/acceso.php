<?php

require_once 'conexion.php';

    class Conexion{

    
        function create($table,$campo,$valor){
            try {
        $sql = "INSERT INTO `$table` WHERE $campo VALUES $valor=:campo";
        $result = $conexion->prepare($sql);
        $result->bindValue(':campo',$campo);
        $result->execute();
         
        } catch (Exception $e) {
           //die();
           echo 'Error: '.$e->getMessage();
        }
    }

    function read(){

        try {
            $resultado = new stdClass();
            $data = [];
            $i = 0;

            $sql = "SELECT * FROM usuarios";
            $result = $conexion->prepare($sql);
            $result->execute();
        
            /* foreach($conexion->query($sql) as $row){
                $objeto = new stdClass();
        
                $objeto->codepro = $row['name'];
                $data[$i]=$objeto;
                $i++;
            } */
                
              /*   header('Content-Type: application/json');
                //echo json_encode($data);
        
                $result->closeCursor();
                $sql = null;
                $conexion = null;
         */
        
        
             /*    $data = new stdClass();
        $i=0;
            try{
        $sql = "SELECT * FROM $table";
        $result = $conexion->prepare($sql);
        $result->execute();

        while ($row=$result->fetch(PDO::FETCH_ASSOC)){
            $data->data[i];
            $i++;
        }
            echo $data;

        }catch(Exception $e){
            echo 'Error: '.$e->getMessage();

        } */
        
        
            }catch(Exception $e){
                echo 'Error: '.$e->getMessage();
        
            }

            
            return $conexion;
    }





    }
