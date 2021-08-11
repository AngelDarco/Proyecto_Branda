   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <H1>DataBase</H1>

    <?php
         require 'conexion.php';
         $table = 'usuarios';
         $clase = new Conexion();
         $array = $clase->read();

         
        foreach($array->query($sql) as $row){

            echo $row['name'];
            echo $row['email'];

        }


    ?>



    </body>
    </html>