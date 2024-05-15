import { ClothCard } from "./ClothCard.js";

 export function HomeClothing(products){
 let html=''
products.forEach((product) => {
    html+=ClothCard(product)
});

return `<div class="clothing-title__container">
<h1 class="clothing-title">Toda la moda en un solo lugar</h1>
</div><div class="clothing-container">
${html}
</div>`
}