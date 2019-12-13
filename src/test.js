const OFFENSE = ["QB", "LT", "RT", "C", "G", "WR", "RB", "FB", "T", "TE"];
const DEFENSE = ["DE", "CB", "DT", "FS", "ILB", "LB", "OLB", "S", "SS"];
const SPECIAL = ["LS", "K", "P"];
const team = "sf19";
d3.csv(`../data/${team}.csv`, (d) => {

  let name = d["Players"];
  let pos = d["POS."];
  let salary = d["CAP HIT"].substring(1);
  let side;
  let parent;

  if (name.includes('\r')) name = name.substring(0, name.indexOf('\r'))
  if (OFFENSE.includes(pos)) side = "offense";
  if (DEFENSE.includes(pos)) side = "defense";
  if (SPECIAL.includes(pos)) side = "special";
  switch (pos) {
    case "QB":
    case "C":
    case "G":
    case "WR":
    case "TE":
    case "DE":
    case "CB":
    case "DT":
      parent = pos;
      break;
    case "LT":
    case "RT":
    case "T":
      parent = "T";
      break;
    case "RB":
    case "FB":
      parent = "RB";
      break;
    case "ILB":
    case "OLB":
    case "LB":
      parent = "LB";
      break;
    case "S":
    case "FS":
    case "SS":
      parent = "S"
      break;
  }
  return {
    name,
    pos,
    salary: parseInt(salary.replace(/,/g, '')),
    team: d["TEAM"],
    side,
    parent
  }
}).then( d=> {
  debugger;
})
