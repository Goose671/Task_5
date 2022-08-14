let filteredCharacters = [];
let characters = [];
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('.search_btn');
const genderSelector = document.querySelector('#genderSelect');
const houseSelector = document.querySelector('#houseSelect');
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', reset);
searchBtn.addEventListener('click', filter);
genderSelector.addEventListener('change', filter);
houseSelector.addEventListener('change', filter);

axios.get('http://hp-api.herokuapp.com/api/characters')
    .then(function (response) {
        const { data } = response;
        data.splice(24, data.length);
        characters = data.map(character => new Img(character.image, character.name, character.gender, character.house));
        renderListOfCharacters(characters);
    }).catch(err => {
        console.error(err);
    });	

function filter() {
    clearListOfCharacters(characters);

    const name = searchInput.value;
    const gender = genderSelector.value;
    const house = houseSelector.value;
    filteredCharacters = filterByName(name, characters);
    filteredCharacters = filterByGender(gender, filteredCharacters);
    filteredCharacters = filterByHouse(house, filteredCharacters);

    renderListOfCharacters(filteredCharacters);
}

function renderListOfCharacters(list) {
    list.forEach(item => {
        item.render();
    });
}

function clearListOfCharacters(list) {
    list.forEach(item => {
        item.removeFromDOM();
    });
    filteredCharacters = [];
}

function filterByName(name, arr) {
    const searchText = name.toLowerCase();
    return arr.filter(character => character.name.toLowerCase().includes(searchText));
};

function filterByGender(gender, arr) {
    return gender == 'all' ? arr : arr.filter(character => character.gender.toLowerCase() === gender);
}

function filterByHouse(house, arr) {
    return house === 'all' ? arr : arr.filter(character => character.house.toLowerCase() === house);
}

function reset(){
    window.location.reload()
};