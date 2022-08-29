let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');

toggle_open.addEventListener('click',toggle_menu);

toggle_close.addEventListener('click',toggle_menu);

function toggle_menu(){
    menu.classList.toggle('show_menu');
}