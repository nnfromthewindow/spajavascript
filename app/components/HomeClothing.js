import { ClothCard } from "./ClothCard.js";
import { ProductCard } from "./ProductCard.js"

 export function HomeClothing(products){
 let html=''
products.forEach((product) => {
    html+=ClothCard(product)
});

return html
}