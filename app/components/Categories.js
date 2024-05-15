export function Categories(props){
    document.addEventListener("click",(e)=>{
        if(!e.target.matches(".category a")) return false
        localStorage.setItem('category', e.target.dataset.category)
    })
    let html=''
    
props.forEach((category) => {
    var encodedUrl = encodeURIComponent(category);
    html+=`<div class="category">
    <h1><a href="#product/category/${encodedUrl}" data-category="${category}">${category.toUpperCase()}</a></h1>
</div>`
});

return html
}