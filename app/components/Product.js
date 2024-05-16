

export function Product(props){
    let{title,price,description,category,image,rating} = props

    return `
    <div class="product-container">
        <div class="product">
            <div class="product-details">
                <h1 class="product-title">${title}</h1>
                <p class="product-price">$${price}</p>
                <p class="product-description">${description}</p>
            </div>
            <div class="product-image">
                <img src=${image} alt=${title}/>
            </div>
        </div>
    </div>
    `
}