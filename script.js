let characters = [];
let arr = [];
const searchInput = document.querySelector('.search_input');
const searchBtn = document.querySelector('.search_btn');
const selector = document.querySelector('#genderSelect');
const selectorHouse = document.querySelector('#houseSelect');
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', reset);
searchBtn.addEventListener('click', search);
selector.addEventListener('change', filterByGender);
selectorHouse.addEventListener('change', filterByHouse);

axios.get('http://hp-api.herokuapp.com/api/characters')
    .then(function (response) {
        const { data } = response;
        data.splice(24, data.length);
        characters = data.map(character => new Img(character.image, character.name, character.gender, character.house));
        arr = data.map(character => new Img(character.image, character.name, character.gender, character.house));
        renderListOfCharacters(characters);
    }).catch(err => {
        console.error(err);
    });

function renderListOfCharacters(list) {
    list.forEach(item => {
        item.render();
    })
}

function clearListOfCharacters(list) {
    list.forEach(item => {
        item.removeFromDOM();
    })
}

function search() {
    clearListOfCharacters(characters);
    const searchText = searchInput.value.toLowerCase();
    let filteredArray = characters.filter(character => {
        return character.name.toLowerCase().includes(searchText);
    });
    renderListOfCharacters(filteredArray);
    characters = filteredArray;
    return characters;
};

function filterByGender() {
    clearListOfCharacters(characters);
    const selectedGender = this.value;
    if (selectedGender == 'all') {
        renderListOfCharacters(characters);
    };
    let filteredArray = characters.filter(character =>{
       return character.gender.toLowerCase() === selectedGender
    });
    renderListOfCharacters(filteredArray);
    characters = filteredArray;
    return characters;
}

function filterByHouse(){
    clearListOfCharacters(characters);
    const selectedHouse = this.value;
    if (selectedHouse == 'all') {
        renderListOfCharacters(characters);
    };
    let filteredArray = characters.filter(character =>{
        return character.house.toLowerCase() === selectedHouse
    } );
    renderListOfCharacters(filteredArray);
    characters = filteredArray;
    return characters;
}	

function reset(){
    clearListOfCharacters(characters);
    renderListOfCharacters(arr);
    searchInput.value = "";
};