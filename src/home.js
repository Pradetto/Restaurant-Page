import {createParagraph, createListChild} from './domElements.js'
import mario from './assets/super-mario.png';

function createHome(){
    // Name Container
    const nameContainer = document.createElement('div');
    const restaurantName = document.createElement('h1');
    const image = document.createElement('img');

    restaurantName.textContent = 'Pradetto\'s Italian Market';
    image.src = mario;
    image.alt = 'mario';

    nameContainer.appendChild(restaurantName)
    nameContainer.appendChild(image)

    // CSS Name Container
    nameContainer.style.display = 'inline-flex'
    nameContainer.style.justifyContent = 'center'
    nameContainer.style.alignItems = 'center'


    image.style.height = '3.5rem'
    image.style.width = '3.5rem'


    // About Container
    const aboutContainer = document.createElement('div');
    aboutContainer.appendChild(createParagraph('Detto\'s Italian Market was established in 1996. Not only is it a Deli that provides premium meat but offers a market for Italian goods. Feel free to stop in and try our diner as well which offers only the best Pizza and Pasta!'));
    aboutContainer.appendChild(createParagraph('Grazie, Pradetto'));


    // Hours Container
    const hoursContainer = document.createElement('div');
    const hoursHeader = document.createElement('h3');
    const ul = document.createElement('ul');

    hoursHeader.textContent = 'Hours'

    ul.append(createListChild('Sunday 08:00-20:00'));
    ul.append(createListChild('Monday 08:00-20:00'));
    ul.append(createListChild('Tuesday 08:00-20:00'));
    ul.append(createListChild('Wednesday 08:00-20:00'));
    ul.append(createListChild('Thursday 08:00-20:00'));
    ul.append(createListChild('Friday 08:00-20:00'));
    ul.append(createListChild('Saturday 08:00-22:00'));

    hoursContainer.appendChild(hoursHeader)
    hoursContainer.appendChild(ul)

    // Div for Location
    const locationContainer = document.createElement('div');
    const locationHeader = document.createElement('h3');

    locationHeader.textContent = 'Location';
    locationContainer.appendChild(locationHeader)
    locationContainer.appendChild(createParagraph('21711 N 7th St, Phoenix, AZ 85024'))


    // Home Container
    const homeContainer = document.createElement('div')
    homeContainer.classList.add('homeContainer')
    homeContainer.appendChild(nameContainer)
    homeContainer.appendChild(aboutContainer)
    homeContainer.appendChild(hoursContainer)
    homeContainer.appendChild(locationContainer)

    // Home Container CSS

    //Name Container CsS
    containerStyles(nameContainer);
    nameContainer.style.minWidth = '80%';

    //About CSS
    containerStyles(aboutContainer);
    ul.style.listStyle = 'none'
    ul.style.margin = '0'
    ul.style.padding = '0'
    contentWidth(aboutContainer)

    // Hours Container
    containerStyles(hoursContainer);
    contentWidth(homeContainer);

    // Location Container
    containerStyles(locationContainer)


    return homeContainer;
};


//Container CSS styles

function containerStyles(container){
    container.style.backgroundColor = 'lightyellow';
    container.style.border = '5px solid black';
    container.style.borderRadius = '1rem';
    container.style.padding = '1rem';
    return;
}

function headerWidth(container){
    container.style.minWidth = '80%';
}

function contentWidth(container){
    container.style.width = '50%';
}

//loadHome Function

function loadHome(){
    return createHome();
    
}

export default loadHome;