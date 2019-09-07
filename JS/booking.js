"use strict"

// didn't end up using
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

// Info about owners on home page
let owners = [{
    name: `Gabriel Hernandez`,
    skills: `Programmer`,
    portrait: `gabriel.jpg`
},
{
    name: `Anthony Arias`,
    skills: `Web Design`,
    portrait: `anthony.jpeg`
},
{
    name: `Emmanuel Cortes`,
    skills: `Web Design`,
    portrait: `emmanuel.jpg`
}];


// Loops through each owner and their info 
for (var i = 0; i < owners.length; i++) {
    document.getElementById("owners").innerHTML +=
        `<h2>${owners[i].name}</h2>    
    <h2>Skills: ${owners[i].skills}</h2>
    <div class="portrait" style="background-image: url('${owners[i].portrait}')"></div>`
}