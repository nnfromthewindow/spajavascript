import shopApi from "./helpers/shopApi.js"
import { fetchShop } from "./helpers/fetchShop.js"
import { Header } from "./components/Header.js"
import { Main } from "./components/Main.js"
import { ProductCard } from "./components/ProductCard.js"
import { Router } from "./components/Router.js"

export function App(){
    const $root = document.getElementById('root')
    $root.innerHTML = null
    $root.appendChild(Header())
    $root.appendChild(Main())

    Router()
}