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
    nameContainer.classList.add('titleContainer')

    // CSS Name Container
    // nameContainer.style.display = 'inline-flex'
    // nameContainer.style.justifyContent = 'center'
    // nameContainer.style.alignItems = 'center'


    image.style.height = '3.5rem'
    image.style.width = '3.5rem'


    // About Container
    const aboutContainer = document.createElement('div');
    const aboutHeader = document.createElement('h2')

    aboutHeader.textContent = 'About'
    aboutContainer.appendChild(aboutHeader)
    aboutContainer.appendChild(createParagraph('Detto\'s Italian Market was established in 1996. Not only is it a Deli that provides premium meat but offers a market for Italian goods. Feel free to stop in and try our diner as well which offers only the best Pizza and Pasta!'));
    aboutContainer.appendChild(createParagraph('Grazie, Pradetto'));


    // Hours Container
    const hoursContainer = document.createElement('div');
    const hoursHeader = document.createElement('h2');
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
    const locationHeader = document.createElement('h2');

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
    // containerStyles(nameContainer);
    // nameContainer.style.minWidth = '80%';
    // fontSizeH1(restaurantName)

    //About CSS
    // containerStyles(aboutContainer);
    contentWidth(aboutContainer);
    // fontSizeContainerText(aboutContainer)
    aboutContainer.style.textAlign = 'center'
    aboutContainer.childNodes[1].style.padding = '0'
    aboutContainer.childNodes[1].style.margin = '0'

    // Hours Container
    // containerStyles(hoursContainer);
    contentWidth(homeContainer);
    // fontSizeContainerText(ul);
    // fontSizeH3(hoursHeader);
    ul.style.listStyle = 'none';
    ul.style.margin = '0';
    ul.style.padding = '0';

    // Location Container
    // containerStyles(locationContainer)
    // fontSizeContainerText(locationContainer)
    // fontSizeH3(locationHeader)
    const paraLocation = locationContainer.childNodes[1];
    paraLocation.style.padding = '0'
    paraLocation.style.margin = '0'

    return homeContainer;
};


//Container CSS styles

// function containerStyles(container){
//     container.style.backgroundColor = 'lightyellow';
//     container.style.border = '5px solid #DC143C';
//     container.style.borderRadius = '1rem';
//     container.style.padding = '1rem';
//     container.style.margin = '.5rem';
//     return;
// }

function headerWidth(container){
    container.style.minWidth = '80%';
}
function fontSizeH1(tag){
    tag.style.fontSize = '2.67rem';
    tag.style.margin = '0'
    tag.style.padding = '0'
}

function contentWidth(container){
    container.style.width = '50%';
}

function fontSizeH3(tag){
    tag.style.fontSize = '1.75rem';
    tag.style.padding = '0';
    tag.style.margin = '0';
}

function fontSizeContainerText(tag){
    tag.style.fontSize = '1.5rem';
}
//loadHome Function

function loadHome(){
    return createHome();
    
};

export default loadHome;