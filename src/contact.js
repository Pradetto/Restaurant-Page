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

    nameContainer.classList.add('titleContainer')
    nameContainer.appendChild(contactName)
    nameContainer.appendChild(image)

    //contacts
    const contacts = document.createElement('div')
    contacts.classList.add('contacts')
    const contactOne = document.createElement('div')
    const contactOneDetails = document.createElement('div')
    const contactTwo = document.createElement('div')
    const contactTwoDetails = document.createElement('div')
    const contactThree = document.createElement('div')
    const contactThreeDetails = document.createElement('div')

    // contactOneDetails.appendChild(contactOne)
    contactOneDetails.appendChild(createHeader3('Pradetto'))
    contactOneDetails.appendChild(createParagraph('Owner'))
    contactOneDetails.appendChild(createParagraph('123-456-1921'))
    contactOne.appendChild(contactOneDetails)
    contactOne.appendChild(createImage(luigi,'Owner'))
    contactOne.classList.add('contact')
    contactOneDetails.classList.add('details')


    contactTwoDetails.appendChild(createHeader3('Pradetto'))
    contactTwoDetails.appendChild(createParagraph('Owner'))
    contactTwoDetails.appendChild(createParagraph('123-456-1921'))
    contactTwo.appendChild(contactTwoDetails)
    contactTwo.appendChild(createImage(luigi,'Owner'))
    contactTwo.classList.add('contact')

    contactThreeDetails.appendChild(createHeader3('Pradetto'))
    contactThreeDetails.appendChild(createParagraph('Owner'))
    contactThreeDetails.appendChild(createParagraph('123-456-1921'))
    contactThree.appendChild(contactThreeDetails)
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