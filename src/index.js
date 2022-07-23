import loadHome from "./home.js";
import italianBackground from './assets/italianCafe.jpg';
import blackBackground from './assets/black2.jpg'

//Containers
const body = document.querySelector('body');
const headerContainer = document.createElement('div')
const contentContainer = document.createElement('div');
const footerContainer = document.createElement('div');

//Header
const navbarContainer = document.createElement('div')
const button1 = document.createElement('button')
const button2 = document.createElement('button')
const button3 = document.createElement('button')

button1.textContent = 'Home'
button2.textContent = 'Menu'
button3.textContent = 'Contact'

navbarContainer.append(button1)
navbarContainer.append(button2)
navbarContainer.append(button3)


//Content
// This is handled by Modules


//Footer
footerContainer.textContent = 'Created By: Michael Pradetto'

// Setting up Index Structure
body.append(headerContainer)
headerContainer.append(navbarContainer)
body.append(contentContainer);
contentContainer.appendChild(loadHome()); 
// Append Content Container in event listener
body.append(footerContainer)


// Adding CSS Styles

//Body CSS

body.style.display = 'grid'
body.style.gridTemplateRows = '.5fr 6fr .5fr'
body.style.minHeight = '100vh'
body.style.minWidth = '100vw'
body.style.margin = '1rem'
body.style.background = `url(${blackBackground})`


// Header Container CSS
let buttons = document.querySelectorAll('button')
headerContainer.style.display = 'flex';
headerContainer.style.alignItems = 'end';
headerContainer.style.justifyContent = 'center';

navbarContainer.style.gap = '1rem'

buttons.forEach((b) => {
    b.style.background = 'lightyellow'
    b.style.fontSize = '1.5rem'
    b.style.padding = '1rem'
    b.style.marginRight = '1rem'
    b.style.borderRadius = '10px'
    b.style.zIndex = '-1'

    b.addEventListener('click', () =>{
        contentContainer.innerHTML = ''
        if (b.textContent === 'Home'){
            contentContainer.append(loadHome())
        } else if (b.textContent === 'Menu'){
            contentContainer.append('<b>Still Need to build</b>')
        } else {
            contentContainer.append('<b>Still Need to build</b>')
        };
        contentContainerCss();
    });
});



//Content Container CSS
function contentContainerCss(){
    contentContainer.style.display = 'flex';
    contentContainer.style.justifyContent = 'center';


    const mainContent = contentContainer.childNodes[0];

    mainContent.style.display = 'flex';
    mainContent.style.alignItems = 'center';
    mainContent.style.justifyContent = 'space-around';
    mainContent.style.flexDirection = 'column';
    // mainContent.style.border = '5px solid black';
    mainContent.style.padding = '2rem'
    // mainContent.style.background = 'coral'
    mainContent.style.backgroundImage = `url(${italianBackground})`;
    mainContent.style.width = '60%'
    mainContent.style.transform = 'translateY(-10px)'
};


// Footer Container CSS
footerContainer.style.display = 'flex';
footerContainer.style.alignItems = 'center';
footerContainer.style.justifyContent = 'center';
footerContainer.style.fontWeight = 'bold'
footerContainer.style.color = '#89cff0'

// First Intialized when loading
contentContainerCss();

