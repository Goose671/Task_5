// const { response } = require("express");
let responseArr = [];
const searchInput = document.getElementsByClassName('search_input')
let searchBtn  = document.getElementsByClassName('search_btn')
searchBtn = document.addEventListener('click', search[responseArr])

function search(array){

    let searchText = searchInput.value;

    let filteredArray = array.filter(function(curentValue){

        return curentValue = searchText;

    });
    console.log(filteredArray)
    mainFunction(filteredArray);

};



axios.get('http://hp-api.herokuapp.com/api/characters')
    .then(function (response) {
        responseArr = response.data
        mainFunction(response);
        
    });

function mainFunction(response) {

    let arrOfPhotos = response.data;

    arrOfPhotos.splice(24,24);

    arrOfPhotos.splice(99,100000);

    arrOfPhotos.forEach(Image => {
        const img = new Img(Image.image, Image.name,Image.gender,Image.house)
        img.render();
    });
}








