export function HomeElectro(products){

return `

<div class="home-container">
<div class="main-image"><img src=${products[0].image} alt=""></div>
<div class="right-container">
<div class="images-up"><img src=${products[1].image} alt=""><img src=${products[2].image} alt=""></div>
<div class="images-down"><img src=${products[3].image} alt=""><img src=${products[4].image} alt=""></div>
</div>
</div>
<div class="tech-title__container">
    <h1 class="tech-title">Visita nuestras ultimas ofertas en tecnologia</h1>
</div>
<div class="clothing-title__container">
    <h1 class="clothing-title">Toda la moda en un solo lugar</h1>
</div>
`
}

/*
<div class="grid-container">
    <div class="div1"><img src=${products[0].image} alt=${products[0].title}></div>
    <div class="small-image"><img src=${products[1].image} alt=${products[0].title}></div>
    <div class="small-image"><img src=${products[2].image} alt=${products[0].title}></div>
    <div class="small-image"><img src=${products[3].image} alt=${products[0].title}></div>
    <div class="small-image"><img src=${products[4].image} alt=${products[0].title}></div>
  </div>
  */