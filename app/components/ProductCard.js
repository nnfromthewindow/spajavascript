
export function ProductCard(props){
    let{id,title,price,description,category,image,rating} = props

    document.addEventListener("click",(e)=>{
        if(!e.target.matches(".product-card a")) return false
        localStorage.setItem('productId', e.target.dataset.id)
    })

    return `
    <div class="product-card" data-id=${id}>
    <img class="product-card__img" src="${image}" alt="${title}">
    <h2 class="product-card__title">${title}</h2>
    <p class="product-card__price">${price}</p>
    <p class="product-card__rating">${rating.rate}</p>
   
    <a href="#/product/${id}" data-id=${id}>Más información</a>
    </div>
    `
}