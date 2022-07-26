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

/***/ "./src/assets/italianCafe.jpg":
/*!************************************!*\
  !*** ./src/assets/italianCafe.jpg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bb011e3e3b63c1e58e5150cbc049e07c.jpg");

/***/ }),

/***/ "./src/assets/super-mario.png":
/*!************************************!*\
  !*** ./src/assets/super-mario.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6d47504c36b828bf99c135e2016d9a2f.png");

/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    
}

/* harmony default export */ __webpack_exports__["default"] = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_super_mario_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/super-mario.png */ "./src/assets/super-mario.png");


function createMenu (){
    // Name Container
    const nameContainer = document.createElement('div');
    const menuName = document.createElement('h1');
    const image = document.createElement('img');

    restaurantName.textContent = 'Pradetto\'s Italian Menu';
    image.src = _assets_super_mario_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    image.alt = 'mario';

    nameContainer.appendChild(restaurantName)
    nameContainer.appendChild(image)

}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQVE7QUFDNUMsVUFBVTtBQUNWLG9DQUFvQyxvREFBUTtBQUM1QyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsK0RBQWlCLENBQUM7QUFDakU7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvYmxhY2syLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2l0YWxpYW5DYWZlLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL3N1cGVyLW1hcmlvLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzE5MjVlOTgwODQwODg1OTIzNzhmZTI5YjJhZTE3OTguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJiMDExZTNlM2I2M2MxZTU4ZTUxNTBjYmMwNDllMDdjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ZDQ3NTA0YzM2YjgyOGJmOTljMTM1ZTIwMTZkOWEyZi5wbmdcIjsiLCJmdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgoY29udGVudCl7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gY29udGVudC50b1N0cmluZygpO1xuICAgIHJldHVybiBwYXJhO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdENoaWxkKGNvbnRlbnQpe1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGxpO1xufTtcblxuZXhwb3J0IHtjcmVhdGVQYXJhZ3JhcGgsIGNyZWF0ZUxpc3RDaGlsZH0iLCJpbXBvcnQge2NyZWF0ZVBhcmFncmFwaCwgY3JlYXRlTGlzdENoaWxkfSBmcm9tICcuL2RvbUVsZW1lbnRzLmpzJ1xuaW1wb3J0IG1hcmlvIGZyb20gJy4vYXNzZXRzL3N1cGVyLW1hcmlvLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcbiAgICAvLyBOYW1lIENvbnRhaW5lclxuICAgIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ1ByYWRldHRvXFwncyBJdGFsaWFuIE1hcmtldCc7XG4gICAgaW1hZ2Uuc3JjID0gbWFyaW87XG4gICAgaW1hZ2UuYWx0ID0gJ21hcmlvJztcblxuICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpXG4gICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSlcblxuICAgIC8vIENTUyBOYW1lIENvbnRhaW5lclxuICAgIG5hbWVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCdcbiAgICBuYW1lQ29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcidcbiAgICBuYW1lQ29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJ1xuXG5cbiAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSAnMy41cmVtJ1xuICAgIGltYWdlLnN0eWxlLndpZHRoID0gJzMuNXJlbSdcblxuXG4gICAgLy8gQWJvdXQgQ29udGFpbmVyXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ0RldHRvXFwncyBJdGFsaWFuIE1hcmtldCB3YXMgZXN0YWJsaXNoZWQgaW4gMTk5Ni4gTm90IG9ubHkgaXMgaXQgYSBEZWxpIHRoYXQgcHJvdmlkZXMgcHJlbWl1bSBtZWF0IGJ1dCBvZmZlcnMgYSBtYXJrZXQgZm9yIEl0YWxpYW4gZ29vZHMuIEZlZWwgZnJlZSB0byBzdG9wIGluIGFuZCB0cnkgb3VyIGRpbmVyIGFzIHdlbGwgd2hpY2ggb2ZmZXJzIG9ubHkgdGhlIGJlc3QgUGl6emEgYW5kIFBhc3RhIScpKTtcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ0dyYXppZSwgUHJhZGV0dG8nKSk7XG5cblxuICAgIC8vIEhvdXJzIENvbnRhaW5lclxuICAgIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gJ0hvdXJzJ1xuXG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnU3VuZGF5IDA4OjAwLTIwOjAwJykpO1xuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ01vbmRheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdUdWVzZGF5IDA4OjAwLTIwOjAwJykpO1xuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ1dlZG5lc2RheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdUaHVyc2RheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdGcmlkYXkgMDg6MDAtMjA6MDAnKSk7XG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnU2F0dXJkYXkgMDg6MDAtMjI6MDAnKSk7XG5cbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0hlYWRlcilcbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1bClcblxuICAgIC8vIERpdiBmb3IgTG9jYXRpb25cbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblxuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcilcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJzIxNzExIE4gN3RoIFN0LCBQaG9lbml4LCBBWiA4NTAyNCcpKVxuXG5cbiAgICAvLyBIb21lIENvbnRhaW5lclxuICAgIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZUNvbnRhaW5lcicpXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyKVxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0NvbnRhaW5lcilcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udGFpbmVyKVxuXG4gICAgLy8gSG9tZSBDb250YWluZXIgQ1NTXG5cbiAgICAvL05hbWUgQ29udGFpbmVyIENzU1xuICAgIGNvbnRhaW5lclN0eWxlcyhuYW1lQ29udGFpbmVyKTtcbiAgICBuYW1lQ29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gJzgwJSc7XG4gICAgZm9udFNpemVIMShyZXN0YXVyYW50TmFtZSlcblxuICAgIC8vQWJvdXQgQ1NTXG4gICAgY29udGFpbmVyU3R5bGVzKGFib3V0Q29udGFpbmVyKTtcbiAgICBjb250ZW50V2lkdGgoYWJvdXRDb250YWluZXIpO1xuICAgIGZvbnRTaXplQ29udGFpbmVyVGV4dChhYm91dENvbnRhaW5lcilcbiAgICBhYm91dENvbnRhaW5lci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJ1xuXG4gICAgLy8gSG91cnMgQ29udGFpbmVyXG4gICAgY29udGFpbmVyU3R5bGVzKGhvdXJzQ29udGFpbmVyKTtcbiAgICBjb250ZW50V2lkdGgoaG9tZUNvbnRhaW5lcik7XG4gICAgZm9udFNpemVDb250YWluZXJUZXh0KHVsKTtcbiAgICBmb250U2l6ZUgzKGhvdXJzSGVhZGVyKTtcbiAgICB1bC5zdHlsZS5saXN0U3R5bGUgPSAnbm9uZSc7XG4gICAgdWwuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgIHVsLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cbiAgICAvLyBMb2NhdGlvbiBDb250YWluZXJcbiAgICBjb250YWluZXJTdHlsZXMobG9jYXRpb25Db250YWluZXIpXG4gICAgZm9udFNpemVDb250YWluZXJUZXh0KGxvY2F0aW9uQ29udGFpbmVyKVxuICAgIGZvbnRTaXplSDMobG9jYXRpb25IZWFkZXIpXG4gICAgY29uc3QgcGFyYUxvY2F0aW9uID0gbG9jYXRpb25Db250YWluZXIuY2hpbGROb2Rlc1sxXTtcbiAgICBwYXJhTG9jYXRpb24uc3R5bGUucGFkZGluZyA9ICcwJ1xuICAgIHBhcmFMb2NhdGlvbi5zdHlsZS5tYXJnaW4gPSAnMCdcblxuICAgIHJldHVybiBob21lQ29udGFpbmVyO1xufTtcblxuXG4vL0NvbnRhaW5lciBDU1Mgc3R5bGVzXG5cbmZ1bmN0aW9uIGNvbnRhaW5lclN0eWxlcyhjb250YWluZXIpe1xuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHR5ZWxsb3cnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnNXB4IHNvbGlkICNEQzE0M0MnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMXJlbSc7XG4gICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAnMXJlbSc7XG4gICAgY29udGFpbmVyLnN0eWxlLm1hcmdpbiA9ICcuNXJlbSc7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJXaWR0aChjb250YWluZXIpe1xuICAgIGNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9ICc4MCUnO1xufVxuZnVuY3Rpb24gZm9udFNpemVIMSh0YWcpe1xuICAgIHRhZy5zdHlsZS5mb250U2l6ZSA9ICcyLjY3cmVtJztcbiAgICB0YWcuc3R5bGUubWFyZ2luID0gJzAnXG4gICAgdGFnLnN0eWxlLnBhZGRpbmcgPSAnMCdcbn1cblxuZnVuY3Rpb24gY29udGVudFdpZHRoKGNvbnRhaW5lcil7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzUwJSc7XG59XG5cbmZ1bmN0aW9uIGZvbnRTaXplSDModGFnKXtcbiAgICB0YWcuc3R5bGUuZm9udFNpemUgPSAnMS43NXJlbSc7XG4gICAgdGFnLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgdGFnLnN0eWxlLm1hcmdpbiA9ICcwJztcbn1cblxuZnVuY3Rpb24gZm9udFNpemVDb250YWluZXJUZXh0KHRhZyl7XG4gICAgdGFnLnN0eWxlLmZvbnRTaXplID0gJzEuNXJlbSc7XG59XG4vL2xvYWRIb21lIEZ1bmN0aW9uXG5cbmZ1bmN0aW9uIGxvYWRIb21lKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhvbWUoKTtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiaW1wb3J0IG1hcmlvIGZyb20gJy4vYXNzZXRzL3N1cGVyLW1hcmlvLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUgKCl7XG4gICAgLy8gTmFtZSBDb250YWluZXJcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICdQcmFkZXR0b1xcJ3MgSXRhbGlhbiBNZW51JztcbiAgICBpbWFnZS5zcmMgPSBtYXJpbztcbiAgICBpbWFnZS5hbHQgPSAnbWFyaW8nO1xuXG4gICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSlcbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKVxuXG59XG5cblxuZnVuY3Rpb24gbG9hZE1lbnUgKCl7XG4gICAgcmV0dXJuIGNyZWF0ZU1lbnUoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBpdGFsaWFuQmFja2dyb3VuZCBmcm9tICcuL2Fzc2V0cy9pdGFsaWFuQ2FmZS5qcGcnO1xuaW1wb3J0IGJsYWNrQmFja2dyb3VuZCBmcm9tICcuL2Fzc2V0cy9ibGFjazIuanBnJ1xuXG4vL0NvbnRhaW5lcnNcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vSGVhZGVyXG5jb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgYnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5jb25zdCBidXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmNvbnN0IGJ1dHRvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG5idXR0b24xLnRleHRDb250ZW50ID0gJ0hvbWUnXG5idXR0b24yLnRleHRDb250ZW50ID0gJ01lbnUnXG5idXR0b24zLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXG5cbm5hdmJhckNvbnRhaW5lci5hcHBlbmQoYnV0dG9uMSlcbm5hdmJhckNvbnRhaW5lci5hcHBlbmQoYnV0dG9uMilcbm5hdmJhckNvbnRhaW5lci5hcHBlbmQoYnV0dG9uMylcblxuXG4vL0NvbnRlbnRcbi8vIFRoaXMgaXMgaGFuZGxlZCBieSBNb2R1bGVzXG5cblxuLy9Gb290ZXJcbmZvb3RlckNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIEJ5OiBNaWNoYWVsIFByYWRldHRvJ1xuXG4vLyBTZXR0aW5nIHVwIEluZGV4IFN0cnVjdHVyZVxuYm9keS5hcHBlbmQoaGVhZGVyQ29udGFpbmVyKVxuaGVhZGVyQ29udGFpbmVyLmFwcGVuZChuYXZiYXJDb250YWluZXIpXG5ib2R5LmFwcGVuZChjb250ZW50Q29udGFpbmVyKTtcbmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSk7IFxuLy8gQXBwZW5kIENvbnRlbnQgQ29udGFpbmVyIGluIGV2ZW50IGxpc3RlbmVyXG5ib2R5LmFwcGVuZChmb290ZXJDb250YWluZXIpXG5cblxuLy8gQWRkaW5nIENTUyBTdHlsZXNcblxuLy9Cb2R5IENTU1xuXG5ib2R5LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcbmJvZHkuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9ICcuNWZyIDZmciAuNWZyJ1xuYm9keS5zdHlsZS5taW5IZWlnaHQgPSAnMTAwdmgnXG5ib2R5LnN0eWxlLm1pbldpZHRoID0gJzEwMHZ3J1xuYm9keS5zdHlsZS5tYXJnaW4gPSAnMXJlbSdcbmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtibGFja0JhY2tncm91bmR9KWBcblxuXG4vLyBIZWFkZXIgQ29udGFpbmVyIENTU1xubGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuaGVhZGVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5oZWFkZXJDb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdlbmQnO1xuaGVhZGVyQ29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5cbm5hdmJhckNvbnRhaW5lci5zdHlsZS5nYXAgPSAnMXJlbSdcblxuYnV0dG9ucy5mb3JFYWNoKChiKSA9PiB7XG4gICAgYi5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpZ2h0eWVsbG93J1xuICAgIGIuc3R5bGUuZm9udFNpemUgPSAnMS41cmVtJ1xuICAgIGIuc3R5bGUucGFkZGluZyA9ICcxcmVtJ1xuICAgIGIuc3R5bGUubWFyZ2luUmlnaHQgPSAnMXJlbSdcbiAgICBiLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcxMHB4J1xuICAgIGIuc3R5bGUuekluZGV4ID0gJy0xJ1xuXG4gICAgYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGlmIChiLnRleHRDb250ZW50ID09PSAnSG9tZScpe1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQobG9hZEhvbWUoKSlcbiAgICAgICAgfSBlbHNlIGlmIChiLnRleHRDb250ZW50ID09PSAnTWVudScpe1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQobG9hZE1lbnUoKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKCc8Yj5TdGlsbCBOZWVkIHRvIGJ1aWxkPC9iPicpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnRlbnRDb250YWluZXJDc3MoKTtcbiAgICB9KTtcbn0pO1xuXG5cblxuLy9Db250ZW50IENvbnRhaW5lciBDU1NcbmZ1bmN0aW9uIGNvbnRlbnRDb250YWluZXJDc3MoKXtcbiAgICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgY29udGVudENvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuXG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGNvbnRlbnRDb250YWluZXIuY2hpbGROb2Rlc1swXTtcblxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgIG1haW5Db250ZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWFyb3VuZCc7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIC8vIG1haW5Db250ZW50LnN0eWxlLmJvcmRlciA9ICc1cHggc29saWQgYmxhY2snO1xuICAgIG1haW5Db250ZW50LnN0eWxlLnBhZGRpbmcgPSAnMnJlbSdcbiAgICAvLyBtYWluQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ2NvcmFsJ1xuICAgIG1haW5Db250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpdGFsaWFuQmFja2dyb3VuZH0pYDtcbiAgICBtYWluQ29udGVudC5zdHlsZS53aWR0aCA9ICc2MCUnXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTEwcHgpJ1xufTtcblxuXG4vLyBGb290ZXIgQ29udGFpbmVyIENTU1xuZm9vdGVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5mb290ZXJDb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuZm9vdGVyQ29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5mb290ZXJDb250YWluZXIuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJ1xuZm9vdGVyQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gJyM4OWNmZjAnXG5cbi8vIEZpcnN0IEludGlhbGl6ZWQgd2hlbiBsb2FkaW5nXG5jb250ZW50Q29udGFpbmVyQ3NzKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==