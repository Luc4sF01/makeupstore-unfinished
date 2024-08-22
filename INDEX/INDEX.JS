document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o carrossel
    $('.carousel-inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.carousel .prev',
        nextArrow: '.carousel .next',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Adiciona funcionalidade ao botão do carrinho
    document.querySelector('.cart-icon').addEventListener('click', function() {
        alert('Carrinho clicado!');
    });

    // Adiciona funcionalidade ao botão de busca
    document.querySelector('.search-cart form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Busca realizada!');
    });
});
