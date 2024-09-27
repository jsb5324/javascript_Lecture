const reviewList = [
    {
        id : 1,
        name : "pepe",
        type : "indoor",
        img : "pepe1.jpg",
        text : "pepe is the frog"
    },
    {
        id : 2,
        name : "pepe2",
        type : "outdoor",
        img : "pepe2.jpg",
        text : "pepe is the frog"
    },
    {
        id : 3,
        name : "pepe3",
        type : "indoor",
        img : "pepe3.jpg",
        text : "pepe is the frog"
    }
]

const mainImg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 1;

window.addEventListener("DOMContentLoaded", function() {
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
})