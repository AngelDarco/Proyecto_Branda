<?php
session_start();
    if (isset($_SESSION['id'])&&isset($_SESSION['usuario']))
        echo json_encode($_SESSION['usuario'].';'.$_SESSION['id']);
    else echo json_encode("SesionNoIniciada");