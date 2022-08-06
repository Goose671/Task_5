let characters = [];
const searchInput = document.querySelector('.search_input');
const searchBtn = document.querySelector('.search_btn');
const selector = document.querySelector('.search_filter');
searchBtn.addEventListener('click', search);
// selector.addEventListener('click', filterByGender);
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
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function search() {
    clearListOfCharacters();
    const selectGender = selector.value;
    let filteredArrayByGender = characters;
    if (selectGender == 1) {
        
    };
    if (selectGender == 2) {
        filteredArrayByGender = characters.filter(character => {
              
            const str = character.gender.charAt(0).toUpperCase() + character.gender.slice(1);
            console.log(str);
            return str.includes('Male');
        });
    };
    if (selectGender == 3) {
        filteredArrayByGender = characters.filter(character => {
            return character.gender.includes('female');
        });
    };

    const searchText = searchInput.value.toLowerCase();
    let filteredArray = filteredArrayByGender.filter(character => {
        return character.name.toLowerCase().includes(searchText);
    });
    renderListOfCharacters(filteredArray);
};

document.multiselect('#testSelect1')
		.setCheckBoxClick("checkboxAll", function(target, args) {
			console.log("Checkbox 'Select All' was clicked and got value ", args.checked);
		})
		.setCheckBoxClick("1", function(target, args) {
			console.log("Checkbox for item with value '1' was clicked and got value ", args.checked);
		});

	