"use strict"

let cabinInfo = [{
    cabinName: "SloppyJoe",
    cabinPrice: "$75",
    cabinSq: "2100 sqft."
},
{
    cabinName: "Big Bass",
    cabinPrice: "$100",
    cabinSq: "1900 sqft."
}]

let owners = [{
    name: `Gabriel Hernandez`,
    skills: `HTML5`,
    portrait: `gabriel.jpg`
},
{
    name: `Anthony Arias`,
    skills: `HTML5`,
    portrait: `anthony.jpeg`
},
{
    name: `Emmanuel Cortes`,
    skills: `HTML5`,
    portrait: `emmanuel.jpg`
}];



for (var i = 0; i < owners.length; i++) {
    document.getElementById("owners").innerHTML +=
    `<h2>${owners[i].name}</h2>    
    <h2>Skills: ${owners[i].skills}</h2>
    <div class="portrait" style="background-image: url('${owners[i].portrait}')"></div>`
}