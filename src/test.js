
const OFFENSE = ["QB", "LT", "RT", "C", "G", "WR", "RB", "FB", "T", "TE"];
const DEFENSE = ["DE", "CB", "DT", "FS", "ILB", "LB", "OLB", "S", "SS"];
const SPECIAL = ["LS", "K", "P"];
const team = "sf19";
// d3.csv(`../data/${team}.csv`, (d) => {
const jsonCreate = d3.csv(`../data/sf19.csv`, (d) => {
  
  let name = d["ACTIVE PLAYERS"];
  let pos = d["POS."];
  let salary = d["CAP HIT"].substring(1);
  let side;
  let parent;
  if (name.includes('\n')) name = name.substring(0, name.indexOf('\n'))
 
  if (OFFENSE.includes(pos)) side = "offense";
  if (DEFENSE.includes(pos)) side = "defense";
  if (SPECIAL.includes(pos)) side = "special";
  switch (pos) {
    case "QB":
      parent = "Quarterback";
      break;
    case "C":
      parent = "Center"
      break;
    case "G":
      parent = "Guard"
      break;
    case "WR":
      parent = "Wide Receiver"
      break;
    case "TE":
      parent = "Tight End"
      break;
    case "DE":
      parent = "Defensive End"
      break;
    case "CB":
      parent = "Cornerback"
      break;
    case "DT":
      parent = "Defensive Tackle"
      break;
    case "LT":
    case "RT":
    case "T":
      parent = "Tackle";
      break;
    case "RB":
    case "FB":
      parent = "Running Back";
      break;
    case "ILB":
    case "OLB":
    case "LB":
      parent = "Linebacker";
      break;
    case "S":
    case "FS":
    case "SS":
      parent = "Safety"
      break;
    case "K":
    case "P":
    case "LS":
      parent = "Special Team"
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
  console.log(d);
});
//   fs.writeFile('../data/sf19.json', JSON.stringify(d, null, 4), (error) => {
//     if (err) {
//       console.log(error);
//       return;
//     };
//     console.log("file created!");
//   }
// )});

