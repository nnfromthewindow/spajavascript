import { Navbar } from "./Navbar.js"

export function Header(){
    const $header = document.createElement('header')
    $header.classList.add('header')
    $header.appendChild(Navbar())
    return $header
}