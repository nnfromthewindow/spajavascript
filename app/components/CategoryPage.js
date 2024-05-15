import { ProductCard } from "./ProductCard.js";

export function CategoryPage(category){

    let html=''
    category.forEach((product) => {
        html+=ProductCard(product)
    });
    
    return `<div class="category-container">
    ${html}
    </div>`
}