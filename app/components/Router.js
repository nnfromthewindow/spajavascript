import { fetchShop } from "../helpers/fetchShop.js"
import shopApi from "../helpers/shopApi.js"
import { Categories } from "./Categories.js"
import { CategoryPage } from "./CategoryPage.js"
import { HomeClothing } from "./HomeClothing.js"
import { HomeElectro } from "./HomeElectro.js"
import { Product } from "./Product.js"
import { ProductCard } from "./ProductCard.js"

export async function Router(){
    let {hash} = location
    const $main = document.getElementById('main')
    let id = localStorage.getItem('productId')
    let category = localStorage.getItem('category')
    var encodedUrl = encodeURIComponent(category);
    $main.innerHTML = null
console.log(category)
console.log(hash)

    if(!hash || hash === "#/"){
        await fetchShop({
            url: shopApi.ELECTRONICS,
            funcResponse: (products)=>{
           
                //let html = ''
               // products.forEach((product)=>(html+= ProductCard(product)))
                //document.getElementById('main').innerHTML = html
                $main.innerHTML=HomeElectro(products)
                //$main.appendChild(Footer())
                 fetchShop({
                    url: shopApi.WCLOTHING,
                    funcResponse: (products)=>{
                  
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
    else if(hash === '#/categories'){
        await fetchShop({
            url: shopApi.CATEGORIES,
            funcResponse: (categories)=>{
             
                //let html = ''
               // categories.forEach((product)=>(html+= ProductCard(product)))
                //document.getElementById('main').innerHTML = html
                $main.innerHTML=Categories(categories)
                //$main.appendChild(Footer())
            }
        })  
    }
    else if(hash === `#/product/${id}`){
        await fetchShop({
            url:`${shopApi.PRODUCTS}/${id}`,
            funcResponse: (product)=>{
                $main.innerHTML=Product(product)
            }
        })
    }
    else if(hash === `#product/category/${encodedUrl}`){
        console.log("GOLAA")
        await fetchShop({
            url:`${shopApi.CATEGORY}/${encodedUrl}`,
            funcResponse: (product)=>{
                $main.innerHTML=CategoryPage(product)
            }
        })
    }
    
    

}