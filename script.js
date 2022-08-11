let filteredCharacters = [];
let characters = [];
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
        filteredCharacters = characters;
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
    filteredCharacters =  filteredCharacters.filter(character => {
        return character.name.toLowerCase().includes(searchText);
    });
    renderListOfCharacters(filteredCharacters);
};

function filterByGender() {
    clearListOfCharacters(characters);
    const selectedGender = this.value;
    if (selectedGender == 'all') {
        search()
        filteredCharacters = characters;
        renderListOfCharacters(characters);
    } else{
        filteredCharacters = characters.filter(character => character.gender.toLowerCase() === selectedGender);
        renderListOfCharacters(filteredCharacters);
        search()
       
    }
    
    
}

function filterByHouse(){
    clearListOfCharacters(characters);
    const selectedHouse = this.value;
    if (selectedHouse == 'all') {
        search()
        filteredCharacters = characters;
        renderListOfCharacters(characters);
    } else{
        filteredCharacters = characters.filter(character => character.house.toLowerCase() === selectedHouse);
        renderListOfCharacters( filteredCharacters);
        search()
    }
   
    
}	

function reset(){
    window.location.reload()
};