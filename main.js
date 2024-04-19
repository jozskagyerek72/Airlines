import { apiKey } from "./apiKey.js";
import { getData } from "./getData.js";

let airline = []

let options = {
    method : 'GET',
    headers : {'x-api-key' : '5by5k6zv55vIEVCi0pyjWrqodlmXP90l2MA0n1tg'}
}
const url = `https://api.api-ninjas.com/v1/airlines?name=Ryanair`

fetch(url, options)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        airline=data;
        document.querySelector('.airline-list').innerHTML+=`
        <div class=" flex"><img class="" src="${data[0].logo_url}" alt="f"></div>
        `
    })
    .catch(err => {
        console.log(`error ${err}`);
    })


let page = 1
let totalPage = 1
let AlPerPage = 8

document.querySelector('.pagination').addEventListener('click',handlePaginationClick)
document.querySelector('.myBtn').addEventListener('click', handleClick)
showAirline(airline)

function handleClick(){
    let AlName = document.querySelector('.myInput').value
    //let url = AlName.length==0? returnUrl(apiKey) : returnUrl(apiKey,AlName)
    getData(url+"Singapore Airlines",renderAirlines)
    
}

function renderAirlines(data)
{
    airline = data
    console.log(airline);
    document.querySelector('.loading').classList.add('hidden')
    document.querySelector('.myBtn').classList.remove('hidden')
}

function showAirline() {
    document.querySelector('.airline-list').innerHTML=""
    let startIndex=(page-1)*AlPerPage
    let endIndex=startIndex+AlPerPage
    let AirlineToShow=airline.slice(startIndex,endIndex)
    console.log(AirlineToShow);
    AirlineToShow.forEach(obj=>{
        document.querySelector('.airline-list').innerHTML+=`
        <div class="myCard"><img class="myPhoto" src="${obj.logo_url}" alt="f"></div>
        `
    })
    renderPagination(airline.length)
}
function renderPagination(totalItem) {
    document.querySelector('.pagination').innerHTML=""
    totalPage=Math.ceil(totalItem/AlPerPage)
    for(let i=1;i<=totalPage; i++){
        let button = document.createElement('button')
        button.textContent=i
        button.classList.add('page-btn')
        if(i==page) button.classList.add('bg-indigo-800')
        document.querySelector('.pagination').appendChild(button)
       
    }
}
