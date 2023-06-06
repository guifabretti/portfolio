function menuAparecer(){
    let menuMobile = document.querySelector('.menu-mobile')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    }
}


function changeImage(element) {
    element.setAttribute('data-original-src', element.src);

    if (element.alt === 'HTML5') {
        element.src = 'img/icones-code-hover/html-5.png';
    } else if (element.alt === 'CSS3') {
        element.src = 'img/icones-code-hover/css-3.png';
    } else if (element.alt === 'JavaScript') {
        element.src = 'img/icones-code-hover/js.png';
    } else if (element.alt === 'Git') {
        element.src = 'img/icones-code-hover/git.png';
    } else if (element.alt === 'Figma') {
        element.src = 'img/icones-code-hover/figma.png';
    }
}

function restoreImage(element) {
    // Restaura a imagem original usando o atributo personalizado
    const originalSrc = element.getAttribute('data-original-src');
    element.src = originalSrc;
}