const li = [[0,1], [2,3], [4,5]];

li.reduce((prev, next) => {return prev.concat(next) })
  .reduce((prev, next) => {return prev + next}, 0);

console.log(li);