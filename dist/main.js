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

/***/ "./src/assets/luigi.png":
/*!******************************!*\
  !*** ./src/assets/luigi.png ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c158651a18e09a2d285aa0eb7f235ada.png");

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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_super_mario_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/super-mario.png */ "./src/assets/super-mario.png");
/* harmony import */ var _assets_luigi_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/luigi.png */ "./src/assets/luigi.png");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ "./src/domElements.js");




function createContact(){
    // Name Container
    const nameContainer = document.createElement('div');
    const contactName = document.createElement('h1');
    const image = document.createElement('img');

    contactName.textContent = 'Contact Pradetto';
    image.src = _assets_super_mario_png__WEBPACK_IMPORTED_MODULE_0__["default"];
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

    contactOne.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createHeader3)('Pradetto'))
    contactOne.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('Owner'))
    contactOne.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('123-456-1921'))
    contactOne.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createImage)(_assets_luigi_png__WEBPACK_IMPORTED_MODULE_1__["default"],'Owner'))
    contactOne.classList.add('contact')


    contactTwo.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createHeader3)('Pradetto'))
    contactTwo.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('Owner'))
    contactTwo.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('123-456-1921'))
    contactTwo.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createImage)(_assets_luigi_png__WEBPACK_IMPORTED_MODULE_1__["default"],'Owner'))
    contactTwo.classList.add('contact')

    contactThree.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createHeader3)('Pradetto'))
    contactThree.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('Owner'))
    contactThree.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createParagraph)('123-456-1921'))
    contactThree.appendChild((0,_domElements__WEBPACK_IMPORTED_MODULE_2__.createImage)(_assets_luigi_png__WEBPACK_IMPORTED_MODULE_1__["default"],'Owner'))
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

/* harmony default export */ __webpack_exports__["default"] = (loadContact);

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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _assets_italianCafe_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/italianCafe.jpg */ "./src/assets/italianCafe.jpg");
/* harmony import */ var _assets_black2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/black2.jpg */ "./src/assets/black2.jpg");






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
body.style.background = `url(${_assets_black2_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]})`


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
            contentContainer.append((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
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
    mainContent.style.backgroundImage = `url(${_assets_italianCafe_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]})`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvYmxhY2syLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2hvYWdpZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pdGFsaWFuQ2FmZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9sdWlnaS5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9uZWdyb25pLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3Bhc3RhLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3BpenphLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3JlZFdpbmUuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvc3VwZXItbWFyaW8ucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvd2hpdGVXaW5lLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzE5MjVlOTgwODQwODg1OTIzNzhmZTI5YjJhZTE3OTguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgwN2Y2MjQ4YmE4MGM0YWViZWJhNDFjNGEyNWI1NzM0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYjAxMWUzZTNiNjNjMWU1OGU1MTUwY2JjMDQ5ZTA3Yy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzE1ODY1MWExOGUwOWEyZDI4NWFhMGViN2YyMzVhZGEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImUyMGE5NzBlNTI4MmQ0YzVmY2QyMDdkMWZkMDJiYjBiLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MmY2OTM5ZGIwNjRlYTE0YzQwZGM2MGE2ODhmNGEyMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWE0MWRkMjBmYWUyYTYzYzFjNWU3OGQ3NTZlYWVkNDMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQwYjMwMWY0NjIyOTgzMjk3MTRiMWU0OWEyMDQ0YzBiLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ZDQ3NTA0YzM2YjgyOGJmOTljMTM1ZTIwMTZkOWEyZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTBjNDM4OGQ0MzM4ZmI4YzE3YzkxYTg5OTRhNGE2MzQuanBnXCI7IiwiaW1wb3J0IG1hcmlvIGZyb20gJy4vYXNzZXRzL3N1cGVyLW1hcmlvLnBuZyc7XG5pbXBvcnQgbHVpZ2kgZnJvbSAnLi9hc3NldHMvbHVpZ2kucG5nJztcbmltcG9ydCB7IGNyZWF0ZUhlYWRlcjMsIGNyZWF0ZUltYWdlLCBjcmVhdGVQYXJhZ3JhcGggfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpe1xuICAgIC8vIE5hbWUgQ29udGFpbmVyXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRhY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgY29udGFjdE5hbWUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBQcmFkZXR0byc7XG4gICAgaW1hZ2Uuc3JjID0gbWFyaW87XG4gICAgaW1hZ2UuYWx0ID0gJ21hcmlvJztcbiAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSAnMy41cmVtJ1xuICAgIGltYWdlLnN0eWxlLndpZHRoID0gJzMuNXJlbSdcblxuICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdE5hbWUpXG4gICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSlcblxuICAgIC8vY29udGFjdHNcbiAgICBjb25zdCBjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdHMuY2xhc3NMaXN0LmFkZCgnY29udGFjdHMnKVxuICAgIGNvbnN0IGNvbnRhY3RPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNvbnRhY3RUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNvbnRhY3RUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb250YWN0T25lLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcjMoJ1ByYWRldHRvJykpXG4gICAgY29udGFjdE9uZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ093bmVyJykpXG4gICAgY29udGFjdE9uZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJzEyMy00NTYtMTkyMScpKVxuICAgIGNvbnRhY3RPbmUuYXBwZW5kQ2hpbGQoY3JlYXRlSW1hZ2UobHVpZ2ksJ093bmVyJykpXG4gICAgY29udGFjdE9uZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0JylcblxuXG4gICAgY29udGFjdFR3by5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIzKCdQcmFkZXR0bycpKVxuICAgIGNvbnRhY3RUd28uYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdPd25lcicpKVxuICAgIGNvbnRhY3RUd28uYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCcxMjMtNDU2LTE5MjEnKSlcbiAgICBjb250YWN0VHdvLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKGx1aWdpLCdPd25lcicpKVxuICAgIGNvbnRhY3RUd28uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpXG5cbiAgICBjb250YWN0VGhyZWUuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyMygnUHJhZGV0dG8nKSlcbiAgICBjb250YWN0VGhyZWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdPd25lcicpKVxuICAgIGNvbnRhY3RUaHJlZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJzEyMy00NTYtMTkyMScpKVxuICAgIGNvbnRhY3RUaHJlZS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZShsdWlnaSwnT3duZXInKSlcbiAgICBjb250YWN0VGhyZWUuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpXG5cbiAgICBjb250YWN0cy5hcHBlbmRDaGlsZChjb250YWN0T25lKVxuICAgIGNvbnRhY3RzLmFwcGVuZENoaWxkKGNvbnRhY3RUd28pXG4gICAgY29udGFjdHMuYXBwZW5kQ2hpbGQoY29udGFjdFRocmVlKVxuXG4gICAgLy8gTWVudSBDb250YWluZXJcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb250YWluZXInKVxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcilcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RzKVxuICAgIC8vIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcilcbiAgICByZXR1cm4gY29udGFjdENvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0ICgpe1xuICAgIHJldHVybiBjcmVhdGVDb250YWN0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJmdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgoY29udGVudCl7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gY29udGVudC50b1N0cmluZygpO1xuICAgIHJldHVybiBwYXJhO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdENoaWxkKGNvbnRlbnQpe1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGxpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyMyhjb250ZW50KXtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBoMztcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3JjLGFsdCA9ICdOQScpe1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9IHNyY1xuICAgIGltZy5hbHQgPSBhbHRcbiAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gJzhyZW0nXG4gICAgcmV0dXJuIGltZztcbn07XG5cbmV4cG9ydCB7Y3JlYXRlUGFyYWdyYXBoLCBjcmVhdGVMaXN0Q2hpbGQsIGNyZWF0ZUhlYWRlcjMsY3JlYXRlSW1hZ2V9IiwiaW1wb3J0IHtjcmVhdGVQYXJhZ3JhcGgsIGNyZWF0ZUxpc3RDaGlsZH0gZnJvbSAnLi9kb21FbGVtZW50cy5qcydcbmltcG9ydCBtYXJpbyBmcm9tICcuL2Fzc2V0cy9zdXBlci1tYXJpby5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgLy8gTmFtZSBDb250YWluZXJcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICdQcmFkZXR0b1xcJ3MgSXRhbGlhbiBNYXJrZXQnO1xuICAgIGltYWdlLnNyYyA9IG1hcmlvO1xuICAgIGltYWdlLmFsdCA9ICdtYXJpbyc7XG5cbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKVxuICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpXG5cbiAgICAvLyBDU1MgTmFtZSBDb250YWluZXJcbiAgICBuYW1lQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnXG4gICAgbmFtZUNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInXG4gICAgbmFtZUNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcblxuXG4gICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gJzMuNXJlbSdcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9ICczLjVyZW0nXG5cblxuICAgIC8vIEFib3V0IENvbnRhaW5lclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdEZXR0b1xcJ3MgSXRhbGlhbiBNYXJrZXQgd2FzIGVzdGFibGlzaGVkIGluIDE5OTYuIE5vdCBvbmx5IGlzIGl0IGEgRGVsaSB0aGF0IHByb3ZpZGVzIHByZW1pdW0gbWVhdCBidXQgb2ZmZXJzIGEgbWFya2V0IGZvciBJdGFsaWFuIGdvb2RzLiBGZWVsIGZyZWUgdG8gc3RvcCBpbiBhbmQgdHJ5IG91ciBkaW5lciBhcyB3ZWxsIHdoaWNoIG9mZmVycyBvbmx5IHRoZSBiZXN0IFBpenphIGFuZCBQYXN0YSEnKSk7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdHcmF6aWUsIFByYWRldHRvJykpO1xuXG5cbiAgICAvLyBIb3VycyBDb250YWluZXJcbiAgICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBob3Vyc0hlYWRlci50ZXh0Q29udGVudCA9ICdIb3VycydcblxuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ1N1bmRheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdNb25kYXkgMDg6MDAtMjA6MDAnKSk7XG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnVHVlc2RheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdXZWRuZXNkYXkgMDg6MDAtMjA6MDAnKSk7XG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnVGh1cnNkYXkgMDg6MDAtMjA6MDAnKSk7XG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnRnJpZGF5IDA4OjAwLTIwOjAwJykpO1xuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ1NhdHVyZGF5IDA4OjAwLTIyOjAwJykpO1xuXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNIZWFkZXIpXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQodWwpXG5cbiAgICAvLyBEaXYgZm9yIExvY2F0aW9uXG4gICAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkZXIpXG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCcyMTcxMSBOIDd0aCBTdCwgUGhvZW5peCwgQVogODUwMjQnKSlcblxuXG4gICAgLy8gSG9tZSBDb250YWluZXJcbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVDb250YWluZXInKVxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcilcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKVxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNDb250YWluZXIpXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcilcblxuICAgIC8vIEhvbWUgQ29udGFpbmVyIENTU1xuXG4gICAgLy9OYW1lIENvbnRhaW5lciBDc1NcbiAgICBjb250YWluZXJTdHlsZXMobmFtZUNvbnRhaW5lcik7XG4gICAgbmFtZUNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9ICc4MCUnO1xuICAgIGZvbnRTaXplSDEocmVzdGF1cmFudE5hbWUpXG5cbiAgICAvL0Fib3V0IENTU1xuICAgIGNvbnRhaW5lclN0eWxlcyhhYm91dENvbnRhaW5lcik7XG4gICAgY29udGVudFdpZHRoKGFib3V0Q29udGFpbmVyKTtcbiAgICBmb250U2l6ZUNvbnRhaW5lclRleHQoYWJvdXRDb250YWluZXIpXG4gICAgYWJvdXRDb250YWluZXIuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcidcblxuICAgIC8vIEhvdXJzIENvbnRhaW5lclxuICAgIGNvbnRhaW5lclN0eWxlcyhob3Vyc0NvbnRhaW5lcik7XG4gICAgY29udGVudFdpZHRoKGhvbWVDb250YWluZXIpO1xuICAgIGZvbnRTaXplQ29udGFpbmVyVGV4dCh1bCk7XG4gICAgZm9udFNpemVIMyhob3Vyc0hlYWRlcik7XG4gICAgdWwuc3R5bGUubGlzdFN0eWxlID0gJ25vbmUnO1xuICAgIHVsLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICB1bC5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4gICAgLy8gTG9jYXRpb24gQ29udGFpbmVyXG4gICAgY29udGFpbmVyU3R5bGVzKGxvY2F0aW9uQ29udGFpbmVyKVxuICAgIGZvbnRTaXplQ29udGFpbmVyVGV4dChsb2NhdGlvbkNvbnRhaW5lcilcbiAgICBmb250U2l6ZUgzKGxvY2F0aW9uSGVhZGVyKVxuICAgIGNvbnN0IHBhcmFMb2NhdGlvbiA9IGxvY2F0aW9uQ29udGFpbmVyLmNoaWxkTm9kZXNbMV07XG4gICAgcGFyYUxvY2F0aW9uLnN0eWxlLnBhZGRpbmcgPSAnMCdcbiAgICBwYXJhTG9jYXRpb24uc3R5bGUubWFyZ2luID0gJzAnXG5cbiAgICByZXR1cm4gaG9tZUNvbnRhaW5lcjtcbn07XG5cblxuLy9Db250YWluZXIgQ1NTIHN0eWxlc1xuXG5mdW5jdGlvbiBjb250YWluZXJTdHlsZXMoY29udGFpbmVyKXtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0eWVsbG93JztcbiAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyID0gJzVweCBzb2xpZCAjREMxNDNDJztcbiAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzFyZW0nO1xuICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzFyZW0nO1xuICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSAnLjVyZW0nO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gaGVhZGVyV2lkdGgoY29udGFpbmVyKXtcbiAgICBjb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnODAlJztcbn1cbmZ1bmN0aW9uIGZvbnRTaXplSDEodGFnKXtcbiAgICB0YWcuc3R5bGUuZm9udFNpemUgPSAnMi42N3JlbSc7XG4gICAgdGFnLnN0eWxlLm1hcmdpbiA9ICcwJ1xuICAgIHRhZy5zdHlsZS5wYWRkaW5nID0gJzAnXG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRXaWR0aChjb250YWluZXIpe1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICc1MCUnO1xufVxuXG5mdW5jdGlvbiBmb250U2l6ZUgzKHRhZyl7XG4gICAgdGFnLnN0eWxlLmZvbnRTaXplID0gJzEuNzVyZW0nO1xuICAgIHRhZy5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgIHRhZy5zdHlsZS5tYXJnaW4gPSAnMCc7XG59XG5cbmZ1bmN0aW9uIGZvbnRTaXplQ29udGFpbmVyVGV4dCh0YWcpe1xuICAgIHRhZy5zdHlsZS5mb250U2l6ZSA9ICcxLjVyZW0nO1xufVxuLy9sb2FkSG9tZSBGdW5jdGlvblxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpe1xuICAgIHJldHVybiBjcmVhdGVIb21lKCk7XG4gICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJpbXBvcnQgbWFyaW8gZnJvbSAnLi9hc3NldHMvc3VwZXItbWFyaW8ucG5nJztcbmltcG9ydCByZWRXaW5lIGZyb20gJy4vYXNzZXRzL3JlZFdpbmUuanBnJztcbmltcG9ydCB3aGl0ZVdpbmUgZnJvbSAnLi9hc3NldHMvd2hpdGVXaW5lLmpwZyc7XG5pbXBvcnQgbmVncm9uaSBmcm9tICcuL2Fzc2V0cy9uZWdyb25pLmpwZyc7XG5pbXBvcnQgcGl6emEgZnJvbSAnLi9hc3NldHMvcGl6emEuanBnJztcbmltcG9ydCBwYXN0YSBmcm9tICcuL2Fzc2V0cy9wYXN0YS5qcGcnO1xuaW1wb3J0IGhvYWdpZSBmcm9tICcuL2Fzc2V0cy9ob2FnaWUuanBnJztcbmltcG9ydCB7IGNyZWF0ZUhlYWRlcjMsIGNyZWF0ZUltYWdlLCBjcmVhdGVQYXJhZ3JhcGggfSBmcm9tICcuL2RvbUVsZW1lbnRzJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudSAoKXtcbiAgICAvLyBOYW1lIENvbnRhaW5lclxuICAgIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIG1lbnVOYW1lLnRleHRDb250ZW50ID0gJ1ByYWRldHRvXFwncyBJdGFsaWFuIE1lbnUnO1xuICAgIGltYWdlLnNyYyA9IG1hcmlvO1xuICAgIGltYWdlLmFsdCA9ICdtYXJpbyc7XG4gICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gJzMuNXJlbSdcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9ICczLjVyZW0nXG5cbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVOYW1lKVxuICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpXG5cbiAgICAvLyBCZXZlcmFnZSBDb250YWluZXJcblxuICAgIGNvbnN0IGJldmVyYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBiZXZlcmFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgLy8gY29uc3QgYmV2ZXJhZ2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgYmV2ZXJhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmV2ZXJhZ2VDb250YWluZXInKVxuICAgIGJldmVyYWdlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2JldmVyYWdlSGVhZGVyJylcbiAgICAvLyBiZXZlcmFnZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2JldmVyYWdlSW1hZ2UnKVxuXG4gICAgYmV2ZXJhZ2VIZWFkZXIudGV4dENvbnRlbnQgPSAnQmV2ZXJhZ2VzJztcbiAgICAvLyBiZXZlcmFnZUltYWdlLnNyYyA9IG1hcmlvO1xuICAgIC8vIGJldmVyYWdlSW1hZ2UuYWx0ID0gJ21hcmlvJztcblxuICAgIGNvbnN0IGJldmVyYWdlT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYmV2ZXJhZ2VUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBiZXZlcmFnZVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBiZXZlcmFnZU9uZS5jbGFzc0xpc3QuYWRkKCdiZXZlcmFnZXMnKVxuICAgIGJldmVyYWdlVHdvLmNsYXNzTGlzdC5hZGQoJ2JldmVyYWdlcycpXG4gICAgYmV2ZXJhZ2VUaHJlZS5jbGFzc0xpc3QuYWRkKCdiZXZlcmFnZXMnKVxuXG4gICAgYmV2ZXJhZ2VPbmUuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyMygnUmVkIFdpbmUnKSk7XG4gICAgYmV2ZXJhZ2VUd28uYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyMygnV2hpdGUgV2luZScpKTtcbiAgICBiZXZlcmFnZVRocmVlLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcjMoJ05lZ3JvbmknKSk7XG5cbiAgICBiZXZlcmFnZU9uZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ0EgcHVycGxlIGNvbG9yZWQgZ3JhcGUsIFNhbmdpb3Zlc2UgZ3JhcGUgcHJvZHVjZXMgaW50ZW5zZSBzb3VyIGNoZXJyeSBmbGF2b3JzIHdpdGggc3VidGxlIGVhcnRoeSBhcm9tYXMuIEFsdGhvdWdoIG5vdCBhcyBhcm9tYXRpYyBhcyBvdGhlciByZWQgd2luZSBncmFwZXMsIGl0IGlzIGEga2V5IGdyYXBlIGluIHRoZSBDaGlhbnRpIHdpbmVzLicpKTtcbiAgICBiZXZlcmFnZVR3by5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ1Zlcm5hY2NpYSBkaSBTYW4gR2ltaWduYW5vIGlzIFR1c2NhbnlcXOKAmXMgamV3ZWwuIFRoaXMgbmF0aXZlIHZhcmlldHkgcHJvZHVjZXMgZGVsaWNhdGUgd2hpdGUgd2luZXMgZmVhdHVyaW5nIGJlYXV0aWZ1bCBmbG9yYWwgYW5kIGZydWl0IGFyb21hcyBtYXRjaGVkIHdpdGggYSBzYXZvcnkgY2hhcmFjdGVyLicpKTtcbiAgICBiZXZlcmFnZVRocmVlLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnTmVncm9uaSBpcyBtYWRlIGZyb20gb25lIHBhcnQgb2YgZ2luLCBvbmUgcGFydCBvZiBDYW1wYXJpLCBhbmQgb25lIHBhcnQgb2YgcmVkIFZlcm1vdXRoLCBhbmQgZ2FybmlzaGVkIHdpdGggYSBzbGljZSBvZiBvcmFuZ2UuJykpO1xuXG4gICAgYmV2ZXJhZ2VPbmUuYXBwZW5kQ2hpbGQoY3JlYXRlSW1hZ2UocmVkV2luZSwnUmVkIFdpbmUnKSk7XG4gICAgYmV2ZXJhZ2VUd28uYXBwZW5kQ2hpbGQoY3JlYXRlSW1hZ2Uod2hpdGVXaW5lLCdXaGl0ZSBXaW5lJykpO1xuICAgIGJldmVyYWdlVGhyZWUuYXBwZW5kQ2hpbGQoY3JlYXRlSW1hZ2UobmVncm9uaSwnTmVncm9uaScpKTtcblxuICAgIGJldmVyYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJldmVyYWdlSGVhZGVyKVxuICAgIC8vIGJldmVyYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJldmVyYWdlSW1hZ2UpXG4gICAgYmV2ZXJhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VPbmUpXG4gICAgYmV2ZXJhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VUd28pXG4gICAgYmV2ZXJhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYmV2ZXJhZ2VUaHJlZSlcblxuICAgIC8vIEZvb2QgQ29udGFpbmVyXG4gICAgY29uc3QgZm9vZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZm9vZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgLy8gY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBmb29kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JldmVyYWdlQ29udGFpbmVyJylcbiAgICBmb29kSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2JldmVyYWdlSGVhZGVyJylcbiAgICAvLyBmb29kSW1hZ2UuY2xhc3NMaXN0LmFkZCgnYmV2ZXJhZ2VJbWFnZScpXG5cbiAgICBmb29kSGVhZGVyLnRleHRDb250ZW50ID0gJ0JldmVyYWdlcyc7XG4gICAgLy8gZm9vZEltYWdlLnNyYyA9IG1hcmlvO1xuICAgIC8vIGZvb2RJbWFnZS5hbHQgPSAnbWFyaW8nO1xuXG4gICAgY29uc3QgZm9vZE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvb2RUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmb29kVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvb2RPbmUuY2xhc3NMaXN0LmFkZCgnZm9vZHMnKVxuICAgIGZvb2RUd28uY2xhc3NMaXN0LmFkZCgnZm9vZHMnKVxuICAgIGZvb2RUaHJlZS5jbGFzc0xpc3QuYWRkKCdmb29kcycpXG5cbiAgICBmb29kT25lLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcjMoJ1BpenphJykpO1xuICAgIGZvb2RUd28uYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyMygnUGFzdGEnKSk7XG4gICAgZm9vZFRocmVlLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcjMoJ0hvYWdpZScpKTtcblxuICAgIGZvb2RPbmUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdUaGUgUXVlZW4gKFBpenphIE1hcmdoZXJpdGEpLiBTYW4gTWFyemFubyB0b21hdG8gc2F1Y2UsIGZyZXNoIG1venphcmVsbGEgZmlvciBkaSBsYXR0ZSwgZnJlc2ggb3JnYW5pYyBiYXNpbC4gTWFya3kgKFBlcHBlcm9uaSBBbWVyaWNhbmEpLicpKTtcbiAgICBmb29kVHdvLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgnUGFzdGEgaXMgYSB0eXBlIG9mIGZvb2QgdHlwaWNhbGx5IG1hZGUgZnJvbSBhbiB1bmxlYXZlbmVkIGRvdWdoIG9mIHdoZWF0IGZsb3VyIG1peGVkIHdpdGggd2F0ZXIgb3IgZWdncywgYW5kIGZvcm1lZCBpbnRvIHNoZWV0cyBvciBvdGhlciBzaGFwZXMsIHRoZW4gY29va2VkIGJ5IGJvaWxpbmcgb3IgYmFraW5nLicpKTtcbiAgICBmb29kVGhyZWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdBIHN1Ym1hcmluZSBzYW5kd2ljaCwgY29tbW9ubHkga25vd24gYXMgYSBzdWIsIGhvYWdpZSwgaGVybywgSXRhbGlhbiwgZ3JpbmRlciwgd2VkZ2UsIG9yIGEgc3B1Y2tpZSwgaXMgYSB0eXBlIG9mIGNvbGQgb3IgaG90IHNhbmR3aWNoIG1hZGUgZnJvbSBhIGN5bGluZHJpY2FsIGJyZWFkIHJvbGwgc3BsaXQgbGVuZ3Rod2lzZSBhbmQgZmlsbGVkIHdpdGggbWVhdHMsIGNoZWVzZXMsIHZlZ2V0YWJsZXMsIGFuZCBjb25kaW1lbnRzLiBJdCBoYXMgbWFueSBkaWZmZXJlbnQgbmFtZXMnKSk7XG5cbiAgICBmb29kT25lLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKHBpenphLCdQaXp6YScpKTtcbiAgICBmb29kVHdvLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKHBhc3RhLCdQYXN0YScpKTtcbiAgICBmb29kVGhyZWUuYXBwZW5kQ2hpbGQoY3JlYXRlSW1hZ2UoaG9hZ2llLCdIb2FnaWUnKSk7XG5cbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RIZWFkZXIpXG4gICAgLy8gZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kSW1hZ2UpXG4gICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kT25lKVxuICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZFR3bylcbiAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RUaHJlZSlcblxuICAgIC8vIE1lbnUgQ29udGFpbmVyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51Q29udGFpbmVyJylcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVDb250YWluZXIpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChiZXZlcmFnZUNvbnRhaW5lcilcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIpXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59O1xuXG5cbmZ1bmN0aW9uIGxvYWRNZW51ICgpe1xuICAgIHJldHVybiBjcmVhdGVNZW51KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IGl0YWxpYW5CYWNrZ3JvdW5kIGZyb20gJy4vYXNzZXRzL2l0YWxpYW5DYWZlLmpwZyc7XG5pbXBvcnQgYmxhY2tCYWNrZ3JvdW5kIGZyb20gJy4vYXNzZXRzL2JsYWNrMi5qcGcnXG5cbi8vQ29udGFpbmVyc1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuLy9IZWFkZXJcbmNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBidXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuY29uc3QgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbmJ1dHRvbjEudGV4dENvbnRlbnQgPSAnSG9tZSdcbmJ1dHRvbjIudGV4dENvbnRlbnQgPSAnTWVudSdcbmJ1dHRvbjMudGV4dENvbnRlbnQgPSAnQ29udGFjdCdcblxubmF2YmFyQ29udGFpbmVyLmFwcGVuZChidXR0b24xKVxubmF2YmFyQ29udGFpbmVyLmFwcGVuZChidXR0b24yKVxubmF2YmFyQ29udGFpbmVyLmFwcGVuZChidXR0b24zKVxuXG5cbi8vQ29udGVudFxuLy8gVGhpcyBpcyBoYW5kbGVkIGJ5IE1vZHVsZXNcblxuXG4vL0Zvb3RlclxuZm9vdGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgQnk6IE1pY2hhZWwgUHJhZGV0dG8nXG5cbi8vIFNldHRpbmcgdXAgSW5kZXggU3RydWN0dXJlXG5ib2R5LmFwcGVuZChoZWFkZXJDb250YWluZXIpXG5oZWFkZXJDb250YWluZXIuYXBwZW5kKG5hdmJhckNvbnRhaW5lcilcbmJvZHkuYXBwZW5kKGNvbnRlbnRDb250YWluZXIpO1xuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTsgXG4vLyBBcHBlbmQgQ29udGVudCBDb250YWluZXIgaW4gZXZlbnQgbGlzdGVuZXJcbmJvZHkuYXBwZW5kKGZvb3RlckNvbnRhaW5lcilcblxuXG4vLyBBZGRpbmcgQ1NTIFN0eWxlc1xuXG4vL0JvZHkgQ1NTXG5cbmJvZHkuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xuYm9keS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gJy41ZnIgNmZyIC41ZnInXG5ib2R5LnN0eWxlLm1pbkhlaWdodCA9ICcxMDB2aCdcbmJvZHkuc3R5bGUubWluV2lkdGggPSAnMTAwdncnXG5ib2R5LnN0eWxlLm1hcmdpbiA9ICcxcmVtJ1xuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2JsYWNrQmFja2dyb3VuZH0pYFxuXG5cbi8vIEhlYWRlciBDb250YWluZXIgQ1NTXG5sZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5oZWFkZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmhlYWRlckNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2VuZCc7XG5oZWFkZXJDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcblxubmF2YmFyQ29udGFpbmVyLnN0eWxlLmdhcCA9ICcxcmVtJ1xuXG5idXR0b25zLmZvckVhY2goKGIpID0+IHtcbiAgICBiLnN0eWxlLmJhY2tncm91bmQgPSAnbGlnaHR5ZWxsb3cnXG4gICAgYi5zdHlsZS5mb250U2l6ZSA9ICcxLjVyZW0nXG4gICAgYi5zdHlsZS5wYWRkaW5nID0gJzFyZW0nXG4gICAgYi5zdHlsZS5tYXJnaW5SaWdodCA9ICcxcmVtJ1xuICAgIGIuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzEwcHgnXG4gICAgYi5zdHlsZS56SW5kZXggPSAnLTEnXG5cbiAgICBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgICAgaWYgKGIudGV4dENvbnRlbnQgPT09ICdIb21lJyl7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChsb2FkSG9tZSgpKVxuICAgICAgICB9IGVsc2UgaWYgKGIudGV4dENvbnRlbnQgPT09ICdNZW51Jyl7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChsb2FkTWVudSgpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQobG9hZENvbnRhY3QoKSlcbiAgICAgICAgfTtcbiAgICAgICAgY29udGVudENvbnRhaW5lckNzcygpO1xuICAgIH0pO1xufSk7XG5cblxuXG4vL0NvbnRlbnQgQ29udGFpbmVyIENTU1xuZnVuY3Rpb24gY29udGVudENvbnRhaW5lckNzcygpe1xuICAgIGNvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5cblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gY29udGVudENvbnRhaW5lci5jaGlsZE5vZGVzWzBdO1xuXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYWluQ29udGVudC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcbiAgICBtYWluQ29udGVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgLy8gbWFpbkNvbnRlbnQuc3R5bGUuYm9yZGVyID0gJzVweCBzb2xpZCBibGFjayc7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcycmVtJ1xuICAgIC8vIG1haW5Db250ZW50LnN0eWxlLmJhY2tncm91bmQgPSAnY29yYWwnXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2l0YWxpYW5CYWNrZ3JvdW5kfSlgO1xuICAgIG1haW5Db250ZW50LnN0eWxlLndpZHRoID0gJzYwJSdcbiAgICBtYWluQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTBweCknXG59O1xuXG5cbi8vIEZvb3RlciBDb250YWluZXIgQ1NTXG5mb290ZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmZvb3RlckNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG5mb290ZXJDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbmZvb3RlckNvbnRhaW5lci5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnXG5mb290ZXJDb250YWluZXIuc3R5bGUuY29sb3IgPSAnIzg5Y2ZmMCdcblxuLy8gRmlyc3QgSW50aWFsaXplZCB3aGVuIGxvYWRpbmdcbmNvbnRlbnRDb250YWluZXJDc3MoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9