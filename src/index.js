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
  .attr('width', 1000)
  .attr('height', 800);

const graph = svg.append('g')
  .attr('transform', 'translate(50, 50)');

const stratify = d3.stratify()
  .id(d => d.name)
  .parentId(d => d.parent);

const rootNode = stratify(data)
  .sum(d => d.salary);

// bubble pack gen

const pack = d3.pack()
  .size([960, 700])
  .padding(5) //gap between circles

const bubbleData = pack(rootNode).descendants();


//create ordinal scale
const color = d3.scaleOrdinal(['purple', 'lightpurple', 'pink'])

//join data and add group for each node
const nodes = graph.selectAll('g')
  .data(bubbleData)
  .enter()
  .append('g')
  .attr('transform', d => {
    debugger;
    `translate(${d.x}, ${d.y})`})

nodes.append('circle')
  .attr('r', d => d.r)
  .attr('stroke', 'white')
  .attr('stroke-width', 2)
  .attr('fill', d => color(d.depth));

nodes.filter(node => !node.children)
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '0.3em') // moves text down
  .attr('fill', 'white')
  // .style('font-size', d => d.value * 5)
  .text(d => d.data.name)

