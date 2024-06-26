//figcaption en alttaki hava durumu yazisi
//.city-temp=derece
//.city
//sup=tag
//.city-name
//.city-name

const input=document.querySelector("input")
const button=document.querySelector("button")


let inputValue =""

let apiLink=`https://api.openweathermap.org/data/2.5/weather?q={inputValue}&appid=a17bc3f5ae92ad5fdbaad666100b6f23`

button.onclick=(e)=>{

inputValue= input.value.toString()

}


fetch(apiLink)

.then((resp)=>resp.json())
.then((data)=>{

    arrayUsed=data
    showScreen(data)
})
console.log(fetch);

function showScreen(a){



}