export function Footer(){
    const $footer = document.createElement('footer')
    $footer.classList.add('footer')
    $footer.innerHTML = `
    <h2 class="footer-name">Desarrollado por Nicolas Nuccelli 2024</h2>
    <a href="mailto:nuccelli87@gmail.com">@contacto</a>    
    `
    return $footer
}