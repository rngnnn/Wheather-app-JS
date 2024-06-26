//figcaption en alttaki hava durumu yazisi
//.city-temp=derece
//.city
//sup=tag
//.city-name
//.city-name

const input=document.querySelector("input")
const button=document.querySelector("button")


let  arrayUsed=[]
fetch("https://api.openweathermap.org/data/2.5/weather?q=")

.then((resp)=>resp.json())
.then((data)=>{

    arrayUsed=data
    showScreen(data.wheather)
})
console.log(fetch);

let inputValue=
