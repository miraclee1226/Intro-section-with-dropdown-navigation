

function openMenu() {
    const tabMenu = document.querySelector('.tabMenu');
    const menuBtn = document.querySelector('.menu');
    menuBtn.style['display'] = 'none';
    tabMenu.style ['transform'] = "translate(0px, 0px)";
}

function closeMenu(){
    const tabMenu = document.querySelector('.tabMenu');
    const menuBtn = document.querySelector('.menu');
    menuBtn.style['display'] = 'block';
    tabMenu.removeAttribute("style");
}


