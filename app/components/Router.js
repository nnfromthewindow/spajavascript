import { fetchShop } from "../helpers/fetchShop.js"
import shopApi from "../helpers/shopApi.js"
import { Footer } from "./Footer.js"
import { HomeClothing } from "./HomeClothing.js"
import { HomeElectro } from "./HomeElectro.js"
import { Product } from "./Product.js"
import { ProductCard } from "./ProductCard.js"

export async function Router(){
    let {hash} = location
    const $main = document.getElementById('main')
    let id = localStorage.getItem('productId')

    $main.innerHTML = null

    if(!hash || hash === "#/"){
        await fetchShop({
            url: shopApi.ELECTRONICS,
            funcResponse: (products)=>{
                console.log(products)
                //let html = ''
               // products.forEach((product)=>(html+= ProductCard(product)))
                //document.getElementById('main').innerHTML = html
                $main.innerHTML=HomeElectro(products)
                //$main.appendChild(Footer())
                 fetchShop({
                    url: shopApi.WCLOTHING,
                    funcResponse: (products)=>{
                        console.log(products)
                        //let html = ''
                       // products.forEach((product)=>(html+= ProductCard(product)))
                        //document.getElementById('main').innerHTML = html
                        $main.innerHTML+=HomeClothing(products)
                        //$main.appendChild(Footer())
                    }
                })  
            }
        })
        

    }
    else if(hash === '#/categorias'){
        $main.innerHTML = `<h1>CATEGORIAS DE PRODUCTOS</h1>`
    }
    else if(hash === `#/product/${id}`){
        await fetchShop({
            url:`${shopApi.PRODUCTS}/${id}`,
            funcResponse: (product)=>{
                $main.innerHTML=Product(product)
            }
        })
    }
    
    

}