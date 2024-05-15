export function Navbar(){
    const $navbar = document.createElement('nav')
    $navbar.classList.add('navbar')
    $navbar.innerHTML = `
    <h1 class="nav-title">Two Days| e-comerce</h1>
    <div class="nav-links">
    <a href="#/">Home</a>
    <a href="#/categories">Categorias</a>   
    </div>
     
    `
    return $navbar
}

