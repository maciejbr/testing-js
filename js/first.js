"use strict";

function getExtremeScores(scores) {
  return {
    best: Math.max(...scores),
    worst: Math.min(...scores),
  };
}

console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
