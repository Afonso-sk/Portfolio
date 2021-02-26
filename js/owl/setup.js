//Este setu pegamos no site de owl jquery, na opção demo e escolher o theme

$('.owl-carousel').owlCarousel({
    loop:true,//aqui posso colocar false para carousel poder parar no final ao passar
    margin:10,//para formartar distanciamento das nossas imagens
    nav:false,// aqui podemos desabilitar  para conseguirmos passar só ao clicar nos pontinhos
    responsive:{
        0:{
            items:1 //quando a tela tiver perto de 0 px vai mostrar só 1 imagens por vezs
        },
        600:{         
            items:3  //quando a tela tiver perto de 600 px vai mostrar só 3 imagens por vez
        },
        1000:{
            items:5 //quando a tela tiver perto de 1000 px vai mostrar só 5 imagens por vezs
        }
    }
})