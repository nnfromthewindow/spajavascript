export function Footer(){
    const $footer = document.createElement('footer')
    $footer.classList.add('footer')
    $footer.innerHTML = `
    <span>Nicolas Nuccelli 2024</span>
    <a href="mailto:nuccelli87@gmail.com">CONTACTO</a>    
    `
    return $footer
}