$(document).ready(function(){
    // Inicializar o Slick Slider
    $('.slick-slider').slick({
        slidesToShow: 3, // Mostrar 3 imagens ao mesmo tempo
        slidesToScroll: 1, // Rolar uma imagem por vez
        autoplay: true, // Ativa rotação automática
        autoplaySpeed: 5000, // Velocidade da rotação automática (5000ms = 5 segundos)
        dots: true, // Exibe pontos de navegação
        arrows: true, // Exibe setas de navegação
        infinite: true, // Permite rotação infinita
        speed: 500, // Velocidade da transição
        responsive: [
            {
                breakpoint: 768, // Para telas menores (como tablets)
                settings: {
                    slidesToShow: 2, // Mostrar 2 imagens ao mesmo tempo
                }
            },
            {
                breakpoint: 480, // Para telas bem pequenas (como celulares)
                settings: {
                    slidesToShow: 1, // Mostrar 1 imagem por vez
                }
            }
        ]
    });

    // Alternar entre login e registro
    $('.toggle-btn').on('click', function() {
        const target = $(this).data('target');
        $('.auth-form').removeClass('active');
        $(target).addClass('active');
    });

    // Inicialmente exibir o formulário de login
    $('.login-form').addClass('active');
});
