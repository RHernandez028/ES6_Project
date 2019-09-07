let cabinCard = [{
    cabinPic1: ["img/cabin1-1.jpg", "img/cabin1-2.jpg", "img/cabin1-3.jpg","img/cabin1-4.jpg","img/cabin1-5.jpg"],
    cabinPic2: ["img/cabin2-1.jpg", "img/cabin2-2.jpg", "img/cabin2-3.jpg","img/cabin2-4.jpg","img/cabin2-5.jpg"],
    cabinPic3: ["img/cabin3-1.jpg", "img/cabin3-2.jpg", "img/cabin3-3.jpg","img/cabin3-4.jpg","img/cabin3-5.jpg"],
    cabinPic4: ["img/cabin4-1.jpg", "img/cabin4-2.jpg", "img/cabin4-3.jpg","img/cabin4-4.jpg","img/cabin4-5.jpg"],
    cabinPic5: ["img/cabin5-1.jpg", "img/cabin5-2.jpg", "img/cabin5-3.jpg","img/cabin5-4.jpg","img/cabin5-5.jpg"],
    cabinPic6: ["img/cabin6-1.jpg", "img/cabin6-2.jpg", "img/cabin6-3.jpg","img/cabin6-4.jpg","img/cabin6-5.jpg"],   
}]

// for (let i = 0; i < cabinCard.length; i++) {
//     document.getElementsByClassName("carousel-inner").innerHTML +=
//      `<div class="carousel-item ">
//         <img src="${cabinCard.cabinPic[i]}" style="width: 100%">
//     </div>`
    

// }


// Broke code but we tried
for (let i = 0; i < cabinCard.length; i++) {   
    for (let j = 0; j < cabinCard[i].length; j++) {
        if (j === 0) {
            document.querySelector("#carouselId" + i + " .carousel-inner").innerHTML += `<div class="carousel-item active">
        <img src="${cabinCard[i][j]}"  style="width: 100%"></img>
        </div>`
        } else {
            document.querySelector("#carouselId" + i + " .carousel-inner").innerHTML += `<div class="carousel-item">
        <img src="${cabinCard[i][j]}"  style="width: 100%"></img>
        </div>`
        }
}
}