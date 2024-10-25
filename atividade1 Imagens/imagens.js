var num = Math.floor(Math.random() * 8);
var imagens = [
    'img/desenvolviSistemas.jpg',
    'img/bancoDados.webp',
    'img/linguagem.jpeg',
    'img/seguranca.jpg',
    'img/internetProtocolos.jpg',
    'img/mobileGanyu.jpg',
    'img/desenvolvitcc.jpg',
    'img/pokedexWeb.png'
];
var visualizar = imagens[num];
document.write('<h1> APERTE F5 </h1>');
document.write(`<img src="${visualizar}">`);