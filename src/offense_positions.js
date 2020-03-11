import NFLCOLORS from '../data/colors.js';

export const offensePositions = (team) => {

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

  let currentTeam = require(`../data/${team}19.json`);
  let data = offense.concat(currentTeam.filter(d => d.side === "offense"));

  const stratify = d3.stratify()
    .id(d => d.name)
    .parentId(d => d.parent);

  const rootNode = stratify(data)
    .sum(d => d.salary);
  const pack = d3.pack()
    .size([500, 500])
    .padding(3) //gap between circles

  console.log(rootNode);

  const bubbleData = pack(rootNode).descendants();
  console.log(bubbleData);

  const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', 1200)
    .attr('height', 500)
    .style("cursor", "pointer")
    .style("background", "green")

  const offPos = svg.append('g');
  
  const center = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 600)
    .attr('cy', 150)
    .attr('class','center')

  const guardLeft = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 500)
    .attr('cy', 150)
    .attr('class', 'guardLeft')

  const guardRight = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 700)
    .attr('cy', 150)
    .attr('class', 'guardRight')

  const tackleLeft = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 400)
    .attr('cy', 150)
    .attr('class', 'tackleLeft')

  const tackleRight = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 800)
    .attr('cy', 150)
    .attr('class', 'tackleRight')

  const wideReceiver1 = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 150)
    .attr('cy', 170)
    .attr('class', 'wideReceiver1')

  const wideReceiver2 = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 1050)
    .attr('cy', 170)
    .attr('class', 'wideReceiver2')

  const tightEnd = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 925)
    .attr('cy', 160)
    .attr('class', 'tightEnd')

  const quarterback = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 600)
    .attr('cy', 250)
    .attr('class', 'quarterback')

  const runningback1 = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 525)
    .attr('cy', 310)
    .attr('class', 'runningback1')

  const runningback2 = offPos.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 675)
    .attr('cy', 310)
    .attr('class', 'runningback2')

  let circles = d3.selectAll('circle');
  circles
    .attr('fill', NFLCOLORS[team][0])
    .attr('stroke', NFLCOLORS[team][1])
}