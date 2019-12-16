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

/***/ "./data/sf19.json":
/*!************************!*\
  !*** ./data/sf19.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"Jimmy Garoppolo\\\",\\\"pos\\\":\\\"QB\\\",\\\"salary\\\":19350000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Quarterback\\\"},{\\\"name\\\":\\\"Joe Staley\\\",\\\"pos\\\":\\\"LT\\\",\\\"salary\\\":14700000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Tackle\\\"},{\\\"name\\\":\\\"Dee Ford\\\",\\\"pos\\\":\\\"DE\\\",\\\"salary\\\":14600000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive End\\\"},{\\\"name\\\":\\\"Richard Sherman\\\",\\\"pos\\\":\\\"CB\\\",\\\"salary\\\":9800000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Cornerback\\\"},{\\\"name\\\":\\\"Arik Armstead\\\",\\\"pos\\\":\\\"DE\\\",\\\"salary\\\":9046000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive End\\\"},{\\\"name\\\":\\\"Solomon Thomas\\\",\\\"pos\\\":\\\"DE\\\",\\\"salary\\\":7678465,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive End\\\"},{\\\"name\\\":\\\"Nick Bosa\\\",\\\"pos\\\":\\\"DE\\\",\\\"salary\\\":6100339,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive End\\\"},{\\\"name\\\":\\\"Emmanuel Sanders\\\",\\\"pos\\\":\\\"WR\\\",\\\"salary\\\":5970588,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Wide Receiver\\\"},{\\\"name\\\":\\\"Kyle Juszczyk\\\",\\\"pos\\\":\\\"FB\\\",\\\"salary\\\":5950000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Running Back\\\"},{\\\"name\\\":\\\"DeForest Buckner\\\",\\\"pos\\\":\\\"DT\\\",\\\"salary\\\":5788044,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive Tackle\\\"},{\\\"name\\\":\\\"Jaquiski Tartt\\\",\\\"pos\\\":\\\"SS\\\",\\\"salary\\\":4850000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Safety\\\"},{\\\"name\\\":\\\"Mike McGlinchey\\\",\\\"pos\\\":\\\"RT\\\",\\\"salary\\\":4168580,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Tackle\\\"},{\\\"name\\\":\\\"Robbie Gould\\\",\\\"pos\\\":\\\"K\\\",\\\"salary\\\":3900000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"special\\\",\\\"parent\\\":\\\"Special Team\\\"},{\\\"name\\\":\\\"Jimmie Ward\\\",\\\"pos\\\":\\\"FS\\\",\\\"salary\\\":3843750,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Safety\\\"},{\\\"name\\\":\\\"Laken Tomlinson\\\",\\\"pos\\\":\\\"G\\\",\\\"salary\\\":3750000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Guard\\\"},{\\\"name\\\":\\\"Tevin Coleman\\\",\\\"pos\\\":\\\"RB\\\",\\\"salary\\\":3600000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Running Back\\\"},{\\\"name\\\":\\\"Michael Person\\\",\\\"pos\\\":\\\"G\\\",\\\"salary\\\":2750000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Guard\\\"},{\\\"name\\\":\\\"Garrett Celek\\\",\\\"pos\\\":\\\"TE\\\",\\\"salary\\\":2703125,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Tight End\\\"},{\\\"name\\\":\\\"K'Waun Williams\\\",\\\"pos\\\":\\\"CB\\\",\\\"salary\\\":2568750,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Cornerback\\\"},{\\\"name\\\":\\\"Raheem Mostert\\\",\\\"pos\\\":\\\"RB\\\",\\\"salary\\\":1895833,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Running Back\\\"},{\\\"name\\\":\\\"Mark Nzeocha\\\",\\\"pos\\\":\\\"OLB\\\",\\\"salary\\\":1650000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Linebacker\\\"},{\\\"name\\\":\\\"Dante Pettis\\\",\\\"pos\\\":\\\"WR\\\",\\\"salary\\\":1454671,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Wide Receiver\\\"},{\\\"name\\\":\\\"Deebo Samuel\\\",\\\"pos\\\":\\\"WR\\\",\\\"salary\\\":1399519,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Wide Receiver\\\"},{\\\"name\\\":\\\"Ahkello Witherspoon\\\",\\\"pos\\\":\\\"CB\\\",\\\"salary\\\":1058768,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Cornerback\\\"},{\\\"name\\\":\\\"Kyle Nelson\\\",\\\"pos\\\":\\\"LS\\\",\\\"salary\\\":1051764,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"special\\\",\\\"parent\\\":\\\"Special Team\\\"},{\\\"name\\\":\\\"C.J. Beathard\\\",\\\"pos\\\":\\\"QB\\\",\\\"salary\\\":962358,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Quarterback\\\"},{\\\"name\\\":\\\"Fred Warner\\\",\\\"pos\\\":\\\"OLB\\\",\\\"salary\\\":915684,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Linebacker\\\"},{\\\"name\\\":\\\"Tarvarius Moore\\\",\\\"pos\\\":\\\"FS\\\",\\\"salary\\\":799093,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Safety\\\"},{\\\"name\\\":\\\"Sheldon Day\\\",\\\"pos\\\":\\\"DT\\\",\\\"salary\\\":720000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive Tackle\\\"},{\\\"name\\\":\\\"George Kittle\\\",\\\"pos\\\":\\\"TE\\\",\\\"salary\\\":719571,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Tight End\\\"},{\\\"name\\\":\\\"Mitch Wishnowsky\\\",\\\"pos\\\":\\\"P\\\",\\\"salary\\\":686018,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"special\\\",\\\"parent\\\":\\\"Special Team\\\"},{\\\"name\\\":\\\"D.J. Jones\\\",\\\"pos\\\":\\\"DT\\\",\\\"salary\\\":681963,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive Tackle\\\"},{\\\"name\\\":\\\"D.J. Reed\\\",\\\"pos\\\":\\\"CB\\\",\\\"salary\\\":647842,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Cornerback\\\"},{\\\"name\\\":\\\"Kendrick Bourne\\\",\\\"pos\\\":\\\"WR\\\",\\\"salary\\\":646668,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Wide Receiver\\\"},{\\\"name\\\":\\\"Matt Breida\\\",\\\"pos\\\":\\\"RB\\\",\\\"salary\\\":646668,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Running Back\\\"},{\\\"name\\\":\\\"Ben Garland\\\",\\\"pos\\\":\\\"C\\\",\\\"salary\\\":645000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Center\\\"},{\\\"name\\\":\\\"Levine Toilolo\\\",\\\"pos\\\":\\\"TE\\\",\\\"salary\\\":645000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Tight End\\\"},{\\\"name\\\":\\\"Jullian Taylor\\\",\\\"pos\\\":\\\"DT\\\",\\\"salary\\\":594510,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive Tackle\\\"},{\\\"name\\\":\\\"Richie James\\\",\\\"pos\\\":\\\"WR\\\",\\\"salary\\\":589142,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Wide Receiver\\\"},{\\\"name\\\":\\\"Dre Greenlaw\\\",\\\"pos\\\":\\\"LB\\\",\\\"salary\\\":575429,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Linebacker\\\"},{\\\"name\\\":\\\"Ross Dwelley\\\",\\\"pos\\\":\\\"TE\\\",\\\"salary\\\":570000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Tight End\\\"},{\\\"name\\\":\\\"Nick Mullens\\\",\\\"pos\\\":\\\"QB\\\",\\\"salary\\\":570000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Quarterback\\\"},{\\\"name\\\":\\\"Justin Skule\\\",\\\"pos\\\":\\\"T\\\",\\\"salary\\\":539714,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Tackle\\\"},{\\\"name\\\":\\\"Jeff Wilson\\\",\\\"pos\\\":\\\"RB\\\",\\\"salary\\\":536464,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Running Back\\\"},{\\\"name\\\":\\\"Azeez Al-Shaair\\\",\\\"pos\\\":\\\"LB\\\",\\\"salary\\\":500000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Linebacker\\\"},{\\\"name\\\":\\\"Daniel Brunskill\\\",\\\"pos\\\":\\\"G\\\",\\\"salary\\\":495000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Guard\\\"},{\\\"name\\\":\\\"Emmanuel Moseley\\\",\\\"pos\\\":\\\"CB\\\",\\\"salary\\\":495000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Cornerback\\\"},{\\\"name\\\":\\\"Marcell Harris\\\",\\\"pos\\\":\\\"S\\\",\\\"salary\\\":435882,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Safety\\\"},{\\\"name\\\":\\\"Elijah Lee\\\",\\\"pos\\\":\\\"OLB\\\",\\\"salary\\\":303528,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Linebacker\\\"},{\\\"name\\\":\\\"Jeremiah Valoaga\\\",\\\"pos\\\":\\\"DE\\\",\\\"salary\\\":167645,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive End\\\"},{\\\"name\\\":\\\"Jordan Matthews\\\",\\\"pos\\\":\\\"WR\\\",\\\"salary\\\":142058,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Wide Receiver\\\"},{\\\"name\\\":\\\"Dontae Johnson\\\",\\\"pos\\\":\\\"CB\\\",\\\"salary\\\":113824,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Cornerback\\\"},{\\\"name\\\":\\\"Antone Exum\\\",\\\"pos\\\":\\\"S\\\",\\\"salary\\\":64500,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Safety\\\"},{\\\"name\\\":\\\"Kwon Alexander\\\",\\\"pos\\\":\\\"ILB\\\",\\\"salary\\\":11531250,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Linebacker\\\"},{\\\"name\\\":\\\"Weston Richburg\\\",\\\"pos\\\":\\\"C\\\",\\\"salary\\\":7835000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Center\\\"},{\\\"name\\\":\\\"Jerick McKinnon\\\",\\\"pos\\\":\\\"RB\\\",\\\"salary\\\":5750000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Running Back\\\"},{\\\"name\\\":\\\"Marquise Goodwin\\\",\\\"pos\\\":\\\"WR\\\",\\\"salary\\\":3968750,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Wide Receiver\\\"},{\\\"name\\\":\\\"Jason Verrett\\\",\\\"pos\\\":\\\"CB\\\",\\\"salary\\\":2062500,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Cornerback\\\"},{\\\"name\\\":\\\"Shon Coleman\\\",\\\"pos\\\":\\\"T\\\",\\\"salary\\\":2025000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Tackle\\\"},{\\\"name\\\":\\\"Ronald Blair\\\",\\\"pos\\\":\\\"DE\\\",\\\"salary\\\":787602,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive End\\\"},{\\\"name\\\":\\\"Trent Taylor\\\",\\\"pos\\\":\\\"WR\\\",\\\"salary\\\":695484,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Wide Receiver\\\"},{\\\"name\\\":\\\"Jalen Hurd\\\",\\\"pos\\\":\\\"WR\\\",\\\"salary\\\":688653,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Wide Receiver\\\"},{\\\"name\\\":\\\"Kentavius Street\\\",\\\"pos\\\":\\\"DE\\\",\\\"salary\\\":530550,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive End\\\"},{\\\"name\\\":\\\"Tim Harris\\\",\\\"pos\\\":\\\"CB\\\",\\\"salary\\\":417577,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Cornerback\\\"},{\\\"name\\\":\\\"Shawn Poindexter\\\",\\\"pos\\\":\\\"WR\\\",\\\"salary\\\":379666,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Wide Receiver\\\"},{\\\"name\\\":\\\"Andrew Lauderdale\\\",\\\"pos\\\":\\\"T\\\",\\\"salary\\\":378000,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"offense\\\",\\\"parent\\\":\\\"Tackle\\\"},{\\\"name\\\":\\\"Damontre Moore\\\",\\\"pos\\\":\\\"DE\\\",\\\"salary\\\":265587,\\\"team\\\":\\\"SF19\\\",\\\"side\\\":\\\"defense\\\",\\\"parent\\\":\\\"Defensive End\\\"}]\");\n\n//# sourceURL=webpack:///./data/sf19.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let offense = [\n  {\n    \"name\": \"sf19\",\n    \"parent\": \"\"\n  },\n\n  {\n    \"name\": \"Quarterback\",\n    \"parent\": \"sf19\"\n  },\n  {\n    \"name\": \"Tackle\",\n    \"parent\": \"sf19\"\n  },\n  {\n    \"name\": \"Tight End\",\n    \"parent\": \"sf19\"\n  },\n  {\n    \"name\": \"Running Back\",\n    \"parent\": \"sf19\"\n  },\n  {\n    \"name\": \"Wide Receiver\",\n    \"parent\": \"sf19\"\n  },\n  {\n    \"name\": \"Guard\",\n    \"parent\": \"sf19\"\n  },\n  {\n    \"name\": \"Center\",\n    \"parent\": \"sf19\"\n  }\n];\nlet defense = [{\n  \"name\": \"Defensive End\",\n  \"parent\": \"sf19\"\n},\n  {\n    \"name\": \"Defensive Tackle\",\n    \"parent\": \"sf19\"\n  },\n  {\n    \"name\": \"Cornerback\",\n    \"parent\": \"sf19\"\n  },\n  {\n    \"name\": \"Safety\",\n    \"parent\": \"sf19\"\n  },\n  {\n    \"name\": \"Linebacker\",\n    \"parent\": \"sf19\"\n  }\n];\n\nlet team = __webpack_require__(/*! ../data/sf19.json */ \"./data/sf19.json\");\nlet data = offense.concat(team.filter(d => d.side === \"offense\"))\nconst svg = d3.select('.canvas')\n  .append('svg')\n  .attr('width', 1000)\n  .attr('height', 800);\n\nconst graph = svg.append('g')\n  .attr('transform', 'translate(50, 50)');\n\nconst stratify = d3.stratify()\n  .id(d => d.name)\n  .parentId(d => d.parent);\n\nconst rootNode = stratify(data)\n  .sum(d => d.salary);\n\n// bubble pack gen\n\nconst pack = d3.pack()\n  .size([960, 700])\n  .padding(5) //gap between circles\n\nconst bubbleData = pack(rootNode).descendants();\n\n\n//create ordinal scale\nconst color = d3.scaleOrdinal(['purple', 'lightpurple', 'pink'])\n\n//join data and add group for each node\nconst nodes = graph.selectAll('g')\n  .data(bubbleData)\n  .enter()\n  .append('g')\n  .attr('transform', d => {\n    debugger;\n    `translate(${d.x}, ${d.y})`})\n\nnodes.append('circle')\n  .attr('r', d => d.r)\n  .attr('stroke', 'white')\n  .attr('stroke-width', 2)\n  .attr('fill', d => color(d.depth));\n\nnodes.filter(node => !node.children)\n  .append('text')\n  .attr('text-anchor', 'middle')\n  .attr('dy', '0.3em') // moves text down\n  .attr('fill', 'white')\n  // .style('font-size', d => d.value * 5)\n  .text(d => d.data.name)\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });