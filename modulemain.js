let airline = []

let page = 1
let qStr = "&query=Ryanair"

let options = {
    method : 'GET',
    headers : {'x-api-key' : '5by5k6zv55vIEVCi0pyjWrqodlmXP90l2MA0n1tg'}
}
const url = `https://api.api-ninjas.com/v1/airlines?name=Ryanair`
const urlpic = `https://api.unsplash.com/search/photos?client_id=Ajtp2bCaCXnMcwLDiOGZWtHh1vuCDM6bszAihbOe6g0&page=`
//document.querySelector(".myBtn").addEventListener("click", renderAirlines)

fetch(url, options)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        airline=data;
        showAirlines()
        
    })
    .catch(err => {
        console.log(`error ${err}`);
    })

    console.log(airline);

const getData = async (url, renderFC)=>{
        const response = await fetch(url)
        const data = await response.json()
        renderFC(data)
}

function showAirlines(data)
{
    airline.forEach(item => {
        document.querySelector('.airline-list').innerHTML+=`
        <div class=" flex"><img class="" src="${item.logo_url}" alt="f"></div>
        `
    })
    getData(urlpic+page+qStr, renderAirlines)

}

function renderAirlines(data){
    data.results.forEach(obj => {
        const imageElement = document.createElement("img")
        imageElement.src = obj.urls.small
        imageElement.alt = obj.alt_description
        document.querySelector(".airline-list").appendChild(imageElement)
    });
    console.log(page);
    page++
}

