let characters = [];
const searchInput = document.querySelector('.search_input');
const searchBtn = document.querySelector('.search_btn');
const selector = document.querySelector('#genderSelect');
searchBtn.addEventListener('click', search);
selector.addEventListener('change', filterByGender);

axios.get('http://hp-api.herokuapp.com/api/characters')
    .then(function (response) {
        const { data } = response;
        data.splice(24, data.length);
        characters = data.map(character => new Img(character.image, character.name, character.gender, character.house));
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
    const filteredArray = characters.filter(character => {
        return character.name.toLowerCase().includes(searchText);
    });
    renderListOfCharacters(filteredArray);
};

function filterByGender() {
    clearListOfCharacters(characters);
    const selectedGender = this.value;
    if (selectedGender == 'all') {
        renderListOfCharacters(characters);
    };
    const filteredArray = characters.filter(character => character.gender.toLowerCase() === selectedGender);
    renderListOfCharacters(filteredArray);
}

	