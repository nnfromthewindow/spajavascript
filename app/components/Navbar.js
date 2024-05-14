export function Navbar(){
    const $navbar = document.createElement('nav')
    $navbar.classList.add('navbar')
    $navbar.innerHTML = `
    <h1 class="nav-title">Two Days</h1>
    <a href="#/">Home</a>
    <a href="#/categorias">Categorias</a>    
    `
    return $navbar
}

