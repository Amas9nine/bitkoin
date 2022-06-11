

// let $CurrentDate = document.querySelector(`.currentDate`) 
// $CurrentDate.insertAdjacentHTML(`beforebegin`,`
// <div>${new Date().toDateString()}</div>
// `)
// // 
// let $moneyBIG = document.querySelector(`.moneyBIG`)
// fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
// .then((response)=>{
// 	return response.json()
// })
// .then((data)=>{
// console.log(data)
// // for(key in data.Valute){
// 	let get = data.Valute.AUD
// 	$moneyBIG.insertAdjacentHTML(`beforeend`,
// 	`<div>${get.Value}</div>`)
// // }
// })
let text = `lorem ipsum`
let $proverka = document.querySelector(`.proverka`)
$proverka.insertAdjacentHTML(`afterbegin`,`
<h1 class="proverka2">${text}</h1>`)

let $list = document.querySelector(`.list`)
fetch("https://api.nomics.com/v1/currencies/ticker?key=56f53e2d23f9275db71ca2a843dbdf1743496220&ids=BTC,ETH,XRP,LTC,DASH,SOL,DOGE,SHIB,MATIC&interval=1d,30d&convert=USD&per-page=100&page=1")
  .then(response => response.json())
  .then(data => {console.log(data)
// перевести в NUMBER потомучто Math.floor() принимает толькл Number
  data.forEach(element => {
	$list.insertAdjacentHTML(`beforebegin`,
	`<div class="line-1">

        <div >
            <img src="${element.logo_url}"/>
            <h2 class="h2">${element.name}</h2>
        </div>

<h1 class ="padding"> 
  $${Number(element.price).toFixed(2)}
</h1>

</div>`)
  })});
	// стринг в намбер потом округлить
	// ${Number(element.price).toFixed(2)}  это как 100 * / 100 -> показывает скоько должно быть после точки

  
