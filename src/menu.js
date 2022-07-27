import mario from './assets/super-mario.png';
import redWine from './assets/redWine.jpg';
import whiteWine from './assets/whiteWine.jpg';
import negroni from './assets/negroni.jpg';
import pizza from './assets/pizza.jpg';
import pasta from './assets/pasta.jpg';
import hoagie from './assets/hoagie.jpg';
import { createHeader3, createImage, createParagraph } from './domElements';

function createMenu (){
    // Name Container
    const nameContainer = document.createElement('div');
    const menuName = document.createElement('h1');
    const image = document.createElement('img');

    menuName.textContent = 'Pradetto\'s Italian Menu';
    image.src = mario;
    image.alt = 'mario';
    image.style.height = '3.5rem'
    image.style.width = '3.5rem'

    nameContainer.classList.add('titleContainer')
    nameContainer.appendChild(menuName)
    nameContainer.appendChild(image)

    // Beverage Container

    const beverageContainer = document.createElement('div')
    const beverageHeader = document.createElement('h2');
    // const beverageImage = document.createElement('img');

    beverageContainer.classList.add('itemContainer')
    beverageHeader.classList.add('itemHeader')
    // beverageImage.classList.add('beverageImage')

    beverageHeader.textContent = 'Beverages';
    // beverageImage.src = mario;
    // beverageImage.alt = 'mario';

    const beverageOne = document.createElement('div');
    const beverageTwo = document.createElement('div');
    const beverageThree = document.createElement('div');

    beverageOne.classList.add('items')
    beverageTwo.classList.add('items')
    beverageThree.classList.add('items')

    beverageOne.appendChild(createHeader3('Red Wine'));
    beverageTwo.appendChild(createHeader3('White Wine'));
    beverageThree.appendChild(createHeader3('Negroni'));

    beverageOne.appendChild(createParagraph('A purple colored grape, Sangiovese grape produces intense sour cherry flavors with subtle earthy aromas. Although not as aromatic as other red wine grapes, it is a key grape in the Chianti wines.'));
    beverageTwo.appendChild(createParagraph('Vernaccia di San Gimignano is Tuscany\’s jewel. This native variety produces delicate white wines featuring beautiful floral and fruit aromas matched with a savory character.'));
    beverageThree.appendChild(createParagraph('Negroni is made from one part of gin, one part of Campari, and one part of red Vermouth, and garnished with a slice of orange.'));

    beverageOne.appendChild(createImage(redWine,'Red Wine'));
    beverageTwo.appendChild(createImage(whiteWine,'White Wine'));
    beverageThree.appendChild(createImage(negroni,'Negroni'));

    beverageContainer.appendChild(beverageHeader)
    // beverageContainer.appendChild(beverageImage)
    beverageContainer.appendChild(beverageOne)
    beverageContainer.appendChild(beverageTwo)
    beverageContainer.appendChild(beverageThree)

    // Food Container
    const foodContainer = document.createElement('div')
    const foodHeader = document.createElement('h2');
    // const foodImage = document.createElement('img');

    foodContainer.classList.add('itemContainer')
    foodHeader.classList.add('itemHeader')
    // foodImage.classList.add('beverageImage')

    foodHeader.textContent = 'Food';
    // foodImage.src = mario;
    // foodImage.alt = 'mario';

    const foodOne = document.createElement('div');
    const foodTwo = document.createElement('div');
    const foodThree = document.createElement('div');

    foodOne.classList.add('items')
    foodTwo.classList.add('items')
    foodThree.classList.add('items')

    foodOne.appendChild(createHeader3('Pizza'));
    foodTwo.appendChild(createHeader3('Pasta'));
    foodThree.appendChild(createHeader3('Hoagie'));

    foodOne.appendChild(createParagraph('The Queen (Pizza Margherita). San Marzano tomato sauce, fresh mozzarella fior di latte, fresh organic basil. Marky (Pepperoni Americana).'));
    foodTwo.appendChild(createParagraph('Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.'));
    foodThree.appendChild(createParagraph('A submarine sandwich, commonly known as a sub, hoagie, hero, Italian, grinder, wedge, or a spuckie, is a type of cold or hot sandwich made from a cylindrical bread roll split lengthwise and filled with meats, cheeses, vegetables, and condiments. It has many different names'));

    foodOne.appendChild(createImage(pizza,'Pizza'));
    foodTwo.appendChild(createImage(pasta,'Pasta'));
    foodThree.appendChild(createImage(hoagie,'Hoagie'));

    foodContainer.appendChild(foodHeader)
    // foodContainer.appendChild(foodImage)
    foodContainer.appendChild(foodOne)
    foodContainer.appendChild(foodTwo)
    foodContainer.appendChild(foodThree)

    // Menu Container
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    menuContainer.appendChild(nameContainer)
    menuContainer.appendChild(beverageContainer)
    menuContainer.appendChild(foodContainer)
    return menuContainer;
};


function loadMenu (){
    return createMenu();
};

export default loadMenu;