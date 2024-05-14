export function Navbar(){
    const $navbar = document.createElement('nav')
    $navbar.classList.add('navbar')
    $navbar.innerHTML = `
    <a href="#/">Inicio</a>
    <a href="#/categorias">Categorias</a>    
    `
    return $navbar
}

