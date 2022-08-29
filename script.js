let hideTextBtn = document.getElementById('hideTextBtn');

let hideText = document.getElementById('hideText');

hideTextBtn.addEventListener('click',toggleText);

function toggleText(){
    hideText.classList.toggle('show');
}

let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');

toggle_open.addEventListener('click',toggle_menu);

toggle_close.addEventListener('click',toggle_menu);

function toggle_menu(){
    menu.classList.toggle('show_menu');

    if(menu.classList.contains('show_menu')){
        toggle_open.style.display = 'none';
        toggle_close.style.display = 'block';
    }
    else{
        toggle_open.style.display = 'block';
        toggle_close.style.display = 'none';
    }
}

let menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLinks =>{
    menuLinks.addEventListener('click',function(){
        menu.classList.toggle('show_menu');

        if(menu.classList.contains('show_menu')){
            toggle_open.style.display = 'none';
            toggle_close.style.display = 'block';
        }
        else{
            toggle_open.style.display = 'block';
            toggle_close.style.display = 'none';
        }
    })
})

