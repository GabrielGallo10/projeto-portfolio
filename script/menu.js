let btnMenu = document.getElementById('btn-menu-abrir');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('ativo');
});

menu.addEventListener('click', ()=>{
    menu.classList.remove('ativo');
});

overlay.addEventListener('click', ()=>{
    menu.classList.remove('ativo');
});