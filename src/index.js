import { offensePositions } from './offense_positions.js';
import { defensePositions } from './defense_positions.js';

const dims = {
  height: 500,
  width: 500
};
var x = d3.scaleLinear().range([0, 250]);
var y = d3.scaleLinear().range([0, 250]);
let view;

let offense = [
  {
    "name": "sf19",
    "parent": ""
  },

  {
    "name": "Quarterback",
    "parent": "sf19"
  },
  {
    "name": "Tackle",
    "parent": "sf19"
  },
  {
    "name": "Tight End",
    "parent": "sf19"
  },
  {
    "name": "Running Back",
    "parent": "sf19"
  },
  {
    "name": "Wide Receiver",
    "parent": "sf19"
  },
  {
    "name": "Guard",
    "parent": "sf19"
  },
  {
    "name": "Center",
    "parent": "sf19"
  }
];
let defense = [{
  "name": "Defensive End",
  "parent": "sf19"
},
  {
    "name": "Defensive Tackle",
    "parent": "sf19"
  },
  {
    "name": "Cornerback",
    "parent": "sf19"
  },
  {
    "name": "Safety",
    "parent": "sf19"
  },
  {
    "name": "Linebacker",
    "parent": "sf19"
  }
];
offensePositions("mia");
// offensePositions();
// let team = require('../data/sf19.json');
// let data = offense.concat(team.filter(d => d.side === "offense"))
// const svg = d3.select('.canvas')
//   .append('svg')
//   .attr('width', dims.width)
//   .attr('height', dims.height)
//   // .attr("viewBox", `-${dims.width/2} -${dims.height/2} ${dims.width} ${dims.height}`)
//   .style("cursor", "pointer")
//   .style("background", "green")
//   // .on("click", ()=> zoom(rootNode));

// const graph = svg.append('g')
//   // .attr('transform', 'translate(50, 50)');

// const stratify = d3.stratify()
//   .id(d => d.name)
//   .parentId(d => d.parent);

// const rootNode = stratify(data)
//   .sum(d => d.salary);

// // bubble pack gen

//  function zoomTo(v) {
//   const k = dims.width / v[2];

//   view = v;
//   graph.attr()
//   nodes.attr()
//   label.attr("transform", d =>{ 
//     debugger;
//     return `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`});
//   // node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
//   // node.attr("r", d => d.r * k);
// }

// function zoom(d, i, n) {
//   debugger;
//   let k = dims.width / d.r / 2;
//   x.domain([d.x - d.r, d.x + d.r]);
//   y.domain([d.y - d.r, d.y + d.r]);

//   var transition = svg.transition()
//     .duration(d3.event.altKey ? 7500 : 750);

//   transition.selectAll('circle')
//     .attr("cx", d => x(d.x))
//     .attr("cy", d => y(d.y))
//     .attr("r", d => k * d.r);
//   focus = d;
//   d3.event.stopPropagation();
// }

// const pack = d3.pack()
//   .size([dims.width, dims.height])
//   .padding(3) //gap between circles

// const bubbleData = pack(rootNode)
// .descendants();
// let focus = rootNode;

// //create ordinal scale
// const color = d3.scaleOrdinal(["#AA0000", "#B3995D"])

// //join data and add group for each node
// const nodes = graph.selectAll('g')
//   .data(bubbleData)
//   .enter()
//   .append('g')
//   .attr('transform', `translate(50, 50)`);

// nodes.append('circle')
//   .attr('r', d => d.r)
//   .attr('stroke-width', 2)
//   .attr('stroke', 'white')
//   .attr('fill', d => color(d.depth))
//   .attr('cx', d => d.x)
//   .attr('cy', d => d.y)
//   .attr("pointer-events", d => !d.children ? "none" : null)
//     // return focus !== d && (zoom(d), d3.event.stopPropagation())});

// // const zoomTo = v => {
// //   const 
// // }
// graph.selectAll('circle')
//   // .enter()
//   // .each(function (d) {this._current = d })
//   .on("mouseover", function () { d3.select(this).attr("stroke", "black"); })
//   .on("mouseout", function () { d3.select(this).attr("stroke", "white"); })
//   .on("click", d => {
//     debugger;
//     zoom(focus === d ? rootNode : d);
//     d3.event.stopPropagation();
//   });

// const label = svg.append("g")
//   .style("font", "10px sans-serif")
//   .attr("pointer-events", "none")
//   .attr("text-anchor", "middle")
//   .selectAll("text")
//   .data(rootNode.descendants())
//   .join("text")
//   .style("fill-opacity", 1)
//   .style("display", "block")
//   .style("font-color", "white")
//   .text(d => {
//     return d.data.name});


// const handleClick = d => {
//   debugger;
// }
