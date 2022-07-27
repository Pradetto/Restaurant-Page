import mario from './assets/super-mario.png';
import luigi from './assets/luigi.png';
import { createHeader3, createImage, createParagraph } from './domElements';

function createContact(){
    // Name Container
    const nameContainer = document.createElement('div');
    const contactName = document.createElement('h1');
    const image = document.createElement('img');

    contactName.textContent = 'Contact Pradetto';
    image.src = mario;
    image.alt = 'mario';
    image.style.height = '3.5rem'
    image.style.width = '3.5rem'

    nameContainer.appendChild(contactName)
    nameContainer.appendChild(image)

    //contacts
    const contacts = document.createElement('div')
    contacts.classList.add('contacts')
    const contactOne = document.createElement('div')
    const contactTwo = document.createElement('div')
    const contactThree = document.createElement('div')

    contactOne.appendChild(createHeader3('Pradetto'))
    contactOne.appendChild(createParagraph('Owner'))
    contactOne.appendChild(createParagraph('123-456-1921'))
    contactOne.appendChild(createImage(luigi,'Owner'))
    contactOne.classList.add('contact')


    contactTwo.appendChild(createHeader3('Pradetto'))
    contactTwo.appendChild(createParagraph('Owner'))
    contactTwo.appendChild(createParagraph('123-456-1921'))
    contactTwo.appendChild(createImage(luigi,'Owner'))
    contactTwo.classList.add('contact')

    contactThree.appendChild(createHeader3('Pradetto'))
    contactThree.appendChild(createParagraph('Owner'))
    contactThree.appendChild(createParagraph('123-456-1921'))
    contactThree.appendChild(createImage(luigi,'Owner'))
    contactThree.classList.add('contact')

    contacts.appendChild(contactOne)
    contacts.appendChild(contactTwo)
    contacts.appendChild(contactThree)

    // Menu Container
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contactContainer')
    contactContainer.appendChild(nameContainer)
    contactContainer.appendChild(contacts)
    // contactContainer.appendChild(foodContainer)
    return contactContainer;
};

function loadContact (){
    return createContact();
};

export default loadContact;