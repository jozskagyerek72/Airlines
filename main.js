import { apiKey } from "./apiKey.js";
import { getData } from "./getData.js";

const url = `https://api.api-ninjas.com/v1/airlines?name=${apiKey}`

let airline = []
let page = 1
let totalPage = 1
let AlPerPage = 8

getData(url,renderAirlines)

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
    let AirlineToShow=cats.slice(startIndex,endIndex)
    console.log(AirlineToShow);
    AirlineToShow.forEach(obj=>{
        document.querySelector('.airline-list').innerHTML+=`
        <div class="myCard"><img class="myPhoto" src="${obj.url}" alt="${obj.name[0].name}"></div>
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
function handlePaginationClick(e) {
    console.log(e.target.textContent);
    if(e.target.tagName=='BUTTON'){
        page=+e.target.textContent
        showAirline()
    }
 }