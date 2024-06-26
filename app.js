const input = document.querySelector("input")
const button = document.querySelector("button")
const cities = document.querySelector(".cities")

let arrayUsed = []
let inputValue= ""

let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=a17bc3f5ae92ad5fdbaad666100b6f23`




fetch (apiLink)
.then((resp)=>resp.json())
.then((data)=>{

    arrayUsed = data
    ekranaBasma(data)
})


button.onclick=(e)=>{
    e.preventDefault()
    inputValue = input.value
}



function ekranaBasma (veri){
let newLi = document.createElement("li")
    newLi.appendChild(cities)

    newLi.innerHTML += `
    
    <h2 class="city-name" data-name="${veri.name},${veri.sys.country}">
             <span>${veri.name}</span>
                <sup>${veri.sys.country}</sup>
           </h2>
           <div class="city-temp">${Math.round(veri.main.temp)}<sup>°C</sup></div>
           <figure>
                 <img class="city-icon" src="https://openweathermap.org/img/wn/${veri.weather[0].icon}@2x.png">
                 <figcaption>${veri.weather[0].description}</figcaption>
           </figure>
    `;
}
ekranaBasma();