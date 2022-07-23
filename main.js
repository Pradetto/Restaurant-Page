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
/* harmony import */ var _assets_italianCafe_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/italianCafe.jpg */ "./src/assets/italianCafe.jpg");
/* harmony import */ var _assets_black2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/black2.jpg */ "./src/assets/black2.jpg");




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
body.style.background = `url(${_assets_black2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]})`


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
    mainContent.style.backgroundImage = `url(${_assets_italianCafe_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]})`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLCtEQUFpQixDQUFDO0FBQ2pFO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2JsYWNrMi5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9pdGFsaWFuQ2FmZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9zdXBlci1tYXJpby5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMxOTI1ZTk4MDg0MDg4NTkyMzc4ZmUyOWIyYWUxNzk4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYjAxMWUzZTNiNjNjMWU1OGU1MTUwY2JjMDQ5ZTA3Yy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmQ0NzUwNGMzNmI4MjhiZjk5YzEzNWUyMDE2ZDlhMmYucG5nXCI7IiwiZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKGNvbnRlbnQpe1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IGNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gcGFyYTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RDaGlsZChjb250ZW50KXtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBsaTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlUGFyYWdyYXBoLCBjcmVhdGVMaXN0Q2hpbGR9IiwiaW1wb3J0IHtjcmVhdGVQYXJhZ3JhcGgsIGNyZWF0ZUxpc3RDaGlsZH0gZnJvbSAnLi9kb21FbGVtZW50cy5qcydcbmltcG9ydCBtYXJpbyBmcm9tICcuL2Fzc2V0cy9zdXBlci1tYXJpby5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgLy8gTmFtZSBDb250YWluZXJcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICdQcmFkZXR0b1xcJ3MgSXRhbGlhbiBNYXJrZXQnO1xuICAgIGltYWdlLnNyYyA9IG1hcmlvO1xuICAgIGltYWdlLmFsdCA9ICdtYXJpbyc7XG5cbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKVxuICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpXG5cbiAgICAvLyBDU1MgTmFtZSBDb250YWluZXJcbiAgICBuYW1lQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWZsZXgnXG4gICAgbmFtZUNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInXG4gICAgbmFtZUNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcblxuXG4gICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gJzMuNXJlbSdcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9ICczLjVyZW0nXG5cblxuICAgIC8vIEFib3V0IENvbnRhaW5lclxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdEZXR0b1xcJ3MgSXRhbGlhbiBNYXJrZXQgd2FzIGVzdGFibGlzaGVkIGluIDE5OTYuIE5vdCBvbmx5IGlzIGl0IGEgRGVsaSB0aGF0IHByb3ZpZGVzIHByZW1pdW0gbWVhdCBidXQgb2ZmZXJzIGEgbWFya2V0IGZvciBJdGFsaWFuIGdvb2RzLiBGZWVsIGZyZWUgdG8gc3RvcCBpbiBhbmQgdHJ5IG91ciBkaW5lciBhcyB3ZWxsIHdoaWNoIG9mZmVycyBvbmx5IHRoZSBiZXN0IFBpenphIGFuZCBQYXN0YSEnKSk7XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCdHcmF6aWUsIFByYWRldHRvJykpO1xuXG5cbiAgICAvLyBIb3VycyBDb250YWluZXJcbiAgICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBob3Vyc0hlYWRlci50ZXh0Q29udGVudCA9ICdIb3VycydcblxuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ1N1bmRheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdNb25kYXkgMDg6MDAtMjA6MDAnKSk7XG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnVHVlc2RheSAwODowMC0yMDowMCcpKTtcbiAgICB1bC5hcHBlbmQoY3JlYXRlTGlzdENoaWxkKCdXZWRuZXNkYXkgMDg6MDAtMjA6MDAnKSk7XG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnVGh1cnNkYXkgMDg6MDAtMjA6MDAnKSk7XG4gICAgdWwuYXBwZW5kKGNyZWF0ZUxpc3RDaGlsZCgnRnJpZGF5IDA4OjAwLTIwOjAwJykpO1xuICAgIHVsLmFwcGVuZChjcmVhdGVMaXN0Q2hpbGQoJ1NhdHVyZGF5IDA4OjAwLTIyOjAwJykpO1xuXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNIZWFkZXIpXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQodWwpXG5cbiAgICAvLyBEaXYgZm9yIExvY2F0aW9uXG4gICAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cbiAgICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkZXIpXG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCcyMTcxMSBOIDd0aCBTdCwgUGhvZW5peCwgQVogODUwMjQnKSlcblxuXG4gICAgLy8gSG9tZSBDb250YWluZXJcbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVDb250YWluZXInKVxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUNvbnRhaW5lcilcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKVxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNDb250YWluZXIpXG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcilcblxuICAgIC8vIEhvbWUgQ29udGFpbmVyIENTU1xuXG4gICAgLy9OYW1lIENvbnRhaW5lciBDc1NcbiAgICBjb250YWluZXJTdHlsZXMobmFtZUNvbnRhaW5lcik7XG4gICAgbmFtZUNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9ICc4MCUnO1xuICAgIGZvbnRTaXplSDEocmVzdGF1cmFudE5hbWUpXG5cbiAgICAvL0Fib3V0IENTU1xuICAgIGNvbnRhaW5lclN0eWxlcyhhYm91dENvbnRhaW5lcik7XG4gICAgY29udGVudFdpZHRoKGFib3V0Q29udGFpbmVyKTtcbiAgICBmb250U2l6ZUNvbnRhaW5lclRleHQoYWJvdXRDb250YWluZXIpXG4gICAgYWJvdXRDb250YWluZXIuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcidcblxuICAgIC8vIEhvdXJzIENvbnRhaW5lclxuICAgIGNvbnRhaW5lclN0eWxlcyhob3Vyc0NvbnRhaW5lcik7XG4gICAgY29udGVudFdpZHRoKGhvbWVDb250YWluZXIpO1xuICAgIGZvbnRTaXplQ29udGFpbmVyVGV4dCh1bCk7XG4gICAgZm9udFNpemVIMyhob3Vyc0hlYWRlcik7XG4gICAgdWwuc3R5bGUubGlzdFN0eWxlID0gJ25vbmUnO1xuICAgIHVsLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICB1bC5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4gICAgLy8gTG9jYXRpb24gQ29udGFpbmVyXG4gICAgY29udGFpbmVyU3R5bGVzKGxvY2F0aW9uQ29udGFpbmVyKVxuICAgIGZvbnRTaXplQ29udGFpbmVyVGV4dChsb2NhdGlvbkNvbnRhaW5lcilcbiAgICBmb250U2l6ZUgzKGxvY2F0aW9uSGVhZGVyKVxuICAgIGNvbnN0IHBhcmFMb2NhdGlvbiA9IGxvY2F0aW9uQ29udGFpbmVyLmNoaWxkTm9kZXNbMV07XG4gICAgcGFyYUxvY2F0aW9uLnN0eWxlLnBhZGRpbmcgPSAnMCdcbiAgICBwYXJhTG9jYXRpb24uc3R5bGUubWFyZ2luID0gJzAnXG5cbiAgICByZXR1cm4gaG9tZUNvbnRhaW5lcjtcbn07XG5cblxuLy9Db250YWluZXIgQ1NTIHN0eWxlc1xuXG5mdW5jdGlvbiBjb250YWluZXJTdHlsZXMoY29udGFpbmVyKXtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0eWVsbG93JztcbiAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyID0gJzVweCBzb2xpZCAjREMxNDNDJztcbiAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzFyZW0nO1xuICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzFyZW0nO1xuICAgIGNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSAnLjVyZW0nO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gaGVhZGVyV2lkdGgoY29udGFpbmVyKXtcbiAgICBjb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnODAlJztcbn1cbmZ1bmN0aW9uIGZvbnRTaXplSDEodGFnKXtcbiAgICB0YWcuc3R5bGUuZm9udFNpemUgPSAnMi42N3JlbSc7XG4gICAgdGFnLnN0eWxlLm1hcmdpbiA9ICcwJ1xuICAgIHRhZy5zdHlsZS5wYWRkaW5nID0gJzAnXG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRXaWR0aChjb250YWluZXIpe1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICc1MCUnO1xufVxuXG5mdW5jdGlvbiBmb250U2l6ZUgzKHRhZyl7XG4gICAgdGFnLnN0eWxlLmZvbnRTaXplID0gJzEuNzVyZW0nO1xuICAgIHRhZy5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgIHRhZy5zdHlsZS5tYXJnaW4gPSAnMCc7XG59XG5cbmZ1bmN0aW9uIGZvbnRTaXplQ29udGFpbmVyVGV4dCh0YWcpe1xuICAgIHRhZy5zdHlsZS5mb250U2l6ZSA9ICcxLjVyZW0nO1xufVxuLy9sb2FkSG9tZSBGdW5jdGlvblxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpe1xuICAgIHJldHVybiBjcmVhdGVIb21lKCk7XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGl0YWxpYW5CYWNrZ3JvdW5kIGZyb20gJy4vYXNzZXRzL2l0YWxpYW5DYWZlLmpwZyc7XG5pbXBvcnQgYmxhY2tCYWNrZ3JvdW5kIGZyb20gJy4vYXNzZXRzL2JsYWNrMi5qcGcnXG5cbi8vQ29udGFpbmVyc1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuLy9IZWFkZXJcbmNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBidXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmNvbnN0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuY29uc3QgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbmJ1dHRvbjEudGV4dENvbnRlbnQgPSAnSG9tZSdcbmJ1dHRvbjIudGV4dENvbnRlbnQgPSAnTWVudSdcbmJ1dHRvbjMudGV4dENvbnRlbnQgPSAnQ29udGFjdCdcblxubmF2YmFyQ29udGFpbmVyLmFwcGVuZChidXR0b24xKVxubmF2YmFyQ29udGFpbmVyLmFwcGVuZChidXR0b24yKVxubmF2YmFyQ29udGFpbmVyLmFwcGVuZChidXR0b24zKVxuXG5cbi8vQ29udGVudFxuLy8gVGhpcyBpcyBoYW5kbGVkIGJ5IE1vZHVsZXNcblxuXG4vL0Zvb3RlclxuZm9vdGVyQ29udGFpbmVyLnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgQnk6IE1pY2hhZWwgUHJhZGV0dG8nXG5cbi8vIFNldHRpbmcgdXAgSW5kZXggU3RydWN0dXJlXG5ib2R5LmFwcGVuZChoZWFkZXJDb250YWluZXIpXG5oZWFkZXJDb250YWluZXIuYXBwZW5kKG5hdmJhckNvbnRhaW5lcilcbmJvZHkuYXBwZW5kKGNvbnRlbnRDb250YWluZXIpO1xuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTsgXG4vLyBBcHBlbmQgQ29udGVudCBDb250YWluZXIgaW4gZXZlbnQgbGlzdGVuZXJcbmJvZHkuYXBwZW5kKGZvb3RlckNvbnRhaW5lcilcblxuXG4vLyBBZGRpbmcgQ1NTIFN0eWxlc1xuXG4vL0JvZHkgQ1NTXG5cbmJvZHkuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xuYm9keS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gJy41ZnIgNmZyIC41ZnInXG5ib2R5LnN0eWxlLm1pbkhlaWdodCA9ICcxMDB2aCdcbmJvZHkuc3R5bGUubWluV2lkdGggPSAnMTAwdncnXG5ib2R5LnN0eWxlLm1hcmdpbiA9ICcxcmVtJ1xuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2JsYWNrQmFja2dyb3VuZH0pYFxuXG5cbi8vIEhlYWRlciBDb250YWluZXIgQ1NTXG5sZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5oZWFkZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmhlYWRlckNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2VuZCc7XG5oZWFkZXJDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcblxubmF2YmFyQ29udGFpbmVyLnN0eWxlLmdhcCA9ICcxcmVtJ1xuXG5idXR0b25zLmZvckVhY2goKGIpID0+IHtcbiAgICBiLnN0eWxlLmJhY2tncm91bmQgPSAnbGlnaHR5ZWxsb3cnXG4gICAgYi5zdHlsZS5mb250U2l6ZSA9ICcxLjVyZW0nXG4gICAgYi5zdHlsZS5wYWRkaW5nID0gJzFyZW0nXG4gICAgYi5zdHlsZS5tYXJnaW5SaWdodCA9ICcxcmVtJ1xuICAgIGIuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzEwcHgnXG4gICAgYi5zdHlsZS56SW5kZXggPSAnLTEnXG5cbiAgICBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICAgICAgaWYgKGIudGV4dENvbnRlbnQgPT09ICdIb21lJyl7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChsb2FkSG9tZSgpKVxuICAgICAgICB9IGVsc2UgaWYgKGIudGV4dENvbnRlbnQgPT09ICdNZW51Jyl7XG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZCgnPGI+U3RpbGwgTmVlZCB0byBidWlsZDwvYj4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmQoJzxiPlN0aWxsIE5lZWQgdG8gYnVpbGQ8L2I+JylcbiAgICAgICAgfTtcbiAgICAgICAgY29udGVudENvbnRhaW5lckNzcygpO1xuICAgIH0pO1xufSk7XG5cblxuXG4vL0NvbnRlbnQgQ29udGFpbmVyIENTU1xuZnVuY3Rpb24gY29udGVudENvbnRhaW5lckNzcygpe1xuICAgIGNvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG5cblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gY29udGVudENvbnRhaW5lci5jaGlsZE5vZGVzWzBdO1xuXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYWluQ29udGVudC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcbiAgICBtYWluQ29udGVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgLy8gbWFpbkNvbnRlbnQuc3R5bGUuYm9yZGVyID0gJzVweCBzb2xpZCBibGFjayc7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICcycmVtJ1xuICAgIC8vIG1haW5Db250ZW50LnN0eWxlLmJhY2tncm91bmQgPSAnY29yYWwnXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2l0YWxpYW5CYWNrZ3JvdW5kfSlgO1xuICAgIG1haW5Db250ZW50LnN0eWxlLndpZHRoID0gJzYwJSdcbiAgICBtYWluQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTBweCknXG59O1xuXG5cbi8vIEZvb3RlciBDb250YWluZXIgQ1NTXG5mb290ZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbmZvb3RlckNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG5mb290ZXJDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbmZvb3RlckNvbnRhaW5lci5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnXG5mb290ZXJDb250YWluZXIuc3R5bGUuY29sb3IgPSAnIzg5Y2ZmMCdcblxuLy8gRmlyc3QgSW50aWFsaXplZCB3aGVuIGxvYWRpbmdcbmNvbnRlbnRDb250YWluZXJDc3MoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9