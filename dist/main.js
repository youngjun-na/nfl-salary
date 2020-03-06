/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/colors.js":
/*!************************!*\
  !*** ./data/colors.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst NFLCOLORS = {\n\"ari\": [\"#97233F\", \"#FFB612\"],\n\"atl\": [\"#A71930\", \"#000000\"],\n\"bal\": [\"#241773\", \"#9E7C0C\"],\n\"buf\": [\"#00338D\", \"#C60C30\"],\n\"car\": [\"#0085CA\", \"#101820\"],\n\"chi\": [\"#0B162A\", \"#C83803\"],\n\"cin\": [\"#FB4F14\", \"#000000\"],\n\"cle\": [\"#FF3C00\", \"#311D00\"],\n\"dal\": [\"#041E42\", \"#869397\"],\n\"den\": [\"#FB4F14\", \"#002244\"],\n\"det\": [\"#0076B6\", \"#B0B7BC\"],\n\"gb\": [\"#203731\", \"#FFB612\"],\n\"hou\": [\"#03202F\", \"#A71930\"],\n\"ind\": [\"#002C5F\", \"#A2AAAD\"],\n\"jax\": [\"#006778\", \"#9F792C\"],\n\"kc\": [\"#E31837\", \"#FFB81C\"],\n\"lac\": [\"#0080C6\", \"#FFC20E\"],\n\"lar\": [\"#002244\", \"#866D4B\"],\n\"lv\": [\"#000000\", \"#A5ACAF\"],\n\"mia\": [\"#008E97\", \"#FC4C02\"],\n\"min\": [\"#4F2683\", \"#FFC62F\"],\n\"ne\": [\"#002244\", \"#C60C30\"],\n\"no\": [\"#D3BC8D\", \"#101820\"],\n\"nyg\": [\"#0B2265\", \"#A71930\"],\n\"nyj\": [\"#125740\", \"#000000\"],\n\"phi\": [\"#004C54\", \"#A5ACAF\"],\n\"pit\": [\"#FFB612\", \"#101820\"],\n\"sea\": [\"#002244\", \"#69BE28\"],\n\"sf\": [\"#AA0000\",\t\"#B3995D\"],\n\"tb\": [\"#D50A0A\", \"#696158\"],\n\"ten\": [\"#0C2340\", \"#4B92DB\"],\n\"was\": [\"#773141\", \"#FFB612\"]\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFLCOLORS);\n\n//# sourceURL=webpack:///./data/colors.js?");

/***/ }),

/***/ "./src/defense_positions.js":
/*!**********************************!*\
  !*** ./src/defense_positions.js ***!
  \**********************************/
/*! exports provided: defensePositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defensePositions\", function() { return defensePositions; });\nconst defensePositions = () => {\n  const svg = d3.select('.canvas')\n    .append('svg')\n    .attr('width', 1200)\n    .attr('height', 500)\n    .style(\"cursor\", \"pointer\")\n    .style(\"background\", \"green\")\n\n  const defensiveTackle1 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 533)\n    .attr('cy', 150)\n\n  const defensiveTackle2 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 666)\n    .attr('cy', 150)\n\n  const defensiveEnd1 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 400)\n    .attr('cy', 150)\n\n  const defensiveEnd2 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 800)\n    .attr('cy', 150)\n\n  const cornerback1 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 150)\n    .attr('cy', 200)\n\n  const cornerback2 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 1050)\n    .attr('cy', 200)\n\n  const safety1 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 550)\n    .attr('cy', 380)\n\n  const safety2 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 650)\n    .attr('cy', 420)\n\n  const linebacker1 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 500)\n    .attr('cy', 275)\n\n  const linebacker2 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 600)\n    .attr('cy', 275)\n\n  const linebacker3 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('stroke', 'white')\n    .attr('fill', 'black')\n    .attr('cx', 700)\n    .attr('cy', 275)\n\n}\n\n//# sourceURL=webpack:///./src/defense_positions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _offense_positions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offense_positions.js */ \"./src/offense_positions.js\");\n/* harmony import */ var _defense_positions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defense_positions.js */ \"./src/defense_positions.js\");\n\n\n\nconst update = () => {\n  document.querySelectorAll(\".teamIcon\").forEach(team => {\n    team.addEventListener('click', e => {\n      Object(_offense_positions_js__WEBPACK_IMPORTED_MODULE_0__[\"offensePositions\"])(e.currentTarget.id)\n    })\n  })\n}\nupdate();\n// offensePositions();\n// let team = require('../data/sf19.json');\n// let data = offense.concat(team.filter(d => d.side === \"offense\"))\n// const svg = d3.select('.canvas')\n//   .append('svg')\n//   .attr('width', dims.width)\n//   .attr('height', dims.height)\n//   // .attr(\"viewBox\", `-${dims.width/2} -${dims.height/2} ${dims.width} ${dims.height}`)\n//   .style(\"cursor\", \"pointer\")\n//   .style(\"background\", \"green\")\n//   // .on(\"click\", ()=> zoom(rootNode));\n\n// const graph = svg.append('g')\n//   // .attr('transform', 'translate(50, 50)');\n\n// const stratify = d3.stratify()\n//   .id(d => d.name)\n//   .parentId(d => d.parent);\n\n// const rootNode = stratify(data)\n//   .sum(d => d.salary);\n\n// // bubble pack gen\n\n//  function zoomTo(v) {\n//   const k = dims.width / v[2];\n\n//   view = v;\n//   graph.attr()\n//   nodes.attr()\n//   label.attr(\"transform\", d =>{ \n//     debugger;\n//     return `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`});\n//   // node.attr(\"transform\", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);\n//   // node.attr(\"r\", d => d.r * k);\n// }\n\n// function zoom(d, i, n) {\n//   debugger;\n//   let k = dims.width / d.r / 2;\n//   x.domain([d.x - d.r, d.x + d.r]);\n//   y.domain([d.y - d.r, d.y + d.r]);\n\n//   var transition = svg.transition()\n//     .duration(d3.event.altKey ? 7500 : 750);\n\n//   transition.selectAll('circle')\n//     .attr(\"cx\", d => x(d.x))\n//     .attr(\"cy\", d => y(d.y))\n//     .attr(\"r\", d => k * d.r);\n//   focus = d;\n//   d3.event.stopPropagation();\n// }\n\n// const pack = d3.pack()\n//   .size([dims.width, dims.height])\n//   .padding(3) //gap between circles\n\n// const bubbleData = pack(rootNode)\n// .descendants();\n// let focus = rootNode;\n\n// //create ordinal scale\n// const color = d3.scaleOrdinal([\"#AA0000\", \"#B3995D\"])\n\n// //join data and add group for each node\n// const nodes = graph.selectAll('g')\n//   .data(bubbleData)\n//   .enter()\n//   .append('g')\n//   .attr('transform', `translate(50, 50)`);\n\n// nodes.append('circle')\n//   .attr('r', d => d.r)\n//   .attr('stroke-width', 2)\n//   .attr('stroke', 'white')\n//   .attr('fill', d => color(d.depth))\n//   .attr('cx', d => d.x)\n//   .attr('cy', d => d.y)\n//   .attr(\"pointer-events\", d => !d.children ? \"none\" : null)\n//     // return focus !== d && (zoom(d), d3.event.stopPropagation())});\n\n// // const zoomTo = v => {\n// //   const \n// // }\n// graph.selectAll('circle')\n//   // .enter()\n//   // .each(function (d) {this._current = d })\n//   .on(\"mouseover\", function () { d3.select(this).attr(\"stroke\", \"black\"); })\n//   .on(\"mouseout\", function () { d3.select(this).attr(\"stroke\", \"white\"); })\n//   .on(\"click\", d => {\n//     debugger;\n//     zoom(focus === d ? rootNode : d);\n//     d3.event.stopPropagation();\n//   });\n\n// const label = svg.append(\"g\")\n//   .style(\"font\", \"10px sans-serif\")\n//   .attr(\"pointer-events\", \"none\")\n//   .attr(\"text-anchor\", \"middle\")\n//   .selectAll(\"text\")\n//   .data(rootNode.descendants())\n//   .join(\"text\")\n//   .style(\"fill-opacity\", 1)\n//   .style(\"display\", \"block\")\n//   .style(\"font-color\", \"white\")\n//   .text(d => {\n//     return d.data.name});\n\n\n// const handleClick = d => {\n//   debugger;\n// }\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/offense_positions.js":
/*!**********************************!*\
  !*** ./src/offense_positions.js ***!
  \**********************************/
/*! exports provided: offensePositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"offensePositions\", function() { return offensePositions; });\n/* harmony import */ var _data_colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/colors.js */ \"./data/colors.js\");\n\n\nconst offensePositions = (teamCol) => {\n  // const svg = d3.select('.canvas')\n  //   .append('svg')\n  //   .attr('width', 1000)\n  //   .attr('height', 500)\n  //   .style(\"cursor\", \"pointer\")\n  //   .style(\"background\", \"green\")\n  \n  // const center = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 500)\n  //   .attr('cy', 150)\n\n  // const guardLeft = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 450)\n  //   .attr('cy', 150)\n\n  // const guardRight = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 550)\n  //   .attr('cy', 150)\n\n  // const tackleLeft = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 400)\n  //   .attr('cy', 150)\n\n  // const tackleRight = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 600)\n  //   .attr('cy', 150)\n\n  // const wideReceiver1 = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 300)\n  //   .attr('cy', 170)\n\n  // const wideReceiver2 = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 750)\n  //   .attr('cy', 170)\n  \n  // const tightEnd = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 650)\n  //   .attr('cy', 160)\n\n  // const quarterback = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 500)\n  //   .attr('cy', 250)\n\n  // const runningback1 = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 450)\n  //   .attr('cy', 300)\n\n  // const runningback2 = svg.append('circle')\n  //   .attr('r', 10)\n  //   .attr('stroke-width', 2)\n  //   .attr('stroke', 'white')\n  //   .attr('fill', 'black')\n  //   .attr('cx', 550)\n  //   .attr('cy', 300)\n \n  const svg = d3.select('.canvas')\n    .append('svg')\n    .attr('width', 1200)\n    .attr('height', 500)\n    .style(\"cursor\", \"pointer\")\n    .style(\"background\", \"green\")\n\n  // const offPos = svg.append('g');\n  \n  const center = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 600)\n    .attr('cy', 150)\n\n  const guardLeft = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 500)\n    .attr('cy', 150)\n\n  const guardRight = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 700)\n    .attr('cy', 150)\n\n  const tackleLeft = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 400)\n    .attr('cy', 150)\n\n  const tackleRight = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 800)\n    .attr('cy', 150)\n\n  const wideReceiver1 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 150)\n    .attr('cy', 170)\n\n  const wideReceiver2 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 1050)\n    .attr('cy', 170)\n\n  const tightEnd = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 925)\n    .attr('cy', 160)\n\n  const quarterback = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 600)\n    .attr('cy', 250)\n\n  const runningback1 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 525)\n    .attr('cy', 310)\n\n  const runningback2 = svg.append('circle')\n    .attr('r', 10)\n    .attr('stroke-width', 2)\n    .attr('cx', 675)\n    .attr('cy', 310)\n\n  let circles = d3.selectAll('circle');\n  circles\n    .attr('fill', _data_colors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][teamCol][0])\n    .attr('stroke', _data_colors_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][teamCol][1])\n}\n\n//# sourceURL=webpack:///./src/offense_positions.js?");

/***/ })

/******/ });