import mario from './assets/super-mario.png';

function createMenu (){
    // Name Container
    const nameContainer = document.createElement('div');
    const menuName = document.createElement('h1');
    const image = document.createElement('img');

    restaurantName.textContent = 'Pradetto\'s Italian Menu';
    image.src = mario;
    image.alt = 'mario';

    nameContainer.appendChild(restaurantName)
    nameContainer.appendChild(image)

}


function loadMenu (){
    return createMenu();
};

export default loadMenu;