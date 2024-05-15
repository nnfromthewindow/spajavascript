export function Categories(props){
    let html=''
props.forEach((category) => {
    html+=`<div class="category">
    <h1>${category}</h1>
</div>`
});

return html
}