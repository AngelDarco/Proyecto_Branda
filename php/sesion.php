<?php
session_start();

    $id = $_SESSION['id'];
    $user = $_SESSION['usuario'];

    if (isset($user)&&isset($id))
        echo json_encode($user.';'.$id);
    else echo json_encode("SesionNoIniciada");