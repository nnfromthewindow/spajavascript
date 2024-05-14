export function fetchShop(props){
let {url, funcResponse} = props;

fetch(url)
.then(res => res.ok ? res.json() : Promise.reject(res))
.then(json => funcResponse(json))
.catch(err =>{
    let message = err.statusText || 'Error de acceso a la API'

    document.getElementById("root").innerHTML= `
    <div class="error">
        <p>Error: ${err.status}: ${message}</p>
    </div>
    `
})

}