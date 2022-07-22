/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/* harmony default export */ __webpack_exports__["default"] = (loadHome);

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
// body.style.flexDirection = 'column'
// body.style.alignItems = 'center'
body.style.minHeight = '100vh'
body.style.minWidth = '100vw'

body.style.margin = '1rem'

body.style.background = '#EEEEEE'

// Header Container CSS
let buttons = document.querySelectorAll('button')
headerContainer.style.display = 'flex';
headerContainer.style.alignItems = 'end';
headerContainer.style.justifyContent = 'center';
// headerContainer.style.padding = '1rem'

navbarContainer.style.gap = '1rem'

buttons.forEach((b) => {
    b.style.background = 'lightyellow'
    b.style.fontSize = '1.5rem'
    b.style.padding = '1rem'
    b.style.marginRight = '1rem'
    b.style.borderRadius = '10px'

    b.addEventListener('click', () =>{
        contentContainer.innerHTML = ''
        if (b.textContent === 'Home'){
            contentContainer.append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
        } else if (b.textContent === 'Menu'){
            contentContainer.append('<b>Still Need to build</b>')
        } else {
            contentContainer.append('<b>Still Need to build</b>')
        };
        contentContainerCss();
    });
});
// buttons.style.background = 'yellow'



//Content Container CSS
function contentContainerCss(){
    contentContainer.style.display = 'flex';
    contentContainer.style.justifyContent = 'center';


    const mainContent = contentContainer.childNodes[0];

    mainContent.style.display = 'flex';
    mainContent.style.alignItems = 'center';
    mainContent.style.justifyContent = 'space-around';
    mainContent.style.flexDirection = 'column';
    mainContent.style.border = '5px solid black';
    mainContent.style.padding = '2rem'
    // mainContent.style.background = 'coral'
    mainContent.style.backgroundImage = "url('/assets/italianCafe.jpeg')";
    mainContent.style.width = '60%'
};


// Footer Container CSS
footerContainer.style.display = 'flex';
footerContainer.style.alignItems = 'center';
footerContainer.style.justifyContent = 'center';
footerContainer.style.fontWeight = 'bold'

// First Intialized when loading
contentContainerCss();


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtEQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZpRTtBQUNwQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwrREFBSztBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsK0JBQStCLGdFQUFlO0FBQzlDLCtCQUErQixnRUFBZTs7O0FBRzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGNBQWMsZ0VBQWU7QUFDN0IsY0FBYyxnRUFBZTtBQUM3QixjQUFjLGdFQUFlO0FBQzdCLGNBQWMsZ0VBQWU7QUFDN0IsY0FBYyxnRUFBZTtBQUM3QixjQUFjLGdFQUFlO0FBQzdCLGNBQWMsZ0VBQWU7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0VBQWU7OztBQUdqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUFlLFFBQVE7Ozs7OztVQ3JIdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZmlDOzs7QUFHakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9EQUFRO0FBQ3JDO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQVE7QUFDNUMsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvc3VwZXItbWFyaW8ucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ZDQ3NTA0YzM2YjgyOGJmOTljMTM1ZTIwMTZkOWEyZi5wbmdcIjsiLCJmdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgoY29udGVudCl7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gY29udGVudC50b1N0cmluZygpO1xuICAgIHJldHVybiBwYXJhO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdENoaWxkKGNvbnRlbnQpe1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGxpO1xufTtcblxuZXhwb3J0IHtjcmVhdGVQYXJhZ3JhcGgsIGNyZWF0ZUxpc3RDaGlsZH0iLCJpbXBvcnQge2NyZWF0ZVBhcmFncmFwaCwgY3JlYXRlTGlzdENoaWxkfSBmcm9tICcuL2RvbUVsZW1lbnRzLmpzJ1xuaW1wb3J0IG1hcmlvIGZyb20gJy4vYXNzZXRzL3N1cGVyLW1hcmlvLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcbiAgICAvLyBOYW1lIENvbnRhaW5lclxuICAgIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ1ByYWRldHRvXFwncyBJdGFsaWFuIE1hcmtldCc7XG4gICAgaW1hZ2Uuc3JjID0gbWFyaW87XG4gICAgaW1hZ2UuYWx0ID0gJ21hcmlvJztcblxuICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpXG4gICAgbmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSlcblxuICAgIC8vIENTUyBOYW1lIENvbnRhaW5lclxuICAgIG5hbWVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtZmxleCdcbiAgICBuYW1lQ29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcidcbiAgICBuYW1lQ29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJ1xuXG5cbiAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSAnMy41cmVtJ1xuICAgIGltYWdlLnN0eWxlLndpZHRoID0gJzMuNXJlbSdcblxuXG4gICAgLy8gQWJvdXQgQ29udGFpbmVyXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ0RldHRvXFwncyBJdGFsaWFuIE1hcmtldCB3YXMgZXN0YWJsaXNoZWQgaW4gMTk5Ni4gTm90IG9ubHkgaXMgaXQgYSBEZWxpIHRoYXQgcHJvdmlkZXMgcHJlbWl1bSBtZWF0IGJ1dCBvZmZlcnMgYSBtYXJrZXQgZm9yIEl0YWxpYW4gZ29vZHMuIEZlZWwgZnJlZSB0byBzdG9wIGluIGFuZCB0cnkgb3VyIGRpbmVyIGFzIHdlbGwgd2hpY2ggb2ZmZXJzIG9ubHkgdGhlIGJlc3QgUGl6emEgYW5kIFBhc3RhIScpKTtcbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJ0dyYXppZSwgUHJhZGV0dG8nKSk7XG5cblxuICAgIC8vIEhvdXJzIENvbnRhaW5lclxuICAgIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gJ0hvdXJzJ1xuXG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnU3VuZGF5IDA4OjAwLTIwOjAwJykpO1xuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ01vbmRheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdUdWVzZGF5IDA4OjAwLTIwOjAwJykpO1xuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ1dlZG5lc2RheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdUaHVyc2RheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdGcmlkYXkgMDg6MDAtMjA6MDAnKSk7XG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnU2F0dXJkYXkgMDg6MDAtMjI6MDAnKSk7XG5cbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0hlYWRlcilcbiAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1bClcblxuICAgIC8vIERpdiBmb3IgTG9jYXRpb25cbiAgICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblxuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcilcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoJzIxNzExIE4gN3RoIFN0LCBQaG9lbml4LCBBWiA4NTAyNCcpKVxuXG5cbiAgICAvLyBIb21lIENvbnRhaW5lclxuICAgIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZUNvbnRhaW5lcicpXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyKVxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0NvbnRhaW5lcilcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udGFpbmVyKVxuXG4gICAgLy8gSG9tZSBDb250YWluZXIgQ1NTXG5cbiAgICAvL05hbWUgQ29udGFpbmVyIENzU1xuICAgIGNvbnRhaW5lclN0eWxlcyhuYW1lQ29udGFpbmVyKTtcbiAgICBuYW1lQ29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gJzgwJSc7XG5cbiAgICAvL0Fib3V0IENTU1xuICAgIGNvbnRhaW5lclN0eWxlcyhhYm91dENvbnRhaW5lcik7XG4gICAgdWwuc3R5bGUubGlzdFN0eWxlID0gJ25vbmUnXG4gICAgdWwuc3R5bGUubWFyZ2luID0gJzAnXG4gICAgdWwuc3R5bGUucGFkZGluZyA9ICcwJ1xuICAgIGNvbnRlbnRXaWR0aChhYm91dENvbnRhaW5lcilcblxuICAgIC8vIEhvdXJzIENvbnRhaW5lclxuICAgIGNvbnRhaW5lclN0eWxlcyhob3Vyc0NvbnRhaW5lcik7XG4gICAgY29udGVudFdpZHRoKGhvbWVDb250YWluZXIpO1xuXG4gICAgLy8gTG9jYXRpb24gQ29udGFpbmVyXG4gICAgY29udGFpbmVyU3R5bGVzKGxvY2F0aW9uQ29udGFpbmVyKVxuXG5cbiAgICByZXR1cm4gaG9tZUNvbnRhaW5lcjtcbn07XG5cblxuLy9Db250YWluZXIgQ1NTIHN0eWxlc1xuXG5mdW5jdGlvbiBjb250YWluZXJTdHlsZXMoY29udGFpbmVyKXtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0eWVsbG93JztcbiAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyID0gJzVweCBzb2xpZCBibGFjayc7XG4gICAgY29udGFpbmVyLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcxcmVtJztcbiAgICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9ICcxcmVtJztcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIGhlYWRlcldpZHRoKGNvbnRhaW5lcil7XG4gICAgY29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gJzgwJSc7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRXaWR0aChjb250YWluZXIpe1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICc1MCUnO1xufVxuXG4vL2xvYWRIb21lIEZ1bmN0aW9uXG5cbmZ1bmN0aW9uIGxvYWRIb21lKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhvbWUoKTtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cblxuLy9Db250YWluZXJzXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vL0hlYWRlclxuXG5jb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgYnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5jb25zdCBidXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmNvbnN0IGJ1dHRvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG5idXR0b24xLnRleHRDb250ZW50ID0gJ0hvbWUnXG5idXR0b24yLnRleHRDb250ZW50ID0gJ01lbnUnXG5idXR0b24zLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnXG5cbm5hdmJhckNvbnRhaW5lci5hcHBlbmQoYnV0dG9uMSlcbm5hdmJhckNvbnRhaW5lci5hcHBlbmQoYnV0dG9uMilcbm5hdmJhckNvbnRhaW5lci5hcHBlbmQoYnV0dG9uMylcblxuXG4vL0NvbnRlbnRcbi8vIFRoaXMgaXMgaGFuZGxlZCBieSBNb2R1bGVzXG5cblxuLy9Gb290ZXJcbmZvb3RlckNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIEJ5OiBNaWNoYWVsIFByYWRldHRvJ1xuXG4vLyBTZXR0aW5nIHVwIEluZGV4IFN0cnVjdHVyZVxuYm9keS5hcHBlbmQoaGVhZGVyQ29udGFpbmVyKVxuaGVhZGVyQ29udGFpbmVyLmFwcGVuZChuYXZiYXJDb250YWluZXIpXG5ib2R5LmFwcGVuZChjb250ZW50Q29udGFpbmVyKTtcbmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSk7IFxuLy8gQXBwZW5kIENvbnRlbnQgQ29udGFpbmVyIGluIGV2ZW50IGxpc3RlbmVyXG5ib2R5LmFwcGVuZChmb290ZXJDb250YWluZXIpXG5cblxuLy8gQWRkaW5nIENTUyBTdHlsZXNcblxuLy9Cb2R5IENTU1xuXG5ib2R5LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcblxuYm9keS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gJy41ZnIgNmZyIC41ZnInXG4vLyBib2R5LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJ1xuLy8gYm9keS5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcbmJvZHkuc3R5bGUubWluSGVpZ2h0ID0gJzEwMHZoJ1xuYm9keS5zdHlsZS5taW5XaWR0aCA9ICcxMDB2dydcblxuYm9keS5zdHlsZS5tYXJnaW4gPSAnMXJlbSdcblxuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNFRUVFRUUnXG5cbi8vIEhlYWRlciBDb250YWluZXIgQ1NTXG5sZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5oZWFkZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmhlYWRlckNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2VuZCc7XG5oZWFkZXJDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbi8vIGhlYWRlckNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzFyZW0nXG5cbm5hdmJhckNvbnRhaW5lci5zdHlsZS5nYXAgPSAnMXJlbSdcblxuYnV0dG9ucy5mb3JFYWNoKChiKSA9PiB7XG4gICAgYi5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpZ2h0eWVsbG93J1xuICAgIGIuc3R5bGUuZm9udFNpemUgPSAnMS41cmVtJ1xuICAgIGIuc3R5bGUucGFkZGluZyA9ICcxcmVtJ1xuICAgIGIuc3R5bGUubWFyZ2luUmlnaHQgPSAnMXJlbSdcbiAgICBiLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcxMHB4J1xuXG4gICAgYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgICAgIGlmIChiLnRleHRDb250ZW50ID09PSAnSG9tZScpe1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQobG9hZEhvbWUoKSlcbiAgICAgICAgfSBlbHNlIGlmIChiLnRleHRDb250ZW50ID09PSAnTWVudScpe1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoJzxiPlN0aWxsIE5lZWQgdG8gYnVpbGQ8L2I+JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKCc8Yj5TdGlsbCBOZWVkIHRvIGJ1aWxkPC9iPicpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnRlbnRDb250YWluZXJDc3MoKTtcbiAgICB9KTtcbn0pO1xuLy8gYnV0dG9ucy5zdHlsZS5iYWNrZ3JvdW5kID0gJ3llbGxvdydcblxuXG5cbi8vQ29udGVudCBDb250YWluZXIgQ1NTXG5mdW5jdGlvbiBjb250ZW50Q29udGFpbmVyQ3NzKCl7XG4gICAgY29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGNvbnRlbnRDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcblxuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBjb250ZW50Q29udGFpbmVyLmNoaWxkTm9kZXNbMF07XG5cbiAgICBtYWluQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1haW5Db250ZW50LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJztcbiAgICBtYWluQ29udGVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1hcm91bmQnO1xuICAgIG1haW5Db250ZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICBtYWluQ29udGVudC5zdHlsZS5ib3JkZXIgPSAnNXB4IHNvbGlkIGJsYWNrJztcbiAgICBtYWluQ29udGVudC5zdHlsZS5wYWRkaW5nID0gJzJyZW0nXG4gICAgLy8gbWFpbkNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9ICdjb3JhbCdcbiAgICBtYWluQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnL2Fzc2V0cy9pdGFsaWFuQ2FmZS5qcGVnJylcIjtcbiAgICBtYWluQ29udGVudC5zdHlsZS53aWR0aCA9ICc2MCUnXG59O1xuXG5cbi8vIEZvb3RlciBDb250YWluZXIgQ1NTXG5mb290ZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmZvb3RlckNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG5mb290ZXJDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbmZvb3RlckNvbnRhaW5lci5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnXG5cbi8vIEZpcnN0IEludGlhbGl6ZWQgd2hlbiBsb2FkaW5nXG5jb250ZW50Q29udGFpbmVyQ3NzKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==