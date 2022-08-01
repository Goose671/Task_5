let characters = [];
const searchInput = document.querySelector('.search_input');
const searchBtn = document.querySelector('.search_btn');
searchBtn.addEventListener('click', search);

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

function clearListOfCharacters() {
    const list = document.querySelector('.photos');
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function search() {
    clearListOfCharacters();
    const searchText = searchInput.value.toLowerCase();
    const filteredArray = characters.filter(character => {
       return character.name.toLowerCase().includes(searchText);
    });
    renderListOfCharacters(filteredArray);
};








