import { apiKey } from "./apiKey.js";
import { getData } from "./getData.js";

const url = `https://api.api-ninjas.com/v1/airlines?name=${apiKey}`

getData(url,renderAirlines)

function renderAirlines(data)
{
    console.log(data);
}
