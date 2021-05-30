<?php
  session_start();

  session_unset();

  session_destroy();

  echo"<script>alert('Sesion Cerrada');</script>";
  echo"<script>window.location='/index.php'</script>";

?>
