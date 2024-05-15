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


    if(!hash || hash === "#/"){
        await fetchShop({
            url: shopApi.ELECTRONICS,
            funcResponse: (products)=>{
                $main.innerHTML=HomeElectro(products)
                 fetchShop({
                    url: shopApi.WCLOTHING,
                    funcResponse: (products)=>{
                        $main.innerHTML+=HomeClothing(products)
                    }
                })  
            }
        })
        

    }
    else if(hash === '#/categories'){
        await fetchShop({
            url: shopApi.CATEGORIES,
            funcResponse: (categories)=>{
                $main.innerHTML=Categories(categories)
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
        await fetchShop({
            url:`${shopApi.CATEGORY}/${encodedUrl}`,
            funcResponse: (product)=>{
                $main.innerHTML=CategoryPage(product)
            }
        })
    }
    
    

}