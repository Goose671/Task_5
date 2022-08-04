class Img {
    constructor(url, name,gender,house) {
        this.url = url;
        this.name = name;
        this.gender = gender;
        this.house = house;
        // this.undefind = undefind
    };
    render() {
        
        // if (this.url == "") {

        //     const listOfPhotos = document.querySelector('.photos')

        //     let photo_div = document.createElement("div")

        //     photo_div.classList.add('block')

        //     listOfPhotos.append(photo_div)

        //     let photo = document.createElement('img')

        //     photo.classList.add('img')

        //     photo.classList.add('photo_emp')

        //     photo.src = 'https://simko.uliveacademy.id/assets/v2/images/users/user_default.png'

        //     photo_div.append(photo)

        //     let info_div = document.createElement('div')

        //     info_div.classList.add('info')

        //     photo_div.append(info_div)

        //     let info_p_name = document.createElement('p')

        //     info_p_name.innerHTML = 'Name: ' + this.undefind

        //     info_div.append(info_p_name)

        //     let info_p_gender = document.createElement('p')

        //     info_p_gender.innerHTML = 'Gender: '+ this.undefind

        //     info_div.append(info_p_gender)

        //     let info_p_house = document.createElement('p')

        //     info_p_house.innerHTML = 'House: '+ this.undefind

        //     info_div.append(info_p_house)
            

            
            
        // } else {

            const listOfPhotos = document.querySelector('.photos')

            let photo_div = document.createElement("div")

            photo_div.classList.add('block')

            listOfPhotos.append(photo_div)

            let photo = document.createElement('img')

            photo.classList.add('img')

            photo.classList.add('photo')

            photo.src = this.url

            photo_div.append(photo)

            let info_div = document.createElement('div')

            info_div.classList.add('info')

            photo_div.append(info_div)

            let info_p_name = document.createElement('p')

            info_p_name.classList.add('name_1')


            info_p_name.innerHTML = 'Name: '  

            info_div.append(info_p_name)

            let info_p_name_span = document.createElement('div')

            info_p_name_span.classList.add('name_2')

            info_p_name_span.innerHTML = this.name

            info_p_name.append(info_p_name_span)

            let info_p_gender = document.createElement('p')

            info_p_gender.classList.add('gender')

            info_p_gender.innerHTML = 'Gender: '+ this.gender

            info_div.append(info_p_gender)

            let info_p_house = document.createElement('p')

            info_p_house.innerHTML = 'House: '+ this.house

            info_div.append(info_p_house)

            



        // }






    };
};