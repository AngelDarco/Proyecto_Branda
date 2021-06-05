<?php
    session_start();
    $saludo = '';
    if(!isset($_SESSION["usuario"])){
        $saludo = 'Invitado';
       ?>
      <script src="/js/carro.js"></script>
     
    <?php   
    }else{
    $saludo = $_SESSION["usuario"];
    };

?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <title>TIENDA ONLINE</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale= 1.0, minimum-scale= 1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="icon" type="image/jpeg" href="img/logo2.jpeg">

    <!-- Nuevo Codigo -->
    <script src="/js/slider.js"></script>
    <script src="/js/app.js"></script>
    <script src="/js/sweetalert2.all.min.js"></script>
    <script src="/js/add.js"></script>
    

    <link rel="stylesheet" href="/css/estilos.css">
    <link rel="stylesheet" href="/css/productos.css">
    <link rel="stylesheet" href="/css/buscador.css">

</head>

<body>



    <header class="main-header">
        <div class="container container--flex">
            <div class="main-header__container">
                <h1 class="main-header__title"> BEAUTY FACE </h1>
                <span class="icon-menu" id="btn-menu"><i class="fas fa-bars"></i></span>
       
                


                <nav class="main-nav" id="main-nav">
                    <ul class="menu">
                        <li class="menu__item"><a href="index.php" class="menu__link" target=”_blank”>Inicio</a></li>
                        <li class="menu__item"><a href="/html/nosotros.html" class="menu__link" target=”_blank”>NOSOTROS</a></li>
                        <li class="menu__item"><a href="/html/recomendaciones.html" class="menu__link" target=”_blank”>RECOMENDACIONES</a></li>
                        <li class="menu__item"><a href="/html/maquillaje.html" class="menu__link">PRODUCTOS</a></li>
                    </ul>
                </nav>
            </div>
            <div class="main-header__container">
                <span class="main-header__txt">Atención al cliente</span>
                <p class="main-header__txt"><i class="fas fa-phone"></i> Llama 8341164846</p>
            </div>
            <div class="main-header__container">
                <a style="font-size:20px; color:#5b0285" href="/html/login.html" class="main-header__link"><i class="fas fa-user"></i></a>



                <a style="color:#5b0285" href="/php/carro.php" class="main-header__btn"> <?php echo $saludo; ?> <i class="fas fa-shopping-cart"></i></a>
                <a style="font-size:24px; color:#5b0285" href="/php/logout.php"><i class="fas fa-sign-out-alt"></i></a>
                <input type="search" class="main-header__input" placeholder="Buscar productos"><a href="#redireccion"><i class="fas fa-search" id="buscar"></i></a>
                <!-- Boton Buscar -->
           
           
            </div>
        </div>
    </header>
    <div class="container-slider">
        <div class="slider" id="slider">
            <div class="slider__section">
                <img src="/img/imagen1.jpg" alt="" class="slider__img">
                <div class="slider__content">
                    <h2 class="slider__title">El maquillaje magnifica la belleza que ya existe</h2>
                    <p class="slider__txt">La mejor inversión, eres tú</p>
                    <a href="/html/maquillaje.html" class="btn-shop">Compra ahora</a>
                </div>
            </div>
            <div class="slider__section">
                <img src="/img/imagen2.jpg" alt="" class="slider__img">
                <div class="slider__content">
                    <h2 class="slider__title">El maquillaje magnifica la belleza que ya existe</h2>
                    <p class="slider__txt">La mejor inversión, eres tú</p>
                    <a href="/html/maquillaje.html" class="btn-shop">Compra ahora</a>
                </div>
            </div>
            <div class="slider__section">
                <img src="/img/imagen3.jpg" alt="" class="slider__img">
                <div class="slider__content">
                    <h2 class="slider__title">El maquillaje magnifica la belleza que ya existe</h2>
                    <p class="slider__txt">La mejor inversión, eres tú</p>
                    <a href="/html/maquillaje.html" class="btn-shop">Compra ahora</a>
                </div>
            </div>
            <div class="slider__section">
                <img src="/img/imagen4.jpg" alt="" class="slider__img">
                <div class="slider__content">
                    <h2 class="slider__title">El maquillaje magnifica la belleza que ya existe</h2>
                    <p class="slider__txt">La mejor inversión, eres tú</p>
                    <a href="/html/maquillaje.html" class="btn-shop">Compra ahora</a>
                </div>
            </div>
        </div>
        <div class="slider__btn slider__btn--right" id="btn-right">&#62;</div>
        <div class="slider__btn slider__btn--left" id="btn-left">&#60;</div>
    </div>
    <main class="main">
        <div class="container">




            <!-- Codigo Nuevo -->
            <div class="container__buscador ocultar" id="redireccion">
                <i class="fas fa-times btn__cerrar" ></i>  
            </div>





            <h2 class="main-title">Te presentamos nuestros favoritos</h2>
            <section class="container-products">
                <div class="product">
                    <img class="myimg" src="/img/producto1.jpg">
                    <div class="product__description">
                        <h3 class="product__title">HIDRADERM AGUA DE AVENA-ROSAS</h3>
                        <P class="product__txt">Hidratación</P>
                        <span class="product__price">$500.00</span>
                    </div>
                    <i id="1" class="product__icon fas fa-cart-plus"></i>
                </div>
                <div class="product">
                    <img class="myimg" src="/img/producto2.jpg">
                    <div class="product__description">
                        <h3 class="product__title">HIDRADERM HYAL CREMA FACIAL</h3>
                        <P class="product__txt">Hidratación</P>
                        <span class="product__price">$800.00</span>
                    </div>
                    <i id="2" class="product__icon fas fa-cart-plus"></i>
                </div>

                <div class="product">
                    <img class="myimg" src="/img/producto3.jpg">
                    <div class="product__description">
                        <h3 class="product__title">FLASH NUDE 02 GOLD</h3>
                        <P class="product__txt">Maquillaje</P>
                        <span class="product__price">$1,250.00</span>
                    </div>
                    <i id="3" class="product__icon fas fa-cart-plus"></i>
                </div>

                <div class="product">
                    <img class="myimg" src="/img/producto4.jpg">
                    <div class="product__description">
                        <h3 class="product__title">FLASH NUDE POWDER</h3>
                        <P class="product__txt">Maquillaje</P>
                        <span class="product__price">$1,250.00</span>
                    </div>
                    <i id="4" class="product__icon fas fa-cart-plus"></i>
                </div>
            </section>
            <section class="container__testimonials">
                <h2 class="section__title">Porque el estilo no tiene raza ni género</h2>
                <h3 class="testimonial__title">Atrévete a ser tu mejor versión</h3>
                <p class="testimonial__txt"></p>
            </section>

            <div class="container-editor">
                <div class="editor__item">
                    <img src="/img/unisex.jpeg" alt="" class="editor__img">
                    <p class="editor__circle">EXPRESA TU ESTILO</p>
                </div>
                <div class="editor__item">
                    <img src="/img/inclusion.jpg" alt="" class="editor__img">
                    <p class="editor__circle">EXPRESA TU ESTILO</p>
                </div>
            </div>
            <section class="container-tips">
                <div class="tip">
                    <i class="far fa-hand-paper"></i>
                    <h2 class="tip__title">Empieza a cuidar tu piel </h2>
                    <p class="tip__txt">La piel es nuestro organo mas grande, por eso es importante darle la atención que merece.</p>
                    <p>¡Aprende a cuidarla!</p>
                    <a href="/html/maquillaje.html" class="btn-shop">SHOP NOW</a>
                </div>
                <div class="tip">
                    <i class="fas fa-rocket"></i>
                    <h2 class="tip__title">Envios solo locales</h2>
                    <p class="tip__txt">Por el momento solo hacemos entregas en Ciudad Victoria, pero esperamos tener envios nacionales muy pronto</p>
                    <p>
                        <a href="/html/maquillaje.html" class="btn-shop">SHOP NOW</a>
                </div>
                <div class="tip">
                    <i class="fas fa-cog"></i>
                    <h2 class="tip__title">Pagos asegurados</h2>
                    <p class="tip__txt">No tendras que preocuparte por tu dinero porque el pago es 100% personal, por lo cual, tendras una compra segura.</p>
                    <a href="/html/maquillaje.html" class="btn-shop">SHOP NOW</a>
                </div>
            </section>
        </div>
    </main>
    <footer class="main-footer">
        <div class="footer__section">
            <h2 class="footer__title">Sobre Nosotros</h2>
            <p class="footer__txt">Somos una tienda que ofrece gran variedad de productos de belleza y cuidado de piel, asi como tambien podrás encontrar tips y reseñas sobre nuestra mercancía.</p>
            <div class="footer__section">
                <h2 class="footer__title">Ubicación :</h2>
                <p class="footer__txt">Ciudad Victoria, Tamaulipas. Mexico </p>
                <h2 class="footer__title">Contacto</h2>
                <p class="footer__txt">Teléfono : 8341164846</p>
                <p class="footer__txt">Email : beautyface@gmail.com</p>
            </div>
            <div class="footer__section">
                <h2 class="footer__title">Quick Links</h2>
                <a href="/html/login.html" class="footer__link" target=”_blank”>REGISTRATE</a>
                <a href="/html/nosotros.html" class="footer__link" target=”_blank”>NOSOTROS</a>
                <a href="/html/recomendaciones.html" class="footer__link" target=”_blank”>RECOMENDACIONES</a>
                <a href="" class="footer__link">PRODUCTOS</a>
            </div>
            <div class="footer__section">
                <h2 class="footer__title">Registrate para recibir ofertas</h2>
                <p class="footer__txt">Únete a nuestro CLUB DE LA BELLEZA y entérate de Promociones, Eventos, Nuevos Productos y mucho más...</p>

            </div>

    </footer>

</body>
</html>