const dims = {
  height: 1000,
  width: 1000
};
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
let team = require('../data/sf19.json');
let data = offense.concat(team.filter(d => d.side === "offense"))
const svg = d3.select('.canvas')
  .append('svg')
  // .attr('width', dims.width)
  // .attr('height', dims.height)
  .attr("viewBox", `-${dims.width / 2} -${dims.height / 2} ${dims.width} ${dims.height}`)
  .style("cursor", "pointer")
  .style("background", "green")
  .on("click", () => zoom(rootNode));

const graph = svg.append('g')
// .attr('transform', 'translate(50, 50)');

const stratify = d3.stratify()
  .id(d => d.name)
  .parentId(d => d.parent);

const rootNode = stratify(data)
  .sum(d => d.salary);

// bubble pack gen

const pack = d3.pack()
  .size([dims.width, dims.height])
  .padding(3) //gap between circles

const bubbleData = pack(rootNode).descendants();
let focus = rootNode;

//create ordinal scale
const color = d3.scaleOrdinal(["#AA0000", "#B3995D"])

//join data and add group for each node
const nodes = graph.selectAll('g')
  .data(bubbleData)
  .enter()
  .append('g')
  .attr('transform', d => {
    // switch (d.name) {
    //   case "Quarterback":
    //     d = { x: 300, y: 300}
    //     break;
    //   case "Tackle"
    // }
    return `translate(${(d.x)}, ${(d.y)})`
  })

nodes.append('circle')
  .attr('r', d => d.r)
  .attr('stroke', 'white')
  .attr('stroke-width', 2)
  .attr('fill', d => color(d.depth))
  .attr("pointer-events", d => !d.children ? "none" : null)
// return focus !== d && (zoom(d), d3.event.stopPropagation())});

// const zoomTo = v => {
//   const 
// }
graph.selectAll('circle')
  .enter()
  .each(function (d) { this._current = d })
  .on("mouseover", function () { d3.select(this).attr("stroke", "#000"); })
  .on("mouseout", function () { d3.select(this).attr("stroke", null); })
  .on("click", d => handleClick)

// nodes.filter(node => !node.children)
//   .append('text')
//   .attr('text-anchor', 'middle')
//   .attr('dy', '0.3em') // moves text down
//   .attr('fill', 'white')
//   // .style('font-size', d => d.value * 5)
//   .text(d => d.data.name)
const label = svg.append("g")
  .style("font", "10px sans-serif")
  .attr("pointer-events", "none")
  .attr("text-anchor", "middle")
  .selectAll("text")
  .data(rootNode.descendants())
  .join("text")
  .style("fill-opacity", d => d.parent === rootNode ? 1 : 0)
  .style("display", d => d.parent === rootNode ? "inline" : "none")
  .text(d => d.data.name);

// zoomTo([rootNode.x, rootNode.y, rootNode.r * 2]);

const zoomTo = v => {
  debugger;
  const k = dims.width / v[2];

  view = v;

  label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
  node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
  node.attr("r", d => d.r * k);
}

const handleClick = d => {
  debugger;
}
const zoom = d => {
  debugger;
  const focus0 = focus;

  focus = d;

  const transition = svg.transition()
    .duration(d3.event.altKey ? 7500 : 750)
    .tween("zoom", d => {
      const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
      return t => zoomTo(i(t));
    });
  label
    .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
    .transition(transition)
    .style("fill-opacity", d => d.parent === focus ? 1 : 0)
    .on("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
    .on("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });
}