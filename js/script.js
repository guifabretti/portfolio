function menuAparecer(){
    let menuMobile = document.querySelector('.menu-mobile')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "img/menu-de-hamburguer.png"
    }else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/fechar.png"
    }
}