import NFLCOLORS from '../data/colors.js';

export const defensePositions = (team) => {
  const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', 1200)
    .attr('height', 500)
    .style("cursor", "pointer")
    .style("background", "green")

  const defensiveTackle1 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 533)
    .attr('cy', 150)

  const defensiveTackle2 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 666)
    .attr('cy', 150)

  const defensiveEnd1 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 400)
    .attr('cy', 150)

  const defensiveEnd2 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 800)
    .attr('cy', 150)

  const cornerback1 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 150)
    .attr('cy', 200)

  const cornerback2 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 1050)
    .attr('cy', 200)

  const safety1 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 550)
    .attr('cy', 380)

  const safety2 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 650)
    .attr('cy', 420)

  const linebacker1 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 500)
    .attr('cy', 275)

  const linebacker2 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 600)
    .attr('cy', 275)

  const linebacker3 = svg.append('circle')
    .attr('r', 10)
    .attr('stroke-width', 2)
    .attr('cx', 700)
    .attr('cy', 275)

  let circles = d3.selectAll('circle');
  circles
    .attr('fill', NFLCOLORS[team][0])
    .attr('stroke', NFLCOLORS[team][1]);
}