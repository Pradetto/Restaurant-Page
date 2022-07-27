/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/black2.jpg":
/*!*******************************!*\
  !*** ./src/assets/black2.jpg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c1925e98084088592378fe29b2ae1798.jpg");

/***/ }),

/***/ "./src/assets/hoagie.jpg":
/*!*******************************!*\
  !*** ./src/assets/hoagie.jpg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "807f6248ba80c4aebeba41c4a25b5734.jpg");

/***/ }),

/***/ "./src/assets/italianCafe.jpg":
/*!************************************!*\
  !*** ./src/assets/italianCafe.jpg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bb011e3e3b63c1e58e5150cbc049e07c.jpg");

/***/ }),

/***/ "./src/assets/negroni.jpg":
/*!********************************!*\
  !*** ./src/assets/negroni.jpg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e20a970e5282d4c5fcd207d1fd02bb0b.jpg");

/***/ }),

/***/ "./src/assets/pasta.jpg":
/*!******************************!*\
  !*** ./src/assets/pasta.jpg ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "82f6939db064ea14c40dc60a688f4a21.jpg");

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ea41dd20fae2a63c1c5e78d756eaed43.jpg");

/***/ }),

/***/ "./src/assets/redWine.jpg":
/*!********************************!*\
  !*** ./src/assets/redWine.jpg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "40b301f462298329714b1e49a2044c0b.jpg");

/***/ }),

/***/ "./src/assets/super-mario.png":
/*!************************************!*\
  !*** ./src/assets/super-mario.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6d47504c36b828bf99c135e2016d9a2f.png");

/***/ }),

/***/ "./src/assets/whiteWine.jpg":
/*!**********************************!*\
  !*** ./src/assets/whiteWine.jpg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "50c4388d4338fb8c17c91a8994a4a634.jpg");

/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader3": function() { return /* binding */ createHeader3; },
/* harmony export */   "createImage": function() { return /* binding */ createImage; },
/* harmony export */   "createListChild": function() { return /* binding */ createListChild; },
/* harmony export */   "createParagraph": function() { return /* binding */ createParagraph; }
/* harmony export */ });
function createParagraph(content){
    const para = document.createElement('p');
    para.textContent = content.toString();
    return para;
};

function createListChild(content){
    const li = document.createElement('li');
    li.textContent = content;
    return li;
};

function createHeader3(content){
    const h3 = document.createElement('h3');
    h3.textContent = content;
    return h3;
}

function createImage(src,alt = 'NA'){
    const img = document.createElement('img')
    img.src = src
    img.alt = alt
    img.style.height = '8rem'
    return img;
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements.js */ "./src/domElements.js");
/* harmony import */ var _assets_super_mario_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/super-mario.png */ "./src/assets/super-mario.png");



function createHome(){
    // Name Container
    const nameContainer = document.createElement('div');
    const restaurantName = document.createElement('h1');
    const image = document.createElement('img');

    restaurantName.textContent = 'Pradetto\'s Italian Market';
    image.src = _assets_super_mario_png__WEBPACK_IMPORTED_MODULE_1__["default"];
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
    aboutContainer.appendChild((0,_domElements_js__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('Detto\'s Italian Market was established in 1996. Not only is it a Deli that provides premium meat but offers a market for Italian goods. Feel free to stop in and try our diner as well which offers only the best Pizza and Pasta!'));
    aboutContainer.appendChild((0,_domElements_js__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('Grazie, Pradetto'));


    // Hours Container
    const hoursContainer = document.createElement('div');
    const hoursHeader = document.createElement('h3');
    const ul = document.createElement('ul');

    hoursHeader.textContent = 'Hours'

    ul.append((0,_domElements_js__WEBPACK_IMPORTED_MODULE_0__.createListChild)('Sunday 08:00-20:00'));
    ul.append((0,_domElements_js__WEBPACK_IMPORTED_MODULE_0__.createListChild)('Monday 08:00-20:00'));
    ul.append((0,_domElements_js__WEBPACK_IMPORTED_MODULE_0__.createListChild)('Tuesday 08:00-20:00'));
    ul.append((0,_domElements_js__WEBPACK_IMPORTED_MODULE_0__.createListChild)('Wednesday 08:00-20:00'));
    ul.append((0,_domElements_js__WEBPACK_IMPORTED_MODULE_0__.createListChild)('Thursday 08:00-20:00'));
    ul.append((0,_domElements_js__WEBPACK_IMPORTED_MODULE_0__.createListChild)('Friday 08:00-20:00'));
    ul.append((0,_domElements_js__WEBPACK_IMPORTED_MODULE_0__.createListChild)('Saturday 08:00-22:00'));

    hoursContainer.appendChild(hoursHeader)
    hoursContainer.appendChild(ul)

    // Div for Location
    const locationContainer = document.createElement('div');
    const locationHeader = document.createElement('h3');

    locationHeader.textContent = 'Location';
    locationContainer.appendChild(locationHeader)
    locationContainer.appendChild((0,_domElements_js__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('21711 N 7th St, Phoenix, AZ 85024'))


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
    fontSizeH1(restaurantName)

    //About CSS
    containerStyles(aboutContainer);
    contentWidth(aboutContainer);
    fontSizeContainerText(aboutContainer)
    aboutContainer.style.textAlign = 'center'

    // Hours Container
    containerStyles(hoursContainer);
    contentWidth(homeContainer);
    fontSizeContainerText(ul);
    fontSizeH3(hoursHeader);
    ul.style.listStyle = 'none';
    ul.style.margin = '0';
    ul.style.padding = '0';

    // Location Container
    containerStyles(locationContainer)
    fontSizeContainerText(locationContainer)
    fontSizeH3(locationHeader)
    const paraLocation = locationContainer.childNodes[1];
    paraLocation.style.padding = '0'
    paraLocation.style.margin = '0'

    return homeContainer;
};


//Container CSS styles

function containerStyles(container){
    container.style.backgroundColor = 'lightyellow';
    container.style.border = '5px solid #DC143C';
    container.style.borderRadius = '1rem';
    container.style.padding = '1rem';
    container.style.margin = '.5rem';
    return;
}

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

/* harmony default export */ __webpack_exports__["default"] = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_super_mario_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/super-mario.png */ "./src/assets/super-mario.png");
/* harmony import */ var _assets_redWine_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/redWine.jpg */ "./src/assets/redWine.jpg");
/* harmony import */ var _assets_whiteWine_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/whiteWine.jpg */ "./src/assets/whiteWine.jpg");
/* harmony import */ var _assets_negroni_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/negroni.jpg */ "./src/assets/negroni.jpg");
/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/pizza.jpg */ "./src/assets/pizza.jpg");
/* harmony import */ var _assets_pasta_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/pasta.jpg */ "./src/assets/pasta.jpg");
/* harmony import */ var _assets_hoagie_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/hoagie.jpg */ "./src/assets/hoagie.jpg");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domElements */ "./src/domElements.js");









function createMenu (){
    // Name Container
    const nameContainer = document.createElement('div');
    const menuName = document.createElement('h1');
    const image = document.createElement('img');

    menuName.textContent = 'Pradetto\'s Italian Menu';
    image.src = _assets_super_mario_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    image.alt = 'mario';
    image.style.height = '3.5rem'
    image.style.width = '3.5rem'

    nameContainer.appendChild(menuName)
    nameContainer.appendChild(image)

    // Beverage Container

    const beverageContainer = document.createElement('div')
    const beverageHeader = document.createElement('h2');
    // const beverageImage = document.createElement('img');

    beverageContainer.classList.add('beverageContainer')
    beverageHeader.classList.add('beverageHeader')
    // beverageImage.classList.add('beverageImage')

    beverageHeader.textContent = 'Beverages';
    // beverageImage.src = mario;
    // beverageImage.alt = 'mario';

    const beverageOne = document.createElement('div');
    const beverageTwo = document.createElement('div');
    const beverageThree = document.createElement('div');

    beverageOne.classList.add('beverages')
    beverageTwo.classList.add('beverages')
    beverageThree.classList.add('beverages')

    beverageOne.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createHeader3)('Red Wine'));
    beverageTwo.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createHeader3)('White Wine'));
    beverageThree.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createHeader3)('Negroni'));

    beverageOne.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createParagraph)('A purple colored grape, Sangiovese grape produces intense sour cherry flavors with subtle earthy aromas. Although not as aromatic as other red wine grapes, it is a key grape in the Chianti wines.'));
    beverageTwo.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createParagraph)('Vernaccia di San Gimignano is Tuscany\’s jewel. This native variety produces delicate white wines featuring beautiful floral and fruit aromas matched with a savory character.'));
    beverageThree.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createParagraph)('Negroni is made from one part of gin, one part of Campari, and one part of red Vermouth, and garnished with a slice of orange.'));

    beverageOne.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createImage)(_assets_redWine_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],'Red Wine'));
    beverageTwo.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createImage)(_assets_whiteWine_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],'White Wine'));
    beverageThree.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createImage)(_assets_negroni_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],'Negroni'));

    beverageContainer.appendChild(beverageHeader)
    // beverageContainer.appendChild(beverageImage)
    beverageContainer.appendChild(beverageOne)
    beverageContainer.appendChild(beverageTwo)
    beverageContainer.appendChild(beverageThree)

    // Food Container
    const foodContainer = document.createElement('div')
    const foodHeader = document.createElement('h2');
    // const foodImage = document.createElement('img');

    foodContainer.classList.add('beverageContainer')
    foodHeader.classList.add('beverageHeader')
    // foodImage.classList.add('beverageImage')

    foodHeader.textContent = 'Beverages';
    // foodImage.src = mario;
    // foodImage.alt = 'mario';

    const foodOne = document.createElement('div');
    const foodTwo = document.createElement('div');
    const foodThree = document.createElement('div');

    foodOne.classList.add('foods')
    foodTwo.classList.add('foods')
    foodThree.classList.add('foods')

    foodOne.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createHeader3)('Pizza'));
    foodTwo.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createHeader3)('Pasta'));
    foodThree.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createHeader3)('Hoagie'));

    foodOne.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createParagraph)('The Queen (Pizza Margherita). San Marzano tomato sauce, fresh mozzarella fior di latte, fresh organic basil. Marky (Pepperoni Americana).'));
    foodTwo.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createParagraph)('Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.'));
    foodThree.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createParagraph)('A submarine sandwich, commonly known as a sub, hoagie, hero, Italian, grinder, wedge, or a spuckie, is a type of cold or hot sandwich made from a cylindrical bread roll split lengthwise and filled with meats, cheeses, vegetables, and condiments. It has many different names'));

    foodOne.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createImage)(_assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],'Pizza'));
    foodTwo.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createImage)(_assets_pasta_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],'Pasta'));
    foodThree.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_7__.createImage)(_assets_hoagie_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],'Hoagie'));

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

/* harmony default export */ __webpack_exports__["default"] = (loadMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _assets_italianCafe_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/italianCafe.jpg */ "./src/assets/italianCafe.jpg");
/* harmony import */ var _assets_black2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/black2.jpg */ "./src/assets/black2.jpg");





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
contentContainer.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()); 
// Append Content Container in event listener
body.append(footerContainer)


// Adding CSS Styles

//Body CSS

body.style.display = 'grid'
body.style.gridTemplateRows = '.5fr 6fr .5fr'
body.style.minHeight = '100vh'
body.style.minWidth = '100vw'
body.style.margin = '1rem'
body.style.background = `url(${_assets_black2_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]})`


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
            contentContainer.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
        } else if (b.textContent === 'Menu'){
            contentContainer.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
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
    mainContent.style.backgroundImage = `url(${_assets_italianCafe_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]})`;
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


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMERBQWUsQ0FBQzs7O0FBRy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9EQUFRO0FBQzVDLFVBQVU7QUFDVixvQ0FBb0Msb0RBQVE7QUFDNUMsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLCtEQUFpQixDQUFDO0FBQ2pFO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2JsYWNrMi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9ob2FnaWUuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvaXRhbGlhbkNhZmUuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbmVncm9uaS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9wYXN0YS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9waXp6YS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9yZWRXaW5lLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3N1cGVyLW1hcmlvLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3doaXRlV2luZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMxOTI1ZTk4MDg0MDg4NTkyMzc4ZmUyOWIyYWUxNzk4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MDdmNjI0OGJhODBjNGFlYmViYTQxYzRhMjViNTczNC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmIwMTFlM2UzYjYzYzFlNThlNTE1MGNiYzA0OWUwN2MuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUyMGE5NzBlNTI4MmQ0YzVmY2QyMDdkMWZkMDJiYjBiLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MmY2OTM5ZGIwNjRlYTE0YzQwZGM2MGE2ODhmNGEyMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWE0MWRkMjBmYWUyYTYzYzFjNWU3OGQ3NTZlYWVkNDMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQwYjMwMWY0NjIyOTgzMjk3MTRiMWU0OWEyMDQ0YzBiLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ZDQ3NTA0YzM2YjgyOGJmOTljMTM1ZTIwMTZkOWEyZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTBjNDM4OGQ0MzM4ZmI4YzE3YzkxYTg5OTRhNGE2MzQuanBnXCI7IiwiZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKGNvbnRlbnQpe1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IGNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gcGFyYTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RDaGlsZChjb250ZW50KXtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBsaTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcjMoY29udGVudCl7XG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gaDM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYyxhbHQgPSAnTkEnKXtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSBzcmNcbiAgICBpbWcuYWx0ID0gYWx0XG4gICAgaW1nLnN0eWxlLmhlaWdodCA9ICc4cmVtJ1xuICAgIHJldHVybiBpbWc7XG59O1xuXG5leHBvcnQge2NyZWF0ZVBhcmFncmFwaCwgY3JlYXRlTGlzdENoaWxkLCBjcmVhdGVIZWFkZXIzLGNyZWF0ZUltYWdlfSIsImltcG9ydCB7Y3JlYXRlUGFyYWdyYXBoLCBjcmVhdGVMaXN0Q2hpbGR9IGZyb20gJy4vZG9tRWxlbWVudHMuanMnXG5pbXBvcnQgbWFyaW8gZnJvbSAnLi9hc3NldHMvc3VwZXItbWFyaW8ucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIC8vIE5hbWUgQ29udGFpbmVyXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSAnUHJhZGV0dG9cXCdzIEl0YWxpYW4gTWFya2V0JztcbiAgICBpbWFnZS5zcmMgPSBtYXJpbztcbiAgICBpbWFnZS5hbHQgPSAnbWFyaW8nO1xuXG4gICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSlcbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKVxuXG4gICAgLy8gQ1NTIE5hbWUgQ29udGFpbmVyXG4gICAgbmFtZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1mbGV4J1xuICAgIG5hbWVDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJ1xuICAgIG5hbWVDb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInXG5cblxuICAgIGltYWdlLnN0eWxlLmhlaWdodCA9ICczLjVyZW0nXG4gICAgaW1hZ2Uuc3R5bGUud2lkdGggPSAnMy41cmVtJ1xuXG5cbiAgICAvLyBBYm91dCBDb250YWluZXJcbiAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnRGV0dG9cXCdzIEl0YWxpYW4gTWFya2V0IHdhcyBlc3RhYmxpc2hlZCBpbiAxOTk2LiBOb3Qgb25seSBpcyBpdCBhIERlbGkgdGhhdCBwcm92aWRlcyBwcmVtaXVtIG1lYXQgYnV0IG9mZmVycyBhIG1hcmtldCBmb3IgSXRhbGlhbiBnb29kcy4gRmVlbCBmcmVlIHRvIHN0b3AgaW4gYW5kIHRyeSBvdXIgZGluZXIgYXMgd2VsbCB3aGljaCBvZmZlcnMgb25seSB0aGUgYmVzdCBQaXp6YSBhbmQgUGFzdGEhJykpO1xuICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnR3JhemllLCBQcmFkZXR0bycpKTtcblxuXG4gICAgLy8gSG91cnMgQ29udGFpbmVyXG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSAnSG91cnMnXG5cbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdTdW5kYXkgMDg6MDAtMjA6MDAnKSk7XG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnTW9uZGF5IDA4OjAwLTIwOjAwJykpO1xuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ1R1ZXNkYXkgMDg6MDAtMjA6MDAnKSk7XG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnV2VkbmVzZGF5IDA4OjAwLTIwOjAwJykpO1xuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ1RodXJzZGF5IDA4OjAwLTIwOjAwJykpO1xuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ0ZyaWRheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdTYXR1cmRheSAwODowMC0yMjowMCcpKTtcblxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzSGVhZGVyKVxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHVsKVxuXG4gICAgLy8gRGl2IGZvciBMb2NhdGlvblxuICAgIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXG4gICAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKVxuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnMjE3MTEgTiA3dGggU3QsIFBob2VuaXgsIEFaIDg1MDI0JykpXG5cblxuICAgIC8vIEhvbWUgQ29udGFpbmVyXG4gICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob21lQ29udGFpbmVyJylcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVDb250YWluZXIpXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcilcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzQ29udGFpbmVyKVxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25Db250YWluZXIpXG5cbiAgICAvLyBIb21lIENvbnRhaW5lciBDU1NcblxuICAgIC8vTmFtZSBDb250YWluZXIgQ3NTXG4gICAgY29udGFpbmVyU3R5bGVzKG5hbWVDb250YWluZXIpO1xuICAgIG5hbWVDb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnODAlJztcbiAgICBmb250U2l6ZUgxKHJlc3RhdXJhbnROYW1lKVxuXG4gICAgLy9BYm91dCBDU1NcbiAgICBjb250YWluZXJTdHlsZXMoYWJvdXRDb250YWluZXIpO1xuICAgIGNvbnRlbnRXaWR0aChhYm91dENvbnRhaW5lcik7XG4gICAgZm9udFNpemVDb250YWluZXJUZXh0KGFib3V0Q29udGFpbmVyKVxuICAgIGFib3V0Q29udGFpbmVyLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInXG5cbiAgICAvLyBIb3VycyBDb250YWluZXJcbiAgICBjb250YWluZXJTdHlsZXMoaG91cnNDb250YWluZXIpO1xuICAgIGNvbnRlbnRXaWR0aChob21lQ29udGFpbmVyKTtcbiAgICBmb250U2l6ZUNvbnRhaW5lclRleHQodWwpO1xuICAgIGZvbnRTaXplSDMoaG91cnNIZWFkZXIpO1xuICAgIHVsLnN0eWxlLmxpc3RTdHlsZSA9ICdub25lJztcbiAgICB1bC5zdHlsZS5tYXJnaW4gPSAnMCc7XG4gICAgdWwuc3R5bGUucGFkZGluZyA9ICcwJztcblxuICAgIC8vIExvY2F0aW9uIENvbnRhaW5lclxuICAgIGNvbnRhaW5lclN0eWxlcyhsb2NhdGlvbkNvbnRhaW5lcilcbiAgICBmb250U2l6ZUNvbnRhaW5lclRleHQobG9jYXRpb25Db250YWluZXIpXG4gICAgZm9udFNpemVIMyhsb2NhdGlvbkhlYWRlcilcbiAgICBjb25zdCBwYXJhTG9jYXRpb24gPSBsb2NhdGlvbkNvbnRhaW5lci5jaGlsZE5vZGVzWzFdO1xuICAgIHBhcmFMb2NhdGlvbi5zdHlsZS5wYWRkaW5nID0gJzAnXG4gICAgcGFyYUxvY2F0aW9uLnN0eWxlLm1hcmdpbiA9ICcwJ1xuXG4gICAgcmV0dXJuIGhvbWVDb250YWluZXI7XG59O1xuXG5cbi8vQ29udGFpbmVyIENTUyBzdHlsZXNcblxuZnVuY3Rpb24gY29udGFpbmVyU3R5bGVzKGNvbnRhaW5lcil7XG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodHllbGxvdyc7XG4gICAgY29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICc1cHggc29saWQgI0RDMTQzQyc7XG4gICAgY29udGFpbmVyLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcxcmVtJztcbiAgICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9ICcxcmVtJztcbiAgICBjb250YWluZXIuc3R5bGUubWFyZ2luID0gJy41cmVtJztcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIGhlYWRlcldpZHRoKGNvbnRhaW5lcil7XG4gICAgY29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gJzgwJSc7XG59XG5mdW5jdGlvbiBmb250U2l6ZUgxKHRhZyl7XG4gICAgdGFnLnN0eWxlLmZvbnRTaXplID0gJzIuNjdyZW0nO1xuICAgIHRhZy5zdHlsZS5tYXJnaW4gPSAnMCdcbiAgICB0YWcuc3R5bGUucGFkZGluZyA9ICcwJ1xufVxuXG5mdW5jdGlvbiBjb250ZW50V2lkdGgoY29udGFpbmVyKXtcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnNTAlJztcbn1cblxuZnVuY3Rpb24gZm9udFNpemVIMyh0YWcpe1xuICAgIHRhZy5zdHlsZS5mb250U2l6ZSA9ICcxLjc1cmVtJztcbiAgICB0YWcuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgICB0YWcuc3R5bGUubWFyZ2luID0gJzAnO1xufVxuXG5mdW5jdGlvbiBmb250U2l6ZUNvbnRhaW5lclRleHQodGFnKXtcbiAgICB0YWcuc3R5bGUuZm9udFNpemUgPSAnMS41cmVtJztcbn1cbi8vbG9hZEhvbWUgRnVuY3Rpb25cblxuZnVuY3Rpb24gbG9hZEhvbWUoKXtcbiAgICByZXR1cm4gY3JlYXRlSG9tZSgpO1xuICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiaW1wb3J0IG1hcmlvIGZyb20gJy4vYXNzZXRzL3N1cGVyLW1hcmlvLnBuZyc7XG5pbXBvcnQgcmVkV2luZSBmcm9tICcuL2Fzc2V0cy9yZWRXaW5lLmpwZyc7XG5pbXBvcnQgd2hpdGVXaW5lIGZyb20gJy4vYXNzZXRzL3doaXRlV2luZS5qcGcnO1xuaW1wb3J0IG5lZ3JvbmkgZnJvbSAnLi9hc3NldHMvbmVncm9uaS5qcGcnO1xuaW1wb3J0IHBpenphIGZyb20gJy4vYXNzZXRzL3BpenphLmpwZyc7XG5pbXBvcnQgcGFzdGEgZnJvbSAnLi9hc3NldHMvcGFzdGEuanBnJztcbmltcG9ydCBob2FnaWUgZnJvbSAnLi9hc3NldHMvaG9hZ2llLmpwZyc7XG5pbXBvcnQgeyBjcmVhdGVIZWFkZXIzLCBjcmVhdGVJbWFnZSwgY3JlYXRlUGFyYWdyYXBoIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUgKCl7XG4gICAgLy8gTmFtZSBDb250YWluZXJcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBtZW51TmFtZS50ZXh0Q29udGVudCA9ICdQcmFkZXR0b1xcJ3MgSXRhbGlhbiBNZW51JztcbiAgICBpbWFnZS5zcmMgPSBtYXJpbztcbiAgICBpbWFnZS5hbHQgPSAnbWFyaW8nO1xuICAgIGltYWdlLnN0eWxlLmhlaWdodCA9ICczLjVyZW0nXG4gICAgaW1hZ2Uuc3R5bGUud2lkdGggPSAnMy41cmVtJ1xuXG4gICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TmFtZSlcbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKVxuXG4gICAgLy8gQmV2ZXJhZ2UgQ29udGFpbmVyXG5cbiAgICBjb25zdCBiZXZlcmFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYmV2ZXJhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIC8vIGNvbnN0IGJldmVyYWdlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGJldmVyYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JldmVyYWdlQ29udGFpbmVyJylcbiAgICBiZXZlcmFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdiZXZlcmFnZUhlYWRlcicpXG4gICAgLy8gYmV2ZXJhZ2VJbWFnZS5jbGFzc0xpc3QuYWRkKCdiZXZlcmFnZUltYWdlJylcblxuICAgIGJldmVyYWdlSGVhZGVyLnRleHRDb250ZW50ID0gJ0JldmVyYWdlcyc7XG4gICAgLy8gYmV2ZXJhZ2VJbWFnZS5zcmMgPSBtYXJpbztcbiAgICAvLyBiZXZlcmFnZUltYWdlLmFsdCA9ICdtYXJpbyc7XG5cbiAgICBjb25zdCBiZXZlcmFnZU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJldmVyYWdlVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYmV2ZXJhZ2VUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYmV2ZXJhZ2VPbmUuY2xhc3NMaXN0LmFkZCgnYmV2ZXJhZ2VzJylcbiAgICBiZXZlcmFnZVR3by5jbGFzc0xpc3QuYWRkKCdiZXZlcmFnZXMnKVxuICAgIGJldmVyYWdlVGhyZWUuY2xhc3NMaXN0LmFkZCgnYmV2ZXJhZ2VzJylcblxuICAgIGJldmVyYWdlT25lLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcjMoJ1JlZCBXaW5lJykpO1xuICAgIGJldmVyYWdlVHdvLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcjMoJ1doaXRlIFdpbmUnKSk7XG4gICAgYmV2ZXJhZ2VUaHJlZS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIzKCdOZWdyb25pJykpO1xuXG4gICAgYmV2ZXJhZ2VPbmUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdBIHB1cnBsZSBjb2xvcmVkIGdyYXBlLCBTYW5naW92ZXNlIGdyYXBlIHByb2R1Y2VzIGludGVuc2Ugc291ciBjaGVycnkgZmxhdm9ycyB3aXRoIHN1YnRsZSBlYXJ0aHkgYXJvbWFzLiBBbHRob3VnaCBub3QgYXMgYXJvbWF0aWMgYXMgb3RoZXIgcmVkIHdpbmUgZ3JhcGVzLCBpdCBpcyBhIGtleSBncmFwZSBpbiB0aGUgQ2hpYW50aSB3aW5lcy4nKSk7XG4gICAgYmV2ZXJhZ2VUd28uYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdWZXJuYWNjaWEgZGkgU2FuIEdpbWlnbmFubyBpcyBUdXNjYW55XFzigJlzIGpld2VsLiBUaGlzIG5hdGl2ZSB2YXJpZXR5IHByb2R1Y2VzIGRlbGljYXRlIHdoaXRlIHdpbmVzIGZlYXR1cmluZyBiZWF1dGlmdWwgZmxvcmFsIGFuZCBmcnVpdCBhcm9tYXMgbWF0Y2hlZCB3aXRoIGEgc2F2b3J5IGNoYXJhY3Rlci4nKSk7XG4gICAgYmV2ZXJhZ2VUaHJlZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ05lZ3JvbmkgaXMgbWFkZSBmcm9tIG9uZSBwYXJ0IG9mIGdpbiwgb25lIHBhcnQgb2YgQ2FtcGFyaSwgYW5kIG9uZSBwYXJ0IG9mIHJlZCBWZXJtb3V0aCwgYW5kIGdhcm5pc2hlZCB3aXRoIGEgc2xpY2Ugb2Ygb3JhbmdlLicpKTtcblxuICAgIGJldmVyYWdlT25lLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKHJlZFdpbmUsJ1JlZCBXaW5lJykpO1xuICAgIGJldmVyYWdlVHdvLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKHdoaXRlV2luZSwnV2hpdGUgV2luZScpKTtcbiAgICBiZXZlcmFnZVRocmVlLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKG5lZ3JvbmksJ05lZ3JvbmknKSk7XG5cbiAgICBiZXZlcmFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChiZXZlcmFnZUhlYWRlcilcbiAgICAvLyBiZXZlcmFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChiZXZlcmFnZUltYWdlKVxuICAgIGJldmVyYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJldmVyYWdlT25lKVxuICAgIGJldmVyYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJldmVyYWdlVHdvKVxuICAgIGJldmVyYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJldmVyYWdlVGhyZWUpXG5cbiAgICAvLyBGb29kIENvbnRhaW5lclxuICAgIGNvbnN0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZvb2RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIC8vIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgZm9vZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiZXZlcmFnZUNvbnRhaW5lcicpXG4gICAgZm9vZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdiZXZlcmFnZUhlYWRlcicpXG4gICAgLy8gZm9vZEltYWdlLmNsYXNzTGlzdC5hZGQoJ2JldmVyYWdlSW1hZ2UnKVxuXG4gICAgZm9vZEhlYWRlci50ZXh0Q29udGVudCA9ICdCZXZlcmFnZXMnO1xuICAgIC8vIGZvb2RJbWFnZS5zcmMgPSBtYXJpbztcbiAgICAvLyBmb29kSW1hZ2UuYWx0ID0gJ21hcmlvJztcblxuICAgIGNvbnN0IGZvb2RPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb29kVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9vZFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb29kT25lLmNsYXNzTGlzdC5hZGQoJ2Zvb2RzJylcbiAgICBmb29kVHdvLmNsYXNzTGlzdC5hZGQoJ2Zvb2RzJylcbiAgICBmb29kVGhyZWUuY2xhc3NMaXN0LmFkZCgnZm9vZHMnKVxuXG4gICAgZm9vZE9uZS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIzKCdQaXp6YScpKTtcbiAgICBmb29kVHdvLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcjMoJ1Bhc3RhJykpO1xuICAgIGZvb2RUaHJlZS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIzKCdIb2FnaWUnKSk7XG5cbiAgICBmb29kT25lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnVGhlIFF1ZWVuIChQaXp6YSBNYXJnaGVyaXRhKS4gU2FuIE1hcnphbm8gdG9tYXRvIHNhdWNlLCBmcmVzaCBtb3p6YXJlbGxhIGZpb3IgZGkgbGF0dGUsIGZyZXNoIG9yZ2FuaWMgYmFzaWwuIE1hcmt5IChQZXBwZXJvbmkgQW1lcmljYW5hKS4nKSk7XG4gICAgZm9vZFR3by5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ1Bhc3RhIGlzIGEgdHlwZSBvZiBmb29kIHR5cGljYWxseSBtYWRlIGZyb20gYW4gdW5sZWF2ZW5lZCBkb3VnaCBvZiB3aGVhdCBmbG91ciBtaXhlZCB3aXRoIHdhdGVyIG9yIGVnZ3MsIGFuZCBmb3JtZWQgaW50byBzaGVldHMgb3Igb3RoZXIgc2hhcGVzLCB0aGVuIGNvb2tlZCBieSBib2lsaW5nIG9yIGJha2luZy4nKSk7XG4gICAgZm9vZFRocmVlLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnQSBzdWJtYXJpbmUgc2FuZHdpY2gsIGNvbW1vbmx5IGtub3duIGFzIGEgc3ViLCBob2FnaWUsIGhlcm8sIEl0YWxpYW4sIGdyaW5kZXIsIHdlZGdlLCBvciBhIHNwdWNraWUsIGlzIGEgdHlwZSBvZiBjb2xkIG9yIGhvdCBzYW5kd2ljaCBtYWRlIGZyb20gYSBjeWxpbmRyaWNhbCBicmVhZCByb2xsIHNwbGl0IGxlbmd0aHdpc2UgYW5kIGZpbGxlZCB3aXRoIG1lYXRzLCBjaGVlc2VzLCB2ZWdldGFibGVzLCBhbmQgY29uZGltZW50cy4gSXQgaGFzIG1hbnkgZGlmZmVyZW50IG5hbWVzJykpO1xuXG4gICAgZm9vZE9uZS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZShwaXp6YSwnUGl6emEnKSk7XG4gICAgZm9vZFR3by5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZShwYXN0YSwnUGFzdGEnKSk7XG4gICAgZm9vZFRocmVlLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKGhvYWdpZSwnSG9hZ2llJykpO1xuXG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kSGVhZGVyKVxuICAgIC8vIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKVxuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZE9uZSlcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RUd28pXG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kVGhyZWUpXG5cbiAgICAvLyBNZW51IENvbnRhaW5lclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyKVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VDb250YWluZXIpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kQ29udGFpbmVyKVxuICAgIHJldHVybiBtZW51Q29udGFpbmVyO1xufTtcblxuXG5mdW5jdGlvbiBsb2FkTWVudSAoKXtcbiAgICByZXR1cm4gY3JlYXRlTWVudSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGl0YWxpYW5CYWNrZ3JvdW5kIGZyb20gJy4vYXNzZXRzL2l0YWxpYW5DYWZlLmpwZyc7XG5pbXBvcnQgYmxhY2tCYWNrZ3JvdW5kIGZyb20gJy4vYXNzZXRzL2JsYWNrMi5qcGcnXG5cbi8vQ29udGFpbmVyc1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuLy9IZWFkZXJcbmNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBidXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuY29uc3QgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbmJ1dHRvbjEudGV4dENvbnRlbnQgPSAnSG9tZSdcbmJ1dHRvbjIudGV4dENvbnRlbnQgPSAnTWVudSdcbmJ1dHRvbjMudGV4dENvbnRlbnQgPSAnQ29udGFjdCdcblxubmF2YmFyQ29udGFpbmVyLmFwcGVuZChidXR0b24xKVxubmF2YmFyQ29udGFpbmVyLmFwcGVuZChidXR0b24yKVxubmF2YmFyQ29udGFpbmVyLmFwcGVuZChidXR0b24zKVxuXG5cbi8vQ29udGVudFxuLy8gVGhpcyBpcyBoYW5kbGVkIGJ5IE1vZHVsZXNcblxuXG4vL0Zvb3RlclxuZm9vdGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgQnk6IE1pY2hhZWwgUHJhZGV0dG8nXG5cbi8vIFNldHRpbmcgdXAgSW5kZXggU3RydWN0dXJlXG5ib2R5LmFwcGVuZChoZWFkZXJDb250YWluZXIpXG5oZWFkZXJDb250YWluZXIuYXBwZW5kKG5hdmJhckNvbnRhaW5lcilcbmJvZHkuYXBwZW5kKGNvbnRlbnRDb250YWluZXIpO1xuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTsgXG4vLyBBcHBlbmQgQ29udGVudCBDb250YWluZXIgaW4gZXZlbnQgbGlzdGVuZXJcbmJvZHkuYXBwZW5kKGZvb3RlckNvbnRhaW5lcilcblxuXG4vLyBBZGRpbmcgQ1NTIFN0eWxlc1xuXG4vL0JvZHkgQ1NTXG5cbmJvZHkuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xuYm9keS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gJy41ZnIgNmZyIC41ZnInXG5ib2R5LnN0eWxlLm1pbkhlaWdodCA9ICcxMDB2aCdcbmJvZHkuc3R5bGUubWluV2lkdGggPSAnMTAwdncnXG5ib2R5LnN0eWxlLm1hcmdpbiA9ICcxcmVtJ1xuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2JsYWNrQmFja2dyb3VuZH0pYFxuXG5cbi8vIEhlYWRlciBDb250YWluZXIgQ1NTXG5sZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5oZWFkZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmhlYWRlckNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2VuZCc7XG5oZWFkZXJDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcblxubmF2YmFyQ29udGFpbmVyLnN0eWxlLmdhcCA9ICcxcmVtJ1xuXG5idXR0b25zLmZvckVhY2goKGIpID0+IHtcbiAgICBiLnN0eWxlLmJhY2tncm91bmQgPSAnbGlnaHR5ZWxsb3cnXG4gICAgYi5zdHlsZS5mb250U2l6ZSA9ICcxLjVyZW0nXG4gICAgYi5zdHlsZS5wYWRkaW5nID0gJzFyZW0nXG4gICAgYi5zdHlsZS5tYXJnaW5SaWdodCA9ICcxcmVtJ1xuICAgIGIuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzEwcHgnXG4gICAgYi5zdHlsZS56SW5kZXggPSAnLTEnXG5cbiAgICBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgICAgaWYgKGIudGV4dENvbnRlbnQgPT09ICdIb21lJyl7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChsb2FkSG9tZSgpKVxuICAgICAgICB9IGVsc2UgaWYgKGIudGV4dENvbnRlbnQgPT09ICdNZW51Jyl7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChsb2FkTWVudSgpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoJzxiPlN0aWxsIE5lZWQgdG8gYnVpbGQ8L2I+JylcbiAgICAgICAgfTtcbiAgICAgICAgY29udGVudENvbnRhaW5lckNzcygpO1xuICAgIH0pO1xufSk7XG5cblxuXG4vL0NvbnRlbnQgQ29udGFpbmVyIENTU1xuZnVuY3Rpb24gY29udGVudENvbnRhaW5lckNzcygpe1xuICAgIGNvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5cblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gY29udGVudENvbnRhaW5lci5jaGlsZE5vZGVzWzBdO1xuXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYWluQ29udGVudC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcbiAgICBtYWluQ29udGVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgLy8gbWFpbkNvbnRlbnQuc3R5bGUuYm9yZGVyID0gJzVweCBzb2xpZCBibGFjayc7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcycmVtJ1xuICAgIC8vIG1haW5Db250ZW50LnN0eWxlLmJhY2tncm91bmQgPSAnY29yYWwnXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2l0YWxpYW5CYWNrZ3JvdW5kfSlgO1xuICAgIG1haW5Db250ZW50LnN0eWxlLndpZHRoID0gJzYwJSdcbiAgICBtYWluQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTBweCknXG59O1xuXG5cbi8vIEZvb3RlciBDb250YWluZXIgQ1NTXG5mb290ZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmZvb3RlckNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG5mb290ZXJDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbmZvb3RlckNvbnRhaW5lci5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnXG5mb290ZXJDb250YWluZXIuc3R5bGUuY29sb3IgPSAnIzg5Y2ZmMCdcblxuLy8gRmlyc3QgSW50aWFsaXplZCB3aGVuIGxvYWRpbmdcbmNvbnRlbnRDb250YWluZXJDc3MoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9